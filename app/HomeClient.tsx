'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Mail, Trash2, Recycle, Building2, Sparkles, Star } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';
import HubSpotForm from './components/HubSpotForm';

export default function HomeClient() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/Images/Theastonatuptownheroimage.webp"
            alt="On The Fly Waste Solutions providing valet trash services at The Aston at Uptown luxury apartments in Altamonte Springs"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Valet Trash & Bulk Removal<br />
              <span className="text-[#027502]">Services</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Orlando's trusted door to door trash pickup service for apartments, condos, and resort-style communities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
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
            <a
              href="https://www.google.com/search?q=on+the+fly+waste+solutions#lrd=0x88e771e84f7b6b0d:0x3c99f8d5f69668d2,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 mt-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-flex mx-auto border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              aria-label="View our 5-star Google reviews"
            >
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
            </a>
          </ScrollReveal>

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/80 text-sm md:text-base font-light tracking-wide">
              Proudly serving premier communities like The Aston at Uptown
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0">
          {isVideoLoaded && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:whitespace-nowrap">
                  Welcome to On The Fly Waste Solutions
                </h2>
                <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
                  <p>
                    Since 2020, On The Fly Waste Solutions has been transforming property waste management across Central Florida with our innovative valet trash and comprehensive waste services.
                  </p>
                  <p>
                    We understand that clean communities start with reliable, accountable service. That's why we've built our reputation on a <span className="font-semibold text-[#027502]">100% collection rate guarantee</span> and cutting-edge <span className="font-semibold text-[#027502]">GPS tracking technology</span> that ensures every street and building is serviced exactly as promised.
                  </p>
                  <p>
                    As proud members of the Florida Apartment Association (FAA), National Apartment Association (NAA), and AAGO, we bring enterprise-level service with a personal touch. From luxury resorts like Margaritaville and Reunion to thriving apartment communities, property managers trust us to deliver exceptional results that residents notice.
                  </p>
                  <p>
                    Our team doesn't just collect trash—we partner with property managers to enhance resident satisfaction, reduce maintenance calls, and maintain pristine communities that prospects want to call home.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white text-[#027502] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="/Images/artemistradeshow.jpg"
                  alt="On The Fly Waste Solutions team at trade show"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/10"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#027502] text-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Collection Rate</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#027502]/10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <Link href="/services/valet-trash/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#027502] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#027502] transition-colors">
                    <Trash2 className="w-10 h-10 text-[#027502] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Valet Trash Service</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Premier doorstep trash pickup with SLA-backed 100% collection rate and photo verification</p>
                  <span className="text-[#027502] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/services/junk-removal/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-gray-900 transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                    <Building2 className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Professional junk removal services for residents and homeowners. Fast, reliable, and eco-friendly disposal solutions.</p>
                  <span className="text-gray-900 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/services/bulk-removal/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#027502] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#027502] transition-colors">
                    <Recycle className="w-10 h-10 text-[#027502] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Recurring commercial bulk removal solutions for property managers. Scheduled pickups and flexible service plans.</p>
                  <span className="text-[#027502] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link href="/services/pressure-washing/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#027502] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#027502] transition-colors">
                    <Sparkles className="w-10 h-10 text-[#027502] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pressure Washing</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Professional pressure washing services to maintain clean, attractive common areas and building exteriors.</p>
                  <span className="text-[#027502] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[#027502] font-semibold text-lg hover:gap-4 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Images/TradeshowPicture"
            alt="Trade show background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Proud Members Of
              </h2>
              <p className="text-xl text-gray-300">
                Affiliated with leading industry associations
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex items-center gap-16 pr-16">
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/faa-full-color-full-logo.png"
                      alt="Florida Apartment Association"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/NAA-logo_bgwhite.png"
                      alt="National Apartment Association"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/AAGO.png"
                      alt="AAGO"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://www.bbb.org/us/fl/kissimmee/profile/waste-removal/on-the-fly-waste-solutions-0733-90656041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://www.bbb.org/ProfileImages/7cc07fc0-4d2a-437d-afb5-e2726c8f4a39.png"
                      alt="BBB Accredited Business"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="flex items-center gap-16 pr-16" aria-hidden="true">
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/faa-full-color-full-logo.png"
                      alt="Florida Apartment Association"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/NAA-logo_bgwhite.png"
                      alt="National Apartment Association"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4">
                    <img
                      src="/Images/AAGO.png"
                      alt="AAGO"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://www.bbb.org/us/fl/kissimmee/profile/waste-removal/on-the-fly-waste-solutions-0733-90656041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://www.bbb.org/ProfileImages/7cc07fc0-4d2a-437d-afb5-e2726c8f4a39.png"
                      alt="BBB Accredited Business"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#027502]">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free Quote
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to elevate your property's waste management? Contact us today for a free, no-obligation quote.
                </p>
              </div>
              <HubSpotForm
                region="na1"
                portalId="22416220"
                formId="b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#027502]/10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#027502] h-full flex flex-col">
                <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#027502]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SLA-Backed Guarantee</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  100% collection rate backed by Service Level Agreement with documented photo verification for complete accountability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gray-900 h-full flex flex-col">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Focused</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Specialized in multi-family properties with dedicated account management and real-time service notifications.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#027502] h-full flex flex-col">
                <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="w-8 h-8 text-[#027502]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Transparency</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Real-time photo documentation, detailed service reports, and 24/7 customer support ensure total visibility.
                </p>
              </div>
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
                <div className="text-5xl font-bold text-[#027502] mb-2">2,000+</div>
                <div className="text-gray-600 font-semibold">Units Served</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#027502] mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#027502] mb-2">7</div>
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
              className="inline-flex items-center gap-2 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
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
