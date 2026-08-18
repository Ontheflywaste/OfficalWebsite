'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyHubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

// The pre-launch form was built in HubSpot's new forms editor, which renders
// inside an iframe via the per-portal embed script (js.hsforms.net/forms/
// embed/<portal>.js + a `.hs-form-frame` placeholder). It is NOT the legacy
// hbspt.forms.create() API the shared HubSpotForm component wraps — that path
// never fires onFormReady for iframe forms, so its spinner/timeout misbehave.
//
// The script is deferred until the form is within ~500px of the viewport so
// it never competes with above-the-fold work; the wrapper reserves height so
// nothing below jumps when the iframe paints.
export default function LazyHubSpotForm({ portalId, formId, region = 'na1' }: LazyHubSpotFormProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '500px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  useEffect(() => {
    if (!near) return;
    const id = `hs-embed-${portalId}`;
    // The embed script scans for .hs-form-frame once when it executes, so
    // re-append it (rather than reuse) if a previous visit already loaded it —
    // the placeholder div rendered below must exist before it runs.
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.id = id;
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
    script.defer = true;
    document.body.appendChild(script);

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
  }, [near, portalId, formId]);

  return (
    <div ref={ref} className="min-h-[600px]">
      {near ? (
        <div
          className="hs-form-frame"
          data-region={region}
          data-form-id={formId}
          data-portal-id={portalId}
        />
      ) : (
        <div className="space-y-4 pt-2" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-12 animate-pulse rounded-lg bg-surface-page" />
          ))}
          <div className="h-12 w-40 animate-pulse rounded-full bg-primary/20" />
        </div>
      )}
    </div>
  );
}
