'use client';

import React, { useState } from 'react';
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
      name: "Aura Zeland",
      property: "Manager at Reunion West",
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
      <section className="relative py-20 pt-32 md:pt-40 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg"
            alt="Professional pressure washing services for commercial properties"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-12 h-12 text-[#049704]" />
                <h1 className="text-5xl font-bold">Pressure Washing Service</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Professional pressure washing for breezeways, sidewalks, pool decks, building exteriors, and all concrete surfaces. Before & after photo verification included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-[#049704] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105"
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center text-[#049704] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center text-[#049704]">
                    {benefit.icon}
                  </div>
                  <div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#049704] flex-shrink-0 mt-0.5" />
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

      <section className="py-20 bg-gradient-to-br from-[#049704] to-[#049704] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <Camera className="w-16 h-16 mb-6" />
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#049704] text-[#049704]" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#049704] opacity-20 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
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
                      className={`w-6 h-6 text-[#049704] flex-shrink-0 transition-transform duration-300 ${
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

      <section className="py-20 bg-[#049704] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Restore Your Property's Shine?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us for a free estimate and see the dramatic difference professional pressure washing can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#049704] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Request Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
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
