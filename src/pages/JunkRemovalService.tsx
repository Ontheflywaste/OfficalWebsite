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
        <title>Junk Removal Orlando | Furniture & Bulk Items</title>
        <meta name="description" content="Expert junk removal service in Orlando for furniture appliances and bulk items. Same-day pickup available. Licensed and insured team." />
        <meta name="keywords" content="junk removal Orlando, bulk item pickup Orlando, furniture removal Orlando, appliance removal Central Florida, construction debris removal Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/junk-removal" />
        
        {/* Junk Removal Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Junk Removal Service",
            "description": "Professional furniture and bulk item removal service for residential and commercial properties in Orlando",
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
            "serviceType": "Junk Removal",
            "category": "Waste Management",
            "offers": {
              "@type": "Offer",
              "description": "Same-day junk removal service for furniture, appliances, and bulk items",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-[#049704] via-[#038203] to-[#026502] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/Junk.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/90" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-24">
              <ScrollReveal>
                <div className="mb-6 flex justify-center">
                  <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    Professional Service
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center mx-auto max-w-5xl">
                  Orlando Junk Removal
                  <span className="block text-white/90">& Hauling Service</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 text-center">
                  Orlando's trusted junk removal specialists for furniture, appliances, and bulk items. Professional removal service for apartments, condos, and commercial properties across Central Florida
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Junk Removal Service?</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional junk removal service in Orlando transforms cluttered spaces into clean, organized environments. We handle everything from single furniture pieces to complete property cleanouts, serving apartment communities, condos, and commercial properties throughout Central Florida.
                    </p>
                    <p>
                      Our uniformed professionals arrive on time with the right equipment to safely remove your unwanted items. We handle all the heavy lifting, loading, and proper disposal, making the entire process effortless for property managers and residents. From old furniture to appliance removal, we've got you covered.
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
                    src="/Images/Junk.jpg"
                    alt="Professional Junk Removal Equipment and Team"
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
                  question: "What items can you remove?",
                  answer: "We remove furniture, appliances, electronics, construction debris, office equipment, and most household items. We cannot remove hazardous materials, chemicals, paint, or items containing asbestos."
                },
                {
                  question: "How quickly can you provide service?",
                  answer: "We offer same-day service when available, and can typically schedule removal within 24-48 hours of your request. For urgent needs, call us directly for immediate assistance."
                },
                {
                  question: "How do you price your services?",
                  answer: "Pricing is based on the volume of items and complexity of removal. We provide upfront, transparent pricing with no hidden fees. Most jobs are priced on-site for accuracy."
                },
                {
                  question: "Do you donate items in good condition?",
                  answer: "Yes, we work with local charities to donate items in good condition whenever possible. This helps reduce waste while supporting our community."
                },
                {
                  question: "Are you licensed and insured?",
                  answer: "Yes, we are fully licensed and insured for your protection. Our professional team is trained in safe removal practices and maintains all required certifications."
                },
                {
                  question: "Do you clean up after removal?",
                  answer: "Absolutely. Complete cleanup is included with every job. We sweep, clean, and ensure the area is left spotless after removal."
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