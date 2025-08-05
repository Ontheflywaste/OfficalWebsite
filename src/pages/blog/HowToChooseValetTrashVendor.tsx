import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertTriangle, Users, Shield, Clock, DollarSign, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import ScrollReveal from '../../components/ScrollReveal';

function HowToChooseValetTrashVendor() {
  const keyQuestions = [
    {
      icon: Shield,
      question: "Are they licensed and insured?",
      importance: "Critical for liability protection and professional credibility",
      redFlags: ["No insurance documentation", "Unlicensed operations", "Vague coverage details"]
    },
    {
      icon: Clock,
      question: "What is their service reliability track record?",
      importance: "Consistent service is essential for resident satisfaction",
      redFlags: ["No backup service plan", "Frequent missed collections", "Poor communication during issues"]
    },
    {
      icon: Users,
      question: "How do they handle staff training and background checks?",
      importance: "Professional, trustworthy staff represent your property",
      redFlags: ["No background check policy", "Untrained staff", "High employee turnover"]
    },
    {
      icon: DollarSign,
      question: "What are the total costs and contract terms?",
      importance: "Transparent pricing prevents unexpected expenses",
      redFlags: ["Hidden fees", "Inflexible contracts", "No clear pricing structure"]
    }
  ];

  const evaluationCriteria = [
    "Service reliability and backup plans",
    "Staff professionalism and training standards",
    "Technology integration and reporting capabilities",
    "Local market experience and references",
    "Pricing transparency and contract flexibility",
    "Customer service responsiveness",
    "Environmental compliance and disposal practices",
    "Equipment quality and maintenance standards"
  ];

  return (
    <>
      <Helmet>
        <title>How to Choose the Right Valet Trash Vendor: Questions Every Property Manager Should Ask</title>
        <meta name="description" content="Essential checklist and key questions property managers need to ask when selecting a valet trash vendor to ensure reliable service and resident satisfaction." />
        <meta name="keywords" content="valet trash vendor selection, property management checklist, choosing waste management company, valet trash service evaluation" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/how-to-choose-valet-trash-vendor" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gradient-to-r from-[#049704] to-[#038203]">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                        Property Management Guide
                      </span>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How to Choose the Right Valet Trash Vendor
                      </h1>
                      <p className="text-xl text-white/90">
                        Questions Every Property Manager Should Ask
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Selecting the right valet trash vendor is one of the most important decisions property managers make when implementing this premium amenity. The wrong choice can lead to resident complaints, operational headaches, and damage to your property's reputation. The right vendor becomes a trusted partner that enhances resident satisfaction and simplifies your operations.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      This comprehensive guide provides the essential questions and evaluation criteria you need to make an informed decision. Whether you're implementing valet trash service for the first time or considering a vendor change, these insights will help you identify providers who deliver consistent, professional service that residents love and property managers can rely on.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Critical Questions to Ask Every Vendor</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {keyQuestions.map((item, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-[#049704]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <item.icon className="h-5 w-5 text-[#049704]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                              <p className="text-gray-600 text-sm mb-3">{item.importance}</p>
                              <div className="space-y-1">
                                <p className="text-xs font-medium text-red-600 mb-1">Red Flags:</p>
                                {item.redFlags.map((flag, flagIndex) => (
                                  <div key={flagIndex} className="flex items-center space-x-2">
                                    <AlertTriangle className="h-3 w-3 text-red-500 flex-shrink-0" />
                                    <span className="text-xs text-red-600">{flag}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Evaluation Checklist</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Beyond the critical questions above, use this comprehensive checklist to evaluate potential vendors. The best <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash service providers</Link> will excel in multiple areas, not just price competitiveness.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Vendor Evaluation Criteria</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {evaluationCriteria.map((criterion, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                          <div className="flex items-center space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                            <span className="text-gray-700">{criterion}</span>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Making the Final Decision</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Once you've evaluated potential vendors using these criteria, the decision often comes down to three key factors: reliability, professionalism, and value. The lowest price doesn't always represent the best value, especially when service failures can damage resident relationships and create operational headaches.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Look for vendors who demonstrate genuine understanding of multifamily operations and can provide references from similar properties. The best providers often offer trial periods or gradual implementation plans that allow you to evaluate service quality before making long-term commitments.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Remember that your valet trash vendor becomes an extension of your property management team. Choose a partner who shares your commitment to resident satisfaction and operational excellence. For properties requiring additional services, consider vendors who also offer <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">comprehensive bulk removal solutions</Link> to streamline your vendor relationships.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Find Your Ideal Vendor?</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                      Selecting the right valet trash vendor requires careful evaluation, but the investment in due diligence pays dividends in resident satisfaction and operational efficiency. Use this guide as your roadmap to finding a vendor who will enhance your property's value and reputation while simplifying your daily operations.
                    </p>
                  </div>

                  <div className="bg-[#049704] rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Experience Professional Valet Trash Service
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                      Ready to see how the right vendor makes all the difference? Get a consultation with Orlando's most trusted valet trash service provider.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="btn-primary-inverse">
                        Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                        <Phone className="mr-2 h-5 w-5" /> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HowToChooseValetTrashVendor;