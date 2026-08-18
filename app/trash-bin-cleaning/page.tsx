import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Star, Phone } from 'lucide-react';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ServiceSchema from '../components/ServiceSchema';
import HubSpotForm from '../components/HubSpotForm';

// ─────────────────────────────────────────────────────────────────────────────
// TODO(HubSpot): paste the real portal ID + form ID for the pre-launch
// registration form. While either is empty the page renders a visible
// placeholder card instead of loading the HubSpot embed.
// ─────────────────────────────────────────────────────────────────────────────
const HUBSPOT_PORTAL_ID = '';
const HUBSPOT_FORM_ID = '';

const LIME = '#84e166';

export const metadata: Metadata = {
  title: 'Trash Bin Cleaning Central Florida | Launching December',
  description:
    'Trash bins hot-pressure washed, sanitized & deodorized right at your curb. Launching December in Central Florida — first 100 sign-ups lock pre-launch pricing.',
  keywords:
    'trash bin cleaning central florida, trash can cleaning orlando, garbage bin cleaning service, curbside bin washing, HOA bin cleaning',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/trash-bin-cleaning/',
  },
  openGraph: {
    title: 'Trash Bin Cleaning Central Florida | Launching December',
    description:
      'Your bin stinks. We can fix that. Hot-pressure washed, sanitized & deodorized at your curb. Reserve pre-launch pricing now.',
    url: 'https://ontheflywastesolutions.com/trash-bin-cleaning/',
    siteName: 'On The Fly Waste Solutions',
    type: 'website',
    locale: 'en_US',
  },
};

const services = [
  'Hot-pressure washed inside & out',
  'Sanitized & deodorized',
  'Cleaned right at your curb',
  'Homes, HOAs & resort communities',
];

const trustItems: { label: string; star?: boolean }[] = [
  { label: '5.0 Google', star: true },
  { label: 'BBB Accredited' },
  { label: 'Licensed & Insured' },
  { label: 'Since 2020' },
];

const plans = [
  {
    name: 'Monthly',
    price: '$30',
    detail: '2 bins',
    badge: 'BEST VALUE',
    featured: true,
  },
  {
    name: 'Quarterly',
    price: '$40',
    detail: 'every 3 months',
    featured: false,
  },
  {
    name: 'One-time',
    price: '$109',
    detail: 'single deep clean',
    featured: false,
  },
];

// Decorative background bubbles — position/size/delay only; the float
// animation lives in the scoped <style> block below.
const bubbles = [
  { left: '6%', size: 140, delay: '0s', duration: '26s', top: '18%' },
  { left: '18%', size: 60, delay: '4s', duration: '22s', top: '62%' },
  { left: '31%', size: 90, delay: '9s', duration: '30s', top: '40%' },
  { left: '48%', size: 46, delay: '2s', duration: '20s', top: '78%' },
  { left: '61%', size: 120, delay: '7s', duration: '28s', top: '12%' },
  { left: '74%', size: 70, delay: '12s', duration: '24s', top: '55%' },
  { left: '87%', size: 100, delay: '5s', duration: '32s', top: '30%' },
  { left: '93%', size: 40, delay: '10s', duration: '18s', top: '70%' },
];

export default function TrashBinCleaningPage() {
  const formConfigured = HUBSPOT_PORTAL_ID !== '' && HUBSPOT_FORM_ID !== '';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Trash Bin Cleaning', url: '/trash-bin-cleaning/' },
        ]}
      />
      <ServiceSchema
        name="Trash Bin Cleaning"
        description="Curbside trash bin cleaning for homes, HOAs and resort communities across Central Florida — hot-pressure washed inside and out, sanitized and deodorized. Launching December."
        slug="/trash-bin-cleaning/"
      />

      {/* Page-scoped keyframes (tbc- prefix) so the bubble float never leaks
          into site-wide styles. */}
      <style>{`
        @keyframes tbc-float {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          33%  { transform: translate3d(14px, -28px, 0) scale(1.04); }
          66%  { transform: translate3d(-10px, -56px, 0) scale(0.97); }
          100% { transform: translate3d(0, -84px, 0) scale(1); }
        }
        .tbc-bubble {
          animation: tbc-float var(--tbc-duration, 24s) ease-in-out infinite alternate;
          animation-delay: var(--tbc-delay, 0s);
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .tbc-bubble { animation: none; }
        }
      `}</style>

      <div
        className="relative min-h-screen overflow-hidden text-white"
        style={{ background: 'linear-gradient(180deg, #071a10 0%, #0c3019 100%)' }}
      >
        {/* Floating bubbles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {bubbles.map((b, i) => (
            <span
              key={i}
              className="tbc-bubble absolute rounded-full border border-white/10"
              style={{
                left: b.left,
                top: b.top,
                width: b.size,
                height: b.size,
                background:
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.09), rgba(255,255,255,0.015) 55%, rgba(255,255,255,0) 72%)',
                boxShadow: 'inset 0 0 22px rgba(132,225,102,0.08)',
                ['--tbc-delay' as string]: b.delay,
                ['--tbc-duration' as string]: b.duration,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-32 sm:px-6 md:pt-40 lg:px-8">
          {/* Header: logo + launch badge */}
          <header className="flex flex-col items-center text-center">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-48 sm:w-96"
                style={{ background: 'rgba(22,163,74,0.45)' }}
                aria-hidden="true"
              />
              <Image
                src="/logos/white-logo.png"
                alt="On The Fly Waste Solutions"
                width={320}
                height={124}
                priority
                className="relative h-auto w-56 sm:w-72"
              />
            </div>

            <span
              className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#071a10] sm:text-sm"
              style={{ backgroundColor: LIME }}
            >
              Launching December · Reserve Now
            </span>
          </header>

          {/* Hero */}
          <section className="mt-12 text-center sm:mt-16">
            <h1 className="font-extrabold leading-[0.9] tracking-tight">
              <span className="block text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl">
                YOUR BIN
              </span>
              <span
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ color: LIME }}
              >
                STINKS.
              </span>
            </h1>
            <p className="mt-6 text-2xl font-semibold text-white/90 sm:text-3xl">
              We can fix that.
            </p>
          </section>

          {/* Service list */}
          <section className="mx-auto mt-12 max-w-2xl sm:mt-16" aria-labelledby="tbc-services">
            <h2 id="tbc-services" className="sr-only">
              What&apos;s included
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg text-white sm:text-xl">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: LIME }}
                    aria-hidden="true"
                  >
                    <Check className="h-5 w-5 text-[#071a10]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center text-lg font-bold text-white sm:text-xl">
              Already trusted by Central Florida communities for valet trash, bulk removal &amp;
              hauling.
            </p>
          </section>

          {/* Trust bar */}
          <section className="mt-10 sm:mt-14" aria-label="Credentials">
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-4 backdrop-blur-sm sm:px-6">
              <ul className="grid grid-cols-2 gap-y-3 text-sm font-semibold text-white sm:flex sm:items-center sm:justify-between sm:gap-0 sm:text-base">
                {trustItems.map((t, i) => (
                  <li
                    key={t.label}
                    className={`flex items-center justify-center gap-1.5 border-white/20 ${
                      i % 2 === 1 ? 'border-l' : ''
                    } ${i > 0 ? 'sm:border-l sm:pl-4' : ''}`}
                  >
                    {t.star && (
                      <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                    )}
                    <span>{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pricing */}
          <section className="mt-16 sm:mt-20" aria-labelledby="tbc-pricing">
            <h2 id="tbc-pricing" className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Simple pricing
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col items-center rounded-2xl px-6 py-8 text-center shadow-xl ${
                    plan.featured ? 'text-[#071a10]' : 'bg-white text-ink'
                  }`}
                  style={plan.featured ? { backgroundColor: LIME } : undefined}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 rounded-full bg-[#071a10] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                      {plan.badge}
                    </span>
                  )}
                  <span className="text-sm font-bold uppercase tracking-[0.14em] opacity-80">
                    {plan.name}
                  </span>
                  <span className="mt-2 text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`mt-1 text-base ${plan.featured ? 'text-[#071a10]/80' : 'text-ink-muted'}`}>
                    {plan.detail}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-white/75 sm:text-base">
              +$5 per additional bin · HOA &amp; community-wide plans available
            </p>
          </section>

          {/* Registration */}
          <section id="register" className="mt-16 sm:mt-20" aria-labelledby="tbc-register">
            <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 text-ink shadow-2xl sm:p-10">
              <h2
                id="tbc-register"
                className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
              >
                BE FIRST IN LINE
              </h2>
              <p className="mt-3 text-center text-base text-ink-muted sm:text-lg">
                First 100 sign-ups lock pre-launch pricing.
              </p>

              <div className="mt-8">
                {formConfigured ? (
                  <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORM_ID} />
                ) : (
                  /* HUBSPOT FORM PLACEHOLDER — replaced automatically once the
                     IDs at the top of this file are filled in. */
                  <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-6 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
                      HubSpot form placeholder
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">
                      Set <code>HUBSPOT_PORTAL_ID</code> and <code>HUBSPOT_FORM_ID</code> in{' '}
                      <code>app/trash-bin-cleaning/page.tsx</code> to embed the registration form.
                    </p>
                    <a
                      href="tel:407-274-5019"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-bold text-white transition-colors hover:bg-primary-dark"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Reserve by phone: 407-274-5019
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-16 text-center sm:mt-20">
            <a
              href="tel:407-274-5019"
              className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-80 sm:text-3xl"
            >
              <Phone className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              407-274-5019
            </a>
            <p className="mt-4 text-2xl font-extrabold italic tracking-tight sm:text-3xl" style={{ color: LIME }}>
              Consider It Done!
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
