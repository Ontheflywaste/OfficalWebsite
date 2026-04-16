'use client';

import { useEffect } from 'react';

type WebVitalMetric = {
  name: string;
  value: number;
  id: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
};

function report(metric: WebVitalMetric) {
  if (typeof window === 'undefined') return;
  const value = metric.name === 'CLS' ? metric.value * 1000 : metric.value;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'web_vitals',
      metric_name: metric.name,
      metric_value: Math.round(value),
      metric_id: metric.id,
      metric_rating: metric.rating,
    });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    let cancelled = false;
    import('web-vitals')
      .then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
        if (cancelled) return;
        onCLS(report);
        onFCP(report);
        onINP(report);
        onLCP(report);
        onTTFB(report);
      })
      .catch(() => {
        // web-vitals failed to load; ignore silently
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
