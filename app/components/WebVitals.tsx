'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const sendMetric = (metric: { name: string; value: number; rating?: string; id: string }) => {
          const body = JSON.stringify({
            name: metric.name,
            value: metric.value,
            rating: metric.rating,
            id: metric.id,
          });

          const url = '/api/vitals';

          if (navigator.sendBeacon) {
            navigator.sendBeacon(url, body);
          } else {
            fetch(url, { body, method: 'POST', keepalive: true });
          }
        };

        onCLS(sendMetric);
        onFCP(sendMetric);
        onLCP(sendMetric);
        onTTFB(sendMetric);
        onINP(sendMetric);
      }).catch(() => {
      });
    }
  }, []);

  return null;
}
