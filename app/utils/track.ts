/**
 * Lightweight wrapper around dataLayer / gtag for custom event tracking.
 * Safe to call from any client component — no-ops on the server.
 */

type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: TrackParams = {}): void {
  if (typeof window === 'undefined') return;
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...params });
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch {
    // analytics failures should never break the UI
  }
}

// Named helpers for the events we currently care about.
export const trackClientLogin = () =>
  trackEvent('client_login_click', { destination: 'app.ontheflywastesolutions.com' });

export const trackRequestDemo = (location: string) =>
  trackEvent('request_demo_click', { location });

export const trackPhoneCall = (location: string) =>
  trackEvent('phone_call_click', { phone: '407-274-5019', location });
