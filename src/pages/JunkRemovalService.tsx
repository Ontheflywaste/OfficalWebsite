import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Truck, Recycle, Phone, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function JunkRemovalService() {
  const services = [
    {
      title: "Furniture Removal",
      description: "Sofas, chairs, tables, mattresses, and all types of household furniture",
      items: ["Sofas & Sectionals", "Dining Sets", "Mattresses & Box Springs", "Office Furniture"]
    },
    {
      title: "Appliance Removal",
      description: "Safe removal and disposal of all major appliances",
      items: ["Refrigerators", "Washers & Dryers", "Stoves & Ovens", "Dishwashers"]
    },
    {
      title: "Electronics Disposal",
      description: "Environmentally responsible disposal of electronic items",
      items: ["TVs & Monitors", "Computers", "Audio Equipment", "Small Electronics"]
    },
    {
      title: "Construction Debris",
      description: "Renovation and construction waste removal",
      items: ["Drywall", "Flooring Materials", "Fixtures", "General Debris"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Next-Day Service",
      description: "Quick response times with next-day service available for urgent removals"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured team with proper credentials and safety training"
    },
    {
      icon: Truck,
      title: "Professional Equipment",
      description: "Specialized trucks and equipment to handle items of all sizes safely"
    },
    {
      icon: Recycle,
      title: "Professional Disposal",
      description: "Responsible disposal following all local regulations and guidelines"
    }
  ];

  const testimonials = [
    {
      name: "William Barber",
      property: "Residential Property",
      text: "Mr. Donnell and Mr. Trevor are outstanding young men with a high drive that makes them excel at what they do. Their crew works hard and quickly and are friendly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Junk Removal Service Orlando | Furniture & Appliance Removal | On The Fly Waste Solutions</title>
        <meta name="description" content="Expert junk removal service in Orlando. Same-day furniture removal, appliance disposal, and construction debris cleanup. Licensed, insured, and eco-friendly disposal practices." />
        <meta name="keywords" content="junk removal Orlando, furniture removal Orlando, appliance disposal Orlando, construction debris removal Florida, same day junk removal Central Florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/junk-removal" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#049704] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/Junk.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-24">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#049704]/20 text-[#049704] rounded-full text-sm font-medium backdrop-blur-sm border border-[#049704]/30">
                    Professional Removal
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Expert Junk
                  <span className="block text-[#049704]">Removal Service</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Fast, reliable junk removal for Orlando properties. From single items to complete cleanouts, we handle it all with professional care and eco-friendly disposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                    <Phone className="mr-2 h-5 w-5" /> Call for Next-Day Service
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Junk Removal Solutions</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional junk removal service handles everything from single-item pickups to complete property cleanouts. Whether you're dealing with tenant move-outs, renovation debris, or accumulated bulk items, our experienced team provides efficient, safe removal with responsible disposal practices.
                    </p>
                    <p>
                      We understand that junk removal needs can arise unexpectedly, which is why we offer flexible scheduling including same-day service for urgent situations. Our team comes equipped with the proper tools and vehicles to handle items of all sizes safely and efficiently.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Next Day</div>
                      <div className="text-sm text-gray-600">Service Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Licensed & Insured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Safe</div>
                      <div className="text-sm text-gray-600">Disposal Practices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Service</div>
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

        {/* Services We Handle */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Remove</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From household items to construction debris, we handle all types of junk removal needs
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
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-[#049704] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Junk Removal Service</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional, reliable, and environmentally responsible junk removal you can trust
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

        {/* Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From initial contact to final cleanup, we make junk removal easy and stress-free
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call or submit a request online. We'll schedule a convenient time for assessment."
                },
                {
                  step: "2",
                  title: "Free Estimate",
                  description: "We provide upfront pricing with no hidden fees. You approve before we start."
                },
                {
                  step: "3",
                  title: "Professional Removal",
                  description: "Our team safely removes all items with proper equipment and techniques."
                },
                {
                  step: "4",
                  title: "Cleanup & Disposal",
                  description: "We clean up the area and dispose of items responsibly through proper disposal or donation."
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

        {/* Pricing Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      We believe in upfront, honest pricing with no hidden fees or surprise charges. Our pricing is based on the volume of items removed and the complexity of the job, ensuring you only pay for what you need.
                    </p>
                    <p>
                      All estimates are provided free of charge, and we'll never start work without your approval. Our competitive rates include labor, transportation, and responsible disposal fees.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                      <span className="text-gray-700">Free, no-obligation estimates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                      <span className="text-gray-700">Volume-based pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                      <span className="text-gray-700">All labor and disposal included</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                      <span className="text-gray-700">No hidden fees or surcharges</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-gradient-to-br from-[#049704] to-[#038203] p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
                  <p className="text-white/90 mb-6">
                    Contact us today for a free, no-obligation estimate. We'll assess your junk removal needs and provide transparent pricing.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:407-274-5019" className="flex items-center text-white hover:text-white/80 transition-colors">
                      <Phone className="h-5 w-5 mr-3" />
                      <span className="text-lg font-medium">407-274-5019</span>
                    </a>
                    <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704] w-full justify-center">
                      Request Online Estimate <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <Quote className="h-12 w-12 text-[#049704]/20 mb-6" />
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[0].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonials[0].name}</h4>
                    <p className="text-gray-600">{testimonials[0].property}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                Need Junk Removed Today?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't let unwanted items take up valuable space. Our professional junk removal team is ready to help with next-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:407-274-5019" className="btn-primary">
                  <Phone className="mr-2 h-5 w-5" /> Call for Next-Day Service
                </a>
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default JunkRemovalService;