'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { trackPhoneCall, trackRequestDemo } from '../utils/track';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.25)] px-4 py-3 pb-safe">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link
            href="/contact/"
            onClick={() => trackRequestDemo('mobile_sticky')}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all shadow-md"
          >
            <FileText className="w-5 h-5" />
            Request Quote
          </Link>
          <a
            href="tel:407-274-5019"
            onClick={() => trackPhoneCall('mobile_sticky')}
            className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all"
            aria-label="Call us at (407) 274-5019"
          >
            <Phone className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
