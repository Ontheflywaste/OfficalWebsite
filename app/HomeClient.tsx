'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone, Mail, Trash2, Recycle, Building2, Sparkles, Star, MapPin, Camera, Shield, ChevronDown } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';
import HubSpotForm from './components/HubSpotForm';

export default function HomeClient() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            setIsVideoLoaded(true);
          }
        });
      },
      { rootMargin: '50px' }
    );

    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      observer.observe(videoSection);
    }

    return () => {
      if (videoSection) {
        observer.unobserve(videoSection);
      }
    };
  }, [isVideoLoaded]);

  const faqs = [
    {
      question: "What is valet trash service for apartments?",
      answer: "Valet trash service is a convenient doorstep trash collection solution where residents place their bagged trash outside their door, and our professional team picks it up directly. This apartment trash pickup service eliminates the need for residents to walk to distant dumpsters and keeps your property cleaner. We provide service 5-7 nights per week with GPS tracking, photo verification, and a 100% collection guarantee."
    },
    {
      question: "How much does valet trash cost for an apartment community in Orlando?",
      answer: "Valet trash service costs typically range from $25-60 per unit per month for high-end resort style communities depending on property size, collection frequency, and specific service requirements. We offer customized pricing based on your property's unique needs. Contact us for a free, no-obligation quote tailored to your Orlando apartment community."
    },
    {
      question: "Do you offer bulk item removal for apartment complexes in Central Florida?",
      answer: "Yes! We provide comprehensive bulk trash pickup services for apartment complexes throughout Orlando and Central Florida. Our bulk item removal service handles furniture, appliances, mattresses, and other large items on a scheduled basis. We offer flexible pickup schedules and can accommodate both routine and on-demand bulk removal needs for property managers."
    },
    {
      question: "What areas in Central Florida do you serve?",
      answer: "We proudly serve Orlando, Kissimmee, Altamonte Springs, Winter Park, Lake Nona, and surrounding Central Florida communities. Our service area covers apartment communities, condos, and resort-style properties throughout the region. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Do you serve resort communities and condos?",
      answer: "Absolutely! We specialize in providing valet trash and condo trash pickup for resort communities, luxury condos, and high-end apartment properties across Central Florida. Our resort valet trash service is designed to meet the elevated expectations of upscale properties, with white-glove doorstep collection, photo verification, and dedicated account management."
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/Images/TruckImage.JPG"
            alt="On The Fly Waste Solutions providing valet trash services at luxury apartment communities in Central Florida"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: 'brightness(0.9) contrast(1.1) saturate(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.6)' }}>
              Valet Trash, Bulk & Junk Removal Services<br />
              <span className="text-white font-semibold" style={{ letterSpacing: '0.05em' }}>in Orlando, FL</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto px-4">
              Orlando's trusted apartment trash pickup and valet trash service for apartments, condos, and resort communities. Professional bulk trash removal and junk removal services across Central Florida.
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

          <div className="absolute bottom-6 left-0 right-0 text-center px-4">
            <p className="text-white/80 text-xs sm:text-sm md:text-base font-light tracking-wide">
              Proudly serving premier communities like The Aston at Uptown
            </p>
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
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all">
                <div className="text-6xl font-bold text-[#049704] mb-3">2,000+</div>
                <div className="text-gray-800 font-semibold text-lg">Units Served</div>
              </div>
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all">
                <div className="text-6xl font-bold text-[#049704] mb-3">100%</div>
                <div className="text-gray-800 font-semibold text-lg">Client Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all">
                <div className="text-6xl font-bold text-[#049704] mb-3">7</div>
                <div className="text-gray-800 font-semibold text-lg">Days a Week Service</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="video-section" className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0">
          {isVideoLoaded && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
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
              <div className="lg:pr-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Welcome to On The Fly Waste Solutions
                </h2>
                <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
                  <p>
                    Since 2020, On The Fly Waste Solutions has been the go-to trash valet service transforming apartment waste management across Central Florida with innovative doorstep trash collection and comprehensive waste solutions.
                  </p>
                  <p>
                    We understand that clean communities start with reliable, accountable service. That's why we've built our reputation on a <span className="font-semibold text-[#049704]">100% collection rate guarantee</span> and cutting-edge <span className="font-semibold text-[#049704]">GPS tracking technology</span> that ensures every street and building is serviced exactly as promised.
                  </p>
                  <p>
                    As proud members of the Florida Apartment Association (FAA), National Apartment Association (NAA), and AAGO, we bring enterprise-level service with a personal touch. From luxury resorts like Margaritaville and Reunion to thriving apartment communities, property managers trust us to deliver exceptional results that residents notice.
                  </p>
                  <p>
                    Our team doesn't just handle apartment trash pickup—we partner with property managers to enhance resident satisfaction, reduce maintenance calls, and maintain pristine communities that prospects want to call home.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white text-[#049704] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Images/artemistradeshow.jpg"
                  alt="On The Fly Waste Solutions team at trade show"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl shadow-2xl border-4 border-white/10 object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#049704] text-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Collection Rate</div>
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
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive apartment community waste management solutions. Serving Orlando, Kissimmee & Central Florida resorts and apartment communities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <Link href="/services/valet-trash/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Trash2 className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Valet Trash Service</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Premier doorstep trash collection and apartment trash pickup in Orlando FL. SLA-backed 100% collection rate with GPS tracking and photo verification.</p>
                  <span className="text-[#049704] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/services/junk-removal/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Building2 className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Professional junk removal in Orlando FL for homeowners, residents, and apartment communities. Fast, reliable, and eco-friendly hauling and disposal.</p>
                  <span className="text-[#049704] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/services/bulk-removal/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Recycle className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Bulk trash pickup and bulk item removal for Orlando apartment complexes and Central Florida property managers. Scheduled service with flexible plans.</p>
                  <span className="text-[#049704] font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link href="/services/pressure-washing/" className="group h-full">
                <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:shadow-2xl hover:border-[#049704] transition-all transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#049704] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#049704] transition-colors">
                    <Sparkles className="w-10 h-10 text-[#049704] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pressure Washing</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Professional pressure washing services to maintain clean, attractive common areas and building exteriors.</p>
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

      <section className="relative py-20 bg-gradient-to-b from-[#050505] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The On The Fly Advantage
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Next-generation apartment waste management in Orlando with enterprise-grade accountability
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#049704]/30 hover:border-[#049704] transition-all h-full flex flex-col group">
                <div className="w-16 h-16 bg-[#049704] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">GPS-Verified Accountability</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Every bag, every building, tracked in real-time. Advanced geo-location technology ensures 100% route completion with documented proof of service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#049704]/30 hover:border-[#049704] transition-all h-full flex flex-col group">
                <div className="w-16 h-16 bg-[#049704] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">100% Collection Guarantee</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Backed by our strict Service Level Agreement (SLA). If we miss it, we make it right immediately with full transparency and accountability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#049704]/30 hover:border-[#049704] transition-all h-full flex flex-col group">
                <div className="w-16 h-16 bg-[#049704] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Property Manager Portal</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Instant access to service reports and photo verification. Complete visibility into every pickup with time-stamped documentation at your fingertips.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  5-Star Rated on Google
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                See what property managers and residents say about our valet trash service in Orlando
              </p>
              <a
                href="https://www.google.com/search?q=on+the+fly+waste+solutions#lrd=0x88e771e84f7b6b0d:0x3c99f8d5f69668d2,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#049704] font-semibold hover:gap-4 transition-all"
              >
                View All Reviews on Google
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated—no short-cuts. Donnell will go above and beyond."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[#049704] rounded-full flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lynn Mollison</div>
                    <div className="text-sm text-gray-600">HOA Board Member</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[#049704] rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Antonio Marcuz</div>
                    <div className="text-sm text-gray-600">Property Management Company Owner</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#049704] transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Excellent service! The team is reliable, professional, and always goes the extra mile. Highly recommend On The Fly Waste Solutions."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[#049704] rounded-full flex items-center justify-center text-white font-bold">
                    W
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">William Barber</div>
                    <div className="text-sm text-gray-600">Vendor Supervisor, Encore Resort</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Valet Trash & Waste Management Serving Apartments, Condos & Resorts Across Central Florida
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Our <strong>valet trash service Orlando FL</strong> teams provide professional waste management solutions throughout the region. From luxury apartment communities to resort-style properties, we deliver reliable <strong>doorstep trash collection</strong> services that property managers trust.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We proudly serve the Central Florida communities listed below with comprehensive services including <strong>condo trash pickup Orlando</strong>, <strong>bulk removal Central Florida</strong>, and <strong>junk removal Orlando</strong> for apartment complexes and resort properties.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#049704]" />
                    <span className="font-semibold">Orlando</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#049704]" />
                    <span className="font-semibold">Kissimmee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#049704]" />
                    <span className="font-semibold">Altamonte Springs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#049704]" />
                    <span className="font-semibold">Winter Park</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#049704]" />
                    <span className="font-semibold">Lake Nona</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Areas We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Proudly serving communities across Central Florida
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link href="/valet-trash-orlando-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Orlando</span>
              </Link>
              <Link href="/valet-trash-kissimmee-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Kissimmee</span>
              </Link>
              <Link href="/valet-trash-altamonte-springs-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Altamonte Springs</span>
              </Link>
              <Link href="/valet-trash-lake-mary-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Lake Mary</span>
              </Link>
              <Link href="/valet-trash-apopka-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Apopka</span>
              </Link>
              <Link href="/valet-trash-clermont-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Clermont</span>
              </Link>
              <Link href="/valet-trash-winter-park-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Winter Park</span>
              </Link>
              <Link href="/valet-trash-sanford-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Sanford</span>
              </Link>
              <Link href="/valet-trash-st-cloud-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">St. Cloud</span>
              </Link>
              <Link href="/service-areas/davenport-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Davenport</span>
              </Link>
              <Link href="/service-areas/four-corners-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Four Corners</span>
              </Link>
              <Link href="/service-areas/space-coast-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Space Coast</span>
              </Link>
              <Link href="/service-areas/daytona-beach-fl/" className="bg-white border-2 border-[#049704]/20 hover:border-[#049704] hover:bg-[#049704]/5 transition-all p-4 rounded-lg text-center group cursor-pointer">
                <span className="font-semibold text-gray-900 group-hover:text-[#049704] transition-colors">Daytona Beach</span>
              </Link>
            </div>
          </ScrollReveal>
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
              <div className="flex animate-scroll gap-12 md:gap-16">
                <div className="flex items-center gap-12 md:gap-16">
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/faa-full-color-full-logo.png"
                      alt="Florida Apartment Association"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/NAA-logo_bgwhite.png"
                      alt="National Apartment Association"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/AAGO.png"
                      alt="AAGO"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://www.bbb.org/us/fl/apopka/profile/garbage-removal/on-the-fly-waste-solutions-0733-235977450/#sealclick"
                    target="_blank"
                    rel="nofollow"
                    className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
                  >
                    <img
                      src="https://seal-centralflorida.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-235977450.png"
                      alt="On The Fly Waste Solutions BBB Business Review"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </a>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/asset-logo.png"
                      alt="Asset Living"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/greystar-logo.png"
                      alt="Greystar"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/venterra-logo.png"
                      alt="Venterra Realty"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/ReunionWestPOALOgo.jpg"
                      alt="Reunion West POA"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-12 md:gap-16" aria-hidden="true">
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/faa-full-color-full-logo.png"
                      alt="Florida Apartment Association"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/NAA-logo_bgwhite.png"
                      alt="National Apartment Association"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/AAGO.png"
                      alt="AAGO"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://www.bbb.org/us/fl/apopka/profile/garbage-removal/on-the-fly-waste-solutions-0733-235977450/#sealclick"
                    target="_blank"
                    rel="nofollow"
                    className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
                  >
                    <img
                      src="https://seal-centralflorida.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-235977450.png"
                      alt="On The Fly Waste Solutions BBB Business Review"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </a>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/asset-logo.png"
                      alt="Asset Living"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/greystar-logo.png"
                      alt="Greystar"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/Images/venterra-logo.png"
                      alt="Venterra Realty"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}>
                    <img
                      src="/ReunionWestPOALOgo.jpg"
                      alt="Reunion West POA"
                      className="object-contain"
                      style={{ height: '60px', width: 'auto', maxWidth: '160px' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our valet trash service in Orlando
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#049704] transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#049704] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaqIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-[#049704]">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Start Your 100% Collection Guarantee Today
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to elevate your property's waste management in Orlando? Contact us today for a free, no-obligation quote for valet trash, bulk removal, or junk hauling.
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
