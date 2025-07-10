import React, { useState, useEffect } from 'react';
import { ChevronRight, Truck, Recycle, Sparkles, Phone, Mail, MapPin, Star, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import OptimizedImage from '../components/OptimizedImage';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Valet Trash Service",
      description: "Door-to-door trash collection for apartment communities and condos.",
      features: ["Weekly pickup", "Professional service", "Reliable scheduling"]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Bulk Junk Removal",
      description: "Large item removal including furniture, appliances, and construction debris.",
      features: ["Same-day service", "Eco-friendly disposal", "No item too big"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Pressure Washing",
      description: "Professional cleaning for driveways, sidewalks, and building exteriors.",
      features: ["High-quality equipment", "Experienced technicians", "Competitive pricing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Manager",
      content: "On The Fly has transformed our community. Residents love the convenience and our property looks better than ever.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "HOA President",
      content: "Reliable, professional, and affordable. They've exceeded our expectations in every way.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Apartment Complex Owner",
      content: "The best decision we made was partnering with On The Fly. Our residents are happier and our property value has increased.",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8" />, number: "99%", label: "On-Time Service" },
    { icon: <Shield className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1"
            />
            <source 
              media="(min-width: 769px)" 
              srcSet="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            />
            <OptimizedImage
              src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
              alt="Professional waste management services"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Valet Trash & Bulk Removal Services
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed px-4">
              Professional waste management solutions for apartment communities, condos, and commercial properties across the region.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] flex items-center justify-center"
              >
                Get Free Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+1234567890"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive waste management solutions tailored to your property's needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                  <div className="text-blue-600 mb-4 sm:mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why Choose On The Fly?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  We don't operate like a distant national vendor. We stay connected, visible, and accountable. Our goal is to help property managers reduce complaints, boost curb appeal, and feel confident that their community is in good hands.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Local, family-owned business",
                    "Fully insured and bonded",
                    "Flexible scheduling options",
                    "Competitive pricing",
                    "Exceptional customer service"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative">
                <OptimizedImage
                  src="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Professional waste management team"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Don't just take our word for it - hear from property managers who trust us
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4">
              Contact us today for a free consultation and see how we can improve your property's waste management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] flex items-center justify-center"
              >
                Get Free Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+1234567890"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;