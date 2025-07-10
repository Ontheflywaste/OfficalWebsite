import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Clock, Calendar, Truck, Phone, Mail, MapPin, Star, Quote, Trash2, Package, Droplet, Users, Award, MessageSquare, UserCog, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';

function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImpactVisible, setIsImpactVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
    }
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

  const services = [
    {
      icon: Trash2,
      title: "Valet Trash",
      description: "Experience hassle-free living with our premium valet trash service. Our professional team provides door-to-door waste collection directly from your doorstep up to 7 days a week, maintaining a clean and healthy environment. Perfect for apartment communities and residential complexes seeking to enhance tenant satisfaction and property value.",
      image: "/Images/gallery12813_1920x831@2x.jpg",
      link: "/services/valet-trash"
    },
    {
      icon: Package,
      title: "Junk Removal",
      description: "From old furniture to renovation debris, our comprehensive junk removal service handles it all. Our trained team efficiently removes and properly disposes of large items, ensuring your space stays clean and clutter-free. We handle heavy lifting, sorting, and responsible disposal so you don't have to.",
      image: "/Images/Junk.jpg",
      link: "/services/junk-removal"
    },
    {
      icon: Droplet,
      title: "Pressure Washing",
      description: "Transform your property's appearance with our professional pressure washing services. Using state-of-the-art equipment and eco-friendly cleaning solutions, we remove years of built-up dirt, grime, and stains from buildings, driveways, and walkways, restoring their original beauty.",
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
        <title>Orlando's Premier Valet Trash Service & Doorstep Trash Pickup | On The Fly Waste Solutions</title>
        <meta name="description" content="Professional valet trash service in Orlando offering reliable doorstep trash pickup and bulk trash removal. Serving apartment communities and condos across Central Florida with 24/7 multifamily waste solutions." />
        <meta name="keywords" content="valet trash service Orlando, doorstep trash pickup Orlando, apartment trash services Orlando, bulk trash removal Orlando, multifamily waste solutions Orlando, valet trash for condos Orlando, reliable trash pickup Orlando" />
        <link rel="canonical" href="https://ontheflywastesolutions.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Orlando" />
        <meta name="geo.position" content="28.5383;-81.3792" />
        <meta name="ICBM" content="28.5383, -81.3792" />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section with Video Background */}
        <div className="hero-container">
          <div className="hero-overlay" />
          
          {/* Video background */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/HerosectionvideoNew.mp4" type="video/mp4" />
          </video>
          
          {/* Hero content */}
          <div className={`hero-content ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`} style={{ paddingTop: '15vh' }}>
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="hero-title text-center">
                Valet Trash & Bulk Removal Services
              </h1>
              <p className="hero-subtitle text-center mx-auto">
                Orlando's trusted doorstep trash pickup service for apartments, condos, and resort-style communities
              </p>
              <div className="flex justify-center mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full text-white bg-[#049704] transition-all duration-300 transform hover:bg-[#027502] hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 shadow-xl border-2 border-transparent hover:border-white/20"
                >
                  <span className="text-center">Get Your Free Quote Today</span>
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Badges Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Proud Members Of</h2>
                <p className="mt-2 text-lg text-gray-700 text-center">
                  Affiliated with leading industry associations
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              <ScrollReveal delay={0.1}>
                <a 
                  href="https://www.aago.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center group transition-transform duration-300 hover:-translate-y-1"
                >
                  <img 
                    src="/Images/AAGO.png" 
                    alt="Apartment Association of Greater Orlando Member" 
                    className="h-24 object-contain mx-auto mb-3 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-sm text-gray-700 text-center">Apartment Association of Greater Orlando</p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a 
                  href="https://www.faahq.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center group transition-transform duration-300 hover:-translate-y-1"
                >
                  <img 
                    src="/Images/faa-full-color-full-logo.png" 
                    alt="Florida Apartment Association Member" 
                    className="h-24 object-contain mx-auto mb-3 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-sm text-gray-700 text-center">Florida Apartment Association</p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <a 
                  href="https://naahq.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center group transition-transform duration-300 hover:-translate-y-1"
                >
                  <img 
                    src="/Images/NAA-logo_bgwhite.png" 
                    alt="National Apartment Association Member" 
                    className="h-24 object-contain mx-auto mb-3 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-sm text-gray-700 text-center">National Apartment Association</p>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-gray-100 px-6 md:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">Welcome to On The Fly Waste Solutions</h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="mb-4 text-center lg:text-left">
                      At On The Fly Waste Solutions, we're raising the bar for valet trash and bulk removal services in Central Florida. Since 2020, we've focused on delivering dependable, detail-driven service to multifamily communities and resort-style properties that expect more than the industry standard.
                    </p>
                    <p className="mb-4 text-center lg:text-left">
                      Our core services include daily valet trash collection and on-demand bulk removal, handled by a hands-on team that shows up on time and gets the job done right. We pay attention to the small things—clean compactor areas, bag limits enforced, and quick communication when issues arise—because those details matter to your residents.
                    </p>
                    <p className="mb-4 text-center lg:text-left">
                      We don't operate like a distant national vendor. We stay connected, visible, and accountable. Our goal is to help property managers reduce complaints, boost curb appeal, and feel confident that their community is in good hands.
                    </p>
                  </div>
                  <div className="mt-8 text-center lg:text-left">
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gray-50 px-6 md:px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Waste Management Services</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                  Comprehensive multifamily waste solutions for Orlando apartments and condos
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal 
                  key={service.title} 
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.2}
                >
                  <Link
                    to={service.link}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#049704] text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-center">{service.description}</p>
                      <div className="flex items-center justify-center text-[#049704] font-medium">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Property Managers Choose Us */}
        <section className="py-16 md:py-24 bg-white px-6 md:px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Why Property Managers Choose Us</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                  Experience the difference with our professional, reliable, and technology-driven approach
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal 
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.2}
                >
                  <div className="bg-gray-50 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                    <div className="w-14 h-14 bg-[#049704]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <feature.icon className="h-8 w-8 text-[#049704]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-700 text-center">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-20 bg-white px-6 md:px-4">
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
                      <div className="bg-gray-50 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <Quote className="h-8 w-8 text-[#049704]/20 mb-4" />
                        <p className="text-gray-700 mb-6 text-center">{review.text}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-center flex-1">
                            <h3 className="font-semibold text-gray-900 text-center">{review.name}</h3>
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
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Watch Our Client Testimonials</h3>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          .yt-facade {
                            position: relative;
                            width: 100%;
                            max-width: 560px;
                            aspect-ratio: 16/9;
                            cursor: pointer;
                            background: #000 url('https://img.youtube.com/vi/gFYjibflN3U/hqdefault.jpg') center/cover no-repeat;
                          }
                          .yt-facade::after {
                            content: '';
                            position: absolute;
                            top: 50%; left: 50%;
                            width: 68px; height: 48px;
                            margin: -24px 0 0 -34px;
                            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.5,7.9c-0.8-3-3-5.4-6-6.2C56.3,0.5,34,0.5,34,0.5s-22.3,0-26.5,1.2c-3,0.8-5.2,3.2-6,6.2C0.3,12.1,0.3,24,0.3,24s0,11.9,1.2,16.1c0.8,3,3,5.4,6,6.2c4.2,1.2,26.5,1.2,26.5,1.2s22.3,0,26.5-1.2c3-0.8,5.2-3.2,6-6.2c1.2-4.2,1.2-16.1,1.2-16.1S67.7,12.1,66.5,7.9z" fill="#f00"/><polygon points="45,24 27,14 27,34" fill="#fff"/></svg>') center/contain no-repeat;
                          }
                        `
                      }} />
                      <div 
                        className="yt-facade" 
                        onClick={(e) => {
                          const iframe = document.createElement('iframe');
                          iframe.setAttribute('src','https://www.youtube-nocookie.com/embed/gFYjibflN3U?autoplay=1');
                          iframe.setAttribute('allow','autoplay; encrypted-media');
                          iframe.setAttribute('frameborder','0');
                          iframe.style.width='100%';
                          iframe.style.height='100%';
                          e.currentTarget.replaceWith(iframe);
                        }}
                      />
                    </div>
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
        <section id="impact-section" className="py-16 md:py-20 bg-gradient-to-br from-[#026502] to-[#038203] relative overflow-hidden px-6 md:px-4">
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
                      <p className="text-white text-sm text-center">
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

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-gray-100 px-6 md:px-4">
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