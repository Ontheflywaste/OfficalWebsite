'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface HubSpotFormEmbedProps {
  portalId: string;
  formId: string;
}

// Loader for the pre-launch form. The `.hs-form-frame` placeholder itself is
// server-rendered by the page (see page.tsx) so it exists in the DOM before
// ANY HubSpot script executes — the per-portal embed script only scans for
// placeholders once, when it runs, and the site's HubSpot tracking loader
// (HubSpotChat) can pull the same forms module in first. Rendering the
// placeholder client-side after an intersection made first paint a race.
//
// This component only (1) loads the embed script right after hydration —
// `afterInteractive`, deliberately not `lazyOnload`: the idle-callback path
// was observed to skip injection entirely on some cold loads — (2) re-injects
// it once if no iframe appeared, and (3) forwards HubSpot's submit callback
// to the dataLayer.
export default function HubSpotFormEmbed({ portalId, formId }: HubSpotFormEmbedProps) {
  const retried = useRef(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        data.type === 'hsFormCallback' &&
        data.eventName === 'onFormSubmitted' &&
        (!data.id || data.id === formId) &&
        Array.isArray(window.dataLayer)
      ) {
        window.dataLayer.push({ event: 'hubspot_form_submit', form: 'trash-bin-cleaning' });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [formId]);

  const src = `https://js.hsforms.net/forms/embed/${portalId}.js`;

  const watchdog = () => {
    // If the embed executed but rendered nothing (e.g. it decided it was
    // already initialised), a fresh script element makes it scan again.
    window.setTimeout(() => {
      const frame = document.querySelector(`.hs-form-frame[data-form-id="${formId}"]`);
      if (frame && !frame.querySelector('iframe') && !retried.current) {
        retried.current = true;
        const s = document.createElement('script');
        s.src = `${src}?retry=1`;
        s.async = true;
        document.body.appendChild(s);
      }
    }, 4000);
  };

  return <Script id="hs-form-embed" src={src} strategy="afterInteractive" onLoad={watchdog} />;
}
