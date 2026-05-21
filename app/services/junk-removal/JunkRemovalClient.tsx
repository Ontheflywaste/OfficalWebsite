'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Truck, Clock, DollarSign, Users, Phone, Star, Quote, ChevronDown, Recycle, Package, Camera } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function JunkRemovalClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Furniture Removal",
      description: "Sofas, mattresses, tables, chairs, and all types of furniture"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Appliance Disposal",
      description: "Refrigerators, washers, dryers, stoves, and more"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Estate Cleanouts",
      description: "Complete property cleanouts for estates and foreclosures"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Electronics Recycling",
      description: "TVs, computers, monitors, and electronic waste"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Construction Debris",
      description: "Demolition waste, drywall, flooring, and renovation debris"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Yard Waste",
      description: "Branches, stumps, leaves, and landscaping debris"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same-Day Service Available",
      description: "Need it gone today? We offer fast same-day and next-day junk removal services for Orlando homeowners, apartment residents, and property managers."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Before & After Photos",
      description: "Every job includes before and after photo verification so you have documentation of the completed work."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Full-Service Removal",
      description: "We do all the heavy lifting. You point, we haul. Our team handles everything from loading to disposal."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Eco-Friendly Disposal",
      description: "We donate usable items, recycle materials, and properly dispose of waste throughout Central Florida to minimize environmental impact."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Contact Us",
      description: "Call or request a quote online. Describe what you need removed and we'll schedule a convenient time."
    },
    {
      step: 2,
      title: "Free On-Site Quote",
      description: "We arrive on-site, assess the items, and provide a no-obligation quote before any work begins."
    },
    {
      step: 3,
      title: "We Load & Haul",
      description: "Once approved, our team quickly loads everything into our trucks and cleans up the area."
    },
    {
      step: 4,
      title: "Responsible Disposal",
      description: "We donate usable items, recycle what we can, and properly dispose of the rest."
    }
  ];

  const faqs = [
    {
      question: "What items do you accept?",
      answer: "We accept most household and commercial items including furniture, appliances, electronics, mattresses, construction debris, yard waste, and more. We cannot accept hazardous materials, chemicals, paint, asbestos, or medical waste."
    },
    {
      question: "How much does junk removal cost in Orlando?",
      answer: "Pricing depends on the volume and type of items being removed. We provide free on-site quotes with no obligation. Most residential junk removal projects in the Orlando area range from $150 to $600."
    },
    {
      question: "Do I need to be present during removal?",
      answer: "While we prefer you to be present for the initial quote, you don't need to stay during the removal. Many clients leave keys or access instructions and we handle everything professionally."
    },
    {
      question: "How quickly can you remove my junk?",
      answer: "We offer same-day and next-day service in most cases. Call us in the morning, and we can often have your items removed by the afternoon."
    },
    {
      question: "Do you recycle or donate items?",
      answer: "Yes! We're committed to sustainability. We donate usable furniture and items to local charities, recycle electronics and metals, and only send non-recyclable waste to landfills as a last resort."
    },
    {
      question: "Is there a minimum charge?",
      answer: "Our minimum charge covers our truck, team, and disposal costs. Contact us for specific pricing based on your needs."
    }
  ];

  const testimonials = [
    {
      name: "Aura Zelada",
      location: "CAM",
      rating: 5,
      text: "On The Fly is a fabulous company... I never get complaints that they missed a house or didn't pick everything up. It's the best company I've ever worked with."
    },
    {
      name: "William Barber",
      location: "Vendor Supervisor",
      rating: 5,
      text: "The workers are very conscientious... always in uniform and vehicles are clean. It has been a pleasure working with them."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/Junk.jpg"
            alt="Professional junk removal services in Central Florida"
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
                Same-day service available
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-extrabold text-balance">Junk Removal Orlando FL</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Fast, affordable junk removal and junk hauling for homeowners, residents, and apartment communities across Orlando and Central Florida. Same-day service available.
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
                From single items to complete property cleanouts in Orlando, we handle it all
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary mb-4">
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
                Why Choose On The Fly Junk Removal?
              </h2>
              <p className="text-xl text-gray-600">
                Professional service you can trust
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
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, fast, and hassle-free junk hauling and removal in Orlando
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                  Every junk removal job is documented with time-stamped before and after photos. Complete accountability and transparency with every service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Before and after photos of every job</span>
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
                  We provide documented proof of every junk removal service. You receive photos showing the items before removal and the clean space after, ensuring complete transparency and accountability.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  This documentation protects both parties and gives you peace of mind knowing the work was completed exactly as agreed.
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from satisfied customers
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
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
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
                Everything you need to know about our junk removal service
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
              Ready to Clear Out That Junk?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get a free, no-obligation junk removal quote in Orlando today. Same-day service available!
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
