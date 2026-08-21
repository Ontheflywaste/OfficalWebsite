'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { trackClientLogin, trackPhoneCall, trackRequestDemo } from '../utils/track';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [closeCompanyTimeout, setCloseCompanyTimeout] = useState<NodeJS.Timeout | null>(null);
  const [closeResourcesTimeout, setCloseResourcesTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-dark text-white py-2 z-[60] hidden md:block transition-transform duration-300 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
        role="banner"
        aria-hidden={isScrolled}
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
              onClick={() => trackPhoneCall('top_banner')}
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
          isScrolled
            ? 'top-0 bg-surface-dark/95 backdrop-blur-md shadow-lg border-b border-surface-dark-border'
            : 'top-0 md:top-10 bg-gradient-to-b from-surface-dark/90 to-surface-dark-2/90 backdrop-blur-md'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
          }`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden transition-colors duration-300 text-white hover:text-primary"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>

            <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105">
              <Link
                href="/"
                aria-label="On The Fly Waste Solutions – Home"
                className="block"
              >
                <Image
                  src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
                  alt="On The Fly Waste Solutions logo"
                  width={250}
                  height={80}
                  priority
                  className={`${isScrolled ? 'h-[50px] md:h-[60px]' : 'h-[60px] md:h-20'} w-auto transition-all duration-300 object-contain`}
                />
              </Link>
            </div>

            {/* Spacer mirrors the 24px hamburger so the logo stays centered;
                the demo CTA lives in the hero and the mobile menu instead. */}
            <span className="md:hidden w-6" aria-hidden="true" />

            <div className="hidden md:flex items-center space-x-5 lg:space-x-6" role="menubar">
              <Link
                href="/"
                className="font-semibold text-sm relative group transition-all duration-300 text-white hover:text-primary"
                role="menuitem"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" />
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
                  className="font-semibold text-sm relative group transition-all duration-300 flex items-center text-white hover:text-primary"
                  role="menuitem"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" />
                </Link>

                <div
                  className={`absolute top-full left-0 pt-2 w-64 transition-all duration-200 ${
                    isServicesDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-200 mt-2">
                    <Link
                      href="/services/valet-trash/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Valet Trash
                    </Link>
                    <Link
                      href="/services/junk-removal/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Junk Removal
                    </Link>
                    <Link
                      href="/services/bulk-removal/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Bulk Removal
                    </Link>
                    <Link
                      href="/services/pressure-washing/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Pressure Washing
                    </Link>
                    <Link
                      href="/trash-bin-cleaning/"
                      className="flex items-center justify-between gap-2 whitespace-nowrap px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Trash Bin Cleaning
                      <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[10px] leading-none font-bold uppercase tracking-wider text-primary">
                        Coming Jan
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeCompanyTimeout) {
                    clearTimeout(closeCompanyTimeout);
                    setCloseCompanyTimeout(null);
                  }
                  setIsCompanyDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsCompanyDropdownOpen(false);
                  }, 300);
                  setCloseCompanyTimeout(timeout);
                }}
              >
                <span
                  className="font-semibold text-sm relative group transition-all duration-300 flex items-center text-white hover:text-primary cursor-pointer"
                  role="menuitem"
                >
                  Company
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isCompanyDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" />
                </span>

                <div
                  className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${
                    isCompanyDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-200 mt-2">
                    <Link
                      href="/about/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/careers/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeResourcesTimeout) {
                    clearTimeout(closeResourcesTimeout);
                    setCloseResourcesTimeout(null);
                  }
                  setIsResourcesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsResourcesDropdownOpen(false);
                  }, 300);
                  setCloseResourcesTimeout(timeout);
                }}
              >
                <span
                  className="font-semibold text-sm relative group transition-all duration-300 flex items-center text-white hover:text-primary cursor-pointer"
                  role="menuitem"
                >
                  Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isResourcesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" />
                </span>

                <div
                  className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${
                    isResourcesDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-200 mt-2">
                    <Link
                      href="/blog/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/reviews/"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Reviews
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=gFYjibflN3U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-900 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://app.ontheflywastesolutions.com"
                onClick={() => trackClientLogin()}
                className="font-bold text-sm px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 active:scale-[0.98] transition-all duration-300"
                role="menuitem"
              >
                Client Login
              </a>

              <Link
                href="/demo/"
                onClick={() => trackRequestDemo('navbar_desktop')}
                className="font-bold text-sm px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark active:scale-[0.98] transition-all duration-300 shadow-lg inline-flex items-center gap-1.5"
                role="menuitem"
              >
                Request App Demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-gradient-to-b from-surface-dark to-surface-dark-2">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-white hover:text-primary hover:bg-white/10"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-white hover:text-primary hover:bg-white/10"
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    isMobileServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/30 pl-4">
                    <Link
                      href="/services/valet-trash/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Valet Trash
                    </Link>
                    <Link
                      href="/services/junk-removal/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Junk Removal
                    </Link>
                    <Link
                      href="/services/bulk-removal/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Bulk Removal
                    </Link>
                    <Link
                      href="/services/pressure-washing/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Pressure Washing
                    </Link>
                    <Link
                      href="/trash-bin-cleaning/"
                      className="flex items-center gap-2 whitespace-nowrap py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Trash Bin Cleaning
                      <span className="shrink-0 rounded-full border border-primary/50 bg-primary/15 px-1.5 py-0.5 text-[10px] leading-none font-bold uppercase tracking-wider text-primary">
                        Coming Jan
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-white hover:text-primary hover:bg-white/10"
                  aria-expanded={isMobileCompanyOpen}
                >
                  Company
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    isMobileCompanyOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isMobileCompanyOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/30 pl-4">
                    <Link
                      href="/about/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/careers/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-white hover:text-primary hover:bg-white/10"
                  aria-expanded={isMobileResourcesOpen}
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    isMobileResourcesOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isMobileResourcesOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/30 pl-4">
                    <Link
                      href="/blog/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/reviews/"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Reviews
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=gFYjibflN3U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 rounded-lg transition-colors duration-300 text-gray-300 hover:text-primary hover:bg-white/5"
                    >
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://app.ontheflywastesolutions.com"
                onClick={() => trackClientLogin()}
                className="block py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-white hover:text-primary hover:bg-white/10"
              >
                Client Login
              </a>

              <Link
                href="/demo/"
                onClick={() => trackRequestDemo('navbar_mobile')}
                className="block py-3 px-4 rounded-lg transition-colors duration-300 font-bold text-center bg-primary text-white hover:bg-primary-dark mt-2"
              >
                Request App Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
