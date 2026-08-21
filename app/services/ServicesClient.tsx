'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Trash2, Package, Droplets, Sparkles, CheckCircle2, Shield, Clock, Phone } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ServicesClient() {
  const services = [
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "Valet Trash Service",
      description: "Premier doorstep trash pickup for apartment communities. Flexible scheduling up to 7 days per week with GPS-verified route completion.",
      features: [
        "100% collection commitment",
        "GPS-tracked truck routing",
        "Verified missed pickups made right",
        "Flexible scheduling up to 7 days/week"
      ],
      link: "/services/valet-trash/",
      image: "/Images/Edgardo.jpeg"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Junk Removal",
      description: "Fast, professional junk removal for homeowners and residents. Same-day service available with before & after photo verification.",
      features: [
        "Same-day service available",
        "Before & after photo verification",
        "Full-service removal",
        "Eco-friendly disposal"
      ],
      link: "/services/junk-removal/",
      image: "/Images/Junk.jpg"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Bulk Removal",
      description: "Recurring and scheduled bulk removal exclusively for property managers. Perfect for move-outs and property turnovers with photo documentation.",
      features: [
        "Recurring service plans",
        "Before & after photo verification",
        "Property-wide services",
        "Turn-ready solutions"
      ],
      link: "/services/bulk-removal/",
      image: "/Images/Dumpster.jpg"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Pressure Washing",
      description: "Professional exterior cleaning for breezeways, sidewalks, and all concrete surfaces. Complete before & after photo documentation included.",
      features: [
        "Commercial-grade equipment",
        "Before & after photo verification",
        "Licensed & insured",
        "Eco-friendly solutions"
      ],
      link: "/services/pressure-washing/",
      image: "/Images/PressureWashingService.jpeg"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Collection Commitment",
      description: "If a missed pickup is verified — by a Ring camera, a building-level confirmation, or our truck GPS data — we make it right"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "GPS-tracked truck routing for valet trash, and before & after photo documentation on every bulk removal, junk haul, and pressure washing job"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Dedicated account managers and round-the-clock customer support for property managers and residents"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 md:pt-40 pb-20 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt="Door to door trash collection and doorstep valet trash service for HOA, resort style, and condo apartment communities across Central Florida"
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              Waste management, reimagined
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive waste management and property maintenance solutions for Central Florida communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" />
                (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade service backed by technology and accountability
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={`relative h-96 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-2xl shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* New service — pre-launch registration */}
          <ScrollReveal>
            <Link
              href="/trash-bin-cleaning/"
              className="group mt-16 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-[#071a10] to-[#0c3019] p-8 text-white transition-all hover:border-primary/60 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="inline-block rounded-full bg-[#84e166] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#071a10]">
                  New · Launching January 2027
                </span>
                <h3 className="mt-3 text-2xl font-bold">Trash Bin Cleaning</h3>
                <p className="mt-1 text-white/80">
                  Hot-pressure washed, sanitized &amp; deodorized — right at your curb. First 100 sign-ups lock pre-launch pricing.
                </p>
              </div>
              <span className="inline-flex flex-shrink-0 items-center gap-2 font-semibold text-[#84e166]">
                Reserve your spot
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Community-type callout — HOA / resort / condo / door-to-door */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Door to Door Trash Collection for HOA, Resort Style &amp; Condo Communities
              </h2>
              <p className="text-lg text-gray-700">
                We build door to door trash collection and doorstep valet trash service programs tailored to the specific community type you manage — from HOA boards and resort style apartments to condo associations, vacation rentals, and multifamily new construction across Central Florida.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/hoa-resort-valet-trash/"
              className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Valet trash for HOA &amp; resort communities
              </h3>
              <p className="text-gray-600 mb-4">
                HOA door to door trash collection, resort community valet trash service, and luxury community valet trash service across Central Florida.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Learn more
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/door-to-door-trash-collection/"
              className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                How door to door trash collection works
              </h3>
              <p className="text-gray-600 mb-4">
                Doorstep trash pickup apartments, door to door garbage collection service, and doorstep valet trash service — step by step.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                See the process
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-12 lg:p-16 text-white lg:min-h-[600px] flex flex-col justify-center">
                <ScrollReveal>
                  <h2 className="text-4xl font-bold mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Contact us today for a free consultation and customized quote for your property.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span>Free on-site assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span>Customized service plans</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span>No long-term contracts required</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact/"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
                    >
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href="tel:407-274-5019"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </ScrollReveal>
              </div>
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <Image
                  src="/Images/Valettrashimage.jpg"
                  alt="Contact us for waste management services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
