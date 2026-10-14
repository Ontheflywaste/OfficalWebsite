import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone, MapPin, Building2, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import HubSpotForm from './HubSpotForm';
import type { ServiceAreaBodySection, ServiceAreaFaqItem } from './ServiceAreaClient';

interface CityPageBase {
  city: string;
  heroAlt: string;
  heroSubtitle: string;
  ctaH2: string;
  ctaSubtitle: ReactNode;
}

/** Default layout: intro + benefits, the three service cards, and the stats row. */
export interface CityPageDefaultData extends CityPageBase {
  body?: undefined;
  introH2: string;
  introParagraphs: ReactNode[];
  benefits: Array<{ title: string; description: string }>;
  inlineImageAlt: string;
  servicesSubtitle: string;
  whyH2: string;
  whySubtitle: string;
  serviceCardDescriptions: {
    valetTrash: string;
    bulkRemoval: string;
    junkRemoval: string;
  };
}

/**
 * Custom layout: page-specific body copy (same shape as ServiceAreaClient's
 * `body` prop) replaces the intro, service cards, and stats row. The hero and
 * the quote-form CTA are shared with the default layout.
 */
export interface CityPageCustomData extends CityPageBase {
  body: ServiceAreaBodySection[];
  /** Optional FAQ. Feed FaqSchema the SAME array so the schema can't drift. */
  faq?: ServiceAreaFaqItem[];
  /** Heading for the FAQ section. Defaults to "Frequently Asked Questions". */
  faqHeading?: string;
  /** Optional closing line under the quote form, e.g. "Consider It Done!". */
  ctaSignoff?: string;
}

export type CityPageData = CityPageDefaultData | CityPageCustomData;

function CityHero({ data }: { data: CityPageBase }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-hero-safe">
      <div className="absolute inset-0 bg-black">
        <Image
          src="/Images/ApartmentBuildingHero.webp"
          alt={data.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-white text-lg font-semibold">Serving {data.city}, FL</span>
          </div>
          <h1 className="text-[1.625rem] min-[400px]:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Valet Trash Service{' '}
            <span className="whitespace-nowrap">in {data.city}, FL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:407-274-5019"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              <Phone className="w-5 h-5" />
              (407) 274-5019
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CityQuoteCta({ data, signoff }: { data: CityPageBase; signoff?: string }) {
  const form = (
    <HubSpotForm
      region="na1"
      portalId="22416220"
      formId="b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d"
      trackingLabel="city-quote"
    />
  );
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-primary">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.ctaH2}</h2>
              <p className="text-xl text-gray-600">{data.ctaSubtitle}</p>
            </div>
            {signoff ? (
              <>
                {form}
                <p className="mt-10 text-center text-2xl md:text-3xl font-extrabold italic tracking-tight text-primary">
                  {signoff}
                </p>
              </>
            ) : (
              form
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CityCustomBody({ data }: { data: CityPageCustomData }) {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {data.body.map((section, sectionIndex) => (
            <ScrollReveal key={sectionIndex}>
              {section.heading && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.blocks.map((block, blockIndex) =>
                  'ul' in block ? (
                    <ul
                      key={blockIndex}
                      className="list-disc pl-6 space-y-3 text-lg text-gray-700 leading-relaxed"
                    >
                      {block.ul.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={blockIndex} className="text-lg text-gray-700 leading-relaxed">
                      {block.p}
                    </p>
                  )
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {data.faq && data.faq.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                {data.faqHeading ?? 'Frequently Asked Questions'}
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {data.faq.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function CityValetTrashTemplate({ data }: { data: CityPageData }) {
  if (data.body !== undefined) {
    // Custom layout. The default branch below is left byte-for-byte as it was
    // so the pages still on it render identical HTML.
    return (
      <>
        <CityHero data={data} />
        <CityCustomBody data={data} />
        <CityQuoteCta data={data} signoff={data.ctaSignoff} />
      </>
    );
  }

  return (
    <>
      <CityHero data={data} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{data.introH2}</h2>
                {data.introParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`text-lg text-gray-700 leading-relaxed ${
                      i === data.introParagraphs.length - 1 ? 'mb-6' : 'mb-4'
                    }`}
                  >
                    {para}
                  </p>
                ))}
                <div className="space-y-4">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <Image
                  src="/Images/Valettrashimage.jpg"
                  alt={data.inlineImageAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">GPS</div>
                  <div className="text-sm">Verified Routes</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Waste Management Services
              </h2>
              <p className="text-xl text-gray-600">{data.servicesSubtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Valet Trash Service</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {data.serviceCardDescriptions.valetTrash}
                </p>
                <Link
                  href="/services/valet-trash/"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {data.serviceCardDescriptions.bulkRemoval}
                </p>
                <Link
                  href="/services/bulk-removal/"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {data.serviceCardDescriptions.junkRemoval}
                </p>
                <Link
                  href="/services/junk-removal/"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.whyH2}</h2>
              <p className="text-xl text-gray-600">{data.whySubtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">Daily</div>
                <div className="text-gray-700 font-semibold">Route Confirmation</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-gray-700 font-semibold">Units Served</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">7</div>
                <div className="text-gray-700 font-semibold">Days a Week</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-700 font-semibold">5-Star Rated</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CityQuoteCta data={data} />
    </>
  );
}
