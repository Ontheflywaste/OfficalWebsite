import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Clock, Calendar, Truck, Phone, Mail, MapPin, Star, Quote, Trash2, Package, Droplet, Users, Award, MessageSquare, UserCog, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';
import toast from 'react-hot-toast';
import LazyYouTubeEmbed from '../components/LazyYouTubeEmbed';

// Lazy load EmailJS only when needed
const loadEmailJS = () => import('@emailjs/browser');

function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImpactVisible, setIsImpactVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Membership badges data
  const membershipBadges = [
    {
      image: "/Images/AAGO.png",
      alt: "Apartment Association of Greater Orlando Member",
      title: "Apartment Association of Greater Orlando",
      url: "https://www.aago.org/"
    },
    {
      image: "/Images/faa-full-color-full-logo.png",
      alt: "Florida Apartment Association Member",
      title: "Florida Apartment Association",
      url: "https://www.faahq.org/"
    },
    {
      image: "/Images/NAA-logo_bgwhite.png",
      alt: "National Apartment Association Member",
      title: "National Apartment Association",
      url: "https://naahq.org/"
    },
    {
      image: "https://seal-centralflorida.bbb.org/seals/blue-seal-187-130-bbb-235977450.png",
      alt: "On The Fly Waste Solutions BBB Business Review",
      title: "Better Business Bureau Accredited",
      url: "https://www.bbb.org/us/fl/apopka/profile/garbage-removal/on-the-fly-waste-solutions-0733-235977450/#sealclick"
    },
    {
      image: "/ReunionWestPOALOgo.jpg",
      alt: "Reunion West Property Owners' Association Member",
      title: "Reunion West Property Owners' Association",
      url: "#"
    }
  ];

  useEffect(() => {
    // Check screen sizes
    const checkScreenSize = () => {
      // Small screen: phones and small tablets
      setIsSmallScreen(window.innerWidth < 900);
      // Tablet: between 768px and 1024px
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const impactSection = document.getElementById('impact-section');
      if (impactSection) {
        const rect = impactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsImpactVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % membershipBadges.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [membershipBadges.length]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Dynamically import EmailJS when needed
      const emailjs = await loadEmailJS();
      
      // Initialize EmailJS
      emailjs.default.init("JwYfbaBokN347YiVO");
      
      await emailjs.send(
        'service_decr5zt',
        'template_x34o2r9',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'On The Fly Waste Solutions',
          to_email: 'info@ontheflywastesolutions.com',
          phone_number: formData.phone,
          property_name: formData.propertyName,
          additional_info: formData.message,
          reply_to: formData.email
        },
        'JwYfbaBokN347YiVO'
      );

      toast.success('Quote request sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyName: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send quote request:', error);
      toast.error('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = [
    {
      icon: Trash2,
      title: "Valet Trash",
      description: "Professional door-to-door valet trash pickup for Orlando apartment communities — available up to seven days a week.",
      image: "/Images/gallery12813_1920x831@2x.jpg",
      link: "/services/valet-trash"
    },
    {
      icon: Package,
      title: "Junk Removal",
      description: "Full-service furniture and bulk item removal—from move-outs to renovation debris throughout Orlando properties.",
      image: "/Images/Junk.jpg",
      link: "/services/junk-removal"
    },
    {
      icon: Droplet,
      title: "Pressure Washing",
      description: "Professional pressure washing for buildings, driveways, and walkways—restoring curb appeal with eco-friendly Orlando cleaning solutions.",
      image: "/Images/a-worker-is-pressure-washing-the-side-of_4jePfEHITea46X2OheIHWw_tPeVeoSvTfSJ4M-NaPtkyw.jpeg",
      link: "/services/pressure-washing"
    }
  ];

  const reviews = [
    {
      name: "Antonio Marcuz",
      location: "Orlando, FL",
      rating: 5,
      text: "I'd like to say how good they are, very responsive. I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly."
    },
    {
      name: "Shaianne Berry",
      location: "Orlando, FL",
      rating: 5,
      text: "On The Fly is great! They are professional and are always on top of things in the neighborhood. Anytime I see them they are friendly and would definitely recommend their serves to anyone looking."
    },
    {
      name: "William Barber",
      location: "Orlando, FL",
      rating: 5,
      text: "Mr. Donnell and Mr. Trevor are outstanding young men with a high drive that makes them excel at what they do. Their crew works hard and quickly and are friendly. I would highly recommend giving these young men a chance."
    },
    {
      name: "Lynn Mollison",
      location: "Orlando, FL",
      rating: 5,
      text: "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly. Donnell will go above and beyond to help anyone out - he is amazing."
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Reliable & Responsive",
      description: "Count on our consistent daily service with live support available whenever you need us. We're always just a call or message away."
    },
    {
      icon: UserCog,
      title: "Owner-Led Team",
      description: "Get direct access to decision-makers who understand your needs and can implement solutions quickly and effectively."
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Stay informed with our valet trash service app featuring photo proof and real-time service tracking capabilities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Orlando Valet Trash Service | On The Fly Waste Solutions</title>
        <meta name="description" content="Professional valet trash and bulk removal services in Orlando. Reliable doorstep pickup for apartments and condos. Get your free quote today!" />
        <meta name="keywords" content="valet trash service Orlando, doorstep trash pickup Orlando, apartment trash services Orlando, bulk trash removal Orlando, multifamily waste solutions Orlando, valet trash for condos Orlando, reliable trash pickup Orlando, top valet trash companies in Orlando, waste management for apartment complexes, valet trash services for student housing, bulk pickup service for HOA communities, contract valet trash for property managers, on-demand waste removal for resorts" />
        <link rel="canonical" href="https://ontheflywastesolutions.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Orlando" />
        <meta name="geo.position" content="28.5383;-81.3792" />
        <meta name="ICBM" content="28.5383, -81.3792" />

        <meta property="og:title" content="Orlando Valet Trash Service | On The Fly Waste Solutions" />
        <meta property="og:description" content="Professional valet trash and bulk removal services in Orlando. Reliable doorstep pickup for apartments and condos. Get your free quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ontheflywastesolutions.com" />
        <meta property="og:image" content="https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png" />
        <meta name="robots" content="index, follow" />
        
        {/* Enhanced LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "On The Fly Waste Solutions",
            "image": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
            "description": "Professional valet trash and bulk removal services for multifamily communities in Orlando and Central Florida",
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
            "email": "info@ontheflywastesolutions.com",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "08:00",
              "closes": "21:00"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 28.5383,
                "longitude": -81.3792
              },
              "geoRadius": "50000"
            },
            "areaServed": [
              "Orlando, FL",
              "Kissimmee, FL",
              "Altamonte Springs, FL",
              "Lake Mary, FL",
              "Apopka, FL",
              "Clermont, FL",
              "Winter Garden, FL",
              "Davenport, FL"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Waste Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Valet Trash Service",
                    "description": "Door-to-door trash collection for multifamily properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bulk Removal Service",
                    "description": "Furniture and large item removal for properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pressure Washing Service",
                    "description": "Professional building and surface cleaning"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/ontheflywastesolutions",
              "https://www.instagram.com/ontheflywaste/",
              "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section with Video Background */}
        <div className="hero-container">
          <div className="hero-overlay" />
          
          {/* Mobile: static hero image */}
          <picture className="block md:hidden absolute inset-0 w-full h-full">
            <source srcSet="/Images/gallery12813_1920x831@2x.jpg" type="image/jpeg" />
            <img
              src="/Images/gallery12813_1920x831@2x.jpg"
              alt="Professional Valet Trash Collection Service Orlando"
              width="1920"
              height="831"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </picture>

          {/* iPad: static hero image */}
          {isTablet && (
            <picture className="hidden md:block lg:hidden absolute inset-0 w-full h-full">
              <img
                src="/Images/gallery12813_1920x831@2x.jpg"
                alt="Professional Valet Trash Collection Service Orlando"
                width="1920"
                height="831"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          )}

          {/* Desktop: video with poster; mobile hidden */}
          {!isSmallScreen && !isTablet && (
            <video
              ref={videoRef}
              className="hidden md:block absolute inset-0 w-full h-full object-cover hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => {
                if (videoRef.current) videoRef.current.play().catch(() => {});
              }}
            >
              <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
              <source src="/videos/HerosectionvideoNew.webm" type="video/webv" />
            </video>
          )}
          
          {/* Hero content - Desktop */}
          {!isSmallScreen && !isTablet && (
            <div className={`hero-content ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`} style={{ paddingTop: '15vh' }}>
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="hero-title text-center">
                  Valet Trash & Bulk Removal Services
                </h1>
                <p className="hero-subtitle text-center mx-auto">
                  Orlando's trusted door to door trash pickup service for apartments, condos, and resort-style communities
                </p>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                    <div className="flex items-center text-white">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>
                    <div className="flex items-center text-white">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>7 Days a Week</span>
                    </div>
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>
                    <div className="flex items-center text-white">
                      <Truck className="h-5 w-5 mr-2" />
                      <span>Same Day Service</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full text-white bg-[#049704] transition-all duration-300 transform hover:bg-[#027502] hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 shadow-xl border-2 border-transparent hover:border-white/20"
                  >
                    <span className="text-center">Get Your Free Quote Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Hero content - iPad */}
          {isTablet && (
            <div className={`hero-content ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`} style={{ paddingTop: '15vh' }}>
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="hero-title text-center">
                  Valet Trash & Bulk Removal Services
                </h1>
                <p className="hero-subtitle text-center mx-auto">
                  Orlando's trusted door to door trash pickup service for apartments, condos, and resort-style communities
                </p>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                    <div className="flex items-center text-white">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>
                    <div className="flex items-center text-white">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>7 Days a Week</span>
                    </div>
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>
                    <div className="flex items-center text-white">
                      <Truck className="h-5 w-5 mr-2" />
                      <span>Same Day Service</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full text-white bg-[#049704] transition-all duration-300 transform hover:bg-[#027502] hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 shadow-xl border-2 border-transparent hover:border-white/20"
                  >
                    <span className="text-center">Get Your Free Quote Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Mobile Hero Content with Contact Form */}
          {isSmallScreen && (
            <div className={`relative z-20 min-h-screen flex items-center justify-center px-4 py-20 pt-32 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}>
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4 text-shadow-lg">
                    Orlando's Premier Valet Trash Service
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    Get your free quote in under 60 seconds
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <form onSubmit={handleFormSubmit}>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your Name *"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Email Address *"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Phone Number *"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleFormChange}
                        placeholder="Property Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us about your needs..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#049704] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#038203] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Free Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                    </div>
                  </form>
                  <div className="mt-4">
                    <p className="text-xs text-gray-600 text-center">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Membership Badges Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/TradeshowPicture')] bg-cover opacity-25" style={{ backgroundPosition: 'center 35%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Proud Members Of</h2>
                <p className="mt-2 text-lg text-black text-center">
                  Affiliated with leading industry associations
                </p>
              </div>
            </ScrollReveal>

            {/* Carousel Container */}
            <div className="relative overflow-hidden z-10">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {membershipBadges.map((badge, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex justify-center">
                    <a 
                      href={badge.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-center group transition-all duration-300 hover:-translate-y-2 hover:scale-105 max-w-xs"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 group-hover:shadow-2xl group-hover:bg-white transition-all duration-300">
                        <img 
                          src={badge.image} 
                          alt={badge.alt} 
                          className="h-20 sm:h-24 md:h-28 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          width="120"
                          height="120"
                        />
                        <p className="text-base font-medium text-gray-800 text-center leading-tight">{badge.title}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {membershipBadges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#049704] scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-gray-100 px-6 md:px-4 content-visibility-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center lg:text-left leading-tight">Welcome to On The Fly Waste Solutions</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p className="mb-6 text-center lg:text-left text-lg leading-relaxed">
                      On The Fly Waste Solutions provides professional valet trash and waste management services throughout Central Florida. We serve multifamily communities, resort properties, and commercial locations with reliable, detail-focused service.
                    </p>
                    <p className="mb-6 text-center lg:text-left text-lg leading-relaxed">
                      Our commitment to excellence and customer satisfaction has made us a trusted partner for property managers seeking dependable waste solutions. From nightly valet trash pickup to comprehensive recycling programs, we deliver customized services that keep your properties clean and residents happy.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 my-8 py-6 border-t border-b border-gray-300">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-1">500+</div>
                      <div className="text-sm text-gray-600">Properties Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#049704] mb-1">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Focus</div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Link to="/about" className="btn-primary">
                      Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="w-full">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/Images/artemistradeshow.jpg"
                      alt="On The Fly Waste Solutions at Artemis Trade Show"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      width="480"
                      height="360"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gray-50 px-6 md:px-4 content-visibility-auto">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Professional waste management solutions for Central Florida communities
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <ScrollReveal
                  key={service.title}
                  delay={index * 0.1}
                >
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col h-full">
                    <div className="w-20 h-20 bg-[#049704]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <service.icon className="h-10 w-10 text-[#049704]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services" className="btn-primary">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>


        {/* Reviews Section */}
        <section className="py-16 md:py-20 bg-gray-100 px-6 md:px-4 content-visibility-auto border-t-4 border-gray-300">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What Our Clients Say</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                  Don't just take our word for it - hear from our satisfied clients
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  {reviews.map((review, index) => (
                    <ScrollReveal 
                      key={index}
                      direction="left"
                      delay={index * 0.2}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <Quote className="h-8 w-8 text-[#049704]/20 mb-4" />
                        <p className="text-gray-700 mb-6 text-center">{review.text}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-center flex-1">
                            <div className="font-semibold text-gray-900 text-center">{review.name}</div>
                            <p className="text-sm text-gray-600 text-center">{review.location}</p>
                          </div>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="sticky top-24">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Watch Our Client Testimonials</h3>
                    <LazyYouTubeEmbed videoId="gFYjibflN3U" />
                    <p className="mt-4 text-gray-700 text-center">
                      Hear directly from our satisfied clients about their experience with On The Fly Waste Solutions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="text-center">
              <Link to="/reviews" className="btn-primary">
                See More Reviews <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact-section" className="py-16 md:py-20 bg-gradient-to-br from-[#026502] to-[#038203] relative overflow-hidden px-6 md:px-4 content-visibility-auto">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 text-center">
                Making a Difference
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto text-center">
                Our commitment to excellence and reliability has made a real impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  number: "1,000+",
                  label: "Happy Residents",
                  description: "Satisfied clients across Orlando"
                },
                {
                  icon: Clock,
                  number: "24/7",
                  label: "Customer Service",
                  description: "Always ready to assist you"
                },
                {
                  icon: Award,
                  number: "100%",
                  label: "Satisfaction Rate",
                  description: "Consistently exceeding expectations"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isImpactVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300 text-center">
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-white mb-1 text-center">
                        {stat.label}
                      </div>
                      <p className="text-white/80 text-center">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                <div className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-white/20"></div>
                <div className="flex items-center text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>7 Days a Week</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-white/20"></div>
                <div className="flex items-center text-white">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>Next Day Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 md:py-20 bg-white px-6 md:px-4 content-visibility-auto">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Areas We Serve</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
                  We proudly serve Orlando, Kissimmee, Altamonte Springs, Lake Mary, Apopka, Clermont, and surrounding Central Florida communities with professional valet trash and waste management services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Area?</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're continuously expanding our service areas throughout Central Florida. Contact us to discuss service availability in your location.
                </p>
                <Link to="/contact" className="btn-primary">
                  Check Service Availability <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-gray-100 px-6 md:px-4 content-visibility-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-700 text-center">
                Get in touch with us for all your waste management needs
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                <Phone className="h-10 w-10 text-[#049704] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Phone</h3>
                <p className="mt-2 text-base text-gray-700 text-center">407-274-5019</p>
              </div>

              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                <Mail className="h-10 w-10 text-[#049704] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Email</h3>
                <p className="mt-2 text-base text-gray-700 text-center">info@ontheflywastesolutions.com</p>
              </div>

              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                <MapPin className="h-10 w-10 text-[#049704] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Location</h3>
                <p className="mt-2 text-base text-gray-700 text-center">Orlando, Florida</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;