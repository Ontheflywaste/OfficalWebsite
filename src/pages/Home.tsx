import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, Star, Users, Shield, Truck, Play, Quote, Calendar, Package, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';
import LazyYouTubeEmbed from '../components/LazyYouTubeEmbed';

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(console.error);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>Orlando Valet Trash Service | On The Fly Waste Solutions</title>
        <meta name="description" content="Orlando's premier valet trash and bulk removal service for apartments, condos, and multifamily properties. Professional doorstep pickup 7 days a week. Get your free quote today!" />
        <meta name="keywords" content="valet trash Orlando, doorstep trash pickup Orlando, apartment trash service Orlando, bulk removal Orlando, waste management Orlando, multifamily trash collection Florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Orlando Valet Trash Service | On The Fly Waste Solutions" />
        <meta property="og:description" content="Orlando's premier valet trash and bulk removal service for apartments, condos, and multifamily properties. Professional doorstep pickup 7 days a week." />
        <meta property="og:image" content="https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png" />
        <meta property="og:url" content="https://ontheflywastesolutions.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orlando Valet Trash Service | On The Fly Waste Solutions" />
        <meta name="twitter:description" content="Orlando's premier valet trash and bulk removal service for apartments, condos, and multifamily properties." />
        <meta name="twitter:image" content="https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "On The Fly Waste Solutions",
            "image": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
            "description": "Professional valet trash and bulk removal services in Orlando, FL",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.5383,
              "longitude": -81.3792
            },
            "url": "https://ontheflywastesolutions.com",
            "telephone": "+1-407-274-5019",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "08:00",
              "closes": "21:00"
            },
            "sameAs": [
              "https://www.facebook.com/ontheflywastesolutions",
              "https://www.instagram.com/ontheflywaste/",
              "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Waste Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Valet Trash Service",
                    "description": "Professional door-to-door trash collection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Removal Service",
                    "description": "Furniture and large item removal"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-container">
          {/* Background Video for Desktop */}
          {!isMobile && (
            <video
              ref={videoRef}
              className="hero-video absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Images/hero-mobile.webp"
              style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
              <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
            </video>
          )}

          {/* Background Image for Mobile */}
          {isMobile && (
            <img
              src="/Images/hero-mobile.webp"
              alt="On The Fly Waste Solutions Valet Trash Service"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          )}

          {/* Overlay */}
          <div className="hero-overlay" />

          {/* Content */}
          <div className="hero-content">
            <ScrollReveal>
              <h1 className="hero-title">
                Valet Trash & Bulk Removal Services
              </h1>
              <p className="hero-subtitle">
                Orlando's trusted door to door trash pickup service for apartments, condos, and resort-style communities
              </p>
              
              {/* Service Highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm md:text-base">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm md:text-base">7 Days a Week</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm md:text-base">Same Day Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Your Free Quote Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:407-274-5019" className="btn-secondary">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Professional Waste Management Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We provide comprehensive waste management solutions for multifamily properties across Central Florida
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Valet Trash Service",
                  description: "Professional door-to-door trash collection service for apartments and condos. Convenient pickup right from your doorstep.",
                  link: "/services/valet-trash",
                  features: ["Daily pickup available", "Professional uniformed staff", "Flexible scheduling"]
                },
                {
                  icon: Package,
                  title: "Junk Removal",
                  description: "Complete furniture and bulk item removal service. From single items to full property cleanouts.",
                  link: "/services/junk-removal",
                  features: ["Same-day service", "Full-service removal", "Proper disposal"]
                },
                {
                  icon: Droplet,
                  title: "Pressure Washing",
                  description: "Professional building and surface cleaning services using commercial-grade equipment.",
                  link: "/services/pressure-washing",
                  features: ["Commercial equipment", "Eco-friendly solutions", "Surface protection"]
                }
              ].map((service, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-16 h-16 bg-[#049704]/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-[#049704]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-[#049704] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-[#049704] font-semibold hover:text-[#038203] transition-colors duration-200"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Orlando Properties Choose Us
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We're not just another waste management company. We're Orlando's trusted partner for professional valet trash and bulk removal services that enhance property value and resident satisfaction.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Users,
                        title: "2,500+ Happy Residents",
                        description: "Serving apartment communities across Central Florida with consistent, reliable service"
                      },
                      {
                        icon: Shield,
                        title: "Licensed & Insured",
                        description: "Full liability coverage and professional certifications for your peace of mind"
                      },
                      {
                        icon: Clock,
                        title: "Flexible Scheduling",
                        description: "Service times that work for your community, from daily pickup to custom schedules"
                      }
                    ].map((item, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#049704]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-6 w-6 text-[#049704]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link to="/about" className="btn-primary">
                      Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <img
                    src="/Images/gallery12813_1920x831@2x.jpg"
                    alt="Professional Valet Trash Collection Service in Orlando"
                    className="rounded-2xl shadow-2xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Serving Central Florida Communities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional valet trash and bulk removal services throughout the greater Orlando area
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Orlando", "Kissimmee", "Winter Park", "Altamonte Springs",
                "Lake Mary", "Sanford", "Apopka", "Winter Garden",
                "Clermont", "Melbourne", "Davenport", "Celebration"
              ].map((city, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.05}
                  direction="up"
                >
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#049704]/5 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-[#049704] mx-auto mb-2" />
                    <span className="font-medium text-gray-900">{city}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Don't see your area? We're expanding throughout Central Florida.</p>
                <Link to="/contact" className="btn-outline border-[#049704] text-[#049704] hover:bg-[#049704] hover:text-white">
                  Check Service Availability <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from property managers and residents who trust our services
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  {[
                    {
                      name: "Antonio Marcuz",
                      title: "Property Management Company",
                      text: "I'd like to say how good they are, very responsive. I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly.",
                      rating: 5
                    },
                    {
                      name: "Lynn Mollison",
                      title: "HOA Community",
                      text: "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated to their job - no short-cuts with them.",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <ScrollReveal key={index} delay={index * 0.2}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Quote className="h-8 w-8 text-[#049704]/20 mb-4" />
                        <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.title}</div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <div className="lg:pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    See What Our Clients Have to Say
                  </h3>
                  <LazyYouTubeEmbed 
                    videoId="gFYjibflN3U"
                    title="Client Testimonial - Encore Resort at Reunion"
                  />
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Hear from Reunion East management about our reliable service
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <Link to="/reviews" className="btn-primary">
                  Read More Reviews <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#049704] to-[#038203]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Property with Professional Valet Trash Service?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied property managers who trust On The Fly Waste Solutions for reliable, professional service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary-inverse">
                  Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:407-274-5019" className="btn-outline border-white text-white hover:bg-white hover:text-[#049704]">
                  <Phone className="mr-2 h-5 w-5" /> Call 407-274-5019
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;