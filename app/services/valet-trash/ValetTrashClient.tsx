'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Star, Quote, ChevronDown, Trash2, Calendar } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ValetTrashClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Improved Resident Satisfaction",
      description: "Convenient door-to-door service enhances the living experience and reduces complaints about overflowing dumpsters."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Property Cleanliness",
      description: "Regular collection keeps your property clean, reducing pest problems and maintaining curb appeal."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Increased Property Value",
      description: "Premium amenities like valet trash service make your property more competitive and justify higher rents."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reduced Maintenance Costs",
      description: "Less wear and tear on dumpster areas and reduced need for frequent dumpster cleanings."
    }
  ];

  const features = [
    "Sunday through Thursday evening service",
    "Professional, uniformed collection staff",
    "Eco-friendly disposal and recycling practices",
    "Customizable collection schedules",
    "24/7 customer support",
    "Insurance and bonding included",
    "No long-term contracts required",
    "Flexible service adjustments"
  ];

  const faqs = [
    {
      question: "What days do you collect trash?",
      answer: "We provide valet trash collection Sunday through Thursday evenings. Our team typically collects between 8 PM and midnight, ensuring convenient service without disrupting your residents' day."
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
      answer: "We maintain a 99% collection rate, but if a collection is missed, residents can contact us directly for same-day or next-day pickup. We also provide property managers with regular service reports."
    },
    {
      question: "Do you provide recycling services?",
      answer: "Yes! We're committed to sustainability and include recycling as part of our standard service. We properly sort and dispose of recyclable materials according to local regulations."
    },
    {
      question: "How quickly can service start?",
      answer: "We can typically begin service within 7-14 days of contract signing. This includes time for resident communication, staff training, and property walkthrough."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      property: "Sunset Palms Apartments",
      rating: 5,
      text: "On The Fly has been servicing our 200-unit property for over a year now. Resident satisfaction has noticeably improved, and we've seen a significant reduction in maintenance calls about trash issues."
    },
    {
      name: "Robert Chen",
      property: "Lake View Residences",
      rating: 5,
      text: "Professional, reliable, and responsive. The team is always on time, and their customer service is exceptional. Our property has never looked better."
    },
    {
      name: "Sarah Williams",
      property: "Downtown Heights",
      rating: 5,
      text: "Switching to On The Fly was one of the best decisions we made. The service is consistent, and the pricing is transparent with no hidden fees."
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/Images/Trash-pickup.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="w-12 h-12 text-[#049704]" />
                <h1 className="text-5xl font-bold">Valet Trash Service</h1>
              </div>
              <p className="text-2xl text-gray-200 mb-8">
                Convenient door-to-door trash collection for apartment communities across Central Florida
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                        <CheckCircle2 className="w-6 h-6 text-[#049704] flex-shrink-0 mt-0.5" />
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
