'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { trackRequestDemo } from '../utils/track';

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
      className={`fixed left-4 z-40 md:hidden transition-all duration-300 ease-out ${
        shouldShow
          ? 'bottom-[max(1rem,env(safe-area-inset-bottom))] opacity-100 translate-y-0'
          : 'bottom-0 opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-hidden={!shouldShow}
    >
      {/* A single, compact pill CTA that sits on the LEFT so the HubSpot
          chat bubble (bottom-right) has its own clean corner. The phone
          number is already reachable from the top banner, hero, and
          footer, so the mobile sticky keeps a single primary CTA
          (Request Quote) for clarity. */}
      <Link
        href="/contact/"
        onClick={() => trackRequestDemo('mobile_sticky')}
        className="inline-flex items-center gap-2 bg-primary text-white pl-4 pr-5 py-3 rounded-full font-bold text-sm shadow-[0_10px_30px_-6px_rgba(22,163,74,0.55)] active:scale-[0.97] transition-transform"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
          <FileText className="w-4 h-4" aria-hidden="true" />
        </span>
        Request Quote
      </Link>
    </div>
  );
}
