'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { trackPhoneCall, trackRequestDemo } from '../utils/track';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide when the HubSpot chat panel is expanded so it can't overlap
  // the chat's text input on mobile.
  useEffect(() => {
    const detectChatOpen = () => {
      const container = document.getElementById('hubspot-messages-iframe-container');
      if (!container) {
        setIsChatOpen(false);
        return;
      }
      const rect = container.getBoundingClientRect();
      // Closed bubble is ~70 px wide; opened panel is >= 300 px wide
      // and typically most of the viewport height on mobile.
      setIsChatOpen(rect.width >= 300 || rect.height >= 300);
    };

    detectChatOpen();

    const observer = new MutationObserver(detectChatOpen);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    window.addEventListener('resize', detectChatOpen, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', detectChatOpen);
    };
  }, []);

  const shouldShow = isVisible && !isChatOpen;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        shouldShow ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!shouldShow}
    >
      {/* pr-24 leaves a 96 px gutter on the right so the HubSpot chat
          bubble (which sits at bottom-right) never overlaps either CTA. */}
      <div className="bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.25)] pl-4 pr-24 py-3 pb-safe">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <a
            href="tel:407-274-5019"
            onClick={() => trackPhoneCall('mobile_sticky')}
            className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all flex-shrink-0"
            aria-label="Call us at (407) 274-5019"
          >
            <Phone className="w-6 h-6 text-white" aria-hidden="true" />
          </a>
          <Link
            href="/contact/"
            onClick={() => trackRequestDemo('mobile_sticky')}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all shadow-md"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
