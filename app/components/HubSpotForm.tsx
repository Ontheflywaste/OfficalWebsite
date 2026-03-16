'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface HubSpotFormProps {
  region?: string;
  portalId: string;
  formId: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: any) => void;
      };
    };
  }
}

let scriptLoaded = false;
let scriptLoading = false;

export default function HubSpotForm({
  region = 'na1',
  portalId,
  formId
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const formCreatedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const reactId = useId();
  const containerIdRef = useRef(`hubspot-form-${reactId.replace(/:/g, '')}`);

  useEffect(() => {
    if (formCreatedRef.current) return;

    const loadingTimeout = setTimeout(() => {
      if (!formCreatedRef.current) {
        setIsLoading(false);
        console.warn('HubSpot form loading timeout');
      }
    }, 5000);

    const createForm = () => {
      if (window.hbspt?.forms && formRef.current && !formCreatedRef.current) {
        try {
          window.hbspt.forms.create({
            region,
            portalId,
            formId,
            target: `#${containerIdRef.current}`,
            onFormReady: () => {
              formCreatedRef.current = true;
              setIsLoading(false);
              clearTimeout(loadingTimeout);
            },
            onFormSubmit: () => {
              console.log('Form submitted');
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          setIsLoading(false);
          clearTimeout(loadingTimeout);
        }
      }
    };

    const loadScript = () => {
      if (scriptLoaded) {
        createForm();
        return;
      }

      if (scriptLoading) {
        const checkInterval = setInterval(() => {
          if (scriptLoaded && window.hbspt?.forms) {
            clearInterval(checkInterval);
            createForm();
          }
        }, 100);
        return;
      }

      scriptLoading = true;
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.charset = 'utf-8';
      script.type = 'text/javascript';

      script.onload = () => {
        scriptLoaded = true;
        scriptLoading = false;

        if (window.hbspt?.forms) {
          createForm();
        } else {
          setTimeout(createForm, 100);
        }
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot form script');
        scriptLoading = false;
        setIsLoading(false);
        clearTimeout(loadingTimeout);
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [region, portalId, formId]);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#049704] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#1A1A1A] text-sm font-medium">Loading form...</p>
          </div>
        </div>
      )}
      <div
        id={containerIdRef.current}
        ref={formRef}
        className="hubspot-form-wrapper w-full"
      />
    </div>
  );
}
