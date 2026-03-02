'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    HubSpotConversations?: {
      widget: {
        refresh: () => void;
        load: () => void;
        remove: () => void;
      };
    };
  }
}

export default function HubSpotChat() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.HubSpotConversations?.widget) {
      try {
        window.HubSpotConversations.widget.refresh();
      } catch (error) {
        console.error('Error refreshing HubSpot chat:', error);
      }
    }
  }, [pathname]);

  return (
    <Script
      id="hs-script-loader"
      src="//js.hs-scripts.com/22416220.js"
      strategy="afterInteractive"
    />
  );
}
