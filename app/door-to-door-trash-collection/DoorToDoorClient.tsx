'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Home, Truck, Recycle, Clock, Shield, Camera } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function DoorToDoorClient() {
  const steps = [
    {
      icon: <Home className="w-6 h-6" aria-hidden="true" />,
      title: '1. Residents Place Bags at the Door',
      description:
        'Residents leave securely tied trash bags at their apartment door during the scheduled collection window — no trip to the dumpster required.',
    },
    {
      icon: <Truck className="w-6 h-6" aria-hidden="true" />,
      title: '2. Uniformed Crews Collect Door to Door',
      description:
        'Our uniformed team collects trash door to door across the entire property. Every truck runs a GPS-tracked route, so we can confirm on-property time for any night on request.',
    },
    {
      icon: <Recycle className="w-6 h-6" aria-hidden="true" />,
      title: '3. Trash Is Transported to the Compactor',
      description:
        'Collected trash is transported to your property compactor or a central waste holding area, with optional compactor enclosure management service included.',
    },
    {
      icon: <Camera className="w-6 h-6" aria-hidden="true" />,
      title: '4. Verified Misses Made Right',
      description:
        'If a missed trash bin or building-level miss is verified — by a Ring camera, a property manager, or our own truck GPS data — we make it right. No paperwork, no questions, no excuses.',
    },
  ];

  const highlights = [
    'Door to door trash pickup service 5–7 nights per week',
    'Doorstep trash pickup apartments, condos, resorts, and HOA communities',
    'Door to door trash collection multifamily (including new construction apartments)',
    'GPS-tracked truck routing on every nightly route',
    '100% collection commitment with verified missed pickups made right',
    'Door to door waste collection Central Florida — Orlando, Kissimmee, Champions Gate, Lake Nona',
    'Compactor area cleaning service and compactor enclosure management service included',
    'Pet waste station service apartment communities love',
    'Bulk item removal with before & after photo documentation available',
  ];

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-20 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/Valettrashimage.jpg"
            alt="Door to door trash collection apartment community — doorstep valet trash service in Central Florida"
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
              <Truck className="w-4 h-4 text-primary" aria-hidden="true" />
              Door to door &middot; Doorstep &middot; GPS-tracked
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-balance leading-tight">
              Door to Door Trash Collection &amp; Doorstep Trash Pickup Service — Central Florida
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
              On The Fly Waste Solutions delivers door to door trash collection and doorstep valet trash service for apartment communities, HOA neighborhoods, resort style properties, and condo associations across Central Florida.
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
              <strong>Door to door trash collection</strong> — also called <strong>doorstep trash pickup</strong> or <strong>doorstep valet trash service</strong> — is a convenience amenity where residents place tied trash bags at their apartment door and a professional crew collects every bag on a scheduled evening route. It is consistently rated one of the most valuable amenities in apartment and condo resident surveys.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              On The Fly provides <strong>door to door trash pickup service</strong> for apartment communities, HOAs, condos, resort style properties, and multifamily new construction across Central Florida. Every truck runs a GPS-tracked route, we stand behind a 100% collection commitment, and if a missed pickup is ever verified — by a Ring camera, a building-level confirmation, or our own truck GPS data — we make it right.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              Whether you run a single apartment complex or a portfolio of resort style communities across Orlando, Kissimmee, Champions Gate, Lake Nona, Winter Garden, Osceola County, and Orange County, we build the <strong>door to door waste collection Central Florida</strong> program that fits your property — not the other way around.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Door to Door Trash Collection Works
              </h2>
              <p className="text-lg text-gray-700">
                Four steps. Every night. No surprises, no misses, no excuses.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.05}>
                <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-700">
                Every feature of our door to door trash collection program is standard.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Apartment Communities, HOAs, Resorts &amp; Condos Across Central Florida
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Orlando door to door trash collection, Kissimmee valet trash service, Lake Nona valet trash service, Champions Gate Florida valet trash, Winter Garden, Windermere, Davenport, Celebration, Four Corners, Osceola County, and Orange County.
            </p>
            <Link
              href="/hoa-resort-valet-trash/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See our HOA &amp; resort community valet trash service
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Door to Door Trash Collection Program
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free, no-obligation quote for door to door trash pickup service at your Central Florida apartment, HOA, resort, or condo community.
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
