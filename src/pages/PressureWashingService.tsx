import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Mail, Star, Quote, ChevronDown, Droplet, Sparkles, Building, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function PressureWashingService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: Sparkles,
      title: "Restore Property Appearance",
      description: "Remove years of built-up dirt, grime, mold, and stains to restore your property's original beauty and curb appeal."
    },
    {
      icon: Shield,
      title: "Surface Protection",
      description: "Professional techniques and appropriate pressure settings ensure thorough cleaning without damaging surfaces."
    },
    {
      icon: Building,
      title: "Increase Property Value",
      description: "Regular pressure washing maintains and enhances property value by keeping exteriors looking fresh and well-maintained."
    },
    {
      icon: Clock,
      title: "Scheduled Maintenance",
      description: "Regular maintenance programs available to keep your property looking its best year-round with convenient scheduling."
    }
  ];

  const features = [
    "Commercial-grade pressure washing equipment",
    "Professional cleaning solutions for all surfaces",
    "Building exterior and facade cleaning",
    "Driveway and parking lot cleaning",
    "Sidewalk and walkway restoration",
    "Deck and patio cleaning services",
    "Mold and mildew removal",
    "Graffiti removal services",
    "Scheduled maintenance programs",
    "Eco-friendly cleaning solutions"
  ];

  const testimonials = [
    {
      name: "Antonio Marcuz",
      property: "Property Management Company",
      text: "They are very responsive and professional. Anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly.",
      rating: 5
    },
    {
      name: "Lynn Mollison",
      property: "HOA Community",
      text: "They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Pressure Washing Orlando | Building & Surface Cleaning</title>
        <meta name="description" content="Expert pressure washing services in Orlando for buildings, driveways, and surfaces. Professional equipment and eco-friendly solutions serving Central Florida." />
        <meta name="keywords" content="pressure washing Orlando, building cleaning Orlando, driveway cleaning Central Florida, surface cleaning services Orlando, commercial pressure washing Florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/pressure-washing" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 via-blue-700/50 to-blue-900/80" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-24">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Professional Service
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Orlando Pressure Washing
                  <span className="block text-white/90">& Surface Cleaning</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                  Transform your property's appearance with expert pressure washing services for buildings, driveways, and surfaces across Orlando and Central Florida
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary-inverse">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="tel:407-274-5019" className="btn-secondary">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Pressure Washing Service?</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional pressure washing service in Orlando uses state-of-the-art equipment and advanced cleaning solutions to effectively remove years of built-up dirt, grime, mold, and stains from all types of surfaces.
                    </p>
                    <p>
                      Our experienced technicians understand different surface types and use appropriate pressure settings to ensure thorough cleaning without causing damage. We handle everything from buildings and driveways to sidewalks and parking areas with eco-friendly solutions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Commercial</div>
                      <div className="text-sm text-gray-600">Grade Equipment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Eco</div>
                      <div className="text-sm text-gray-600">Friendly</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Expert</div>
                      <div className="text-sm text-gray-600">Technicians</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img 
                    src="/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg"
                    alt="Professional Pressure Washing Service"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits of Our Service</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover why property owners choose our professional pressure washing service
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
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#049704]/10 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="h-6 w-6 text-[#049704]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
                    src="/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg"
                    alt="Professional Pressure Washing Equipment"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Cleaning Services</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our pressure washing service covers all types of surfaces and structures, using professional-grade equipment and eco-friendly cleaning solutions for optimal results.
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
                  Hear from property owners who trust our pressure washing service
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

        {/* Areas We Serve Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional pressure washing services throughout Central Florida
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  city: "Orlando",
                  description: "Downtown, College Park, Winter Park, Dr. Phillips"
                },
                {
                  city: "Kissimmee",
                  description: "Celebration, Poinciana, St. Cloud"
                },
                {
                  city: "Altamonte Springs",
                  description: "Longwood, Casselberry, Winter Springs"
                },
                {
                  city: "Lake Mary",
                  description: "Sanford, Heathrow, Lake Forest"
                },
                {
                  city: "Apopka",
                  description: "Mount Dora, Eustis, Tavares"
                },
                {
                  city: "Clermont",
                  description: "Minneola, Groveland, Montverde"
                }
              ].map((area, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {area.city}
                    </h3>
                    <p className="text-gray-600">
                      {area.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center bg-gradient-to-br from-[#049704]/5 to-[#038203]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Area?</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're continuously expanding our pressure washing services throughout Central Florida. Contact us to discuss service availability in your location.
                </p>
                <Link to="/contact" className="btn-primary">
                  Check Service Availability <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Common questions about our pressure washing service
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "What surfaces can you pressure wash?",
                  answer: "We can clean buildings, driveways, sidewalks, parking lots, decks, patios, and most exterior surfaces. We adjust pressure settings based on surface type to ensure safe, effective cleaning."
                },
                {
                  question: "How often should I have pressure washing done?",
                  answer: "Most properties benefit from annual pressure washing, though high-traffic areas may need more frequent cleaning. We can recommend a maintenance schedule based on your specific needs."
                },
                {
                  question: "Do you use eco-friendly cleaning solutions?",
                  answer: "Yes, we prioritize environmentally safe cleaning solutions that are effective yet gentle on the environment and safe for plants and landscaping."
                },
                {
                  question: "Can pressure washing damage my property?",
                  answer: "When done professionally with proper equipment and techniques, pressure washing is safe. Our experienced technicians use appropriate pressure settings for each surface type."
                },
                {
                  question: "How long does pressure washing take?",
                  answer: "Time varies based on the size and condition of the area being cleaned. Most residential jobs take 2-4 hours, while larger commercial properties may take longer."
                },
                {
                  question: "Do you offer maintenance programs?",
                  answer: "Yes, we offer scheduled maintenance programs to keep your property looking its best year-round with convenient scheduling and competitive pricing."
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
                Ready to Transform Your Property's Appearance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get professional pressure washing service in Orlando with commercial-grade equipment and eco-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" /> 407-274-5019
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default PressureWashingService;