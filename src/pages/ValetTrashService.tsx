import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Shield, Users, BarChart3, Phone, Mail, Star, Quote, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function ValetTrashService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: Users,
      title: "Enhanced Resident Satisfaction",
      description: "Eliminate the hassle of trips to the dumpster. Residents enjoy convenient doorstep pickup, especially during bad weather or late hours, creating a premium living experience."
    },
    {
      icon: Shield,
      title: "Improved Property Safety",
      description: "Reduce liability risks by eliminating resident trips to potentially unsafe dumpster areas, especially during evening hours, while improving overall property security."
    },
    {
      icon: BarChart3,
      title: "Increased Property Value",
      description: "Valet trash service becomes a premium amenity that justifies higher rents and improves resident retention rates, directly impacting your property's profitability."
    },
    {
      icon: Clock,
      title: "Operational Efficiency",
      description: "Free up your maintenance staff to focus on revenue-generating activities like unit turnovers and preventive maintenance, maximizing operational productivity."
    }
  ];

  const features = [
    "Door-to-door collection on your preferred schedule",
    "Professional uniformed staff",
    "Flexible collection times to suit your community",
    "Proper waste sorting and disposal",
    "Clean and sanitized collection process",
    "Monthly reporting and analytics",
    "24/7 customer support",
    "Backup service guarantee",
    "Photo verification of service completion",
    "Compliance with all local regulations"
  ];

  const testimonials = [
    {
      name: "Antonio Marcuz",
      property: "Property Management Company",
      text: "I'd like to say how good they are, very responsive. I own a property management company and anytime we need them, they show up fast and their team members are always smiling.",
      rating: 5
    },
    {
      name: "Shaianne Berry",
      property: "Residential Community",
      text: "On The Fly is great! They are professional and are always on top of things in the neighborhood. Anytime I see them they are friendly and would definitely recommend their services.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Orlando Valet Trash Service | Professional Pickup</title>
        <meta name="description" content="Professional valet trash service for Orlando apartments and condos. Reliable daily pickup enhances resident satisfaction. Schedule consultation!" />
        <meta name="keywords" content="valet trash service Orlando, doorstep trash pickup Orlando, apartment trash collection Orlando, professional valet trash Florida, multifamily waste services Orlando, top valet trash companies in Orlando, waste management for apartment complexes, valet trash services for student housing, contract valet trash for property managers" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/valet-trash" />
        
        {/* Valet Trash Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Valet Trash Service",
            "description": "Professional door-to-door trash collection service for apartment communities and condos in Orlando",
            "provider": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions",
              "telephone": "+1-407-274-5019",
              "url": "https://ontheflywastesolutions.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Orlando",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceType": "Waste Management",
            "category": "Valet Trash Collection",
            "offers": {
              "@type": "Offer",
              "description": "Professional valet trash pickup service for multifamily properties",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/gallery12813_1920x831@2x.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-24 min-h-screen">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Premium Service
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center mx-auto max-w-5xl">
                  Orlando's Premier Valet
                  <span className="block text-white/90">Trash Service</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 text-center">
                  Orlando's most reliable doorstep trash pickup service for apartment communities, condos, and multifamily properties across Central Florida
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Valet Trash Service?</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional valet trash service in Orlando transforms waste management from a daily chore into a seamless amenity. We provide reliable, door-to-door collection that enhances resident satisfaction while reducing operational burdens for property management teams.
                    </p>
                    <p>
                      With uniformed professionals, flexible schedules tailored to your community's needs, and comprehensive reporting, we deliver the reliability and professionalism that sets your property apart in Orlando's competitive multifamily market. For larger items that can't be handled through regular collection, our <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk removal services</Link> provide comprehensive solutions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Custom</div>
                      <div className="text-sm text-gray-600">Schedule Options</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Customer Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Flexible</div>
                      <div className="text-sm text-gray-600">Service Plans</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img 
                    src="/Images/Edgardo.jpeg"
                    alt="Professional Valet Trash Collection Service"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits for Your Property</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover how our valet trash service enhances your property's value and resident satisfaction
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
                    src="/Images/gallery12813_1920x831@2x.jpg"
                    alt="Professional Valet Trash Collection Service"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Service Features</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our valet trash service includes everything you need for professional waste management that exceeds resident expectations and simplifies property operations, customized to your community's specific needs.
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

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Service Works</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simple, reliable, and professional valet trash collection process
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Residents Place Bags",
                  description: "Residents place their bagged trash outside their door by the collection time that works best for your community."
                },
                {
                  step: "2",
                  title: "Professional Collection",
                  description: "Our uniformed team collects all bags during your preferred time window using efficient collection routes."
                },
                {
                  step: "3",
                  title: "Proper Disposal",
                  description: "All waste is transported to designated dumpsters and properly disposed of according to local regulations."
                }
              ].map((step, index) => (
                <ScrollReveal 
                  key={index}
                  direction="up"
                  delay={index * 0.2}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-[#049704] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
                  Hear from property managers who trust our valet trash service
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

        {/* Pricing Information */}
        <section className="py-20 bg-gradient-to-br from-[#049704] to-[#038203]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Seamless Service Implementation</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  From initial consultation to full service launch, we make the transition smooth and hassle-free
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal direction="left">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Consultation & Planning</h3>
                  <p className="text-white/90 mb-6 flex-1">
                    We assess your property's unique needs, resident demographics, and operational requirements to design the perfect service plan.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Property walkthrough and assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Custom service schedule design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Transparent pricing proposal
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Resident Communication</h3>
                  <p className="text-white/90 mb-6 flex-1">
                    We provide comprehensive communication materials and support to ensure residents understand and embrace the new service.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Professional welcome packets
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Clear service guidelines
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Ongoing resident support
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Service Launch & Support</h3>
                  <p className="text-white/90 mb-6 flex-1">
                    Smooth service launch with ongoing monitoring, reporting, and dedicated support to ensure continued success.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Gradual service rollout
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Performance monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-white" />
                      Dedicated account management
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 inline-block">
                <p className="text-white/90 mb-4 text-lg">
                  <strong className="text-white">Property-Paid Service Model:</strong> We work directly with property management to provide valet trash as a premium amenity, enhancing property value and resident satisfaction.
                </p>
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                  Start Your Implementation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Property Managers Choose Our Service</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our <a href="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">doorstep trash pickup in Central Florida</a> isn't just about waste collection—it's about transforming your property into a premium living destination. Property managers consistently report improved resident satisfaction scores, reduced maintenance burdens, and enhanced property marketability.
                    </p>
                    <p>
                      We handle all the operational complexities while you enjoy the benefits of offering a sought-after amenity that residents truly value and appreciate. Our services extend beyond Orlando to include <a href="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash in Kissimmee</a> and surrounding communities.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#049704]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-[#049704]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Reduced Maintenance Workload</h4>
                        <p className="text-gray-600 text-sm">Free up your team to focus on revenue-generating activities and property improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#049704]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-[#049704]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Premium Amenity Positioning</h4>
                        <p className="text-gray-600 text-sm">Market your property as offering luxury conveniences that residents expect</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#049704]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-[#049704]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Improved Resident Retention</h4>
                        <p className="text-gray-600 text-sm">Convenient services contribute to higher renewal rates and resident satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Investment</h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#049704] mb-2">Competitive</div>
                    <div className="text-lg text-gray-600">Monthly Rate Per Unit</div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Service Frequency:</span>
                      <span className="text-sm text-gray-900">Customizable</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Setup Fees:</span>
                      <span className="text-sm text-gray-900">None</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Contract Terms:</span>
                      <span className="text-sm text-gray-900">Flexible</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Billing:</span>
                      <span className="text-sm text-gray-900">Property Direct</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
                  Common questions about our valet trash service
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "What days and times do you collect trash?",
                  answer: "We offer flexible collection schedules tailored to your property's needs. Most communities prefer evening collections between 6-9 PM, and we can provide service up to 7 days per week. We work with you to determine the optimal schedule for your residents."
                },
                {
                  question: "What items can residents put out for collection?",
                  answer: "Residents can place bagged household trash outside their doors. We collect standard kitchen trash, bathroom waste, and other typical household garbage. Large items, hazardous materials, and construction debris require our separate bulk removal service."
                },
                {
                  question: "How much does valet trash service cost?",
                  answer: "Pricing varies based on your property size, collection frequency, and specific service requirements. We offer competitive rates with transparent pricing and no hidden fees. Contact us for a customized quote based on your property's needs."
                },
                {
                  question: "What happens if collection is missed?",
                  answer: "We guarantee reliable service with backup plans in place. In the rare event of a missed collection, we provide immediate makeup service at no additional charge. Our service includes photo verification and real-time reporting to ensure accountability."
                },
                {
                  question: "Do you provide bags or containers?",
                  answer: "Residents use their own trash bags. We provide 13-gallon and large size containers for residents to place their bagged trash inside of. We also provide clear service guidelines and welcome materials to help residents understand the proper procedures for bag placement and collection times."
                },
                {
                  question: "How quickly can you start service?",
                  answer: "We can typically begin service within 1-2 weeks of contract signing. This allows time for resident communication, staff training on your property layout, and coordination with your management team to ensure a smooth launch."
                },
                {
                  question: "Are your staff members background checked?",
                  answer: "Yes, all our collection staff undergo comprehensive background checks and drug testing. Our team members are uniformed, trained professionals who represent your property with the highest standards of professionalism."
                },
                {
                  question: "What if residents don't comply with bag placement rules?",
                  answer: "We work with property management to educate residents about proper procedures. Our team can leave educational notices for non-compliant bags and provide regular reporting to help maintain program standards."
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

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Have more questions about our valet trash service?</p>
                <Link to="/contact" className="btn-primary">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}

export default ValetTrashService;