import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, MapPin, Building2, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HubSpotForm from '../components/HubSpotForm';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Celebration, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for luxury apartment communities, vacation rentals, and resort properties in Celebration, FL. Reliable bulk removal and apartment waste management solutions.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-celebration-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Celebration, FL | On The Fly Waste Solutions',
    description: 'Professional valet trash service for luxury apartment communities and resort properties in Celebration, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-celebration-fl/',
  },
};

export default function CelebrationServiceAreaPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/Images/ApartmentBuildingHero.webp"
            alt="Luxury apartment community in Celebration FL"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-white text-lg font-semibold">Serving Celebration, FL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Valet Trash Service in Celebration, FL
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Premium valet trash and bulk removal services for luxury apartment communities, vacation rentals, and resort properties in Celebration, Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" />
                (407) 274-5019
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Premium Valet Trash Service for Celebration's Master-Planned Community
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  On The Fly Waste Solutions provides elite <strong>valet trash service</strong> to luxury apartment communities, vacation rentals, and resort properties throughout Celebration, FL. Our professional team delivers white-glove service with our industry-leading 100% collection guarantee.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Serving Disney's renowned master-planned community, we understand the elevated standards expected in Celebration. Our comprehensive <strong>apartment waste management</strong> solutions help property managers maintain the pristine environments that make Celebration one of Central Florida's most desirable addresses for <strong>luxury apartment communities</strong> and <strong>resort properties</strong>.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">GPS-Verified Collection</h3>
                      <p className="text-gray-600">Real-time tracking with photo verification for every pickup</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">100% Collection Guarantee</h3>
                      <p className="text-gray-600">SLA-backed commitment perfect for Celebration's high standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Resort-Grade Service</h3>
                      <p className="text-gray-600">White-glove service tailored for upscale communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="/Images/Valettrashimage.jpg"
                  alt="Valet trash service in Celebration FL luxury apartment community"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Collection Rate</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Waste Management Services
              </h2>
              <p className="text-xl text-gray-600">
                Premium solutions for Celebration luxury properties
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Valet Trash Service</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium doorstep trash collection for Celebration luxury communities with GPS tracking and photo verification.
                </p>
                <Link href="/services/valet-trash/" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Removal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Scheduled bulk item pickup for furniture, appliances, and large items at your Celebration property.
                </p>
                <Link href="/services/bulk-removal/" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fast and eco-friendly junk removal services for Celebration residents and property managers.
                </p>
                <Link href="/services/junk-removal/" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Celebration Properties Choose On The Fly
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by premier resort communities and luxury apartment complexes
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Collection Guarantee</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-gray-700 font-semibold">Units Served</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">7</div>
                <div className="text-gray-700 font-semibold">Days a Week</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-700 font-semibold">5-Star Rated</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-8 border-primary">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get Started with Premium Valet Trash Service in Celebration
                </h2>
                <p className="text-xl text-gray-600">
                  Contact us today for a free quote tailored to your Celebration property
                </p>
              </div>
              <HubSpotForm
                region="na1"
                portalId="22416220"
                formId="b6cf29bc-2fdc-48cb-adfc-0d201a5aa15d"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
