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
  const isMobile = window.innerWidth < 768;
  const shouldUseBlackLogo = isScrolled || isPostPage;
  const shouldUseBlackNavbar = isScrolled || isPostPage;

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
            : isMobile 
              ? 'top-0 bg-black/90 backdrop-blur-md'
              : 'top-10 bg-black/90 backdrop-blur-md'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20' : 'h-24'
          }`}>
            <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105 relative">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                aria-label="On The Fly Waste Solutions - Home"
                className="block"
              >
                <img 
                  src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
                  alt="On The Fly Waste Solutions Logo" 
                  className={`transition-all duration-500 ease-in-out ${
                    isScrolled ? 'h-16' : 'h-20'
                  } object-contain`}
                  loading="eager"
                  fetchPriority="high"
                  width="250"
                  height="80"
                />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                shouldUseBlackLogo
                  ? 'text-gray-900 hover:text-[#027502]'
                  : 'text-white hover:text-[#027502]'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8" role="menubar">
              <Link
                to="/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>
              
              <Link
                to="/about"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`font-medium text-base relative group transition-all duration-300 flex items-center ${
                    shouldUseBlackLogo
                      ? 'text-gray-900 hover:text-[#027502]'
                      : 'text-white hover:text-[#027502]'
                  }`}
                  role="menuitem"
                  aria-current={location.pathname === '/services' ? 'page' : undefined}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${
                  isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="py-2">
                    <Link
                      to="/services/valet-trash"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#027502] transition-colors duration-200"
                    >
                      <Trash2 className="h-5 w-5 mr-3 text-[#027502]" />
                      <div>
                        <div className="font-medium">Valet Trash</div>
                        <div className="text-sm text-gray-500">Doorstep trash pickup</div>
                      </div>
                    </Link>
                    <Link
                      to="/services/junk-removal"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#027502] transition-colors duration-200"
                    >
                      <Package className="h-5 w-5 mr-3 text-[#027502]" />
                      <div>
                        <div className="font-medium">Junk Removal</div>
                        <div className="text-sm text-gray-500">Furniture & bulk items</div>
                      </div>
                    </Link>
                    <Link
                      to="/services/pressure-washing"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#027502] transition-colors duration-200"
                    >
                      <Droplet className="h-5 w-5 mr-3 text-[#027502]" />
                      <div>
                        <div className="font-medium">Pressure Washing</div>
                        <div className="text-sm text-gray-500">Building & surface cleaning</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link
                to="/blog"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/blog' ? 'page' : undefined}
              >
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>
              
              <Link
                to="/contact"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>
              
              <Link
                to="/reviews"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/reviews' ? 'page' : undefined}
              >
                Reviews
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>
              
              <a
                href="https://www.youtube.com/embed/gFYjibflN3U"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
                aria-label="Testimonials (opens in new tab)"
              >
                Testimonials
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </a>
            </div>
          </div>

          <div 
            className={`md:hidden transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'max-h-[500px] opacity-100' 
                : 'max-h-0 opacity-0'
            } overflow-hidden ${
              shouldUseBlackNavbar
                ? 'bg-white'
                : 'bg-black/90 backdrop-blur-md'
            }`}
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="py-4 space-y-1 px-2">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              
              <Link
                to="/services"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/services' ? 'page' : undefined}
              >
                Services
              </Link>
              
              {/* Mobile Services Submenu */}
              <div className="pl-6 space-y-1 border-l-2 border-white/20 ml-4">
                <Link
                  to="/services/valet-trash"
                  className={`block py-2 px-3 rounded-lg transition-colors duration-300 text-sm ${
                    shouldUseBlackLogo
                      ? 'text-gray-700 hover:text-[#027502] hover:bg-gray-100'
                      : 'text-white/80 hover:text-[#027502] hover:bg-white/10'
                  }`}
                  role="menuitem"
                >
                  Valet Trash
                </Link>
                <Link
                  to="/services/junk-removal"
                  className={`block py-2 px-3 rounded-lg transition-colors duration-300 text-sm ${
                    shouldUseBlackLogo
                      ? 'text-gray-700 hover:text-[#027502] hover:bg-gray-100'
                      : 'text-white/80 hover:text-[#027502] hover:bg-white/10'
                  }`}
                  role="menuitem"
                >
                  Junk Removal
                </Link>
                <Link
                  to="/services/pressure-washing"
                  className={`block py-2 px-3 rounded-lg transition-colors duration-300 text-sm ${
                    shouldUseBlackLogo
                      ? 'text-gray-700 hover:text-[#027502] hover:bg-gray-100'
                      : 'text-white/80 hover:text-[#027502] hover:bg-white/10'
                  }`}
                  role="menuitem"
                >
                  Pressure Washing
                </Link>
              </div>
              
              <Link
                to="/blog"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/blog' ? 'page' : undefined}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
              
              <Link
                to="/reviews"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/reviews' ? 'page' : undefined}
              >
                Reviews
              </Link>
              
              <a
                href="https://www.youtube.com/embed/gFYjibflN3U"
                target="_blank"
                rel="noopener noreferrer"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
                role="menuitem"
                aria-label="Testimonials (opens in new tab)"
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-gradient-to-b from-gray-900 to-black text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img 
                src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
                alt="On The Fly Waste Solutions Logo" 
                className="h-10 sm:h-12 object-contain mb-6"
                loading="lazy"
                width="150"
                height="48"
              />
              <p className="text-gray-200 mb-6">
                Professional valet trash services in Central Florida. Committed to excellence and environmental responsibility.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/ontheflywastesolutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-white transition-all duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-6 w-6" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.instagram.com/ontheflywaste/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-white transition-all duration-300"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-6 w-6" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-white transition-all duration-300"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3" role="list">
                {['Home', 'About', 'Services', 'Blog', 'Contact', 'Reviews'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center group"
                      aria-label={`Go to ${item} page`}
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3" role="list">
                {[
                  { icon: Trash2, text: 'Valet Trash', link: '/services/valet-trash' },
                  { icon: Package, text: 'Junk Removal', link: '/services/junk-removal' },
                  { icon: Droplet, text: 'Pressure Washing', link: '/services/pressure-washing' }
                ].map((item) => (
                  <li key={item.text}>
                    <Link 
                      to={item.link}
                      className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center"
                      aria-label={`Learn more about ${item.text}`}
                    >
                      <item.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4" role="list">
                <li>
                  <div className="flex items-center space-x-3 text-gray-200">
                    <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span>Central Florida</span>
                  </div>
                </li>
                <li>
                  <a 
                    href="tel:407-274-5019" 
                    className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-300"
                    aria-label="Call us at 407-274-5019"
                  >
                    <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span>407-274-5019</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@ontheflywastesolutions.com" 
                    className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-300"
                    aria-label="Email us at info@ontheflywastesolutions.com"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span>info@ontheflywastesolutions.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center space-x-3 text-gray-200">
                    <Clock className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span>Open 7 days a week<br />8:00 AM - 9:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-200">
              © {new Date().getFullYear()} On The Fly Waste Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.aago.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <img 
                  src="/Images/AAGO.png" 
                  alt="Apartment Association of Greater Orlando Member" 
                  className="h-12 sm:h-14 md:h-16 object-contain"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </a>
              <a 
                href="https://www.faahq.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <img 
                  src="/Images/faa-full-color-full-logo.png" 
                  alt="Florida Apartment Association Member" 
                  className="h-12 sm:h-14 md:h-16 object-contain"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </a>
              <a 
                href="https://naahq.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <img 
                  src="/Images/logo-naahq-white_0.png" 
                  alt="National Apartment Association Member" 
                  className="h-12 sm:h-14 md:h-16 object-contain"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;