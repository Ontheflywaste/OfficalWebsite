import React from 'react';
import { ArrowRight, CheckCircle2, Leaf, Recycle, Users, TrendingUp, Shield, Clock, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function SustainableWasteManagement() {
  const sustainablePractices = [
    {
      icon: Recycle,
      title: "Comprehensive Recycling Programs",
      description: "Implement multi-stream recycling systems that make it easy for residents to separate materials and reduce landfill waste."
    },
    {
      icon: Leaf,
      title: "Organic Waste Composting",
      description: "Partner with local composting facilities to divert organic waste from landfills while creating valuable soil amendments."
    },
    {
      icon: Users,
      title: "Resident Education & Engagement",
      description: "Develop educational programs that teach residents about proper waste sorting and the environmental impact of their choices."
    },
    {
      icon: TrendingUp,
      title: "Waste Reduction Strategies",
      description: "Implement source reduction programs that minimize waste generation through smart purchasing and reuse initiatives."
    }
  ];

  const benefits = [
    "Reduce environmental impact and carbon footprint",
    "Lower waste disposal costs through diversion programs",
    "Attract environmentally conscious residents",
    "Comply with local sustainability regulations",
    "Enhance property reputation and marketability",
    "Support community environmental goals",
    "Reduce liability from improper waste disposal",
    "Create potential revenue streams from recyclables"
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Waste Audit & Assessment",
      description: "Conduct a comprehensive waste audit to understand current waste streams, volumes, and disposal costs. Identify key improvement opportunities and establish baseline metrics."
    },
    {
      step: "2",
      title: "Program Design & Planning",
      description: "Develop a customized sustainability program based on your property's specific needs, local regulations, and available recycling infrastructure in your area."
    },
    {
      step: "3",
      title: "Infrastructure & Implementation",
      description: "Install necessary recycling bins, signage, and collection systems. Train staff and educate residents about new procedures and sustainability goals."
    },
    {
      step: "4",
      title: "Monitoring & Optimization",
      description: "Track program performance and measure waste diversion rates. Continuously optimize processes for maximum environmental and economic benefits."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sustainable Waste Management for Multifamily Properties | Orlando Green Solutions</title>
        <meta name="description" content="Learn eco-friendly waste management solutions for apartment communities. Reduce environmental impact while maintaining efficient operations and attracting environmentally conscious residents." />
        <meta name="keywords" content="sustainable waste management, eco-friendly apartment solutions, multifamily recycling programs, green property management, environmental waste solutions Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/sustainable-waste-management" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  Sustainability Guide
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Sustainable Waste Management Practices for Multifamily Properties
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn about eco-friendly waste management solutions that can help reduce environmental impact while maintaining efficient operations and attracting environmentally conscious residents
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As environmental consciousness continues to grow among residents and regulatory requirements become more stringent, multifamily property managers are increasingly seeking sustainable waste management solutions. Implementing eco-friendly practices not only reduces environmental impact but also creates operational efficiencies, cost savings, and marketing advantages that can significantly benefit your property's bottom line and reputation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Business Case for Sustainable Waste Management</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sustainable waste management practices offer compelling business benefits beyond environmental stewardship. Properties with comprehensive recycling and waste reduction programs often experience lower disposal costs, reduced liability risks, and increased appeal to environmentally conscious residents who are willing to pay premium rents for green amenities. Additionally, many municipalities now offer incentives or require sustainability reporting, making proactive environmental programs a competitive necessity.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Modern residents, particularly millennials and Gen Z renters, increasingly prioritize environmental responsibility when choosing where to live. Properties that demonstrate genuine commitment to sustainability through comprehensive waste management programs can differentiate themselves in competitive markets while building stronger resident loyalty and satisfaction. Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> can be designed to incorporate sustainable practices seamlessly into daily operations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Components of Sustainable Waste Management</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective sustainable waste management requires a comprehensive approach that addresses waste reduction, recycling, composting, and proper disposal of hazardous materials. The most successful programs combine infrastructure improvements with resident education and ongoing monitoring to ensure long-term effectiveness. This holistic approach maximizes environmental benefits while maintaining operational efficiency and resident satisfaction.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Implementation should begin with a thorough waste audit to understand current waste streams and identify the greatest opportunities for improvement. This data-driven approach ensures that sustainability investments deliver maximum environmental and economic returns while addressing the specific needs and challenges of your property. For properties requiring specialized disposal services, professional <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk removal services</Link> can ensure that large items are disposed of responsibly and sustainably.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Sustainable Practices</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Essential components of an effective sustainable waste management program
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainablePractices.map((practice, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <practice.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                    <p className="text-gray-600">{practice.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Sustainable Waste Management</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Implementing sustainable waste management practices delivers measurable benefits across environmental, economic, and social dimensions. Properties typically see immediate cost reductions through decreased waste disposal fees and potential revenue from recyclable materials. Long-term benefits include enhanced property value, improved resident retention, and reduced regulatory compliance risks.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <ScrollReveal key={index} delay={index * 0.05}>
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Overcoming Implementation Challenges</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  While the benefits of sustainable waste management are clear, successful implementation requires careful planning and ongoing commitment. Common challenges include initial infrastructure costs, resident education and compliance, and coordination with local waste management services. However, these challenges can be effectively addressed through phased implementation, clear communication strategies, and partnerships with experienced service providers.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  The key to success lies in starting with achievable goals and gradually expanding programs as residents become more engaged and systems prove effective. Properties that take a measured, data-driven approach to sustainability typically achieve better long-term results and higher resident satisfaction than those attempting to implement comprehensive programs all at once.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A step-by-step approach to implementing sustainable waste management practices
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Building a Sustainable Future</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sustainable waste management represents both an environmental imperative and a business opportunity for forward-thinking property managers. As regulations become more stringent and resident expectations continue to evolve, properties that proactively implement comprehensive sustainability programs will enjoy competitive advantages in both resident attraction and retention.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  The transition to sustainable waste management doesn't have to be overwhelming. By partnering with experienced service providers who understand both environmental best practices and operational realities, property managers can implement effective programs that deliver measurable results while maintaining the high service standards residents expect. The investment in sustainability today creates lasting value for properties, communities, and the environment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default SustainableWasteManagement;