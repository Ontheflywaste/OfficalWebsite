import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Mail, Star, Quote, ChevronDown, Package, Truck, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function JunkRemovalService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyButton, setShowStickyButton] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowStickyButton(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Response Service",
      description: "Same-day and next-day service available for urgent removal needs. Perfect for move-outs, renovations, and emergency cleanouts."
    },
    {
      icon: Shield,
      title: "Professional & Insured",
      description: "Licensed professionals with full insurance coverage. Our trained team handles your property with care and maintains the highest safety standards."
    },
    {
      icon: Truck,
      title: "Complete Removal Service",
      description: "We handle everything from heavy lifting to loading and hauling. No job too big or small - from single items to complete property cleanouts."
    },
    {
      icon: Package,
      title: "All Items Accepted",
      description: "Furniture, appliances, electronics, construction debris, and more. We remove almost anything you need gone from your property."
    }
  ];

  const features = [
    "Same-day service available for urgent needs",
    "Professional removal of furniture and appliances",
    "Construction debris and renovation cleanup",
    "Electronics and appliance disposal",
    "Office furniture and equipment removal",
    "Complete property cleanouts",
    "Transparent pricing with no hidden fees",
    "Licensed and insured professional team",
    "Proper disposal practices and cleanup",
    "Complete cleanup after removal"
  ];

  const testimonials = [
    {
      name: "William Barber",
      property: "Residential Property",
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
        <title>Same-Day Junk Removal Orlando | Furniture & Appliances</title>
        <meta name="description" content="Affordable junk removal in Orlando. Same-day furniture, appliance & mattress removal. Licensed crews, upfront pricing. Residents trust us. (407) 274-5019" />
        <meta name="keywords" content="junk removal orlando, same day junk removal orlando, furniture removal orlando, mattress removal orlando, appliance removal orlando, junk removal central florida, affordable junk removal" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/junk-removal" />

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
                "url": "https://ontheflywastesolutions.com/services/junk-removal",
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
                  },
                  {
                    "@type": "State",
                    "name": "Central Florida"
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
                "@id": "https://ontheflywastesolutions.com/services/junk-removal#service",
                "serviceType": "Junk Removal & Hauling Service",
                "name": "Junk Removal & Hauling Service Orlando",
                "description": "Professional truckload cleanout service for furniture, appliances, and bulk items. Every job includes photo documentation, disposal manifests, and receipts. We partner with donation centers and recycling facilities to responsibly divert items from landfills. Licensed and insured crews provide same-day and next-day service throughout Orlando and Central Florida.",
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
                  "name": "Junk Removal Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Furniture Removal",
                        "description": "Professional removal of furniture with photo documentation and disposal receipts"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Appliance Removal",
                        "description": "Safe appliance hauling with proper disposal and recycling options"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Property Cleanouts",
                        "description": "Complete truckload cleanout service for apartments and commercial properties"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ontheflywastesolutions.com/services/junk-removal#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does junk removal work in Orlando?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our crew arrives at your scheduled time with trucks ready for immediate loading. We provide a free on-site estimate, then handle all lifting, loading, and hauling. After removal, you receive photo documentation showing items removed, plus disposal receipts and manifests. Most jobs are completed same-day or next-day, with complete cleanup included."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is junk removal pricing determined?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pricing is based on the volume of items and labor required for safe removal. We provide transparent, upfront quotes with no hidden fees. Most property managers receive on-site estimates that account for truckload space needed, item weight, disposal costs, and crew time. Pricing is finalized before work begins, ensuring budget certainty for commercial accounts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What items can you remove and what is excluded?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We remove furniture, appliances, electronics, mattresses, office equipment, construction debris, and most household items. Items in good condition are donated when possible. We cannot accept hazardous materials, chemicals, paint, asbestos, or medical waste. For large-scale projects, we coordinate multiple truckload trips to handle complete property cleanouts efficiently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide same-day junk removal service in Orlando?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer same-day junk removal service throughout Orlando and Central Florida when you call before noon. Most appointments are scheduled within 24-48 hours. For urgent property cleanouts, move-outs, or time-sensitive removals, contact us directly at (407) 274-5019 and we'll prioritize your request. Our fast response keeps your property management operations running smoothly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer junk removal for apartment complexes and commercial properties?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We specialize in serving apartment communities, condos, HOAs, and commercial properties throughout Central Florida. Our crews handle move-out cleanouts, common area cleanup, renovation debris, and bulk item removal. We work around your residents' schedules and provide the documentation property managers need. Many apartment communities and commercial properties maintain ongoing service agreements with us for consistent, reliable junk removal. Learn more at our bulk removal service page."
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
                  "@id": "https://ontheflywastesolutions.com/services/junk-removal#service"
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
                  "@id": "https://ontheflywastesolutions.com/services/junk-removal#service"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/Junk.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/90" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center min-h-screen py-20">
              <ScrollReveal>
                <div className="mb-6 flex justify-center">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Same-Day Service Available
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center mx-auto max-w-5xl">
                  Fast Junk Removal Orlando - Same Day Service
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 text-center">
                  Affordable junk removal for Orlando residents. We remove furniture, appliances, mattresses, and more with same-day service available. Licensed, insured crews provide upfront pricing and complete cleanup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-8">
                  <Link to="/contact" className="btn-primary-inverse">
                    Get Free On-Site Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="tel:407-274-5019" className="btn-secondary">
                    <Phone className="mr-2 h-4 w-4" /> Call (407) 274-5019 Now
                  </a>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <Link
                    to="/services/bulk-removal"
                    className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Property Managers: View Bulk Removal Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Orlando Residents Choose Us</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Getting rid of unwanted items shouldn't be a hassle. Our professional junk removal service makes it easy to clear out furniture, appliances, and other items you no longer need. We handle all the heavy lifting, loading, and hauling so you don't have to. Same-day service is available when you need fast removal, and our upfront pricing means no surprises.
                    </p>
                    <p>
                      On The Fly Waste Solutions transforms cluttered spaces into clean, organized environments throughout Orlando and Central Florida. We're a licensed, insured, and BBB-accredited junk removal company. Items in good condition are donated to local charities, and we recycle whenever possible to keep usable materials out of landfills.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Same Day</div>
                      <div className="text-sm text-gray-600">Service Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Licensed</div>
                      <div className="text-sm text-gray-600">& Insured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Full</div>
                      <div className="text-sm text-gray-600">Service</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img
                    src="/Images/haberdoedas-ii-wbx6kmc1wvq-unsplash.jpg"
                    alt="Professional junk removal crew loading furniture and bulk items onto truck in Orlando Florida apartment community"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Property Manager Callout */}
        <section className="py-16 bg-gradient-to-br from-[#049704] to-[#026502]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                <div className="relative text-center">
                  <Users className="h-12 w-12 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Property Managers: Need Bulk Removal?</h2>
                  <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                    We offer{' '}
                    <Link to="/services/bulk-removal" className="text-white hover:text-white/80 font-semibold underline">
                      specialized bulk removal programs
                    </Link>
                    {' '}for apartment communities, HOAs, and commercial properties with SLA-backed service, complete documentation, and rapid mobilization.
                  </p>
                  <Link
                    to="/services/bulk-removal"
                    className="relative z-10 inline-flex items-center px-8 py-4 bg-white text-[#049704] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Bulk Removal Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits of Our Service</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover why property managers and residents choose our professional junk removal service
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

        {/* Service Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <img
                    src="/Residential-Junk-Removal-McAllen-Dumpster-Rental-Junk-Removal-Services-1024x768-2.jpg"
                    alt="Licensed and insured junk removal specialists hauling appliances and furniture from multifamily residential property Orlando"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Removal Services</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our junk removal service handles items of all sizes, from single pieces of furniture to complete property cleanouts. We provide professional removal with proper disposal practices, making your space clean and clutter-free.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {features.map((feature, index) => (
                      <ScrollReveal key={index} delay={index * 0.05}>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Hear from property managers who trust our junk removal service
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
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Common questions about our junk removal service
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "How does junk removal work in Orlando?",
                  answer: "Our crew arrives at your scheduled time with trucks ready for immediate loading. We provide a free on-site estimate, then handle all lifting, loading, and hauling. After removal, you receive photo documentation showing items removed, plus disposal receipts and manifests. Most jobs are completed same-day or next-day, with complete cleanup included."
                },
                {
                  question: "How is junk removal pricing determined?",
                  answer: "Pricing is based on the volume of items and labor required for safe removal. We provide transparent, upfront quotes with no hidden fees. Most property managers receive on-site estimates that account for truckload space needed, item weight, disposal costs, and crew time. Pricing is finalized before work begins, ensuring budget certainty for commercial accounts."
                },
                {
                  question: "What items can you remove and what is excluded?",
                  answer: "We remove furniture, appliances, electronics, mattresses, office equipment, construction debris, and most household items. Items in good condition are donated when possible. We cannot accept hazardous materials, chemicals, paint, asbestos, or medical waste. For large-scale projects, we coordinate multiple truckload trips to handle complete property cleanouts efficiently."
                },
                {
                  question: "Do you provide same-day junk removal service in Orlando?",
                  answer: "Yes, we offer same-day junk removal service throughout Orlando and Central Florida when you call before noon. Most appointments are scheduled within 24-48 hours. For urgent property cleanouts, move-outs, or time-sensitive removals, contact us directly at (407) 274-5019 and we'll prioritize your request. Our fast response keeps your property management operations running smoothly."
                },
                {
                  question: "Do you offer junk removal for apartment complexes and commercial properties?",
                  answer: (
                    <>
                      Absolutely. We specialize in serving apartment communities, condos, HOAs, and commercial properties throughout Central Florida. Our crews handle move-out cleanouts, common area cleanup, renovation debris, and bulk item removal. We work around your residents' schedules and provide the documentation property managers need. Many apartment communities and commercial properties maintain ongoing service agreements with us for consistent, reliable junk removal.{' '}
                      <Link to="/services/bulk-removal" className="text-[#049704] hover:text-[#038203] font-medium underline">
                        Learn more
                      </Link>
                    </>
                  )
                }
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
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
                        <div className="text-gray-600 leading-relaxed">{faq.answer}</div>
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
                Ready for Professional Junk Removal Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Fast response within 2 hours. Same-day service available for urgent junk removal needs. Licensed crews, photo documentation, and complete disposal receipts included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Free On-Site Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" /> Call (407) 274-5019 Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sticky Floating CTA for Bulk Removal */}
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}>
          <Link
            to="/services/bulk-removal"
            className="flex items-center px-6 py-4 bg-gradient-to-r from-[#049704] to-[#026502] text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Property Managers: </span>
            <span className="font-bold ml-1">Bulk Removal</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default JunkRemovalService;