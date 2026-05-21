'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Clock, Shield, Home, Phone, Star, Quote, ChevronDown, Droplets, Building2, Camera } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function PressureWashingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Building Exteriors",
      description: "Siding, brick, stucco, and exterior walls restored to like-new condition"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Driveway & Parking Lots",
      description: "Remove oil stains, dirt, and grime from concrete and asphalt surfaces"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Sidewalks, Walkways & Breezeways",
      description: "Clean high-traffic areas including breezeways to maintain safety and curb appeal"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Dumpster Pads",
      description: "Eliminate odors and stains from waste collection areas"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Pool Decks & Patios",
      description: "Safe cleaning of outdoor living spaces and recreational areas"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Fences & Decks",
      description: "Restore wood and vinyl fences to their original beauty"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Equipment",
      description: "Commercial-grade pressure washers and eco-friendly cleaning solutions for optimal results without damage."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Before & After Photos",
      description: "Every job includes complete photo documentation showing the transformation and quality of our work for your records."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Enhanced Curb Appeal",
      description: "Regular pressure washing dramatically improves property appearance and maintains long-term value."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed, insured professionals trained in safe and effective pressure washing techniques."
    }
  ];

  const propertyTypes = [
    {
      title: "Apartment Communities",
      features: [
        "Breezeway pressure washing",
        "Sidewalk & walkway cleaning",
        "Building exterior washing",
        "Pool deck maintenance"
      ]
    },
    {
      title: "Commercial Properties",
      features: [
        "Storefront cleaning",
        "Parking lot maintenance",
        "Loading dock areas",
        "Sidewalk cleaning"
      ]
    },
    {
      title: "HOA Communities",
      features: [
        "Community entrance signs",
        "Clubhouse exteriors",
        "Tennis courts",
        "Common area walkways"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the difference between pressure washing and power washing?",
      answer: "Pressure washing uses high-pressure water without heat, while power washing uses heated water. We use the appropriate method based on the surface and cleaning needs. For most property maintenance, pressure washing is ideal."
    },
    {
      question: "How often should my property be pressure washed?",
      answer: "We recommend pressure washing high-traffic areas quarterly and building exteriors annually. However, the ideal frequency depends on your property's location, climate, and specific needs."
    },
    {
      question: "Is pressure washing safe for all surfaces?",
      answer: "Our trained technicians adjust pressure levels and techniques based on the surface type. We safely clean concrete, brick, siding, stucco, wood, and more without causing damage."
    },
    {
      question: "Do you use chemicals?",
      answer: "We use eco-friendly, biodegradable cleaning solutions when needed for tough stains and mildew. All products are safe for plants, pets, and the environment."
    },
    {
      question: "How long does pressure washing take?",
      answer: "Time varies based on the size and scope of the project. A typical apartment building exterior might take 4-6 hours, while dumpster pads and walkways can be completed in 1-2 hours."
    },
    {
      question: "What is the cost for pressure washing services?",
      answer: "Pricing depends on square footage, surface type, and cleaning frequency. We offer competitive rates for properties with regular maintenance contracts. Contact us for a free estimate."
    }
  ];

  const testimonials = [
    {
      name: "Aura Zelada",
      property: "CAM",
      rating: 5,
      text: "On The Fly is a fabulous company... I never get complaints that they missed a house or didn't pick everything up. It's the best company I've ever worked with."
    },
    {
      name: "William Barber",
      property: "Vendor Supervisor",
      rating: 5,
      text: "The workers are very conscientious... always in uniform and vehicles are clean. It has been a pleasure working with them."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pt-32 md:pt-40 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/Images/PressureWashingService.jpeg"
            alt="Professional pressure washing services for commercial properties"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Water-to-brand gradient: blue where the jet strikes, green on the right */}
          <div className="absolute inset-0 bg-gradient-to-br from-water-deep/80 via-surface-dark/60 to-primary-deep/70"></div>
          {/* Subtle radial water glint */}
          <div
            className="absolute inset-0 pointer-events-none animate-radial-drift"
            style={{
              background:
                'radial-gradient(circle at 25% 35%, rgba(56, 189, 248, 0.28) 0%, transparent 55%), radial-gradient(circle at 75% 75%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          ></div>

          {/* Floating water droplets */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[
              { left: '12%', top: '20%', size: 6, delay: '0s', dur: '4s' },
              { left: '22%', top: '75%', size: 4, delay: '1.2s', dur: '5s' },
              { left: '38%', top: '30%', size: 8, delay: '2s', dur: '6s' },
              { left: '55%', top: '60%', size: 5, delay: '0.8s', dur: '4.5s' },
              { left: '68%', top: '25%', size: 7, delay: '1.6s', dur: '5.5s' },
              { left: '82%', top: '55%', size: 4, delay: '2.4s', dur: '4.8s' },
              { left: '90%', top: '15%', size: 5, delay: '0.4s', dur: '5.2s' },
            ].map((d, i) => (
              <span
                key={i}
                className="absolute block rounded-full bg-water-light/50 shadow-[0_0_18px_rgba(56,189,248,0.6)] animate-pulse"
                style={{
                  left: d.left,
                  top: d.top,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  animationDelay: d.delay,
                  animationDuration: d.dur,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-water/20 border border-water-light/40 text-water-light px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <Droplets className="w-4 h-4" aria-hidden="true" />
                Water-Powered. Results-Driven.
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-water blur-xl opacity-50" aria-hidden="true" />
                  <Sparkles className="relative w-12 h-12 text-water-light" />
                </div>
                <h1 className="text-5xl font-extrabold">Pressure Washing Service</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Professional pressure washing for breezeways, sidewalks, pool decks, building exteriors, and all concrete surfaces. Before & after photo verification included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-bold hover:from-primary-dark hover:to-primary transition-all transform hover:scale-105 shadow-lg shadow-primary/40"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:407-274-5019"
                  className="inline-flex items-center justify-center gap-2 bg-water/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-water/30 transition-all border border-water-light/40"
                >
                  <Phone className="w-5 h-5" />
                  (407) 274-5019
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Animated wave SVG divider — water flowing into the next section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24 animate-wave"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              d="M0,64 C240,96 480,32 720,56 C960,80 1200,24 1440,64 L1440,120 L0,120 Z"
              fill="url(#waveGradient)"
            />
            <path
              d="M0,80 C240,112 480,48 720,72 C960,96 1200,40 1440,80 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white via-water-mist/40 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle at 10% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 55%), radial-gradient(circle at 90% 70%, rgba(22, 163, 74, 0.1) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Pressure Washing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive exterior cleaning for every surface on your property
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="group relative h-full flex flex-col bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  {/* Water ripple on hover — radial gradient blooms from icon */}
                  <div
                    className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-water/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-water/15 to-primary/15 rounded-xl flex items-center justify-center text-water group-hover:from-water group-hover:to-primary group-hover:text-white transition-all duration-500 mb-4 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="relative text-gray-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-water-mist/60 via-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Pressure Washing?
              </h2>
              <p className="text-xl text-gray-600">
                Experience, equipment, and expertise you can trust
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="group relative flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-water-light via-water to-primary transition-all duration-700 ease-out group-hover:w-full" aria-hidden="true" />
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-water/15 to-primary/15 rounded-xl flex items-center justify-center text-water group-hover:from-water group-hover:to-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Properties We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Customized pressure washing solutions for every property type
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {propertyTypes.map((type, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-water-deep via-primary-deep to-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40 animate-radial-drift"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.35) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(22, 163, 74, 0.3) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="self-stretch flex flex-col justify-center">
              <div>
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-water-light blur-2xl opacity-40" aria-hidden="true" />
                  <Camera className="relative w-16 h-16" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  100% Photo Verification
                </h2>
                <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                  Every pressure washing job is documented with time-stamped before and after photos. Complete accountability and transparency with every service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Before and after photos of every surface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Time-stamped verification for complete accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Instant notifications with visual proof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Detailed service reports included</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Photo Verification Matters</h3>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  We provide documented proof of every pressure washing service. You receive photos showing surfaces before cleaning and the dramatic results after, ensuring complete transparency.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  This documentation shows the value of our service and gives you confidence that your property looks its absolute best.
                </p>
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
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600">
                See what property managers say about our pressure washing services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-primary opacity-20 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.property}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about pressure washing services
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-water via-primary to-primary-dark text-white overflow-hidden">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none rotate-180" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path
              d="M0,64 C240,96 480,32 720,56 C960,80 1200,24 1440,64 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        {/* Floating droplets */}
        <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden="true">
          {[
            { left: '8%', top: '30%', size: 6, delay: '0s', dur: '4s' },
            { left: '28%', top: '65%', size: 5, delay: '1s', dur: '5s' },
            { left: '48%', top: '25%', size: 8, delay: '2s', dur: '6s' },
            { left: '72%', top: '55%', size: 5, delay: '0.5s', dur: '4.5s' },
            { left: '88%', top: '30%', size: 7, delay: '1.5s', dur: '5.5s' },
          ].map((d, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.7)] animate-pulse"
              style={{
                left: d.left,
                top: d.top,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animationDelay: d.delay,
                animationDuration: d.dur,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <ScrollReveal>
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-white blur-2xl opacity-30" aria-hidden="true" />
              <Sparkles className="relative w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight lg:leading-snug">
              Ready to Restore Your Property's Shine?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us for a free estimate and see the dramatic difference professional pressure washing can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 active:scale-[0.98] transition-all transform hover:scale-105 shadow-xl"
              >
                Request Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/40"
              >
                <Phone className="w-5 h-5" />
                Call (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
