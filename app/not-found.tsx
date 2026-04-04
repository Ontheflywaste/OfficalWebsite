'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/services/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#049704] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We couldn't find the page you're looking for. It may have been moved or no longer exists.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Redirecting to our services page in <span className="font-bold text-[#049704]">{countdown}</span> seconds...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#049704]"
          >
            <Home className="w-8 h-8 text-[#049704] mb-3" />
            <span className="font-semibold text-gray-900">Home</span>
            <span className="text-sm text-gray-600 mt-1">Return to homepage</span>
          </Link>

          <Link
            href="/services/"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#049704]"
          >
            <Search className="w-8 h-8 text-[#049704] mb-3" />
            <span className="font-semibold text-gray-900">Services</span>
            <span className="text-sm text-gray-600 mt-1">Browse our services</span>
          </Link>

          <Link
            href="/contact/"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#049704]"
          >
            <Phone className="w-8 h-8 text-[#049704] mb-3" />
            <span className="font-semibold text-gray-900">Contact Us</span>
            <span className="text-sm text-gray-600 mt-1">Get in touch</span>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Popular Services in Central Florida
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              href="/services/valet-trash/"
              className="text-[#049704] hover:underline font-medium"
            >
              → Valet Trash Service
            </Link>
            <Link
              href="/services/junk-removal/"
              className="text-[#049704] hover:underline font-medium"
            >
              → Junk Removal
            </Link>
            <Link
              href="/services/bulk-removal/"
              className="text-[#049704] hover:underline font-medium"
            >
              → Bulk Waste Removal
            </Link>
            <Link
              href="/services/pressure-washing/"
              className="text-[#049704] hover:underline font-medium"
            >
              → Pressure Washing
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#049704] hover:text-[#038503] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </Link>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-[#049704] to-[#027502] rounded-xl text-white">
          <p className="font-semibold mb-2">Need immediate assistance?</p>
          <a
            href="tel:407-274-5019"
            className="text-2xl font-bold hover:underline"
          >
            (407) 274-5019
          </a>
          <p className="text-sm mt-2 text-white/90">
            Available 7 days a week, 8am-9pm
          </p>
        </div>
      </div>
    </div>
  );
}
