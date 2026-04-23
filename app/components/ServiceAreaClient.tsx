'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, MapPin, Building2, Star } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

interface ServiceAreaClientProps {
  city: string;
  state?: string;
  service: 'valet-trash' | 'bulk-removal' | 'junk-removal';
  serviceTitle: string;
  neighborhoods?: string[];
}

export default function ServiceAreaClient({
  city,
  state = 'FL',
  service,
  serviceTitle,
  neighborhoods = []
}: ServiceAreaClientProps) {
  const serviceDescriptions = {
    'valet-trash': `professional valet trash service for apartments, condos, and resort communities`,
    'bulk-removal': `scheduled bulk item pickup and removal services for property managers`,
    'junk-removal': `fast, professional junk removal services for residents and businesses`
  };

  const serviceFeatures = {
    'valet-trash': [
      '100% Collection Commitment',
      'GPS-Tracked Truck Routing',
      'Same-Night Missed-Pickup Cure',
      'Flexible 5-7 Day Service',
      'Professional Uniformed Staff',
      'Dedicated Account Management'
    ],
    'bulk-removal': [
      'Scheduled Pickup Services',
      'Furniture & Appliance Removal',
      'Before & After Photo Documentation',
      'Property Manager Dashboard',
      'Flexible Scheduling',
      'Eco-Friendly Disposal'
    ],
    'junk-removal': [
      'Same-Day Service Available',
      'Full-Service Removal',
      'No Hidden Fees',
      'Eco-Friendly Disposal',
      'Licensed & Insured',
      'Residential & Commercial'
    ]
  };

  return (
    <>
      <section className="relative min-h-[60vh] bg-surface-dark overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt={`${city}, ${state} apartment communities served by On The Fly`}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(60vh-8rem)]">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Serving {city}, {state}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {serviceTitle}<br />
              <span className="text-primary bg-white px-4 py-2 rounded-lg inline-block mt-2">
                {city}, {state}
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              On The Fly Waste Solutions provides {serviceDescriptions[service]} in {city} and surrounding Central Florida communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Trusted {serviceTitle} in {city}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Since 2020, On The Fly Waste Solutions has been serving apartment communities, condos, and resort properties in {city} with reliable, professional waste management services.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our {serviceTitle.toLowerCase()} is designed specifically for property managers who demand excellence. We understand that clean communities start with reliable, accountable service.
                </p>
                <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    "We're proud members of the Florida Apartment Association (FAA), National Apartment Association (NAA), and AAGO, bringing enterprise-level service with a personal touch to every property we serve in {city}."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us in {city}?</h3>
                <div className="space-y-4">
                  {serviceFeatures[service].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {neighborhoods.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Neighborhoods We Serve in {city}
                </h2>
                <p className="text-lg text-gray-700">
                  We provide service to all major neighborhoods and communities throughout {city}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {neighborhoods.map((neighborhood, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
                  >
                    <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-gray-800 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started in {city}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free, no-obligation quote for {serviceTitle.toLowerCase()} in {city}. Contact us today to learn how we can help keep your property clean and your residents happy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white"
              >
                <Phone className="w-5 h-5" />
                Call (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
