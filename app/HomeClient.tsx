'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone, Mail, Trash2, Recycle, Building2, Sparkles, Star, MapPin, Camera, Shield, Smartphone, Bell, BarChart3, MessageSquare, Calendar } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';
import HubSpotForm from './components/HubSpotForm';
import FaqAccordion from './components/ui/FaqAccordion';
import Slogan from './components/Slogan';
import { trackPhoneCall, trackRequestDemo } from './utils/track';

export default function HomeClient() {
  const faqs = [
    {
      question: "What is valet trash service for apartments?",
      answer: "Valet trash service is a convenient doorstep trash collection solution where residents place their bagged trash outside their door, and our professional team picks it up directly. This apartment trash pickup service eliminates the need for residents to walk to distant dumpsters and keeps your property cleaner. We provide service 5-7 nights per week with GPS-tracked truck routing, a 100% collection commitment, and same-night missed-pickup cure."
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
      answer: "Absolutely! We specialize in providing valet trash and condo trash pickup for resort communities, luxury condos, and high-end apartment properties across Central Florida. Our resort valet trash service is designed to meet the elevated expectations of upscale properties, with white-glove doorstep collection, GPS-tracked routing, and dedicated account management."
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/Images/TruckImage.JPG"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.15)' }}
            aria-hidden="true"
          >
            <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/80 via-surface-dark/60 to-surface-dark/80"></div>
          <div
            className="absolute inset-0 pointer-events-none animate-radial-drift"
            style={{
              background:
                'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-20 md:pb-28 min-h-[700px] flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <ScrollReveal>
                <Slogan
                  variant="light"
                  as="badge"
                  className="text-sm md:text-base"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="h-6" aria-hidden="true" />
                <h1
                  className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] lg:leading-[1.12] tracking-tight"
                  style={{
                    textShadow: '2px 4px 12px rgba(0, 0, 0, 0.6)',
                    textWrap: 'balance',
                  }}
                >
                  Valet Trash, Bulk &amp; Junk Removal Services{' '}
                  <span
                    className="block sm:inline-block text-white/95 font-semibold mt-2 sm:mt-0"
                    style={{ letterSpacing: '0.03em' }}
                  >
                    in Orlando, FL
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p
                  className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                  style={{ textWrap: 'pretty' }}
                >
                  Orlando's trusted apartment trash pickup and valet trash service for apartments, condos, and resort communities. Professional bulk trash removal and junk removal services across Central Florida.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                  <a
                    href="tel:407-274-5019"
                    onClick={() => trackPhoneCall('hero')}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
                  >
                    <Phone className="w-5 h-5" />
                    (407) 274-5019
                  </a>
                  <Link
                    href="/demo/"
                    onClick={() => trackRequestDemo('hero')}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg"
                  >
                    Request App Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <a
                  href="https://www.google.com/search?q=on+the+fly+waste+solutions#lrd=0x88e771e84f7b6b0d:0x3c99f8d5f69668d2,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
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

              <div className="mt-8">
                <p className="text-white/80 text-sm font-light tracking-wide text-center">
                  Proudly serving premier communities like The Aston at Uptown
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(22, 163, 74, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(22, 163, 74, 0.1) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                By the Numbers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Trusted by Leading Properties
              </h2>
              <p className="text-xl text-ink-muted">
                Join the growing number of communities that trust On The Fly
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <ScrollReveal className="h-full">
              <div className="relative h-full bg-white p-8 pt-10 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" aria-hidden="true" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Building2 className="w-7 h-7 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight leading-none">2,000+</div>
                <div className="text-ink font-semibold text-lg">Units Served</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="h-full">
              <div className="relative h-full bg-gradient-to-br from-primary to-primary-dark p-8 pt-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden group md:-mt-4 md:mb-0">
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative w-14 h-14 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7 text-white fill-white" aria-hidden="true" />
                </div>
                <div className="relative text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight leading-none">100%</div>
                <div className="relative text-white/90 font-semibold text-lg">Client Satisfaction</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <div className="relative h-full bg-white p-8 pt-10 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" aria-hidden="true" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Calendar className="w-7 h-7 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight leading-none">7</div>
                <div className="text-ink font-semibold text-lg">Days a Week Service</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="app-intro" className="relative py-20 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(22, 163, 74, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.1) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-5">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                New — Property Manager App
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight">
                Manage Your Property's Waste Program from Your Pocket
              </h2>
              <p className="text-xl text-ink-muted leading-relaxed">
                The On The Fly app brings real-time service tracking, photo
                verification, and one-tap bulk pickup requests to property managers
                and residents — all in a single, easy-to-use mobile experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1">Live GPS Route Tracking</h3>
                    <p className="text-ink-muted leading-relaxed">
                      Watch crews move through your property in real time and confirm
                      every unit is serviced with GPS-verified check-ins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1">Photo-Documented Bulk &amp; Pressure Jobs</h3>
                    <p className="text-ink-muted leading-relaxed">
                      Every bulk removal, junk haul, and pressure-washing job includes
                      before &amp; after photos, attached to the completion notification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1">Instant Service Alerts</h3>
                    <p className="text-ink-muted leading-relaxed">
                      Get notified about delays, weather holds, and completed bulk
                      requests. Issues are resolved in minutes, not days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1">Monthly Service Dashboards</h3>
                    <p className="text-ink-muted leading-relaxed">
                      Collection-rate reports, route completion analytics, and
                      service history ready to drop into your owner reviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-1">Direct Team Messaging</h3>
                    <p className="text-ink-muted leading-relaxed">
                      Message your dedicated account lead and on-site crew directly
                      from the app — no phone tag, no lost emails.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/demo/"
                    onClick={() => trackRequestDemo('app_intro')}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg"
                  >
                    Request App Demo
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/client-login/"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    <Smartphone className="w-5 h-5" aria-hidden="true" />
                    Open the App
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative mx-auto max-w-[320px]">
                <div
                  className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-[2.5rem] bg-surface-dark p-3 shadow-2xl border border-surface-dark-border">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-dark rounded-b-2xl z-20" aria-hidden="true" />
                  <div className="rounded-[2rem] bg-gradient-to-b from-surface-dark-2 to-surface-dark overflow-hidden aspect-[9/19.5] relative">
                    <div className="absolute inset-0 flex flex-col pt-10 px-5 pb-5 text-white">
                      <div className="flex items-center justify-between mb-4 text-[10px] text-gray-400">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span>5G</span>
                          <span>●●●●</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-gray-400">Good morning</div>
                          <div className="text-base font-semibold">Reunion West</div>
                        </div>
                        <div className="w-9 h-9 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center">
                          <span className="text-primary text-sm font-bold">RW</span>
                        </div>
                      </div>

                      <div className="bg-primary/15 border border-primary/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Live</span>
                          <span className="text-[10px] text-gray-400">7:42 PM</span>
                        </div>
                        <div className="text-sm font-semibold mb-1">Crew on site — Building 3</div>
                        <div className="text-[11px] text-gray-400 mb-3">24 of 48 units serviced</div>
                        <div className="h-1.5 bg-surface-dark rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-primary rounded-full" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-surface-dark-2/60 border border-surface-dark-border rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-primary">100%</div>
                          <div className="text-[9px] text-gray-400">Collection</div>
                        </div>
                        <div className="bg-surface-dark-2/60 border border-surface-dark-border rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-primary">248</div>
                          <div className="text-[9px] text-gray-400">Photos</div>
                        </div>
                        <div className="bg-surface-dark-2/60 border border-surface-dark-border rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-primary">5</div>
                          <div className="text-[9px] text-gray-400">Bulks</div>
                        </div>
                      </div>

                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Today</div>
                      <div className="space-y-2 flex-1">
                        <div className="bg-surface-dark-2/60 border border-surface-dark-border rounded-lg p-3 flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold">Bulk pickup confirmed</div>
                            <div className="text-[10px] text-gray-400">Unit 2104 • Sofa</div>
                          </div>
                        </div>
                        <div className="bg-surface-dark-2/60 border border-surface-dark-border rounded-lg p-3 flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Camera className="w-4 h-4 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold">Photo verification</div>
                            <div className="text-[10px] text-gray-400">Building 2 • 7:15 PM</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 bg-primary rounded-xl py-2.5 text-center text-xs font-bold">
                        Request Bulk Pickup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="welcome-section" className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-surface-dark">
          <Image
            src="/Images/TruckImage.JPG"
            alt="On The Fly Waste Solutions truck providing door to door trash collection and doorstep valet trash service for HOA, resort style, and condo apartment communities across Central Florida"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center"
            style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.15)' }}
          />
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
                    We understand that clean communities start with reliable, accountable service. That's why we've built our reputation on a <span className="font-semibold text-primary">100% collection rate guarantee</span> and cutting-edge <span className="font-semibold text-primary">GPS tracking technology</span> that ensures every street and building is serviced exactly as promised.
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
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Collection Rate</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(circle at 15% 20%, rgba(22, 163, 74, 0.12) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(22, 163, 74, 0.1) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Our Services
              </h2>
              <p className="text-xl text-ink-muted max-w-2xl mx-auto">
                Comprehensive apartment community waste management solutions. Serving Orlando, Kissimmee & Central Florida resorts and apartment communities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {[
              {
                href: '/services/valet-trash/',
                icon: Trash2,
                title: 'Valet Trash Service',
                description:
                  'Premier doorstep trash collection and apartment trash pickup in Orlando FL. 100% collection commitment with GPS-tracked routing and same-night missed-pickup cure.',
                image: '/Images/Valettrashimage.jpg',
                imageAlt: 'Professional valet trash doorstep collection service',
              },
              {
                href: '/junk-removal-orlando-fl/',
                icon: Building2,
                title: 'Junk Removal',
                description:
                  'Professional junk removal in Orlando FL for homeowners, residents, and apartment communities. Fast, reliable, and eco-friendly hauling and disposal.',
                image: '/Images/Junk.jpg',
                imageAlt: 'Professional junk removal hauling service',
              },
              {
                href: '/services/bulk-removal/',
                icon: Recycle,
                title: 'Bulk Removal',
                description:
                  'Bulk trash pickup and bulk item removal for Orlando apartment complexes and Central Florida property managers. Scheduled service with flexible plans.',
                image: '/Images/Dumpster.jpg',
                imageAlt: 'Bulk dumpster pickup at apartment community',
              },
              {
                href: '/services/pressure-washing/',
                icon: Sparkles,
                title: 'Pressure Washing',
                description:
                  'Professional pressure washing services to maintain clean, attractive common areas and building exteriors.',
                image: '/Images/PressureWashingService.jpeg',
                imageAlt: 'Pressure washing exterior surfaces',
              },
            ].map((svc, index) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={svc.href} delay={index * 0.12} className="h-full">
                  <Link href={svc.href} className="group block h-full">
                    <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_30px_70px_-20px_rgba(22,163,74,0.45)] hover:-translate-y-2 hover:border-primary/50 flex flex-col">
                      {/* Background image — scales on hover */}
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />

                      {/* Readability overlay — white/neutral at rest, warms toward primary on hover */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-white via-white/96 to-white/86 transition-all duration-500 group-hover:from-white group-hover:via-white/92 group-hover:to-white/70"
                        aria-hidden="true"
                      />

                      {/* Primary top accent — expands from center on hover */}
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-700 ease-out group-hover:w-full"
                        aria-hidden="true"
                      />

                      {/* Soft green radial glow — fades in on hover */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            'radial-gradient(circle at 50% 100%, rgba(22, 163, 74, 0.18) 0%, transparent 60%)',
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative p-8 flex flex-col flex-grow z-10">
                        {/* Icon tile with rotate + scale + bg fill */}
                        <div className="relative mb-6">
                          <div
                            className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-primary"
                            aria-hidden="true"
                          />
                          <div className="relative w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-primary group-hover:rotate-[-6deg] group-hover:scale-110 shadow-md">
                            <Icon className="w-9 h-9 text-primary transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-[6deg]" aria-hidden="true" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-ink mb-3 transition-colors duration-500 group-hover:text-primary">
                          {svc.title}
                        </h3>
                        <p className="text-ink-muted mb-6 leading-relaxed flex-grow">
                          {svc.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold mt-auto">
                          <span className="relative">
                            Learn More
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" aria-hidden="true" />
                          </span>
                          <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-14 text-center">
              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 text-primary font-semibold text-lg"
              >
                <span className="relative">
                  View All Services
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" aria-hidden="true" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Community-type callout — HOA / Resort Style / Condo / Multifamily door-to-door collection */}
      <section id="community-types" className="relative py-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(circle at 12% 20%, rgba(22, 163, 74, 0.10) 0%, transparent 50%), radial-gradient(circle at 88% 80%, rgba(22, 163, 74, 0.08) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-5">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                Built for every community type
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight">
                Trusted Door to Door Trash Collection for HOA, Resort Style & Condo Communities Across Central Florida
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed">
                From gated HOA neighborhoods and luxury resort style apartment communities to condo associations, vacation rental properties, and multifamily new construction — On The Fly delivers doorstep trash pickup that residents love and property managers can count on. Serving Orlando, Kissimmee, Champions Gate, Lake Nona, Windermere, Winter Garden, Orange County, and Osceola County.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'HOA Communities',
                blurb: 'HOA door to door trash collection with board-friendly reporting and GPS-tracked nightly routes.',
              },
              {
                title: 'Resort Style & Luxury',
                blurb: 'Resort community trash collection and luxury community valet trash service for upscale apartments and condos.',
              },
              {
                title: 'Condo & Gated',
                blurb: 'Condo community valet trash provider and gated community valet trash service with discreet, uniformed crews.',
              },
              {
                title: 'Multifamily & New Build',
                blurb: 'Valet trash service multifamily — including valet trash for new construction apartments and lease-up communities.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{card.title}</h3>
                <p className="text-ink-muted leading-relaxed text-sm">{card.blurb}</p>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hoa-resort-valet-trash/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all shadow-lg"
              >
                Valet trash for HOA &amp; resort communities
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/door-to-door-trash-collection/"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
              >
                How door to door trash collection works
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-surface-dark to-surface-dark-2 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        {/* Gold + primary radial accents — "prestige" backdrop on the dark section */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60 animate-radial-drift"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.22) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.18) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        {/* Hairline gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold-light px-4 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold-light" aria-hidden="true" />
                Enterprise-Grade Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight lg:leading-snug">
                The On The Fly{' '}
                <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                  Advantage
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Next-generation apartment waste management in Orlando with enterprise-grade accountability
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: MapPin,
                title: 'GPS-Tracked Routing',
                description:
                  'Every truck is GPS-tracked on every route, so we can confirm when our team was on your property. Clear route history available to property managers on request.',
              },
              {
                icon: Shield,
                title: '100% Collection Commitment',
                description:
                  'If a pickup is ever reported missed, we send a crew back out the same night to cure it — no paperwork, no excuses, no finger-pointing.',
              },
              {
                icon: Camera,
                title: 'Property Manager Portal',
                description:
                  'Instant access to service reports and route history. Complete visibility into nightly route completion and any cured misses at your fingertips.',
              },
            ].map((adv, i) => {
              const Icon = adv.icon;
              return (
                <ScrollReveal key={adv.title} delay={(i + 1) * 0.12} className="h-full">
                  <div className="group relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_25px_70px_-20px_rgba(212,175,55,0.35)] flex flex-col overflow-hidden">
                    {/* Gold top accent — expands from center on hover */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-all duration-700 ease-out group-hover:w-full"
                      aria-hidden="true"
                    />
                    {/* Gold shimmer sweep on hover */}
                    <div
                      className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    >
                      <div className="absolute -top-1/2 -left-1/4 w-1/3 h-[200%] bg-gradient-to-r from-transparent via-gold/30 to-transparent rotate-12 group-hover:animate-shimmer" />
                    </div>
                    {/* Gold corner accent — small decorative bracket that appears on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <Sparkles className="w-4 h-4 text-gold" />
                    </div>

                    {/* Icon tile with gold ring + primary fill */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-xl blur-xl bg-gold/0 group-hover:bg-gold/40 transition-all duration-500" aria-hidden="true" />
                      <div className="relative w-16 h-16 bg-primary rounded-xl flex items-center justify-center ring-2 ring-transparent transition-all duration-500 group-hover:ring-gold group-hover:ring-offset-2 group-hover:ring-offset-surface-dark group-hover:scale-110 group-hover:-rotate-3 shadow-lg shadow-primary/40">
                        <Icon className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="relative text-2xl font-bold text-white mb-4 transition-colors duration-500 group-hover:text-gold-light">
                      {adv.title}
                    </h3>
                    <p className="relative text-gray-300 leading-relaxed flex-grow">
                      {adv.description}
                    </p>

                    {/* Bottom hairline — gold gradient that expands on hover */}
                    <div className="relative mt-6 h-px w-full overflow-hidden">
                      <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-gold via-gold-light to-transparent group-hover:w-full transition-all duration-700 ease-out" aria-hidden="true" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Hairline gold bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          aria-hidden="true"
        />
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
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                View All Reviews on Google
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated—no short-cuts. Donnell will go above and beyond."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  "Excellent service! The team is reliable, professional, and always goes the extra mile. Highly recommend On The Fly Waste Solutions."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Orlando</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Kissimmee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Altamonte Springs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Winter Park</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Lake Nona</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Map-grid background pattern (subtle lat/long lines) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(22,163,74,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.8) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden="true"
        />
        {/* Concentric radar rings centered on Orlando */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 800 800"
            width="800"
            height="800"
            className="opacity-[0.12]"
          >
            <circle cx="400" cy="400" r="120" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="400" cy="400" r="220" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="400" cy="400" r="320" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="400" cy="400" r="380" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="2 6" />
          </svg>
          {/* Slow rotating radar sweep */}
          <div
            className="absolute inset-0 animate-radar-sweep origin-center"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(22,163,74,0.18) 10deg, transparent 40deg)',
              mask: 'radial-gradient(circle, black 0 380px, transparent 381px)',
              WebkitMask: 'radial-gradient(circle, black 0 380px, transparent 381px)',
            }}
          />
        </div>
        {/* Warm primary radial glow behind Orlando */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(22, 163, 74, 0.12) 0%, transparent 40%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Central Florida Coverage Map
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Areas We Serve
              </h2>
              <p className="text-xl text-ink-muted">
                Proudly serving communities across Central Florida
              </p>
            </div>
          </ScrollReveal>

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { href: '/valet-trash-orlando-fl/', name: 'Orlando' },
              { href: '/valet-trash-kissimmee-fl/', name: 'Kissimmee' },
              { href: '/valet-trash-altamonte-springs-fl/', name: 'Altamonte Springs' },
              { href: '/valet-trash-lake-mary-fl/', name: 'Lake Mary' },
              { href: '/valet-trash-apopka-fl/', name: 'Apopka' },
              { href: '/valet-trash-clermont-fl/', name: 'Clermont' },
              { href: '/valet-trash-winter-park-fl/', name: 'Winter Park' },
              { href: '/valet-trash-sanford-fl/', name: 'Sanford' },
              { href: '/valet-trash-st-cloud-fl/', name: 'St. Cloud' },
              { href: '/valet-trash-davenport-fl/', name: 'Davenport' },
              { href: '/valet-trash-four-corners-fl/', name: 'Four Corners' },
              { href: '/valet-trash-space-coast-fl/', name: 'Space Coast' },
              { href: '/valet-trash-daytona-beach-fl/', name: 'Daytona Beach' },
            ].map((city, i) => (
              <ScrollReveal key={city.href} delay={i * 0.04}>
                <Link
                  href={city.href}
                  className="group relative flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 p-4 rounded-xl cursor-pointer shadow-sm hover:shadow-[0_12px_30px_-10px_rgba(22,163,74,0.45)] hover:-translate-y-0.5"
                >
                  {/* Map pin with continuous ping (staggered per card) */}
                  <span className="relative flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span
                      className="absolute inline-flex h-2 w-2 rounded-full bg-primary animate-map-ping"
                      style={{ animationDelay: `${(i % 5) * 0.5}s` }}
                    />
                    <MapPin className="relative w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </span>
                  <span className="font-semibold text-gray-900 group-hover:text-white transition-colors text-sm md:text-base">
                    {city.name}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Soft gold radial accent to signal 'premium partners' */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(212, 175, 55, 0.10) 0%, transparent 55%), radial-gradient(circle at 85% 85%, rgba(22, 163, 74, 0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-dark px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                Trusted Industry Partner
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight lg:leading-snug">
                Proud Members Of
              </h2>
              <p className="text-xl text-ink-muted">
                Affiliated with leading industry associations
              </p>
            </div>
          </ScrollReveal>

          {/* Edge-fade mask wrapper so logos softly fade in/out of the scroll */}
          <ScrollReveal delay={0.2}>
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              <div className="flex animate-scroll gap-10 md:gap-14">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="flex items-center gap-10 md:gap-14 flex-shrink-0"
                    aria-hidden={copy === 1}
                  >
                    {[
                      {
                        src: '/Images/faa-full-color-full-logo.png',
                        alt: 'Florida Apartment Association',
                        blend: 'multiply' as const,
                      },
                      {
                        src: '/Images/NAA-logo_bgwhite.png',
                        alt: 'National Apartment Association',
                        blend: 'multiply' as const,
                      },
                      {
                        src: '/Images/AAGO.png',
                        alt: 'AAGO',
                        blend: 'multiply' as const,
                      },
                      {
                        src: 'https://seal-centralflorida.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-235977450.png',
                        alt: 'On The Fly Waste Solutions BBB Business Review',
                        href: 'https://www.bbb.org/us/fl/apopka/profile/garbage-removal/on-the-fly-waste-solutions-0733-235977450/#sealclick',
                        blend: 'normal' as const,
                      },
                      {
                        src: '/Images/asset-logo.png',
                        alt: 'Asset Living',
                        blend: 'multiply' as const,
                      },
                      {
                        src: '/Images/greystar-logo.png',
                        alt: 'Greystar',
                        blend: 'multiply' as const,
                      },
                      {
                        src: '/Images/venterra-logo.png',
                        alt: 'Venterra Realty',
                        blend: 'multiply' as const,
                      },
                      {
                        src: '/ReunionWestPOALOgo.jpg',
                        alt: 'Reunion West POA',
                        blend: 'multiply' as const,
                      },
                    ].map((logo) => {
                      const img = (
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={200}
                          height={80}
                          className="h-[70px] w-auto max-w-[180px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          style={{ mixBlendMode: logo.blend }}
                          loading="lazy"
                        />
                      );
                      return logo.href ? (
                        <a
                          key={`${copy}-${logo.alt}`}
                          href={logo.href}
                          target="_blank"
                          rel="nofollow"
                          className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          {img}
                        </a>
                      ) : (
                        <div
                          key={`${copy}-${logo.alt}`}
                          className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          {img}
                        </div>
                      );
                    })}
                  </div>
                ))}
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

          <ScrollReveal>
            <FaqAccordion items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-primary">
              <div className="text-center mb-8">
                <Slogan variant="dark" as="badge" className="text-sm md:text-base" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-5">
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
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
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
