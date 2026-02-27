import React from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, Users, Shield, MessageSquare, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function WhatPropertyManagersShouldExpect() {
  const expectations = [
    {
      icon: Shield,
      title: "Reliability and Consistency",
      description: "Consistent adherence to scheduled pickup times with service guarantees and backup plans for unexpected issues."
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Uniformed, courteous, and well-trained staff who undergo background checks and represent your property professionally."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Dedicated account management, resident education materials, and detailed reporting on service performance."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Regular reports on service completion, compliance issues, and performance metrics to track service quality."
    }
  ];

  const serviceStandards = [
    "Guaranteed service with clear protocols for missed collections",
    "Photo and timestamp verification of service completion",
    "Background-checked and drug-tested staff members",
    "Comprehensive general liability and workers' compensation insurance",
    "Proper disposal following all local and federal regulations",
    "Flexible service plans customized to your property's needs",
    "24/7 customer support and emergency response capabilities",
    "Regular performance reviews and service optimization"
  ];

  return (
    <>
      <Helmet>
        <title>What Property Managers Should Expect from a Valet Trash Company | Orlando</title>
        <meta name="description" content="Learn the key qualities and services property managers should look for in a valet trash provider to ensure reliability, professionalism, and resident satisfaction." />
        <meta name="keywords" content="valet trash expectations, property manager guide, reliable valet trash, professional waste management, valet trash company standards" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/what-property-managers-should-expect-valet-trash-company" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#049704] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-28">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#049704]/20 text-[#049704] rounded-full text-sm font-medium backdrop-blur-sm border border-[#049704]/30">
                    Property Management Guide
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  What Property Managers Should
                  <span className="block text-[#049704]">Expect from a Valet Trash Company</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  A comprehensive guide to the essential qualities and services that define a top-tier valet trash provider
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Choosing a valet trash provider is a critical decision for property managers. It directly impacts resident satisfaction, operational efficiency, and your property's reputation. Beyond just collecting trash, a truly exceptional valet trash company acts as a partner, enhancing your community's value and streamlining your waste management processes. This guide outlines the key expectations you should have when evaluating and working with a valet trash service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Foundation of Exceptional Service</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> should operate with the same level of professionalism and reliability as any other essential property service. This means consistent performance, clear communication, and a genuine commitment to enhancing your residents' living experience while reducing operational burdens for your management team.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  The best providers understand that they're not just collecting waste—they're contributing to your property's overall appeal and resident satisfaction. This perspective shapes every aspect of their service delivery, from staff training to technology integration to customer support.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Reliability and Performance Standards</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Reliability forms the cornerstone of any successful valet trash partnership. Your provider should maintain consistent service schedules, have robust backup systems, and demonstrate accountability through transparent reporting and communication. Inconsistent service creates resident complaints and additional work for your staff—exactly the opposite of what valet trash should accomplish.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Look for providers who offer service guarantees, maintain detailed performance records, and have established protocols for handling unexpected situations. The best companies use technology to provide real-time service verification and maintain open communication channels for immediate issue resolution.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Expectations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Service Expectations</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Essential qualities that distinguish professional valet trash providers from basic collection services
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expectations.map((expectation, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#049704]/10 rounded-xl flex items-center justify-center mb-4">
                      <expectation.icon className="h-6 w-6 text-[#049704]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{expectation.title}</h3>
                    <p className="text-gray-600">{expectation.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service Standards */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Service Standards</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Professional valet trash companies should meet or exceed industry standards across all aspects of service delivery. This includes staff qualifications, insurance coverage, operational procedures, and customer service protocols. These standards protect your property, ensure resident safety, and provide the reliability you need to confidently promote valet trash as a premium amenity.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {serviceStandards.map((standard, index) => (
                    <ScrollReveal key={index} delay={index * 0.05}>
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                        <span className="text-gray-700">{standard}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology and Communication</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Modern valet trash services should leverage technology to enhance service delivery and communication. This includes photo verification of service completion, real-time reporting systems, and digital communication platforms that keep you informed about service performance and any issues that arise.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  The best providers also offer comprehensive resident education and onboarding support, helping ensure smooth service adoption and ongoing compliance. This proactive approach reduces complaints and maximizes resident satisfaction with the service. For properties requiring additional services, look for providers who can also handle <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk item removal</Link> to streamline vendor relationships.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Approach</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The best valet trash providers view themselves as partners in your property's success rather than just service vendors. This means understanding your specific challenges, adapting to your operational needs, and continuously working to improve service delivery based on feedback and performance data.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Look for providers who offer regular service reviews, are responsive to feedback, and demonstrate genuine interest in helping your property succeed. This partnership approach creates long-term value that extends far beyond basic waste collection services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center bg-gradient-to-br from-[#049704]/5 to-[#038203]/10 rounded-2xl p-8">
                <Lightbulb className="h-12 w-12 text-[#049704] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Partner with a Professional Valet Trash Company?
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  Experience the difference of working with a valet trash provider that meets all these professional standards and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/services/valet-trash" className="btn-outline border-[#049704] text-[#049704] hover:bg-[#049704] hover:text-white">
                    Learn About Our Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhatPropertyManagersShouldExpected;