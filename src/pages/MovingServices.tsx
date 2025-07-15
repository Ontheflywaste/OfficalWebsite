import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Truck, Users, Phone, Star, Quote, ChevronDown, Package, Home, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function MovingServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Residential Moving",
      description: "Complete moving services for apartments, condos, and single-family homes",
      features: ["Local & Long Distance", "Packing Services", "Furniture Assembly", "Storage Solutions"]
    },
    {
      title: "Commercial Moving",
      description: "Professional office and business relocation services",
      features: ["Office Equipment", "IT Setup", "Minimal Downtime", "Weekend Service"]
    },
    {
      title: "Specialty Moving",
      description: "Specialized handling for delicate and valuable items",
      features: ["Piano Moving", "Artwork & Antiques", "Electronics", "Fragile Items"]
    },
    {
      title: "Packing Services",
      description: "Professional packing and unpacking to protect your belongings",
      features: ["Full Packing", "Partial Packing", "Unpacking", "Packing Supplies"]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional movers with years of experience handling all types of relocations"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your protection and peace of mind"
    },
    {
      icon: Truck,
      title: "Modern Equipment",
      description: "Well-maintained trucks and professional moving equipment for safe transport"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Available 7 days a week with flexible scheduling to meet your needs"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      property: "Residential Customer",
      text: "The team was professional, efficient, and took great care of our belongings. Made our move stress-free!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      property: "Business Owner",
      text: "Excellent commercial moving service. They moved our entire office over the weekend with minimal disruption.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Moving Services Orlando | On The Fly Waste Solutions</title>
        <meta name="description" content="Reliable moving services in Orlando. Professional residential and commercial movers with packing services. Licensed and insured team. Get your free quote!" />
        <meta name="keywords" content="moving services Orlando, professional movers Orlando, residential moving Florida, commercial moving Central Florida, packing services Orlando, local movers Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/moving" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-blue-900 via-blue-800 to-[#049704] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-24">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-300/30">
                    Professional Moving
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Expert Moving
                  <span className="block text-blue-300">Services</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Professional moving services in Orlando for residential and commercial relocations. Licensed, insured, and committed to making your move stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Moving Solutions</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional moving services handle every aspect of your relocation with care and precision. Whether you're moving across town or across the state, our experienced team provides comprehensive moving solutions tailored to your specific needs.
                    </p>
                    <p>
                      From careful packing and loading to safe transportation and unpacking, we ensure your belongings arrive at their destination in perfect condition. Our commitment to excellence and customer satisfaction has made us Orlando's trusted moving partner.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Licensed</div>
                      <div className="text-sm text-gray-600">& Insured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">7 Days</div>
                      <div className="text-sm text-gray-600">A Week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Free</div>
                      <div className="text-sm text-gray-600">Estimates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Pro</div>
                      <div className="text-sm text-gray-600">Equipment</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
                    alt="Professional Moving Service"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Moving Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Full-service moving solutions for all your relocation needs
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-[#049704] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Moving Service</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional, reliable, and stress-free moving you can trust
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal 
                  key={index}
                  direction="up"
                  delay={index * 0.1}
                >
                  <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-16 h-16 bg-[#049704]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-[#049704]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center justify-center">{benefit.title}</h3>
                    <p className="text-gray-600 flex-1">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Moving Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Moving Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simple, organized approach to ensure a smooth moving experience
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Estimate",
                  description: "We assess your moving needs and provide a detailed, no-obligation quote."
                },
                {
                  step: "2",
                  title: "Planning & Prep",
                  description: "We create a moving plan and schedule that works for your timeline."
                },
                {
                  step: "3",
                  title: "Professional Moving",
                  description: "Our team carefully packs, loads, and transports your belongings."
                },
                {
                  step: "4",
                  title: "Delivery & Setup",
                  description: "We deliver and can help set up your items in your new location."
                }
              ].map((step, index) => (
                <ScrollReveal 
                  key={index}
                  direction="up"
                  delay={index * 0.2}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#049704] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Hear from customers who trusted us with their move
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
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
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
                  Common questions about our moving services
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "How do you calculate moving costs?",
                  answer: "Moving costs are based on factors including distance, size of move, services needed, and timing. We provide detailed, transparent estimates with no hidden fees. Local moves are typically charged hourly, while long-distance moves are based on weight and distance."
                },
                {
                  question: "How far in advance should I book?",
                  answer: "We recommend booking at least 2-4 weeks in advance, especially during peak moving season (summer months). However, we can often accommodate last-minute moves based on availability."
                },
                {
                  question: "Do you provide packing materials?",
                  answer: "Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, and protective padding. We can also provide full packing services if you prefer to have our professionals handle the packing."
                },
                {
                  question: "Are you licensed and insured?",
                  answer: "Yes, we are fully licensed and insured for both local and long-distance moves. Our insurance covers your belongings during the entire moving process, providing peace of mind throughout your relocation."
                },
                {
                  question: "What items can't you move?",
                  answer: "We cannot move hazardous materials, perishable items, plants, pets, or items of extraordinary value without special arrangements. We'll provide a complete list of restricted items during your consultation."
                },
                {
                  question: "Do you offer storage services?",
                  answer: "Yes, we can arrange short-term and long-term storage solutions if needed. This is particularly helpful if there's a gap between your move-out and move-in dates."
                },
                {
                  question: "What happens if something gets damaged?",
                  answer: "While we take every precaution to protect your belongings, accidents can happen. We carry comprehensive insurance and will work with you to resolve any damage claims quickly and fairly."
                },
                {
                  question: "Can you move during weekends or evenings?",
                  answer: "Yes, we offer flexible scheduling including weekends and evenings to accommodate your schedule. Weekend and after-hours moves may have different pricing."
                }
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
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

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Ready to plan your move?</p>
                <Link to="/contact" className="btn-primary">
                  Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Make Your Move Stress-Free?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Trust Orlando's professional moving team to handle your relocation with care and precision. Contact us today for your free estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
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

export default MovingServices;