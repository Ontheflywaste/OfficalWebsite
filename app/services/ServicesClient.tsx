'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trash2, Package, Droplets, Sparkles, CheckCircle2, Shield, Clock, Phone } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ServicesClient() {
  const services = [
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "Valet Trash Service",
      description: "Premier doorstep trash pickup for apartment communities. Flexible scheduling up to 7 days per week with GPS-verified route completion.",
      features: [
        "SLA-backed 100% collection rate",
        "Advanced GPS geo-location tracking",
        "Flexible scheduling up to 7 days/week",
        "Customizable collection windows"
      ],
      link: "/services/valet-trash/",
      image: "/Images/Trash-pickup.jpg"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Junk Removal",
      description: "Fast, professional junk removal for homeowners and residents. Same-day service available with before & after photo verification.",
      features: [
        "Same-day service available",
        "Before & after photo verification",
        "Full-service removal",
        "Eco-friendly disposal"
      ],
      link: "/services/junk-removal/",
      image: "/Images/Junk.jpg"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Bulk Removal",
      description: "Recurring and scheduled bulk removal exclusively for property managers. Perfect for move-outs and property turnovers with photo documentation.",
      features: [
        "Recurring service plans",
        "Before & after photo verification",
        "Property-wide services",
        "Turn-ready solutions"
      ],
      link: "/services/bulk-removal/",
      image: "/Images/Residential-Junk-Removal-McAllen-Dumpster-Rental-Junk-Removal-Services-1024x768-2.jpg"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Pressure Washing",
      description: "Professional exterior cleaning for breezeways, sidewalks, and all concrete surfaces. Complete before & after photo documentation included.",
      features: [
        "Commercial-grade equipment",
        "Before & after photo verification",
        "Licensed & insured",
        "Eco-friendly solutions"
      ],
      link: "/services/pressure-washing/",
      image: "/Images/pressure-wash.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SLA-Backed Service",
      description: "Our service level agreements guarantee 100% collection rates with advanced GPS tracking technology"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "GPS geo-location tracking for valet trash, photo verification for junk removal, bulk services, and pressure washing"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Dedicated account managers and round-the-clock customer support for property managers and residents"
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/Images/our-services.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive waste management and property maintenance solutions for Central Florida communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade service backed by technology and accountability
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-full flex items-center justify-center text-[#027502] mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-[#027502] bg-opacity-10 rounded-lg flex items-center justify-center text-[#027502] mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#027502] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#027502] font-semibold text-lg hover:gap-4 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-12 lg:p-16 text-white">
                <ScrollReveal>
                  <h2 className="text-4xl font-bold mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Contact us today for a free consultation and customized quote for your property.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#027502]" />
                      <span>Free on-site assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#027502]" />
                      <span>Customized service plans</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#027502]" />
                      <span>No long-term contracts required</span>
                    </li>
                  </ul>
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
                      Call Now
                    </a>
                  </div>
                </ScrollReveal>
              </div>
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <img
                  src="/Images/our-services.jpg"
                  alt="Contact us for waste management services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
