import type { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Customer Reviews | On The Fly Waste Solutions',
  description: 'Read reviews from property managers, HOAs, and residents who trust On The Fly Waste Solutions for valet trash, junk removal, and waste management services in Orlando.',
  openGraph: {
    title: 'Customer Reviews | On The Fly Waste Solutions',
    description: 'Real reviews from satisfied clients. See why property managers choose On The Fly.',
    type: 'website',
  },
};

export default function ReviewsPage() {
  const videoSchema1 = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "On The Fly Waste Solutions - Customer Reviews & Service Overview",
    "description": "Watch what customers and apartment communities say about On The Fly Waste Solutions valet trash and bulk removal services in Orlando and Central Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/gFYjibflN3U/maxresdefault.jpg",
    "uploadDate": "2024-01-01T00:00:00+00:00",
    "embedUrl": "https://www.youtube.com/embed/gFYjibflN3U",
    "contentUrl": "https://www.youtube.com/watch?v=gFYjibflN3U"
  };

  const videoSchema2 = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "On The Fly Waste Solutions - Valet Trash Service Testimonials Orlando FL",
    "description": "Real testimonials from satisfied apartment communities and residents about On The Fly Waste Solutions reliable valet trash pickup, junk removal, and waste solutions in Central Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/3tCkAWYyJuE/maxresdefault.jpg",
    "uploadDate": "2024-01-01T00:00:00+00:00",
    "embedUrl": "https://www.youtube.com/embed/3tCkAWYyJuE",
    "contentUrl": "https://www.youtube.com/watch?v=3tCkAWYyJuE"
  };

  return (
    <>
      <Script
        id="video-schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema1) }}
      />
      <Script
        id="video-schema-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema2) }}
      />
      <ReviewsClient />
    </>
  );
}
