import React from 'react';
import { ArrowRight, CheckCircle2, Droplet, Shield, Sparkles, Calendar, Phone, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function PressureWashingService() {
  const services = [
    {
      title: "Building Exteriors",
      description: "Complete exterior cleaning for apartment buildings and commercial properties",
      features: ["Siding & Stucco", "Brick & Stone", "Concrete Walls", "Window Frames"]
    },
    {
      title: "Walkways & Driveways",
      description: "Professional cleaning of all paved surfaces and pedestrian areas",
      features: ["Concrete Walkways", "Asphalt Driveways", "Sidewalks", "Entryways"]
    },
    {
      title: "Parking Areas",
      description: "Comprehensive cleaning of parking lots and garage areas",
      features: ["Parking Lots", "Garage Floors", "Loading Docks", "Traffic Areas"]
    },
    {
      title: "Specialized Cleaning",
      description: "Targeted cleaning for specific problem areas and surfaces",
      features: ["Graffiti Removal", "Oil Stain Treatment", "Mold & Mildew", "Gum Removal"]
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Enhanced Curb Appeal",
      description: "Dramatically improve your property's appearance and first impressions with professional cleaning"
    },
    {
      icon: Shield,
      title: "Surface Protection",
      description: "Remove harmful contaminants that can damage surfaces over time, extending their lifespan"
    },
    {
      icon: Droplet,
      title: "Eco-Friendly Solutions",
      description: "Environmentally safe cleaning solutions that are effective yet gentle on landscaping"
    },
    {
      icon: Calendar,
      title: "Scheduled Maintenance",
      description: "Regular maintenance programs to keep your property looking its best year-round"
    }
  ];

  const beforeAfter = [
    {
      title: "Concrete Walkways",
      description: "Remove years of dirt, stains, and discoloration",
      before: "Stained and dirty concrete",
      after: "Clean, bright, and welcoming"
    },
    {
      title: "Building Exteriors",
      description: "Eliminate mold, mildew, and environmental buildup",
      before: "Dingy and weathered appearance",
      after: "Fresh, clean, and professional"
    },
    {
      title: "Parking Areas",
      description: "Clean oil stains and traffic residue",
      before: "Stained and unprofessional",
      after: "Clean and well-maintained"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Pressure Washing Service Orlando | Building & Driveway Cleaning | On The Fly Waste Solutions</title>
        <meta name="description" content="Expert pressure washing service in Orlando for apartment buildings, driveways, and commercial properties. Professional exterior cleaning with eco-friendly solutions and scheduled maintenance programs." />
        <meta name="keywords" content="pressure washing Orlando, building exterior cleaning Orlando, driveway cleaning Florida, commercial pressure washing Central Florida, apartment building cleaning Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services/pressure-washing" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] bg-gradient-to-br from-blue-900 via-blue-800 to-[#049704] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-24">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-300/30">
                    Professional Cleaning
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Expert Pressure
                  <span className="block text-blue-300">Washing Service</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Transform your property's appearance with professional pressure washing. From building exteriors to driveways, we restore surfaces to their original beauty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-blue-900">
                    <Phone className="mr-2 h-5 w-5" /> Schedule Service
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Pressure Washing Solutions</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Our professional pressure washing service uses state-of-the-art equipment and eco-friendly cleaning solutions to restore your property's surfaces to their original condition. We understand that different surfaces require different approaches, and our experienced technicians use appropriate pressure settings and techniques for each job.
                    </p>
                    <p>
                      From removing years of built-up dirt and grime to eliminating mold, mildew, and stains, our comprehensive cleaning service enhances your property's curb appeal while protecting your investment through proper maintenance.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Eco</div>
                      <div className="text-sm text-gray-600">Friendly Solutions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Pro</div>
                      <div className="text-sm text-gray-600">Equipment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Safe</div>
                      <div className="text-sm text-gray-600">Techniques</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-2">Fast</div>
                      <div className="text-sm text-gray-600">Results</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img 
                    src="/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg"
                    alt="Professional Pressure Washing Service"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Cleaning Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional pressure washing for all types of surfaces and property areas
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
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-[#049704] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Pressure Washing</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover how our pressure washing service enhances your property's value and appearance
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

        {/* Before & After Results */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dramatic Results</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See the transformation our professional pressure washing can achieve
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeAfter.map((result, index) => (
                <ScrollReveal 
                  key={index}
                  direction="up"
                  delay={index * 0.2}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center justify-center text-center">{result.title}</h3>
                    <p className="text-gray-600 mb-6 flex-1 text-center">{result.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <span className="text-sm font-medium text-red-800">Before:</span>
                        <span className="text-sm text-red-700">{result.before}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-green-800">After:</span>
                        <span className="text-sm text-green-700">{result.after}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Systematic approach ensuring safe, effective cleaning for all surface types
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "Evaluate surfaces and determine appropriate cleaning methods and pressure settings."
                },
                {
                  step: "2",
                  title: "Preparation",
                  description: "Protect landscaping and prepare the area for safe, effective cleaning."
                },
                {
                  step: "3",
                  title: "Professional Cleaning",
                  description: "Apply appropriate cleaning solutions and use proper pressure washing techniques."
                },
                {
                  step: "4",
                  title: "Final Inspection",
                  description: "Ensure complete cleaning and customer satisfaction with the results."
                }
              ].map((step, index) => (
                <ScrollReveal 
                  key={index}
                  direction="up"
                  delay={index * 0.2}
                >
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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

        {/* Maintenance Programs */}
        <section className="py-20 bg-gradient-to-br from-[#049704] to-[#038203]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-6">Scheduled Maintenance Programs</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Keep your property looking its best year-round with our customized maintenance programs. Regular cleaning prevents buildup and extends the life of your surfaces.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                      <span>Quarterly, bi-annual, or annual schedules</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                      <span>Customized cleaning plans for your property</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                      <span>Priority scheduling and discounted rates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                      <span>Detailed reporting and documentation</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                    Learn About Maintenance Plans <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Benefits of Regular Maintenance</h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Cost Savings</h4>
                        <p className="text-sm">Regular cleaning prevents costly damage and extends surface life</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Consistent Appearance</h4>
                        <p className="text-sm">Maintain professional appearance year-round</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Property Value</h4>
                        <p className="text-sm">Well-maintained properties command higher rents and values</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Property's Appearance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional pressure washing can dramatically improve your property's curb appeal and protect your investment. Contact us today for a free assessment and quote.
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

export default PressureWashingService;