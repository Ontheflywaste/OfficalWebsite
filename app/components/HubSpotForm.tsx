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
  const formCreatedRef = useRef(false);

  useEffect(() => {
    const createForm = () => {
      if (formCreatedRef.current) return;

      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#hubspot-form-${formId}`,
        });
        formCreatedRef.current = true;
      }
    };

    if (window.hbspt && window.hbspt.forms) {
      createForm();
    } else {
      const checkHubSpot = setInterval(() => {
        if (window.hbspt && window.hbspt.forms) {
          createForm();
          clearInterval(checkHubSpot);
        }
      }, 100);

      return () => clearInterval(checkHubSpot);
    }
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
