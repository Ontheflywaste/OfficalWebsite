import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Globe, CheckCircle2, TrendingUp, Award, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import ScrollReveal from '../../components/ScrollReveal';

function SustainableWasteManagement() {
  const sustainablePractices = [
    {
      icon: Recycle,
      title: "Comprehensive Recycling Programs",
      description: "Implement multi-stream recycling with clear resident education and convenient collection systems",
      benefits: ["Reduce landfill waste by 30-40%", "Lower disposal costs", "Improve property ESG ratings"],
      implementation: "Partner with certified recycling facilities and provide clear sorting guidelines"
    },
    {
      icon: Leaf,
      title: "Organic Waste Diversion",
      description: "Separate organic waste for composting programs, reducing methane emissions from landfills",
      benefits: ["Cut organic waste by 25-35%", "Create valuable compost", "Reduce greenhouse gas emissions"],
      implementation: "Install composting bins and educate residents on organic waste separation"
    },
    {
      icon: Globe,
      title: "Waste Reduction Initiatives",
      description: "Focus on reducing waste generation through resident education and property-wide programs",
      benefits: ["Lower overall waste volumes", "Reduced collection frequency", "Enhanced community engagement"],
      implementation: "Implement bulk purchasing programs and reusable item initiatives"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Optimization",
      description: "Use waste audits and analytics to identify improvement opportunities and track progress",
      benefits: ["Optimize collection schedules", "Identify cost savings", "Measure environmental impact"],
      implementation: "Regular waste audits and digital tracking systems"
    }
  ];

  const environmentalBenefits = [
    "Reduced carbon footprint through optimized collection routes",
    "Decreased landfill waste through proper sorting and recycling",
    "Lower greenhouse gas emissions from organic waste diversion",
    "Conservation of natural resources through material recovery",
    "Improved air and water quality in surrounding communities",
    "Enhanced biodiversity through reduced environmental impact"
  ];

  const businessBenefits = [
    "Lower waste disposal costs through volume reduction",
    "Improved property marketability and resident attraction",
    "Enhanced ESG (Environmental, Social, Governance) ratings",
    "Potential tax incentives and rebates for green initiatives",
    "Reduced liability from environmental compliance",
    "Increased property value through sustainability certifications"
  ];

  return (
    <>
      <Helmet>
        <title>Sustainable Waste Management Practices for Multifamily Properties | Green Solutions</title>
        <meta name="description" content="Learn about eco-friendly waste management solutions that can help reduce environmental impact while maintaining efficient operations for apartment communities." />
        <meta name="keywords" content="sustainable waste management, eco-friendly apartment solutions, green waste practices, multifamily recycling programs, environmental compliance" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/sustainable-waste-management" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-700">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                        Environmental Stewardship
                      </span>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Sustainable Waste Management Practices
                      </h1>
                      <p className="text-xl text-white/90">
                        For Multifamily Properties
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      As environmental consciousness grows among residents and regulatory requirements become more stringent, multifamily properties are increasingly adopting sustainable waste management practices. These initiatives not only reduce environmental impact but also create operational efficiencies, cost savings, and marketing advantages that benefit both property owners and residents.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      This comprehensive guide explores practical sustainable waste management strategies that multifamily properties can implement to reduce their environmental footprint while maintaining operational efficiency and resident satisfaction. From recycling programs to waste reduction initiatives, these practices create value for all stakeholders.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Sustainable Practices</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-8 mb-12">
                    {sustainablePractices.map((practice, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <practice.icon className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-3">{practice.title}</h3>
                              <p className="text-gray-700 mb-4">{practice.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                                  <ul className="space-y-1">
                                    {practice.benefits.map((benefit, benefitIndex) => (
                                      <li key={benefitIndex} className="flex items-center space-x-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Implementation:</h4>
                                  <p className="text-sm text-gray-600">{practice.implementation}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Environmental Impact and Benefits</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Sustainable waste management practices create measurable environmental benefits that extend far beyond your property boundaries. By implementing comprehensive recycling programs, organic waste diversion, and waste reduction initiatives, multifamily properties can significantly reduce their environmental footprint while contributing to broader community sustainability goals.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> can play a crucial role in sustainable waste management by ensuring proper sorting, reducing contamination in recycling streams, and optimizing collection routes to minimize carbon emissions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <ScrollReveal direction="left">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Globe className="h-6 w-6 text-blue-600 mr-2" />
                          Environmental Benefits
                        </h3>
                        <div className="space-y-3">
                          {environmentalBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={0.2}>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                          Business Benefits
                        </h3>
                        <div className="space-y-3">
                          {businessBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Successfully implementing sustainable waste management practices requires a phased approach that considers resident education, infrastructure requirements, and operational changes. Start with high-impact, low-cost initiatives like improved recycling programs before expanding to more comprehensive solutions.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Resident engagement is crucial for success. Provide clear guidelines, convenient collection systems, and regular feedback on program performance. Consider incentive programs that reward participation and create community pride in environmental achievements.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Partner with experienced service providers who understand sustainable practices and can help optimize your waste management operations. Many properties find that combining professional services with resident education creates the most effective and sustainable results. For comprehensive waste solutions, consider providers who offer both <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> and <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">bulk removal programs</Link> with environmental focus.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Measuring Success and Continuous Improvement</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Establish baseline measurements and track key performance indicators to demonstrate the success of your sustainable waste management initiatives. Monitor waste diversion rates, cost savings, resident satisfaction, and environmental impact metrics to identify areas for improvement and celebrate achievements.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Regular waste audits can reveal opportunities for further optimization and help maintain program effectiveness over time. Use this data to refine your approach, expand successful initiatives, and address any challenges that arise during implementation.
                    </p>
                  </div>

                  <div className="bg-green-600 rounded-xl p-8 text-center">
                    <Award className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Start Your Sustainability Journey
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                      Ready to implement sustainable waste management practices that benefit your property, residents, and the environment? Get expert guidance on creating an effective program.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="btn-primary-inverse">
                        Get Sustainability Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-green-600">
                        <Phone className="mr-2 h-5 w-5" /> Discuss Your Goals
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

export default SustainableWasteManagement;