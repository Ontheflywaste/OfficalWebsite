import type { MetadataRoute } from 'next';

// Minimal manifest for the marketing site. Deliberately NO `display` and NO
// `start_url`: without them browsers treat the site as a plain web page and
// never offer an install prompt. The real app lives at
// app.ontheflywastesolutions.com — this site must not look installable.
// Icons are opaque white tiles resampled from the official mark masters
// (OTFapp1 assets/app-icon/official); see the comment on metadata.icons in
// layout.tsx.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'On The Fly Waste Solutions',
    short_name: 'On The Fly',
    description:
      'Professional valet trash, bulk removal, and pressure washing services for Central Florida communities.',
    theme_color: '#16a34a',
    background_color: '#ffffff',
    icons: [
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
