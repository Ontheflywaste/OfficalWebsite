'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Star, Quote, ChevronDown, Trash2, Calendar, Camera, MapPin } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import { faqs } from './faqs';

export default function ValetTrashClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Collection Commitment",
      description: "GPS-tracked truck routing confirms our team is on your property every scheduled night. If a missed pickup is verified — by a Ring camera, a building-level confirmation, or our truck GPS data — we make it right."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Improved Resident Satisfaction",
      description: "Convenient door-to-door apartment trash pickup enhances the living experience and reduces complaints about overflowing dumpsters."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Increased Property Value",
      description: "Premium amenities like a trash valet service make your Central Florida apartment property more competitive and justify higher rents."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Advanced GPS Tracking",
      description: "Real-time geo-location tracking ensures 100% of your property footprint and every street is serviced with verified route completion."
    }
  ];

  const features = [
    "100% collection commitment with verified missed pickups made right",
    "Advanced GPS geo-location tracking",
    "Flexible scheduling up to 7 days per week",
    "Professional, uniformed collection staff",
    "Dedicated account management portal",
    "Real-time service notifications",
    "Eco-friendly disposal practices",
    "24/7 customer support",
    "Insurance and bonding included",
    "Customizable collection windows"
  ];


  // Real reviews from the On The Fly Waste Solutions Google Business
  // Profile (5.0 ⭐). Text is verbatim — do not edit wording.
  const testimonials = [
    {
      name: "Jay Barnes",
      property: "Google Review",
      rating: 5,
      text: "Best Valet Trash service I've ever experienced. They took every bag no matter how heavy and took our loose trash. Thank you guys"
    },
    {
      name: "Lynn Mollison",
      property: "Local Guide · HOA Member",
      rating: 5,
      text: "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly. Donnell will go above and beyond to help anyone out - he is amazing."
    },
    {
      name: "Edwin Paula",
      property: "Google Review",
      rating: 5,
      text: "Best waste solution company around, the 2 took all my trash even the trash inside my house because he asked if I had any trash inside my house, he was very respectful and very kind, the driver called him felix or Fenix he's too tier he's really responsible and respectful one of the best I've talked to from that whole company"
    },
    {
      name: "Millie Ayala",
      property: "Google Review",
      rating: 5,
      text: "These guys make it happen! Always responsive."
    },
    {
      name: "Shaianne Berry",
      property: "Google Review",
      rating: 5,
      text: "On The Fly is great! They are professional and are always on top of things in the neighborhood. Anytime I see them they are friendly and would definitely recommend their services to anyone looking."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt="Uniformed valet trash porter collecting doorstep trash at a Central Florida apartment community"
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
                Central Florida's #1 valet trash partner
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="w-12 h-12 text-primary flex-shrink-0" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-balance">Valet Trash Service for Apartment, HOA &amp; Resort Communities</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Convenient doorstep trash collection for apartment, HOA, resort, and multifamily communities across Central Florida.
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
                Why Central Florida Property Managers Choose Our Valet Trash Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elevate your apartment, HOA, or resort community's amenities with reliable, professional valet trash collection
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="h-full flex gap-6 p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  How Our Doorstep Trash Collection Service Works
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Residents Place Trash Outside</h3>
                      <p className="text-gray-600">
                        By 8 PM on collection days, residents place their tied trash bags outside their doors in designated areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Collection</h3>
                      <p className="text-gray-600">
                        Our uniformed team arrives between 8 PM and midnight to collect all bags, ensuring quiet and efficient service.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Proper Disposal</h3>
                      <p className="text-gray-600">
                        We transport all collected waste to your property's dumpsters and ensure proper disposal and recycling.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Community</h3>
                      <p className="text-gray-600">
                        Your Central Florida apartment community stays clean and residents wake up to a trash-free environment every morning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/Images/Edgardo.jpeg"
                    alt="Professional valet trash collection service"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Service Features</h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="self-stretch flex flex-col justify-center">
              <div>
                <MapPin className="w-16 h-16 mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  Route-Completion Assurance via GPS
                </h2>
                <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                  Every service is verified using advanced geo-location tracking that ensures 100% of your property footprint and every street is serviced. Complete accountability through GPS-verified route completion.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Real-time GPS tracking of every route and service area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Verified coverage of 100% property footprint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Instant route completion notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Detailed service reports with GPS verification data</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why GPS Tracking Matters</h3>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  Unlike traditional waste services, we use enterprise-level GPS technology to verify every street and building is serviced. Property managers receive instant route completion notifications with GPS verification data, ensuring you always know your entire property was covered on time and to our high standards.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  This advanced fleet management technology eliminates resident complaints, provides comprehensive coverage assurance, and gives you peace of mind knowing every corner of your property is being serviced exactly as promised.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Property Managers Are Saying
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by leading communities across Central Florida
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col">
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

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="https://g.page/r/CQxqX8YvX9YQEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
              >
                <Star className="w-5 h-5" />
                Write a Review on Google
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our valet trash service
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Enhance Your Property?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get a free quote and discover how our valet trash service across Central Florida can improve resident satisfaction at your apartment, HOA, or resort community. In the city?{' '}
              <Link href="/valet-trash-orlando-fl/" className="underline font-semibold hover:text-white">
                See valet trash in Orlando
              </Link>
              .
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
