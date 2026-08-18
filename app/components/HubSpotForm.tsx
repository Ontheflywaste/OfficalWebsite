'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Script from 'next/script';

interface HubSpotFormProps {
  region?: string;
  portalId: string;
  formId: string;
  /** Reserved height while HubSpot paints, so nothing below shifts. Defaults
   *  match the measured quote form (~965px on phones, ~790px at md+). */
  minHeightClassName?: string;
  /** Fired when HubSpot reports the form was submitted (cross-origin iframe
   *  postMessage `hsFormCallback` / `onFormSubmitted`). */
  onSubmitted?: () => void;
  /** Value pushed to dataLayer as `form` alongside the standard event. */
  trackingLabel?: string;
}

// Every form on this site was built in HubSpot's new forms editor, which
// renders inside a cross-origin iframe. The right embed for those is the
// per-portal script (js.hsforms.net/forms/embed/<portal>.js) + a
// `.hs-form-frame` placeholder — the legacy hbspt.forms.create() API only
// wraps that same mechanism, never fires onFormReady for iframe forms, and
// costs a 600 KB v2.js download.
//
// Reliability rules learned on /trash-bin-cleaning/:
//  • The placeholder is server-rendered (client components SSR) so it exists
//    before ANY HubSpot script executes — the site-wide HubSpotChat loader
//    also pulls this forms module in, and it scans for placeholders once.
//  • The script loads `afterInteractive` (deterministic; `lazyOnload`'s idle
//    path was observed to skip injection on some cold loads).
//  • Client-side navigations: the already-loaded embed only notices NEW
//    `.hs-form-frame` nodes via a MutationObserver that looks ≤5 levels
//    below each added node — a whole new page subtree is deeper than that,
//    so the placeholder is silently missed. The watchdog therefore re-mounts
//    the placeholder itself (key bump → a fresh, directly-added node) when
//    no iframe has appeared, and re-injects the script as a last resort.
//  • The skeleton is CSS-only (`.hs-form-frame:empty + .hs-form-skeleton`,
//    see globals.css) so it disappears the instant HubSpot paints.
export default function HubSpotForm({
  region = 'na1',
  portalId,
  formId,
  minHeightClassName = 'min-h-[965px] md:min-h-[790px]',
  onSubmitted,
  trackingLabel,
}: HubSpotFormProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [frameKey, setFrameKey] = useState(0);
  const onSubmittedRef = useRef(onSubmitted);
  onSubmittedRef.current = onSubmitted;
  const reactId = useId();
  const containerId = `hubspot-form-${reactId.replace(/:/g, '')}`;
  const src = `https://js.hsforms.net/forms/embed/${portalId}.js`;

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        data.type === 'hsFormCallback' &&
        data.eventName === 'onFormSubmitted' &&
        (!data.id || data.id === formId)
      ) {
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({ event: 'hubspot_form_submit', form: trackingLabel ?? formId });
        }
        onSubmittedRef.current?.();
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [formId, trackingLabel]);

  // Watchdog: on mount → re-mount the placeholder unless HubSpot already
  // painted (covers client-side navigation instantly); 1.5s → re-mount again
  // if still blank; 4.5s → re-mount and re-inject the script as a last resort.
  useEffect(() => {
    const painted = () => !!hostRef.current?.querySelector('.hs-form-frame iframe');
    if (!painted()) setFrameKey((k) => k + 1);
    const t1 = window.setTimeout(() => {
      if (!painted()) setFrameKey((k) => k + 1);
    }, 1500);
    const t2 = window.setTimeout(() => {
      if (painted()) return;
      setFrameKey((k) => k + 1);
      const s = document.createElement('script');
      s.src = `${src}?retry=${Date.now()}`;
      s.async = true;
      document.body.appendChild(s);
    }, 4500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [src]);

  return (
    <div id={containerId} ref={hostRef} className={`relative w-full ${minHeightClassName}`}>
      <div
        key={frameKey}
        className="hs-form-frame"
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      />
      <div className="hs-form-skeleton absolute inset-0 space-y-4 pt-2" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-12 animate-pulse rounded-lg bg-surface-page" />
        ))}
        <div className="h-12 w-40 animate-pulse rounded-full bg-primary/20" />
      </div>
      <Script id={`hs-form-embed-${portalId}`} src={src} strategy="afterInteractive" />
    </div>
  );
}
