'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Package, Clock, Shield, Calendar, Phone, Star, Quote, ChevronDown, Recycle, Truck, Camera } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function BulkRemovalClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const items = [
    "Furniture (sofas, beds, dressers)",
    "Appliances (refrigerators, washers, dryers)",
    "Mattresses and box springs",
    "Electronics and TVs",
    "Exercise equipment",
    "Carpeting and flooring",
    "Cabinets and countertops",
    "Hot tubs and playground equipment",
    "Construction debris",
    "Yard waste and landscaping materials"
  ];

  const benefits = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Recurring Service Plans",
      description: "Weekly, bi-weekly, or monthly scheduled bulk trash pickups designed specifically for Orlando apartment property managers with predictable budgets."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Before & After Photos",
      description: "Every service includes photo verification and detailed documentation for your property management records."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Property-First Approach",
      description: "Our experienced team carefully removes items without damaging walls, floors, or doorways, protecting your investment."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "We work around your property's schedule and resident needs, including after-hours service to minimize disruption."
    }
  ];

  const propertyServices = [
    {
      title: "Apartment Communities",
      description: "Regular bulk trash pickup for apartment residents, keeping dumpster areas clean and organized.",
      features: ["Weekly or bi-weekly pickups", "Resident notification systems", "After-hours service available"]
    },
    {
      title: "Property Management",
      description: "Turn-ready solutions for move-outs and property renovations.",
      features: ["Unit cleanouts", "Appliance removal", "Construction debris hauling"]
    },
    {
      title: "HOA Communities",
      description: "Scheduled bulk pickup days for homeowners associations.",
      features: ["Community-wide pickup events", "Flexible scheduling", "Transparent pricing"]
    }
  ];

  const faqs = [
    {
      question: "What qualifies as a bulk item?",
      answer: "Bulk items are large household items that cannot fit in regular trash bags or bins. This includes furniture, appliances, mattresses, and other oversized items. If you're unsure, give us a call and we'll help determine if your item qualifies."
    },
    {
      question: "How do I schedule a bulk removal?",
      answer: "You can schedule bulk removal by calling us at (407) 274-5019 or using our online contact form. Provide details about the items and your preferred pickup date, and we'll confirm your appointment."
    },
    {
      question: "Do you remove items from inside my home?",
      answer: "Yes! We provide full-service removal. Our team will enter your home, carefully remove the items, and haul them away. No heavy lifting required on your part."
    },
    {
      question: "What items do you NOT accept?",
      answer: "We cannot accept hazardous materials, chemicals, paint, asbestos, medical waste, or explosives. For everything else, contact us to confirm."
    },
    {
      question: "How much does bulk removal cost?",
      answer: "Pricing varies based on the volume and type of items. For apartment communities, we offer competitive monthly rates. For individual removals, we provide upfront quotes. Contact us for a free estimate."
    },
    {
      question: "Do you offer bulk removal service for apartment complexes in Orlando?",
      answer: "Absolutely! We specialize in serving Orlando apartment communities with regular scheduled bulk trash pickup services. This keeps your property clean and residents happy."
    }
  ];

  const testimonials = [
    {
      name: "Aura Zelada",
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
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/Dumpster.jpg"
            alt="Professional bulk removal service for apartment communities"
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Photo-verified, property-wide bulk pickup
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-extrabold text-balance">Bulk Removal Service Orlando FL</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Recurring and scheduled bulk trash pickup and bulk item removal exclusively for Orlando property managers and apartment communities. Before & after photo verification included.
              </p>
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
                What We Remove
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                If it's too big for regular apartment trash pickup, our Orlando team can handle it
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
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
                Why Choose Our Bulk Removal Service in Orlando?
              </h2>
              <p className="text-xl text-gray-600">
                Professional, reliable, and convenient
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="flex gap-6 p-8 bg-white rounded-xl hover:shadow-lg transition-shadow h-full">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary">
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
                Services for Properties & Communities
              </h2>
              <p className="text-xl text-gray-600">
                Customized bulk item removal solutions for Orlando property managers and HOAs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {propertyServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
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

      <section className="py-20 bg-gradient-to-br from-primary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="self-stretch flex flex-col justify-center">
              <div>
                <Camera className="w-16 h-16 mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  100% Photo Verification
                </h2>
                <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                  Every bulk removal is documented with time-stamped before and after photos. Complete accountability and transparency with every service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Before and after photos of every removal</span>
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
                  We provide documented proof of every bulk removal. You receive photos showing the items before removal and the clean space after, ensuring complete transparency and accountability.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  This documentation eliminates disputes and gives you peace of mind knowing the work was completed exactly as agreed.
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
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by property managers and residents across Central Florida
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
                Common questions about our bulk removal service
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

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Schedule Your Bulk Removal?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us today for a free bulk removal quote in Orlando and convenient scheduling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
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
