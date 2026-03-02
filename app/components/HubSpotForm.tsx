'use client';

import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  region?: string;
  portalId: string;
  formId: string;
}

export default function HubSpotForm({
  region = 'na1',
  portalId,
  formId
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
    script.defer = true;
    script.charset = 'utf-8';
    script.type = 'text/javascript';

    script.onload = () => {
      scriptLoadedRef.current = true;
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#hubspot-form-${formId}`,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [region, portalId, formId]);

  return (
    <div
      id={`hubspot-form-${formId}`}
      ref={formRef}
      className="hubspot-form-wrapper"
    />
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}
