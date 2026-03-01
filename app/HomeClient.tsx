'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Mail, Trash2, Recycle, Building2, Sparkles } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';

export default function HomeClient() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {isVideoLoaded && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Valet Trash<br />
              <span className="text-[#049704]">Solutions</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Elevating apartment communities across Central Florida with reliable valet trash, bulk removal, and pressure washing services
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#049704] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose On The Fly?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by property managers across Orlando, Kissimmee, and Central Florida
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#038503]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consistent, on-time service 7 days a week. Our team ensures your community stays clean and your residents stay happy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in multi-family properties. We understand the unique needs of apartment communities and HOAs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
                <p className="text-gray-600 leading-relaxed">
                  Committed to sustainable practices. We prioritize recycling and proper waste disposal to protect our environment.
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
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive waste management solutions for your property
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <Link href="/services/valet-trash/" className="group">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Trash2 className="w-12 h-12 text-[#038503] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Valet Trash</h3>
                  <p className="text-gray-600 mb-4">Door-to-door trash collection for apartment residents</p>
                  <span className="text-[#038503] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/services/bulk-removal/" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Recycle className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                  <p className="text-gray-600 mb-4">Fast removal of large items and furniture</p>
                  <span className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/services/junk-removal/" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Building2 className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                  <p className="text-gray-600 mb-4">Complete cleanouts and debris removal</p>
                  <span className="text-purple-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link href="/services/pressure-washing/" className="group">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Sparkles className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pressure Washing</h3>
                  <p className="text-gray-600 mb-4">Professional exterior cleaning services</p>
                  <span className="text-cyan-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#038503]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Serving Central Florida's Premier Communities
                </h2>
                <p className="text-gray-50 text-lg mb-8 leading-relaxed">
                  From Orlando to Kissimmee and beyond, we partner with property managers to deliver exceptional waste management services that enhance resident satisfaction and property value.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <span className="text-gray-50">Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <span className="text-gray-50">Flexible service plans tailored to your property</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <span className="text-gray-50">24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <span className="text-gray-50">Competitive pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Ready to elevate your property's waste management? Contact us today for a free, no-obligation quote.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <a
                      href="tel:407-274-5019"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <Phone className="w-6 h-6 text-[#038503]" />
                      <div>
                        <div className="text-sm text-gray-600">Call us</div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#038503] transition-colors">
                          (407) 274-5019
                        </div>
                      </div>
                    </a>
                    <Link
                      href="/contact/"
                      className="flex items-center justify-center gap-2 w-full bg-[#038503] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#027002] transition-all"
                    >
                      Request Quote Online
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
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
                Trusted by Leading Properties
              </h2>
              <p className="text-xl text-gray-600">
                Join the growing number of communities that trust On The Fly
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#038503] mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Units Served</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#038503] mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#038503] mb-2">7</div>
                <div className="text-gray-600 font-semibold">Days a Week Service</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can enhance your community
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-[#049704] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
