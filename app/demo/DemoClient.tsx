'use client';

import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, MapPin, Camera, BarChart3, Phone, Star, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/ui/FaqAccordion';
import { trackPhoneCall, trackRequestDemo } from '../utils/track';

const HUBSPOT_PORTAL_ID = '22416220';
const HUBSPOT_DEMO_FORM_ID = 'ad3044cf-7962-4d74-ab8d-ed336dface24';
const HUBSPOT_EMBED_SRC = `https://js.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

const demoFaqs = [
  {
    question: 'How long until I get my access code?',
    answer:
      'Most requests are approved and emailed within a few minutes during business hours (8am–9pm, 7 days a week).',
  },
  {
    question: 'What will I see in the demo?',
    answer:
      "You'll explore a live property manager portal showing real-time GPS route tracking, photo-verified pickups, service reports, and SLA dashboards — the same interface our clients use daily.",
  },
  {
    question: 'Is the demo free?',
    answer:
      'Yes, 100% free and no-obligation. Request access, take a tour, and decide if On The Fly is the right fit for your community.',
  },
  {
    question: 'Can I schedule a walkthrough with your team instead?',
    answer:
      'Absolutely. After submitting the form, reply to the confirmation email to book a live walkthrough with our team.',
  },
];

const demoTestimonials = [
  {
    quote:
      'Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated—no short-cuts. Donnell will go above and beyond.',
    author: 'Lynn Mollison',
    role: 'HOA Board Member',
    initials: 'L',
  },
  {
    quote:
      'I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly.',
    author: 'Antonio Marcuz',
    role: 'Property Management Company Owner',
    initials: 'A',
  },
  {
    quote:
      'Excellent service! The team is reliable, professional, and always goes the extra mile. Highly recommend On The Fly Waste Solutions.',
    author: 'William Barber',
    role: 'Vendor Supervisor, Encore Resort',
    initials: 'W',
  },
];

const partnerLogos = [
  { src: '/Images/faa-full-color-full-logo.png', alt: 'Florida Apartment Association' },
  { src: '/Images/NAA-logo_bgwhite.png', alt: 'National Apartment Association' },
  { src: '/Images/AAGO.png', alt: 'AAGO' },
  {
    src: 'https://seal-centralflorida.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-235977450.png',
    alt: 'On The Fly Waste Solutions BBB Business Review',
  },
  { src: '/Images/asset-logo.png', alt: 'Asset Living' },
  { src: '/Images/greystar-logo.png', alt: 'Greystar' },
  { src: '/Images/venterra-logo.png', alt: 'Venterra Realty' },
  { src: '/ReunionWestPOALOgo.jpg', alt: 'Reunion West POA' },
];

export default function DemoClient() {
  return (
    <>
      <section className="relative bg-surface-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-deep/80 via-surface-dark/60 to-surface-dark pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-20 md:pb-28 min-h-[600px] flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" aria-hidden="true" />
                Private Property Manager Portal
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight lg:leading-snug">
                See the App That Gives You 100% Visibility
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get instant access to our property manager demo portal. See live
                GPS route tracking, photo verification, and service reports — the
                same tools our clients use every day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  Live GPS Tracking
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm">
                  <Camera className="w-4 h-4 text-primary" aria-hidden="true" />
                  Photo Verification
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm">
                  <BarChart3 className="w-4 h-4 text-primary" aria-hidden="true" />
                  Service Reports
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="demo-form" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Request Your Demo Access Code
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
                Request your private demo access code below. We'll email your code
                within minutes so you can explore the On The Fly property manager
                portal — no commitment required.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 max-w-[600px] mx-auto p-10">
              <Script
                src={HUBSPOT_EMBED_SRC}
                strategy="afterInteractive"
                defer
              />
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id={HUBSPOT_DEMO_FORM_ID}
                data-portal-id={HUBSPOT_PORTAL_ID}
              />
            </div>
            <p className="mt-6 text-sm text-ink-muted text-center leading-relaxed max-w-[600px] mx-auto">
              Your information is never shared. You'll receive an email with your
              access code and a link to{' '}
              <a
                href="https://app.ontheflywastesolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                app.ontheflywastesolutions.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Trusted by Property Managers Across Central Florida
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                Join leading apartment communities, resorts, and HOAs that rely on
                On The Fly for reliable, tech-enabled waste management.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-8 mb-16">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center h-16 w-full max-w-[160px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain max-h-16 w-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {demoTestimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1} className="h-full">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm h-full flex flex-col border border-gray-100">
                  <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-ink mb-6 leading-relaxed flex-grow">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{t.author}</div>
                      <div className="text-sm text-ink-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Demo Access FAQ
              </h2>
              <p className="text-lg text-ink-muted">
                Quick answers about how the demo works.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FaqAccordion items={demoFaqs} />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight lg:leading-snug">
              Prefer to Talk to Someone First?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              We're available 7 days a week, 8am–9pm. Reach out directly and we'll
              walk you through the app live.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:407-274-5019"
                onClick={() => trackPhoneCall('demo_final_cta')}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 active:scale-[0.98] transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (407) 274-5019
              </a>
              <Link
                href="/contact/"
                onClick={() => trackRequestDemo('demo_final_cta_contact')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 active:scale-[0.98] transition-all border border-white/30"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
