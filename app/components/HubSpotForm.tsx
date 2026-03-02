'use client';

import { useEffect, useRef, useState } from 'react';

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

export default function HubSpotForm({
  region = 'na1',
  portalId,
  formId
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const formCreatedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (scriptLoadedRef.current && formCreatedRef.current) return;

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.async = true;

    script.onload = () => {
      scriptLoadedRef.current = true;

      const createForm = () => {
        if (window.hbspt?.forms && !formCreatedRef.current) {
          try {
            window.hbspt.forms.create({
              region,
              portalId,
              formId,
              target: '#hubspot-form-container',
              onFormReady: () => {
                formCreatedRef.current = true;
                setIsLoading(false);
                clearTimeout(loadingTimeout);
              },
              onFormSubmit: () => {
                console.log('Form submitted');
              }
            });

            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          } catch (error) {
            console.error('Error creating HubSpot form:', error);
            setIsLoading(false);
            clearTimeout(loadingTimeout);
          }
        }
      };

      if (window.hbspt?.forms) {
        createForm();
      } else {
        setTimeout(createForm, 100);
      }
    };

    script.onerror = () => {
      console.error('Failed to load HubSpot form script');
      setIsLoading(false);
      clearTimeout(loadingTimeout);
    };

    document.body.appendChild(script);

    return () => {
      clearTimeout(loadingTimeout);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [region, portalId, formId]);

  return (
    <div className="relative w-full" style={{ minHeight: '600px' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#049704] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#1A1A1A] text-sm font-medium">Loading form...</p>
          </div>
        </div>
      )}
      <div
        id="hubspot-form-container"
        ref={formRef}
        className="hubspot-form-wrapper w-full"
      />
    </div>
  );
}
