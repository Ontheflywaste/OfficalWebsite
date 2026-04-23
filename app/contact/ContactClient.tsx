'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Phone, CheckCircle2, Star, Shield, Award, X } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';


const serviceLabels: Record<string, string> = {
  'valet-trash': 'Valet Trash Service',
  'junk-removal': 'Junk Removal',
  'bulk-pickup': 'Bulk Pick-up',
};

const sizeLabels: Record<string, string> = {
  '1-50': '1-50 Units',
  '51-100': '51-100 Units',
  '101-200': '101-200 Units',
  '200+': '200+ Units',
};

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const serviceParam = searchParams.get('service');
  const sizeParam = searchParams.get('size');

  const hasPrefilledData = serviceParam || sizeParam;

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.defer = true;
      script.charset = 'utf-8';
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    }, 1000);

    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.hbspt) {
      const prefilledMessage: string[] = [];
      if (serviceParam && serviceLabels[serviceParam]) {
        prefilledMessage.push(`Service Interest: ${serviceLabels[serviceParam]}`);
      }
      if (sizeParam && sizeLabels[sizeParam]) {
        prefilledMessage.push(`Property Size: ${sizeLabels[sizeParam]}`);
      }

      window.hbspt.forms.create({
        region: 'na1',
        portalId: '22416220',
        formId: 'b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d',
        target: '#hubspot-form-container',
        onFormReady: ($form: HTMLFormElement) => {
          if (prefilledMessage.length > 0) {
            const messageField = $form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
            if (messageField) {
              messageField.value = prefilledMessage.join('\n');
              messageField.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        },
        onFormSubmitted: () => {
          setShowSuccess(true);
        }
      });
    }
  }, [scriptLoaded, serviceParam, sizeParam]);

  return (
    <div className="min-h-screen bg-gray-50">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Received!
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Your request has been sent directly to our leadership team. We are reviewing your property details right now and will be in touch shortly to discuss your custom service plan.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center bg-surface-dark pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt="Apartment community property manager requesting a free quote from On The Fly"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.15)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/80 via-surface-dark/60 to-surface-dark/80" />
          <div
            className="absolute inset-0 pointer-events-none animate-radial-drift"
            style={{
              background:
                'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              Free, no-obligation quote within 24 hours
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
              Tell us about your property — we will reply with a customized proposal for valet trash, bulk, junk removal, or pressure washing.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-white/85">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Same-day response
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                No long-term contract
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                100% collection guarantee
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                {hasPrefilledData && (
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-primary mb-2">Your selections from the Quick Quote:</p>
                    <div className="flex flex-wrap gap-2">
                      {serviceParam && serviceLabels[serviceParam] && (
                        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                          {serviceLabels[serviceParam]}
                        </span>
                      )}
                      {sizeParam && sizeLabels[sizeParam] && (
                        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                          {sizeLabels[sizeParam]}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div id="hubspot-form-container"></div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-primary to-[#027502] rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">5-Star Rated Service</h4>
                        <p className="text-white/90">
                          Trusted by hundreds of properties across Central Florida with outstanding reviews
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Licensed & Insured</h4>
                        <p className="text-white/90">
                          Fully licensed and insured for your peace of mind and property protection
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">100% Collection Guarantee</h4>
                        <p className="text-white/90">
                          GPS-tracked routing with same-night cure on verified missed pickups — every pickup, every time
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Advanced GPS Tracking</h4>
                        <p className="text-white/90">
                          Real-time route verification and photo documentation for complete transparency
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">24/7 Customer Support</h4>
                        <p className="text-white/90">
                          Dedicated account managers and round-the-clock support for all your needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Flexible Scheduling</h4>
                        <p className="text-white/90">
                          Service up to 7 days per week with customizable collection windows
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <p className="text-lg font-semibold mb-3">
                      Ready to get started?
                    </p>
                    <p className="text-white/90 mb-4">
                      Call us now for immediate assistance
                    </p>
                    <a
                      href="tel:407-274-5019"
                      className="block w-full text-center bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
                    >
                      (407) 274-5019
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
