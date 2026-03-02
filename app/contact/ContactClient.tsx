'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import HubSpotForm from '@/app/components/HubSpotForm';

export default function ContactClient() {

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="relative bg-gradient-to-br from-gray-900 to-[#049704] py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Transform Your
              <span className="block text-[#049704] bg-white px-4 py-2 rounded-lg inline-block mt-2">
                Community Together
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to enhance your property with professional valet trash services? We're here to help you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
                  <HubSpotForm
                    region="na1"
                    portalId="22416220"
                    formId="b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-gradient-to-br from-[#049704] to-[#027502] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:407-274-5019" className="hover:underline">
                          (407) 274-5019
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:info@ontheflywastesolutions.com" className="hover:underline">
                          info@ontheflywastesolutions.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Service Area</p>
                        <p>Central Florida</p>
                        <p className="text-sm text-white/80 mt-1">
                          Including Orlando, Kissimmee, Davenport, and surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p>7 days a week</p>
                        <p className="text-sm text-white/80">8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Licensed & Insured</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">24/7 Customer Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flexible Service Schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#049704] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Eco-Friendly Practices</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52632645705!2d-81.90823199999999!3d28.5383832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Central Florida Service Area"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
