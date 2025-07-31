import React from 'react';
import { ArrowRight, Trash2, Package, Droplet, Calendar, Clock, CheckCircle2, Shield, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function Services() {
  return (
    <>
      <Helmet>
        <title>Professional Valet Trash Service & Bulk Removal Orlando | On The Fly Waste Solutions</title>
        <meta name="description" content="Expert valet trash service and doorstep trash pickup in Orlando. Reliable apartment trash services, bulk trash removal, and pressure washing services for multifamily communities across Central Florida." />
        <meta name="keywords" content="valet trash service Orlando, doorstep trash pickup Orlando, apartment trash services Orlando, bulk trash removal Orlando, pressure washing services Orlando, multifamily waste solutions Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/services" />
        <link rel="preload" as="image" href="/Images/our services image.png" />
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-0">
        <div className="relative min-h-[60vh] hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <img
            src="/Images/our services image.png"
            alt="Professional Valet Trash Collection Services in Orlando"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="relative h-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex flex-col justify-center items-center h-full text-center" style={{ paddingTop: '25vh', paddingBottom: '10vh' }}>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Orlando Waste Management Services</h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Professional waste management and property maintenance solutions tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div id="valet-trash" className="scroll-mt-32 bg-gradient-to-br from-[#049704]/5 via-white to-[#049704]/10 py-20">
            <div className="absolute inset-0 bg-[url('/Images/pattern.png')] opacity-5 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="right" distance={200} delay={0.2} className="order-1 lg:order-2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src="/Images/gallery12813_1920x831@2x.jpg"
                      alt="Professional Valet Trash"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left" distance={200} className="order-2 lg:order-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center space-x-2 text-[#049704] mb-4">
                      <Trash2 className="h-6 w-6" />
                      <span className="text-lg font-medium">Professional Valet Trash Service</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Orlando's Premier Doorstep Trash Pickup</h2>
                    <div className="prose prose-lg text-gray-600 mb-6">
                      <p>
                        Experience reliable valet trash service in Orlando with our professional doorstep trash pickup. We serve apartment communities and condos across Central Florida with consistent, dependable waste collection services.
                      </p>
                      <p>
                        Our uniformed professionals handle everything from collection to proper disposal, maintaining strict schedules and high standards of cleanliness. We go beyond basic pickup – we monitor compliance, maintain collection areas, and provide detailed reporting to property management.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="h-5 w-5 text-[#049704] mr-2" />
                          Collection Schedule
                        </h3>
                        <p className="text-sm text-gray-600">
                          Flexible pickup for your community needs
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="h-5 w-5 text-[#049704] mr-2" />
                          Service Guarantee
                        </h3>
                        <p className="text-sm text-gray-600">
                          Consistent, reliable service with photo verification
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Professional Team
                        </h3>
                        <p className="text-sm text-gray-600">
                          Trained and uniformed staff
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Full Management
                        </h3>
                        <p className="text-sm text-gray-600">
                          Complete waste management solutions
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Up to 7 days a week door-to-door collection service',
                        'Professional uniformed staff trained in waste handling',
                        'Evening collection times to accommodate resident schedules',
                        'Proper sorting and disposal practices',
                        'Clean and sanitized collection process',
                        'Monthly reporting and analytics for property management'
                      ].map((item, index) => (
                        <ScrollReveal key={item} delay={index * 0.1}>
                          <li className="flex items-center space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link to="/services/valet-trash" className="btn-primary">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Junk Removal */}
          <div id="junk-removal" className="scroll-mt-32 bg-gradient-to-br from-[#038203]/10 via-[#038203]/5 to-[#038203]/15 py-20">
            <div className="absolute inset-0 bg-[url('/Images/pattern.png')] opacity-5 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="left" distance={200} className="order-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src="/Images/Junk.jpg"
                      alt="Junk Removal Service"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" distance={200} delay={0.2} className="order-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center space-x-2 text-[#049704] mb-4">
                      <Package className="h-6 w-6" />
                      <span className="text-lg font-medium">Professional Junk Removal</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Junk Removal</h2>
                    <div className="prose prose-lg text-gray-600 mb-6">
                      <p>
                        Our professional junk removal service handles everything from single items to complete property cleanouts. We specialize in efficient removal of furniture, appliances, electronics, construction debris, and more.
                      </p>
                      <p>
                        With our experienced team and specialized equipment, we ensure quick, safe removal while maintaining proper disposal practices. We handle the heavy lifting, sorting, and cleanup, making the process seamless for you.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="h-5 w-5 text-[#049704] mr-2" />
                          Quick Response
                        </h3>
                        <p className="text-sm text-gray-600">
                          Same-day service available for urgent needs
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="h-5 w-5 text-[#049704] mr-2" />
                          Licensed & Insured
                        </h3>
                        <p className="text-sm text-gray-600">
                          Professional team with proper credentials
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Professional Team
                        </h3>
                        <p className="text-sm text-gray-600">
                          Experienced removal specialists
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Full Service
                        </h3>
                        <p className="text-sm text-gray-600">
                          Complete removal and cleanup
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Same-day service available for urgent removals',
                        'Professional waste disposal practices',
                        'Licensed and insured professional team',
                        'Upfront pricing with no hidden fees',
                        'Proper handling of heavy and bulky items',
                        'Complete cleanup after removal'
                      ].map((item, index) => (
                        <ScrollReveal key={item} delay={index * 0.1}>
                          <li className="flex items-center space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link to="/services/junk-removal" className="btn-primary">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Pressure Washing */}
          <div id="pressure-washing" className="scroll-mt-32 bg-gradient-to-br from-[#049704]/10 via-white to-[#049704]/5 py-20">
            <div className="absolute inset-0 bg-[url('/Images/pattern.png')] opacity-5 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="right" distance={200} delay={0.2} className="order-1 lg:order-2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src="/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg"
                      alt="Pressure Washing Service"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left" distance={200} className="order-2 lg:order-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center space-x-2 text-[#049704] mb-4">
                      <Droplet className="h-6 w-6" />
                      <span className="text-lg font-medium">Professional Pressure Washing</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Pressure Washing</h2>
                    <div className="prose prose-lg text-gray-600 mb-6">
                      <p>
                        Transform your property's appearance with our professional pressure washing services. Using state-of-the-art equipment and advanced cleaning solutions, we effectively remove years of built-up dirt, grime, mold, and stains.
                      </p>
                      <p>
                        Our experienced technicians understand different surface types and use appropriate pressure settings to ensure thorough cleaning without causing damage. We handle everything from buildings and driveways to sidewalks and parking areas.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Professional Equipment
                        </h3>
                        <p className="text-sm text-gray-600">
                          Commercial-grade machines and tools
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="h-5 w-5 text-[#049704] mr-2" />
                          Surface Protection
                        </h3>
                        <p className="text-sm text-gray-600">
                          Safe cleaning for all surfaces
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Tool className="h-5 w-5 text-[#049704] mr-2" />
                          Expert Team
                        </h3>
                        <p className="text-sm text-gray-600">
                          Trained cleaning specialists
                        </p>
                      </div>
                      <div className="bg-[#049704]/5 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Calendar className="h-5 w-5 text-[#049704] mr-2" />
                          Maintenance Plans
                        </h3>
                        <p className="text-sm text-gray-600">
                          Regular service schedules
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Advanced equipment for optimal cleaning power',
                        'Professional cleaning solutions for all surfaces',
                        'Experienced technicians trained in proper techniques',
                        'Surface-specific pressure settings to prevent damage',
                        'Treatment of mold, mildew, and tough stains',
                        'Scheduled maintenance programs available'
                      ].map((item, index) => (
                        <ScrollReveal key={item} delay={index * 0.1}>
                          <li className="flex items-center space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-[#049704] flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link to="/services/pressure-washing" className="btn-primary">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;