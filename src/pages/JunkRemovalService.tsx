import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Mail, Star, Quote, ChevronDown, Package, Truck, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function JunkRemovalService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: Clock,
      title: "Same-Day Service Available",
      description: "Quick response times for urgent removal needs. We understand that sometimes you need items removed immediately."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Professional team with proper credentials and insurance coverage for your peace of mind and property protection."
    },
    {
      icon: Truck,
      title: "Full-Service Removal",
      description: "We handle everything from heavy lifting to proper disposal, including cleanup after removal is complete."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Disposal",
      description: "Responsible disposal practices including recycling and donation of items in good condition whenever possible."
    }
  ];

  const features = [
    "Same-day and next-day service available",
    "Professional removal of furniture and appliances",
    "Construction debris and renovation waste",
    "Electronics and e-waste disposal",
    "Yard waste and organic material removal",
    "Complete property cleanouts",
    "Upfront pricing with no hidden fees",
    "Licensed and insured professional team",
    "Proper disposal and recycling practices",
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
        <title>Professional Junk Removal Orlando | Bulk Item Pickup Service</title>
        <meta name="description" content="Expert junk removal service in Orlando for furniture, appliances, and bulk items. Same-day pickup available. Licensed and insured team serving Central Florida." />
        <meta name="keywords" content="junk removal Orlando, bulk item pickup Orlando, furniture removal Orlando, appliance removal Central Florida, construction debris removal Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/junk-removal" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/Junk.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-24">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Professional Service
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Professional Junk
                  <span className="block text-white/90">Removal Service</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                  Fast, reliable junk removal service in Orlando for furniture, appliances, construction debris, and bulk items across Central Florida
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Junk Removal Service?</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional junk removal service in Orlando handles everything from single items to complete property cleanouts. We specialize in efficient removal of furniture, appliances, electronics, construction debris, and more with same-day service available.
                    </p>
                    <p>
                      With our experienced team and specialized equipment, we ensure quick, safe removal while maintaining proper disposal practices. We handle the heavy lifting, sorting, and cleanup, making the process seamless for you while supporting eco-friendly disposal methods.
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
                      <div className="text-3xl font-bold text-[#049704] mb-2">Eco</div>
                      <div className="text-sm text-gray-600">Friendly</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img 
                    src="/Images/Junk.jpg"
                    alt="Professional Junk Removal Service"
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
                  Discover why property managers and homeowners choose our junk removal service
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
                    src="/Images/Junk.jpg"
                    alt="Professional Junk Removal Team"
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
                    Our junk removal service handles items of all sizes, from single pieces of furniture to complete property cleanouts, with professional disposal and recycling practices.
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
                  question: "What items can you remove?",
                  answer: "We remove furniture, appliances, electronics, construction debris, yard waste, and most household items. We cannot remove hazardous materials, chemicals, or items containing asbestos."
                },
                {
                  question: "How quickly can you provide service?",
                  answer: "We offer same-day service when available, and can typically schedule removal within 24-48 hours of your request. For urgent needs, call us directly for immediate assistance."
                },
                {
                  question: "How do you price your services?",
                  answer: "Pricing is based on the volume of items and type of materials being removed. We provide upfront, transparent pricing with no hidden fees. Contact us for a free estimate."
                },
                {
                  question: "Do you recycle or donate items?",
                  answer: "Yes, we prioritize eco-friendly disposal. Items in good condition are donated to local charities, and recyclable materials are properly processed at recycling facilities."
                },
                {
                  question: "Are you licensed and insured?",
                  answer: "Yes, we are fully licensed and insured for your protection. Our team is trained in safe removal practices and proper disposal methods."
                },
                {
                  question: "Do you clean up after removal?",
                  answer: "Absolutely. We provide complete cleanup after removal, including sweeping and ensuring the area is left clean and tidy."
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
                Get fast, reliable junk removal service in Orlando with same-day availability and eco-friendly disposal practices.
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

export default JunkRemovalService;