'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const isPostPage = pathname?.startsWith('/blog/') || false;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const shouldUseBlackLogo = isScrolled || isPostPage;
  const shouldUseBlackNavbar = isScrolled || isPostPage;

  return (
    <>
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
                href="/"
                aria-label="On The Fly Waste Solutions – Home"
                className="block"
              >
                <img
                  src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
                  alt="On The Fly Waste Solutions logo"
                  width="250"
                  height="80"
                  className={`${isScrolled ? 'h-16' : 'h-20'} w-auto transition-all duration-300 object-contain ${
                    shouldUseBlackLogo ? 'opacity-0 absolute inset-0' : 'opacity-100 relative'
                  }`}
                  loading="eager"
                />

                <img
                  src="/Images/OTFLogoblack.jpg"
                  alt="On The Fly Waste Solutions logo"
                  width="250"
                  height="80"
                  className={`${isScrolled ? 'h-16' : 'h-20'} w-auto transition-all duration-300 object-contain ${
                    shouldUseBlackLogo ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                  }`}
                  loading="lazy"
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
                href="/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              <Link
                href="/about/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    setCloseTimeout(null);
                  }
                  setIsServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsServicesDropdownOpen(false);
                  }, 300);
                  setCloseTimeout(timeout);
                }}
              >
                <Link
                  href="/services/"
                  className={`font-medium text-base relative group transition-all duration-300 flex items-center ${
                    shouldUseBlackLogo
                      ? 'text-gray-900 hover:text-[#027502]'
                      : 'text-white hover:text-[#027502]'
                  }`}
                  role="menuitem"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
                </Link>

                <div
                  className={`absolute top-full left-0 pt-0 w-56 transition-all duration-200 ${
                    isServicesDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-200 mt-2">
                    <Link
                      href="/services/valet-trash/"
                      className="block px-4 py-3 text-gray-900 hover:bg-[#049704] hover:bg-opacity-10 hover:text-[#027502] transition-colors font-medium"
                    >
                      Valet Trash
                    </Link>
                    <Link
                      href="/services/junk-removal/"
                      className="block px-4 py-3 text-gray-900 hover:bg-[#049704] hover:bg-opacity-10 hover:text-[#027502] transition-colors font-medium"
                    >
                      Junk Removal
                    </Link>
                    <Link
                      href="/services/bulk-removal/"
                      className="block px-4 py-3 text-gray-900 hover:bg-[#049704] hover:bg-opacity-10 hover:text-[#027502] transition-colors font-medium"
                    >
                      Bulk Removal
                    </Link>
                    <Link
                      href="/services/pressure-washing/"
                      className="block px-4 py-3 text-gray-900 hover:bg-[#049704] hover:bg-opacity-10 hover:text-[#027502] transition-colors font-medium"
                    >
                      Pressure Washing
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/blog/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              <Link
                href="/contact/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              <Link
                href="/reviews/"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                Reviews
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </Link>

              <a
                href="https://www.youtube.com/watch?v=gFYjibflN3U"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-base relative group transition-all duration-300 ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502]'
                    : 'text-white hover:text-[#027502]'
                }`}
                role="menuitem"
              >
                Testimonials
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#027502]`} />
              </a>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${shouldUseBlackLogo ? 'border-gray-200 bg-white' : 'border-white/20 bg-black/95'}`}>
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                About
              </Link>

              <Link
                href="/services/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Services
              </Link>

              <Link
                href="/blog/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Blog
              </Link>

              <Link
                href="/contact/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Contact
              </Link>

              <Link
                href="/reviews/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Reviews
              </Link>

              <a
                href="https://www.youtube.com/watch?v=gFYjibflN3U"
                target="_blank"
                rel="noopener noreferrer"
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 font-medium ${
                  shouldUseBlackLogo
                    ? 'text-gray-900 hover:text-[#027502] hover:bg-gray-100'
                    : 'text-white hover:text-[#027502] hover:bg-white/10'
                }`}
              >
                Testimonials
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
