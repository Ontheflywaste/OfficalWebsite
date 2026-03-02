'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Star, Quote, ChevronDown, Trash2, Calendar, Camera, MapPin } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ValetTrashClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SLA-Backed Service Guarantee",
      description: "Our 100% collection rate is backed by a Service Level Agreement with advanced GPS tracking ensuring complete property coverage."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Improved Resident Satisfaction",
      description: "Convenient door-to-door service enhances the living experience and reduces complaints about overflowing dumpsters."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Increased Property Value",
      description: "Premium amenities like valet trash service make your property more competitive and justify higher rents."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Advanced GPS Tracking",
      description: "Real-time geo-location tracking ensures 100% of your property footprint and every street is serviced with verified route completion."
    }
  ];

  const features = [
    "SLA-backed 100% collection rate guarantee",
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

  const faqs = [
    {
      question: "What days do you collect trash?",
      answer: "We offer flexible scheduling up to 7 days per week based on your property's needs. Our customizable collection windows are tailored to your property's specific requirements, ensuring convenient service without disrupting your residents."
    },
    {
      question: "What can residents place out for collection?",
      answer: "Residents can place regular household trash in tied bags outside their door. Items not accepted include hazardous materials, liquids, construction debris, furniture, or loose trash. Bulk items can be scheduled separately through our bulk removal service."
    },
    {
      question: "How much does valet trash service cost?",
      answer: "Pricing varies based on the number of units, property layout, and specific service requirements. Contact us for a free, customized quote for your property."
    },
    {
      question: "What happens if trash is missed?",
      answer: "We maintain a 100% collection rate with our SLA-backed guarantee and GPS-verified route completion. In the rare event of any issue, residents can contact us directly for immediate resolution. We provide property managers with real-time service reports and route tracking data."
    },
    {
      question: "Do you provide recycling services?",
      answer: "Yes! Recycling services are available for communities with an existing recycling plan in place. We work within your property's established recycling program and properly sort and dispose of recyclable materials according to local regulations."
    },
    {
      question: "How quickly can service start?",
      answer: "We can typically begin service within 7-14 days of contract signing. This includes time for resident communication, staff training, and property walkthrough."
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
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/Images/Trash-pickup.jpg" alt="Valet Trash Service" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="w-12 h-12 text-[#027502]" />
                <h1 className="text-5xl font-bold">Valet Trash Service</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Convenient door-to-door trash collection for apartment communities across Central Florida
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105"
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
                Why Property Managers Choose Our Valet Trash Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elevate your property's amenities with reliable, professional valet trash collection
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#027502] bg-opacity-10 rounded-lg flex items-center justify-center text-[#027502]">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  How Our Valet Trash Service Works
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#027502] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#027502] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#027502] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#027502] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Community</h3>
                      <p className="text-gray-600">
                        Your property stays clean and residents wake up to a trash-free environment every morning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="/Images/Trash-pickup.jpg"
                  alt="Professional valet trash collection service"
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Service Features</h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#027502] flex-shrink-0 mt-0.5" />
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

      <section className="py-20 bg-gradient-to-br from-[#027502] to-[#027502] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#027502] text-[#027502]" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#027502] opacity-20 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
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
                className="inline-flex items-center gap-2 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105"
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
                      className={`w-6 h-6 text-[#027502] flex-shrink-0 transition-transform duration-300 ${
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

      <section className="py-20 bg-[#027502] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Enhance Your Property?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get a free quote and discover how valet trash service can improve resident satisfaction at your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#027502] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
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
