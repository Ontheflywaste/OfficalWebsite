import React, { useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, Clock, Shield, Users, FileText, Truck, Building2, Phone, Mail, Star, Quote, ChevronDown, ClipboardCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function BulkRemovalService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Mobilization",
      description: "2-hour response time for urgent needs with same-day service available. Our crews are standing by to handle move-out cleanouts, renovation debris, and emergency removals that keep your operations running smoothly."
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "Every job includes photo documentation, disposal manifests, and receipts. Get the audit trail you need for compliance, budgeting, and resident communication with detailed before/after reports."
    },
    {
      icon: Shield,
      title: "SLA Guarantees",
      description: "Service level agreements ensure predictable response times and quality standards. Backed by our commitment to professionalism, our fully insured crews protect your property and reputation."
    },
    {
      icon: TrendingUp,
      title: "Budget Predictability",
      description: "Transparent pricing with no hidden fees. Volume-based rates and flexible contract options help you manage costs effectively whether you need one-time service or ongoing support."
    }
  ];

  const programOptions = [
    "On-demand bulk removal for urgent situations",
    "Scheduled cleanouts for move-out seasons",
    "Recurring service agreements for ongoing needs",
    "After-hours and weekend availability",
    "Multiple truckload coordination",
    "Common area cleanup and maintenance"
  ];

  const testimonials = [
    {
      name: "William Barber",
      property: "Residential Property Manager",
      text: "Mr. Donnell and Mr. Trevor are outstanding young men with a high drive that makes them excel at what they do. Their crew works hard and quickly and are friendly.",
      rating: 5
    },
    {
      name: "Lynn Mollison",
      property: "HOA Community",
      text: "They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly. Donnell will go above and beyond to help anyone out.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bulk Removal for Apartments Orlando | Property Managers</title>
        <meta name="description" content="Professional bulk removal for Orlando apartment communities & HOAs. SLA-backed service, photo documentation, disposal tracking. Property managers trust us. (407) 274-5019" />
        <meta name="keywords" content="bulk removal orlando, apartment bulk removal, bulk removal for HOAs, truckload cleanouts orlando, multifamily bulk removal, property manager bulk removal, apartment community cleanouts" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/bulk-removal" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://ontheflywastesolutions.com/#organization",
                "name": "On The Fly Waste Solutions",
                "image": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
                "logo": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
                "url": "https://ontheflywastesolutions.com/services/bulk-removal",
                "telephone": "+1-407-274-5019",
                "email": "info@ontheflywastesolutions.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Orlando",
                  "addressRegion": "FL",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.5383,
                  "longitude": -81.3792
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Orlando",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City",
                    "name": "Kissimmee",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City",
                    "name": "Apopka",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  }
                ],
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "21:00"
                },
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "29",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "Service",
                "@id": "https://ontheflywastesolutions.com/services/bulk-removal#service",
                "serviceType": "Bulk Removal Service for Multifamily Properties",
                "name": "Bulk Removal Service for Apartment Communities Orlando",
                "description": "Professional bulk removal programs for property managers, apartment communities, and HOAs. Every job includes SLA-backed service with photo documentation, disposal manifests, and receipts. Rapid mobilization with 2-hour response time for urgent needs. Licensed and insured crews provide transparent pricing and complete documentation for compliance and audit requirements.",
                "provider": {
                  "@id": "https://ontheflywastesolutions.com/#organization"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Orlando"
                  },
                  {
                    "@type": "City",
                    "name": "Kissimmee"
                  },
                  {
                    "@type": "City",
                    "name": "Apopka"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Bulk Removal Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "On-Demand Bulk Removal",
                        "description": "Rapid response bulk removal for urgent property needs with same-day service available"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Scheduled Cleanouts",
                        "description": "Pre-scheduled bulk removal for move-out seasons and property turnovers"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Recurring Service Agreements",
                        "description": "Ongoing bulk removal support with flexible contract options for multifamily properties"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ontheflywastesolutions.com/services/bulk-removal#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is your response time for bulk removal requests?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide 2-hour response time for urgent bulk removal needs, with same-day service available when you call before noon. Most scheduled appointments are completed within 24-48 hours. For property managers with recurring needs, we establish service level agreements that guarantee specific response times based on your operational requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What documentation do you provide for bulk removal jobs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Every bulk removal job includes comprehensive documentation: before and after photos, disposal manifests showing where items went, receipts for your records, and diversion reports detailing donated and recycled items. This complete audit trail helps property managers maintain compliance, track expenses, and communicate with residents about sustainable disposal practices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is bulk removal pricing structured for apartment communities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pricing is based on volume (truckload space), labor requirements, and disposal costs. Property managers receive transparent, upfront quotes with no hidden fees. We offer flexible contract options including per-job pricing, monthly retainer agreements, and volume-based discounts for recurring service. All pricing is finalized before work begins to ensure budget predictability."
                    }
                  }
                ]
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "William Barber"
                },
                "datePublished": "2024-11-15",
                "reviewBody": "Mr. Donnell and Mr. Trevor are outstanding young men with a high drive that makes them excel at what they do. Their crew works hard and quickly and are friendly.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "itemReviewed": {
                  "@id": "https://ontheflywastesolutions.com/services/bulk-removal#service"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Lynn Mollison"
                },
                "datePublished": "2024-10-22",
                "reviewBody": "They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly. Donnell will go above and beyond to help anyone out.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "itemReviewed": {
                  "@id": "https://ontheflywastesolutions.com/services/bulk-removal#service"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/ApartmentBuildingHero.webp')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/90" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center min-h-screen">
              <ScrollReveal>
                <div className="mb-6 flex justify-center">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Trusted by Property Managers
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center mx-auto max-w-5xl">
                  Bulk Removal Services for Property Managers in Orlando
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 text-center">
                  Professional bulk removal programs for apartment communities, HOAs, and commercial properties. SLA-backed service with complete documentation, rapid mobilization, and transparent pricing throughout Central Florida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                  <Link to="/contact" className="btn-primary-inverse">
                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="tel:407-274-5019" className="btn-secondary">
                    <Phone className="mr-2 h-4 w-4" /> Call (407) 274-5019
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Bulk Removal Programs Built for Property Managers</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Property managers need reliable bulk removal partners who understand operational requirements. Our specialized programs provide the documentation, response times, and quality standards that multifamily properties demand. Every job includes photo verification, disposal manifests, and receipts for your compliance records.
                    </p>
                    <p>
                      We handle move-out cleanouts, common area cleanup, renovation debris, and urgent removals with licensed, insured crews. Our partnership approach with local donation centers and recycling facilities helps you achieve sustainability goals while maintaining budget predictability through transparent, volume-based pricing.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">2 Hours</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Documentation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Licensed</div>
                      <div className="text-sm text-gray-600">& Insured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">SLA</div>
                      <div className="text-sm text-gray-600">Guarantees</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img
                    src="/Images/haberdoedas-ii-wbx6kmc1wvq-unsplash.jpg"
                    alt="Professional bulk removal crew loading furniture from Orlando apartment community with documentation and disposal tracking for property managers"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Property Managers Choose Our Bulk Removal Service</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Institutional-grade service built for the demands of multifamily operations
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-[#049704]/10 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="h-6 w-6 text-[#049704]" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 flex-1">{benefit.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Callout */}
        <section className="py-12 bg-gray-100 border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  <strong>Residential Customers:</strong> Looking for junk removal for your home?
                </p>
                <Link
                  to="/services/junk-removal"
                  className="inline-flex items-center text-[#049704] hover:text-[#026502] font-semibold transition-colors"
                >
                  Visit Our Junk Removal Page <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Program Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <img
                    src="/Residential-Junk-Removal-McAllen-Dumpster-Rental-Junk-Removal-Services-1024x768-2.jpg"
                    alt="Bulk removal truckload service at apartment complex in Orlando with professional crew handling furniture and appliances for property manager"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Bulk Removal Programs</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our bulk removal programs adapt to your property's unique needs. From urgent move-out cleanouts to scheduled seasonal removals, we provide the flexibility and reliability that keep your operations running smoothly.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {programOptions.map((option, index) => (
                      <ScrollReveal key={index} delay={index * 0.05}>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                          <span className="text-gray-700">{option}</span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Documentation for Every Job</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get the audit trail and reporting you need for compliance, budgeting, and resident communication
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <FileText className="h-12 w-12 text-[#049704] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Photo Documentation</h3>
                  <p className="text-gray-600">
                    Before, during, and after photos for every removal job provide visual proof of service completion and property condition.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <ClipboardCheck className="h-12 w-12 text-[#049704] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Disposal Manifests</h3>
                  <p className="text-gray-600">
                    Detailed manifests show where items were disposed, donated, or recycled, ensuring compliance with regulations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <BarChart3 className="h-12 w-12 text-[#049704] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diversion Reports</h3>
                  <p className="text-gray-600">
                    Track sustainability impact with reports detailing items donated to charities and materials sent for recycling.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-[#049704] mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex flex-col items-center">
                  <Star className="h-12 w-12 text-[#049704] mb-2" />
                  <span className="text-sm font-semibold text-gray-700">BBB Accredited</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-[#049704] mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Minority-Owned</span>
                </div>
                <div className="flex flex-col items-center">
                  <Building2 className="h-12 w-12 text-[#049704] mb-2" />
                  <span className="text-sm font-semibold text-gray-700">Property Manager Focused</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Property Managers</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See what property managers say about our bulk removal service
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.2}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <Quote className="h-8 w-8 text-[#049704]/20 mb-4" />
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <p className="text-sm text-gray-600">{testimonial.property}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Common questions about bulk removal for property managers
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "What is your response time for bulk removal requests?",
                  answer: "We provide 2-hour response time for urgent bulk removal needs, with same-day service available when you call before noon. Most scheduled appointments are completed within 24-48 hours. For property managers with recurring needs, we establish service level agreements that guarantee specific response times based on your operational requirements."
                },
                {
                  question: "What documentation do you provide for bulk removal jobs?",
                  answer: "Every bulk removal job includes comprehensive documentation: before and after photos, disposal manifests showing where items went, receipts for your records, and diversion reports detailing donated and recycled items. This complete audit trail helps property managers maintain compliance, track expenses, and communicate with residents about sustainable disposal practices."
                },
                {
                  question: "How is bulk removal pricing structured for apartment communities?",
                  answer: "Pricing is based on volume (truckload space), labor requirements, and disposal costs. Property managers receive transparent, upfront quotes with no hidden fees. We offer flexible contract options including per-job pricing, monthly retainer agreements, and volume-based discounts for recurring service. All pricing is finalized before work begins to ensure budget predictability."
                }
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Discuss Your Bulk Removal Needs?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's talk about how our bulk removal programs can support your property operations. Get SLA-backed service with complete documentation and rapid mobilization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" /> Call (407) 274-5019
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default BulkRemovalService;
