'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Mail, Trash2, Recycle, Building2, Sparkles, Star } from 'lucide-react';
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
        <div className="absolute inset-0 bg-black">
          {isVideoLoaded && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            >
              <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premier Doorstep<br />
              <span className="text-[#049704]">Trash Pickup</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              SLA-backed valet trash service with 100% collection rate guarantee. Serving apartment communities across Central Florida with photo-verified, accountable service.
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

          <ScrollReveal delay={0.6}>
            <div className="flex items-center justify-center gap-3 mt-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-flex mx-auto border border-white/20">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#4285F4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">5-Star Rated on Google</span>
            </div>
          </ScrollReveal>
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#049704]">
                <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#049704]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SLA-Backed Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  100% collection rate backed by Service Level Agreement with documented photo verification for complete accountability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gray-900">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in multi-family properties with dedicated account management and real-time service notifications.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#049704]">
                <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="w-8 h-8 text-[#049704]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time photo documentation, detailed service reports, and 24/7 customer support ensure total visibility.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Link href="/services/valet-trash/" className="group">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Trash2 className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Valet Trash Service</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Premier doorstep trash pickup with SLA-backed 100% collection rate and photo verification</p>
                  <span className="text-[#049704] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/services/junk-removal/" className="group">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-gray-900 transition-all transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                    <Building2 className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Fast, professional removal with same-day service available for urgent needs</p>
                  <span className="text-gray-900 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/services/bulk-removal/" className="group">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Recycle className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Scheduled pickup of oversized items with flexible property-wide services</p>
                  <span className="text-[#049704] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[#049704] font-semibold text-lg hover:gap-4 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
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
