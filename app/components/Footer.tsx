'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight, Trash2, Package, Droplet, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <Image
              src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
              alt="On The Fly Waste Solutions Logo"
              width={150}
              height={48}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-6"
              loading="lazy"
            />
            <p className="text-gray-200 mb-6">
              Professional valet trash services in Central Florida. Committed to excellence and environmental responsibility.
            </p>
            <Link
              href="/reviews/"
              className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 w-fit hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              aria-label="View our 5-star Google reviews"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0</span>
            </Link>
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
              {['Home', 'About', 'Services', 'Blog', 'Contact', 'Reviews', 'Careers'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}/`}
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
                { icon: Trash2, text: 'Valet Trash', link: '/services/valet-trash/' },
                { icon: Package, text: 'Junk Removal', link: '/services/junk-removal/' },
                { icon: Package, text: 'Bulk Removal', link: '/services/bulk-removal/' },
                { icon: Droplet, text: 'Pressure Washing', link: '/services/pressure-washing/' }
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
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
            <h3 className="text-lg font-semibold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3" role="list">
              {[
                { text: 'Orlando', link: '/valet-trash-orlando-fl/' },
                { text: 'Kissimmee', link: '/valet-trash-kissimmee-fl/' },
                { text: 'Altamonte Springs', link: '/valet-trash-altamonte-springs-fl/' },
                { text: 'Lake Mary', link: '/valet-trash-lake-mary-fl/' },
                { text: 'Apopka', link: '/valet-trash-apopka-fl/' },
                { text: 'Sanford', link: '/valet-trash-sanford-fl/' },
                { text: 'Winter Park', link: '/valet-trash-winter-park-fl/' },
                { text: 'St. Cloud', link: '/valet-trash-st-cloud-fl/' },
                { text: 'Clermont', link: '/valet-trash-clermont-fl/' },
                { text: 'Davenport', link: '/service-areas/davenport-fl/' },
                { text: 'ChampionsGate', link: '/service-areas/championsgate-fl/' },
                { text: 'Celebration', link: '/service-areas/celebration-fl/' },
                { text: 'Four Corners', link: '/service-areas/four-corners-fl/' },
                { text: 'Winter Haven', link: '/service-areas/winter-haven-fl/' },
                { text: 'Winter Garden', link: '/service-areas/winter-garden-fl/' },
                { text: 'Space Coast', link: '/service-areas/space-coast-fl/' },
                { text: 'Daytona Beach', link: '/service-areas/daytona-beach-fl/' }
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    aria-label={`${item.text} service area`}
                  >
                    <MapPin className="h-3 w-3 mr-2 flex-shrink-0" aria-hidden="true" />
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
                  className="flex items-start space-x-3 text-gray-200 hover:text-white transition-colors duration-300"
                  aria-label="Email us at info@ontheflywastesolutions.com"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="break-all text-sm sm:text-base">info@ontheflywastesolutions.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-200">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p>7 days a week</p>
                    <p>8am-9pm</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="mb-12">
            <h3 className="text-center text-gray-400 text-sm font-semibold mb-8 uppercase tracking-wider">
              Trusted Industry Partnerships
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/Images/faa-full-color-full-logo.png"
                  alt="Florida Apartment Association Member"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/Images/NAA-logo_bgwhite.png"
                  alt="National Apartment Association Member"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/Images/AAGO.png"
                  alt="AAGO Member"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.bbb.org/us/fl/apopka/profile/garbage-removal/on-the-fly-waste-solutions-0733-235977450/#sealclick"
                target="_blank"
                rel="nofollow"
                className="flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity"
                aria-label="View our BBB Accredited Business profile"
              >
                <img
                  src="https://seal-centralflorida.bbb.org/seals/blue-seal-200-42-bbb-235977450.png"
                  alt="On The Fly Waste Solutions BBB Business Review"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} On The Fly Waste Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="/privacy/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
