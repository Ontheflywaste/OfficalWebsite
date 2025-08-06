import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Users, Shield, Clock, BarChart3, Phone, Mail, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function VendorSelectionGuide() {
  const keyQuestions = [
    {
      category: "Service Reliability",
      icon: Clock,
      questions: [
        "What is your service guarantee policy?",
        "How do you handle missed collections?",
        "What backup plans do you have for equipment failures?",
        "Can you provide references from similar properties?",
        "What is your average response time for service issues?"
      ]
    },
    {
      category: "Staff & Training",
      icon: Users,
      questions: [
        "Are all staff members background checked and drug tested?",
        "What training do your collection teams receive?",
        "How do you ensure consistent service quality?",
        "Do staff members wear uniforms and carry identification?",
        "What is your staff turnover rate?"
      ]
    },
    {
      category: "Insurance & Liability",
      icon: Shield,
      questions: [
        "What insurance coverage do you carry?",
        "Are you licensed for waste collection in our area?",
        "How do you handle property damage claims?",
        "What safety protocols do your teams follow?",
        "Can you provide certificates of insurance?"
      ]
    },
    {
      category: "Technology & Reporting",
      icon: BarChart3,
      questions: [
        "Do you provide service verification (photos, timestamps)?",
        "What reporting capabilities do you offer?",
        "How do you track service completion?",
        "Can you integrate with our property management software?",
        "What communication tools do you use for updates?"
      ]
    }
  ];

  const redFlags = [
    "Unwillingness to provide references or insurance certificates",
    "Significantly lower pricing without clear explanation",
    "No backup service plans or guarantees",
    "Lack of proper licensing or insurance coverage",
    "Poor communication during the proposal process",
    "No established local presence or office",
    "Inability to provide detailed service procedures"
  ];

  return (
    <>
      <Helmet>
        <title>How to Choose the Right Valet Trash Vendor | Property Manager's Guide</title>
        <meta name="description" content="Essential checklist and key questions property managers need to ask when selecting a valet trash vendor. Expert guide to ensure reliable service and resident satisfaction." />
        <meta name="keywords" content="valet trash vendor selection, property management checklist, choosing waste management company, valet trash service evaluation" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/how-to-choose-valet-trash-vendor" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-[#049704]/10 text-[#049704] rounded-full text-sm font-medium mb-4">
                  Property Management Guide
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to Choose the Right Valet Trash Vendor
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Essential questions every property manager should ask when selecting a valet trash service provider to ensure reliable service and resident satisfaction
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Making the Right Choice</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Selecting the right valet trash vendor requires careful evaluation of multiple factors beyond just price. The best providers combine reliable service delivery with professional staff, comprehensive insurance coverage, and technology systems that provide transparency and accountability.
                    </p>
                    <p className="mb-4">
                      Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> should enhance your property's operations while providing residents with the convenience they expect. The right vendor becomes a true partner in your property's success.
                    </p>
                    <p>
                      Use the comprehensive evaluation criteria in this guide to identify providers who can deliver the consistent, professional service that will benefit your property for years to come.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="w-full">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                      alt="Property Manager Evaluating Valet Trash Vendors"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
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
                  Selecting the right valet trash vendor is one of the most important decisions property managers make when implementing this valuable amenity. The wrong choice can lead to resident complaints, service disruptions, and operational headaches that far outweigh any cost savings. This comprehensive guide provides the essential questions and evaluation criteria you need to make an informed decision that will benefit your property for years to come.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Vendor Selection Matters</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Valet trash service directly impacts resident satisfaction and your property's reputation. Unlike other vendor relationships that operate behind the scenes, your valet trash provider interacts with residents daily, making their professionalism and reliability crucial to your community's success. A reliable provider enhances your property's value proposition, while an unreliable one can damage resident relationships and create costly operational problems.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  The valet trash industry has grown rapidly, with providers ranging from large national companies to local startups. This variety means property managers must carefully evaluate each option to find the provider that best fits their specific needs, budget, and service expectations. The questions in this guide will help you identify providers who can deliver consistent, professional service that residents will appreciate.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">The True Cost of Poor Vendor Selection</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing the wrong valet trash vendor can cost far more than the monthly service fee. Consider the hidden costs of unreliable service: increased maintenance staff time handling resident complaints, potential liability issues from improperly trained staff, damage to your property's reputation, and the expense of switching vendors mid-contract. These costs can quickly exceed any initial savings from choosing a lower-priced provider.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> should enhance your property's operations, not create additional burdens. The right vendor becomes a true partner in your property's success, providing reliable service that residents value and property managers can depend on. This partnership approach is what separates quality providers from those who view valet trash as a simple commodity service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Questions by Category</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Use this comprehensive checklist to evaluate potential valet trash vendors across all critical areas
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyQuestions.map((category, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#049704]/10 rounded-lg flex items-center justify-center mr-3">
                        <category.icon className="h-5 w-5 text-[#049704]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.questions.map((question, qIndex) => (
                        <li key={qIndex} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-[#049704] mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-900">Red Flags to Avoid</h2>
                </div>
                <p className="text-red-800 mb-6">
                  Watch out for these warning signs that may indicate an unreliable or unprofessional vendor:
                </p>
                <ul className="space-y-3">
                  {redFlags.map((flag, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Evaluation Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Evaluation Process</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Once you've gathered responses to your key questions, create a scoring system to objectively compare vendors. Weight each category based on your property's priorities—for example, service reliability might be more important than advanced technology features for some properties. This systematic approach helps prevent decisions based solely on price or personal impressions during sales presentations.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Don't hesitate to ask for a trial period or pilot program before committing to a long-term contract. Reputable vendors should be confident enough in their service quality to offer a short-term trial that demonstrates their capabilities. This approach allows you to evaluate actual service delivery rather than relying solely on promises made during the sales process.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Making the Final Decision</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The lowest bid isn't always the best value. Consider the total cost of ownership, including potential hidden costs, service reliability, and the vendor's ability to grow with your property's needs. A slightly higher monthly fee from a reliable provider often delivers better long-term value than a low-cost option that creates operational problems and resident dissatisfaction.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Remember that switching valet trash vendors is disruptive and costly, so invest the time upfront to make the right choice. The questions and evaluation criteria in this guide will help you identify a vendor who can provide the reliable, professional service that enhances your property's value and keeps residents satisfied. For properties that also need occasional large item removal, consider vendors who offer comprehensive <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk removal services</Link> to streamline your vendor relationships.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}

export default VendorSelectionGuide;