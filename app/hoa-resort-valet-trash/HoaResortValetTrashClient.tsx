'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Shield, Building2, MapPin } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function HoaResortValetTrashClient() {
  const features = [
    'HOA door to door trash collection with monthly board-ready reporting',
    'Resort community valet trash service with GPS-tracked truck routing',
    'Luxury community valet trash service — discreet, uniformed, always on schedule',
    'Gated community valet trash service with controlled-access coordination',
    'Condo community valet trash provider with per-unit billing support',
    'Vacation rental community valet trash and short term rental community trash service',
    'Compactor enclosure management service and compactor area cleaning service for apartments',
    'Pet waste station service apartment communities love',
    'Bulk item removal with before & after photo documentation for your records',
    '100% collection commitment with verified missed pickups made right',
  ];

  const communityTypes = [
    {
      title: 'HOA & Gated Communities',
      description:
        'HOA door to door trash collection designed around the way HOA boards actually operate — monthly collection reports, transparent per-door accountability, and a single account lead your board can reach.',
    },
    {
      title: 'Resort Style Apartments',
      description:
        'Resort style apartment trash collection for properties where residents expect luxury-level amenities. Our resort community trash collection service keeps breezeways, pool decks, and hallways spotless.',
    },
    {
      title: 'Condo Associations',
      description:
        'Condo community valet trash provider for mid-rise and high-rise condo buildings. We coordinate with doormen, elevator schedules, and trash chutes without disrupting residents.',
    },
    {
      title: 'Vacation Rentals & Short Term',
      description:
        'Vacation rental community valet trash and short term rental community trash service for vacation home communities around Champions Gate, Davenport, Kissimmee, and the Disney corridor.',
    },
    {
      title: 'Multifamily & New Construction',
      description:
        'Valet trash service multifamily — including valet trash for new construction apartments. Multifamily community waste management solutions that scale with your lease-up and occupancy plan.',
    },
    {
      title: 'Luxury & High-End',
      description:
        'Luxury community valet trash service for the most design-conscious properties in Central Florida — uniformed crews, quiet collection windows, and photo-documented service.',
    },
  ];

  const cities = [
    'Orlando',
    'Kissimmee',
    'Champions Gate',
    'Lake Nona',
    'Windermere',
    'Winter Garden',
    'Davenport',
    'Celebration',
    'Four Corners',
    'Lake Mary',
    'Sanford',
    'Winter Park',
    'Apopka',
    'Clermont',
    'Altamonte Springs',
    'Osceola County',
    'Orange County',
  ];

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-20 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt="Door to door valet trash service for HOA, resort style, and luxury communities in Central Florida"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              HOA &middot; Resort Style &middot; Condo &middot; Luxury &middot; Gated
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-balance leading-tight">
              Door to Door Trash Collection for HOA &amp; Resort Community Valet Trash Service — Central Florida
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
              On The Fly Waste Solutions is the HOA waste management company Central Florida property boards, resort managers, and condo associations rely on for discreet, GPS-tracked, doorstep valet trash service — backed by a 100% collection commitment and verified missed pickups made right (Ring camera, building-level confirmation, or our truck GPS data).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <ScrollReveal>
            <p>
              HOA boards, resort property managers, and condo associations across Central Florida expect more than a waste vendor — they expect a partner. Our <strong>door to door trash collection</strong> and <strong>doorstep valet trash service</strong> is built specifically for communities where presentation, accountability, and resident experience are part of the brand.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Whether you run a <strong>gated community</strong>, a <strong>luxury resort style apartment</strong> complex, a <strong>condo association</strong>, a <strong>vacation rental community</strong>, or a brand-new <strong>multifamily development</strong>, On The Fly delivers the same enterprise-grade waste program: GPS-tracked truck routing, uniformed crews, before &amp; after photo documentation on every bulk removal, and a 100% collection commitment with verified missed pickups made right.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              We serve Orlando, Kissimmee, Champions Gate, Lake Nona, Windermere, Winter Garden, Davenport, and every community across Orange County and Osceola County — from mid-rise condos and gated golf communities to short term rental neighborhoods and new-construction lease-ups.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included in Our HOA &amp; Resort Valet Trash Program
              </h2>
              <p className="text-lg text-gray-700">
                Every feature below is part of the standard service — not an upsell.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Types We Serve
              </h2>
              <p className="text-lg text-gray-700">
                One team, one platform — tailored to how your specific community actually runs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityTypes.map((type) => (
              <ScrollReveal key={type.title} delay={0.05}>
                <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Central Florida Cities &amp; Counties Served
              </h2>
              <p className="text-lg text-gray-700">
                HOA and resort community valet trash service across every major Central Florida market.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                <span className="text-gray-800 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Community's Waste Program?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free, no-obligation quote for door to door trash collection, HOA valet trash, or resort community waste management service tailored to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
