'use client';

import { useCallback, useRef, useState } from 'react';
import { Phone, MonitorSmartphone, MousePointerClick, Video } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HubSpotForm from '../components/HubSpotForm';
import { trackPhoneCall, trackEvent } from '../utils/track';

type DemoPreference = 'Demo link' | 'Walkthrough';

// Internal name of the hidden field to create on the HubSpot form.
// The v2 embed renders inline in our DOM, so we can set its value directly.
const PREFERENCE_FIELD = 'demo_preference';

export default function DemoClient() {
  const [preference, setPreference] = useState<DemoPreference | null>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const choose = useCallback((pref: DemoPreference) => {
    setPreference(pref);
    trackEvent('demo_option_selected', { option: pref });
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Tag the submission: set the hidden field once the inline form has it.
    // Silently no-ops until the demo_preference hidden field exists on the
    // HubSpot form itself.
    let attempts = 0;
    const trySet = () => {
      const input = formSectionRef.current?.querySelector<HTMLInputElement>(
        `input[name="${PREFERENCE_FIELD}"]`
      );
      if (input) {
        input.value = pref;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(trySet, 500);
      }
    };
    trySet();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-surface-dark overflow-hidden pt-hero-safe pb-16">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.25) 0%, transparent 55%), radial-gradient(circle at 70% 60%, rgba(22, 163, 74, 0.15) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 mb-8">
              <MonitorSmartphone className="w-10 h-10 text-primary" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Try the On The Fly App
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Want to see how the On The Fly app gives your community real proof of
              service? There are two easy ways to explore it — on your own, or with a
              guided walkthrough. Either way, you&apos;ll see exactly how the app
              delivers GPS-verified routes, photo documentation when it matters, and
              clear visibility into every night&apos;s collection for resort
              communities, HOAs, and property managers across Central Florida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col">
                <MousePointerClick className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Explore the App Yourself
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  Request a demo link and we&apos;ll email you access to the app so
                  you can click through it on your own time — no meeting needed. See
                  the resident experience, the route verification, and the reporting
                  side for yourself.
                </p>
                <button
                  type="button"
                  onClick={() => choose('Demo link')}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg"
                >
                  Request a Demo Link
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col">
                <Video className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Get a Guided Walkthrough
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  Prefer a live tour? Schedule a Zoom session and we&apos;ll walk you
                  and your team through the app together, answer your questions, and
                  show how it&apos;d fit your community.
                </p>
                <button
                  type="button"
                  onClick={() => choose('Walkthrough')}
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white active:scale-[0.98] transition-all"
                >
                  Book a Walkthrough
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              ref={formSectionRef}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-primary scroll-mt-40"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request Access
                </h2>
                <p className="text-xl text-gray-600">
                  Tell us about your community and we&apos;ll send your demo link or
                  set up your walkthrough.
                </p>
                {preference && (
                  <p className="mt-3 inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                    Requesting:{' '}
                    {preference === 'Demo link'
                      ? 'a self-guided demo link'
                      : 'a live Zoom walkthrough'}
                  </p>
                )}
              </div>
              <HubSpotForm
                region="na1"
                portalId="22416220"
                formId="b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d"
              />
              <p className="text-center text-gray-600 mt-8">
                Prefer to talk now? Call{' '}
                <a
                  href="tel:407-274-5019"
                  onClick={() => trackPhoneCall('demo_page')}
                  className="text-primary font-semibold hover:underline"
                >
                  (407) 274-5019
                </a>{' '}
                and we&apos;ll set it up on the spot.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
