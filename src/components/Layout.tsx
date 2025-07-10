import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight, Menu, X, Trash2, Package, Droplet, Linkedin, ChevronDown } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsVisible(scrollPosition <= lastScrollY || scrollPosition < 50);
      lastScrollY = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const isPostPage = location.pathname.startsWith('/blog/');
  const shouldUseBlackLogo = isScrolled || isPostPage || window.innerWidth < 768;
  const isMobile = window.innerWidth < 768;
  const shouldUseBlackNavbar = shouldUseBlackLogo || isMobile;

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "On The Fly Waste Solutions",
          "image": "https://ontheflywastesolutions.com/logos/white-logo.png",
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
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "21:00"
          },
          "sameAs": [
            "https://www.facebook.com/ontheflywastesolutions",
            "https://www.instagram.com/ontheflywaste/",
            "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
          ]
        })}
      </script>

      <div 
        className={`fixed top-0 left-0 right-0 bg-[#027502] text-white py-2 transition-transform duration-300 z-50 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } hidden md:block`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8">
            <span className="text-sm flex items-center hover:scale-105 transition-transform duration-300" role="text">
              <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>Central Florida</span>
            </span>
            <span className="text-white/70" aria-hidden="true">|</span>
            <a 
              href="tel:407-274-5019" 
              className="text-sm flex items-center hover:scale-105 transition-transform duration-300"
              aria-label="Call us at 407-274-5019"
            >
              <Phone className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>407-274-5019</span>
            </a>
            <span className="text-white/70" aria-hidden="true">|</span>
            <span className="text-sm flex items-center hover:scale-105 transition-transform duration-300" role="text">
              <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>7 days a week 8am-9pm</span>
            </span>
          </div>
        </div>
      </div>

      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          shouldUseBlackNavbar
            ? 'top-0 bg-white shadow-lg border-b border-gray-200' 
            : 'top-10 bg-black/90 backdrop-blur-md'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105 relative">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                aria-label="On The Fly Waste Solutions - Home"
                className="block"
              >
                {/* White logo */}
                <img 
                  src="/logos/white-logo.png"
                  alt="On The Fly Waste Solutions Logo" 
                  className={`transition-all duration-500 ease-in-out ${
                    isScrolled ? 'h-12' : 'h-16'
                  } object-contain ${
                    shouldUseBlackNavbar ? 'opacity-0 absolute inset-0' : 'opacity-100 relative'
                  }`}
                  loading="eager"
                  fetch