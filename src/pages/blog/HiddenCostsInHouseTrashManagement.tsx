import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Clock, Users, AlertTriangle, TrendingUp, Calculator, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import ScrollReveal from '../../components/ScrollReveal';

function HiddenCostsInHouseTrashManagement() {
  const hiddenCosts = [
    {
      icon: Users,
      category: "Labor Costs",
      description: "Staff time for dumpster maintenance, area cleanup, and resident complaint resolution",
      annualCost: "$8,000 - $15,000",
      details: ["Maintenance staff hourly wages", "Overtime for emergency cleanups", "Management time handling complaints"]
    },
    {
      icon: AlertTriangle,
      category: "Liability & Insurance",
      description: "Increased insurance premiums and potential liability claims from dumpster-related incidents",
      annualCost: "$3,000 - $8,000",
      details: ["Higher property insurance rates", "Slip and fall incidents", "Property damage claims"]
    },
    {
      icon: TrendingUp,
      category: "Property Damage",
      description: "Repairs from overflowing dumpsters, pest damage, and pavement deterioration",
      annualCost: "$5,000 - $12,000",
      details: ["Pavement repairs and cleaning", "Building exterior damage", "Landscaping replacement"]
    },
    {
      icon: Clock,
      category: "Operational Inefficiency",
      description: "Lost revenue from maintenance staff diverted from income-generating activities",
      annualCost: "$10,000 - $20,000",
      details: ["Delayed unit turnovers", "Deferred maintenance projects", "Reduced property improvements"]
    }
  ];

  const comparisonData = [
    { category: "Monthly Service Cost", inHouse: "$2,500 - $4,500", valetTrash: "$1,800 - $3,200" },
    { category: "Staff Labor Hours", inHouse: "40 - 60 hours", valetTrash: "5 - 10 hours" },
    { category: "Resident Complaints", inHouse: "15 - 25 monthly", valetTrash: "2 - 5 monthly" },
    { category: "Liability Risk", inHouse: "High", valetTrash: "Low" }
  ];

  return (
    <>
      <Helmet>
        <title>The Hidden Costs of In-House Trash Management | Property Management Insights</title>
        <meta name="description" content="Discover the overlooked expenses of managing trash in-house and how professional valet trash services can reduce costs while improving operations." />
        <meta name="keywords" content="in-house trash management costs, property management expenses, valet trash ROI, multifamily operational costs" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog/hidden-costs-in-house-trash-management" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gradient-to-r from-red-600 to-red-700">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                        Cost Analysis
                      </span>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        The Hidden Costs of In-House Trash Management
                      </h1>
                      <p className="text-xl text-white/90">
                        What Property Managers Don't See Coming
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Many property managers believe that handling trash management in-house saves money compared to professional valet trash services. However, this perception often overlooks the substantial hidden costs that accumulate over time, making in-house management significantly more expensive than initially calculated.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      This comprehensive analysis reveals the true cost of in-house trash management and demonstrates how professional services can actually reduce your total operational expenses while improving resident satisfaction and property value. The numbers might surprise you.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Cost Breakdown</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {hiddenCosts.map((cost, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <cost.icon className="h-6 w-6 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cost.category}</h3>
                              <p className="text-gray-700 text-sm mb-3">{cost.description}</p>
                              <div className="bg-white rounded-lg p-3 mb-3">
                                <div className="text-xl font-bold text-red-600">{cost.annualCost}</div>
                                <div className="text-xs text-gray-500">Annual Cost Range</div>
                              </div>
                              <div className="space-y-1">
                                {cost.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                                    <span className="text-xs text-gray-600">{detail}</span>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Labor Cost Reality</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The most significant hidden cost in in-house trash management is labor. Property managers often underestimate the time their maintenance staff spends on trash-related activities. Beyond the obvious tasks like emptying dumpsters and cleaning areas, staff time is consumed by resident complaints, emergency cleanups, and coordinating with waste haulers.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      When maintenance staff spend 10-15 hours per week on trash-related tasks, that's time not spent on revenue-generating activities like unit turnovers, preventive maintenance, or property improvements. This opportunity cost can easily exceed $15,000 annually for a typical 200-unit property.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison: In-House vs. Professional Service</h2>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Monthly Operational Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                            <th className="text-center py-3 px-4 font-semibold text-red-600">In-House</th>
                            <th className="text-center py-3 px-4 font-semibold text-[#049704]">Valet Trash</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200">
                              <td className="py-3 px-4 text-gray-700">{item.category}</td>
                              <td className="py-3 px-4 text-center text-red-600 font-medium">{item.inHouse}</td>
                              <td className="py-3 px-4 text-center text-[#049704] font-medium">{item.valetTrash}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Resident Satisfaction Factor</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Beyond direct costs, in-house trash management often leads to resident dissatisfaction, which has measurable financial impacts. Properties with trash-related complaints typically experience 15-20% higher turnover rates, and each turnover costs an average of $3,000-$5,000 in lost rent, marketing, and preparation expenses.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Professional <Link to="/services/valet-trash" className="text-[#049704] hover:text-[#038203] font-medium">valet trash services</Link> eliminate most resident complaints while positioning your property as offering premium amenities. This enhanced reputation allows properties to command higher rents and achieve better occupancy rates, directly impacting your bottom line.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Making the Switch: ROI Analysis</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      When you factor in all hidden costs, most properties find that professional valet trash service costs 20-30% less than true in-house management while delivering superior results. The return on investment typically becomes apparent within 3-6 months through reduced labor costs, fewer resident complaints, and improved operational efficiency.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Additionally, properties offering valet trash as an amenity often see improved resident retention rates and can justify rent premiums that more than offset the service cost. For properties requiring additional services, many providers also offer <Link to="/services/junk-removal" className="text-[#049704] hover:text-[#038203] font-medium">comprehensive bulk removal solutions</Link> that further streamline operations and reduce costs.
                    </p>
                  </div>

                  <div className="bg-[#049704] rounded-xl p-8 text-center">
                    <Calculator className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Calculate Your True Costs
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                      Ready to discover how much you could save with professional valet trash service? Get a detailed cost analysis for your property.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="btn-primary-inverse">
                        Get Cost Analysis <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                        <Phone className="mr-2 h-5 w-5" /> Discuss Your Needs
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

export default HiddenCostsInHouseTrashManagement;