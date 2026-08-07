'use client';

import { Phone, MonitorSmartphone, MapPin, Camera, BellRing } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HubSpotForm from '../components/HubSpotForm';
import { trackPhoneCall } from '../utils/track';

export default function DemoClient() {
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
              Schedule a Live Demo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              See how resort communities, HOAs, and property managers across Central
              Florida run doorstep valet trash with proof instead of promises. In a
              guided walkthrough, we&apos;ll show you GPS-verified routes, timestamped
              photo documentation when it matters, and the service visibility your
              board actually wants to see — using your community&apos;s real questions,
              not a canned pitch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-gray-900 mb-2">GPS-Verified Routes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  See the record that the whole community was covered, building by building.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <Camera className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Photo Documentation</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Timestamped photos when it matters — violations documented, units confirmed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <BellRing className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Service Visibility</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Daily confirmations to management, so you&apos;re never taking anyone&apos;s word for it.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-primary">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request Your Demo
                </h2>
                <p className="text-xl text-gray-600">
                  Tell us about your community and we&apos;ll reach out to schedule a
                  live walkthrough at a time that works for you.
                </p>
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
