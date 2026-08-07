'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Target, Heart, Users, Award, TrendingUp, Shield, Phone, Star, X, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  imagePosition: string;
  description: string;
  // Extended bio content — these surface inside the modal
  bio: string[];
  focusAreas: string[];
  quote?: string;
  email?: string;
  linkedin?: string;
}

export default function AboutClient() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accountability",
      description: "Our trucks run on GPS-tracked routes every night. If a missed pickup is ever verified — by a Ring camera, a building-level confirmation, or our own truck GPS data — we make it right. We stand behind our work with a 100% collection commitment."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Resident Satisfaction",
      description: "We treat every property like our own home. Professional, courteous service that residents notice and appreciate."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Approach",
      description: "We work closely with property managers to solve problems, not just collect trash. Your success is our success."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "From uniforms to equipment to communication, we maintain the highest professional standards in every detail."
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Donnell Edwards",
      title: "CEO & Founder",
      image: "/Images/Donnell2.jpg",
      imagePosition: "center 25%",
      description: "Visionary leader committed to revolutionizing waste management in Central Florida",
      bio: [
        "Donnell founded On The Fly Waste Solutions with a simple belief: apartment communities in Central Florida deserve a waste-management partner that shows up, shows proof, and stands behind every pickup.",
        "From day one he set the bar at a 100% collection commitment backed by GPS-tracked truck routing and verified missed pickups made right, bringing enterprise-level accountability to a category that had long settled for less.",
        "Today he leads company strategy, key partnerships with resorts and property-management groups, and the continued rollout of the On The Fly property-manager app.",
      ],
      focusAreas: [
        "Company strategy & growth",
        "Property-manager & resort partnerships",
        "Service-level standards and verified missed-pickup accountability",
        "Technology roadmap for the client app",
      ],
      quote:
        "We don't just collect trash — we protect a property manager's reputation with every pickup.",
    },
    {
      name: "Trevor Alston",
      title: "Operations Manager",
      image: "/Images/team/Trevor-Alston.jpg",
      imagePosition: "center top",
      description: "Ensures flawless execution and customer satisfaction across all properties",
      bio: [
        "Trevor runs day-to-day operations across every property on the On The Fly roster. From crew scheduling to route optimization to on-property service checks, if something touches a resident's door, it goes through his team.",
        "He's the direct line for property managers who want an answer fast — and the reason complaints get resolved with a record to show for it.",
        "Trevor trains every new crew member personally, so the bar for uniform presentation, noise discipline, and pickup quality stays consistent from the first building we onboard to the hundredth.",
      ],
      focusAreas: [
        "Nightly crew dispatch & routing",
        "Property-manager escalation & resolution",
        "Crew hiring, training, and uniform standards",
        "Quality audits and photo-verification reviews",
      ],
      quote:
        "Our job is to make property managers look good. If the property is clean, we did our job right.",
    },
    {
      name: "Steven Edwards",
      title: "Chief Financial Officer",
      image: "/Images/Steven2.jpg",
      imagePosition: "center 20%",
      description: "Leads our dedicated team with hands-on expertise and commitment to quality",
      bio: [
        "Steven anchors the financial side of the business — contracts, billing, and the numbers that keep On The Fly's service guarantees backed by real operational discipline.",
        "He works directly with property managers on pricing that fits their budget cycles, whether that's a per-unit valet-trash contract, a recurring bulk-pickup plan, or a one-off pressure-washing engagement.",
        "Steven also leads long-term planning — the investments in equipment, staffing, and technology that let the company keep expanding across Central Florida without sacrificing service quality.",
      ],
      focusAreas: [
        "Contracts, pricing, and billing",
        "Financial planning & budgeting",
        "Investment in equipment & technology",
        "Long-term growth and hiring roadmap",
      ],
      quote:
        "Predictable service needs predictable finances. We run the business so the crews can run the routes.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Launch",
      description: "Founded in Central Florida with a vision to transform property waste management"
    },
    {
      year: "2021",
      title: "Major Partnership",
      description: "Established partnership with Encore Resort at Reunion, marking our first major property"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Joined AAGO, FAA, and NAA industry associations, cementing our professional standing"
    },
    {
      year: "2023",
      title: "1,500+ Residents",
      description: "Reached milestone of serving 1,500+ satisfied residents across Central Florida"
    },
    {
      year: "2024",
      title: "Premium Properties",
      description: "Expanded to premier locations including Margaritaville and Reunion Resort"
    },
    {
      year: "2025",
      title: "2,500+ Residents",
      description: "Now serving 2,500+ residents with partners like ZRS, Rangewater, and RPM Living"
    }
  ];

  const [openMember, setOpenMember] = useState<TeamMember | null>(null);

  // ESC to close + lock body scroll while modal is open
  useEffect(() => {
    if (!openMember) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMember(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [openMember]);

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/ApartmentBuildingHero.webp"
            alt="Resort style and HOA apartment communities we serve with door to door trash collection across Orlando and Central Florida"
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
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                About Orlando's Valet Trash Experts
              </h1>
              <p className="text-2xl text-gray-200 mb-8">
                Central Florida's premier valet trash and waste management partner for apartments, condos, and resort communities
              </p>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-flex border border-white/20">
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    On The Fly Waste Solutions was born from a simple observation: apartment and condo property managers in Central Florida deserved a waste management partner they could truly count on.
                  </p>
                  <p className="text-lg">
                    As lifelong Florida residents, our founders understood the unique challenges apartment communities face. Unreliable service, poor communication, and lack of accountability were creating headaches for property managers and residents alike.
                  </p>
                  <p className="text-lg">
                    We set out to change that. From day one, we've combined cutting-edge technology with old-fashioned reliability. GPS route verification every night. Photo documentation when it matters. A 100% collection rate guarantee. Real people answering the phone. These weren't industry standards—they were our promises.
                  </p>
                  <p className="text-lg">
                    Today, we're proud to provide valet trash, junk removal, and bulk item removal to communities across Orlando, Kissimmee, and surrounding areas. We're more than a waste management company—we're your partner in creating cleaner, happier apartment communities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <Image
                  src="/Images/TradeshowTrevor.jpeg"
                  alt="On The Fly Waste Solutions team at industry trade show"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm">Collection Rate</div>
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
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                To provide Central Florida property managers with apartment waste management services that actually work. From doorstep trash collection to bulk removal and junk hauling, we combine technology-driven accountability with personal service to deliver a level of reliability previously unheard of in our industry.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <button
                  type="button"
                  onClick={() => setOpenMember(member)}
                  aria-label={`Read more about ${member.name}, ${member.title}`}
                  className="group w-full text-left h-full flex flex-col bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="aspect-square overflow-hidden relative bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: member.imagePosition }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-primary font-semibold mb-3">{member.title}</div>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Read full bio
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team-member detail modal */}
      {openMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm"
            onClick={() => setOpenMember(null)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setOpenMember(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-gray-100 text-gray-700 shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="grid md:grid-cols-5 md:items-start">
              <div className="md:col-span-2 relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                <Image
                  src={openMember.image}
                  alt={openMember.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={92}
                  className="object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>

              <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
                <h2 id="team-modal-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
                  {openMember.name}
                </h2>
                <div className="text-primary font-semibold mb-6">{openMember.title}</div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {openMember.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {openMember.focusAreas.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                      Focus areas
                    </div>
                    <ul className="space-y-2">
                      {openMember.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {openMember.quote && (
                  <blockquote className="mt-6 pl-4 border-l-4 border-primary italic text-gray-700">
                    "{openMember.quote}"
                  </blockquote>
                )}

                {(openMember.email || openMember.linkedin) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {openMember.email && (
                      <a
                        href={`mailto:${openMember.email}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        {openMember.email}
                      </a>
                    )}
                    {openMember.linkedin && (
                      <a
                        href={openMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From local startup to trusted industry leader
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="relative flex items-center gap-8">
                    <div className="hidden md:flex w-16 h-16 bg-primary text-white rounded-full items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg z-10">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="md:hidden inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Property Managers Choose Us
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">100% collection commitment with verified missed pickups made right</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Photo verification with every single service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Local company with deep Central Florida roots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Professional, uniformed team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Real-time communication and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">Comprehensive services: valet trash, bulk trash pickup, junk removal, and pressure washing</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Ready to Experience the Difference?</h3>
                <p className="text-gray-100 mb-8 text-lg leading-relaxed">
                  Join the growing number of Orlando and Central Florida property managers who trust On The Fly for reliable valet trash, apartment trash pickup, and waste management services.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 w-full"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:407-274-5019"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call (407) 274-5019
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
