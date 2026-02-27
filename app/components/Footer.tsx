'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight, Trash2, Package, Droplet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="/Images/OnTheFlyRecycleLogoWhitenobackground.png"
              alt="On The Fly Waste Solutions Logo"
              className="h-12 sm:h-14 md:h-16 object-contain mb-6"
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

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
