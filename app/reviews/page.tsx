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
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Encore Resort at Reunion - On The Fly Waste Solutions Testimonial",
    "description": "Community Manager Aura Zeland and Vendor Supervisor William Barber from Encore Resort at Reunion discuss why On The Fly is the most reliable valet trash partner they've ever worked with. Serving over 700 units.",
    "thumbnailUrl": "https://i.ytimg.com/vi/gFYjibflN3U/maxresdefault.jpg",
    "uploadDate": "2025-03-02",
    "contentUrl": "https://www.youtube.com/watch?v=gFYjibflN3U",
    "embedUrl": "https://www.youtube.com/embed/gFYjibflN3U",
    "publisher": {
      "@type": "Organization",
      "name": "On The Fly Waste Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ontheflywastesolutions.com/logos/white-logo.png"
      }
    }
  };

  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <ReviewsClient />
    </>
  );
}
