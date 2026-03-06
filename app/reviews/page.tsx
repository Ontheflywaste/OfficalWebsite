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
    "name": "Encore Resort at Reunion - On The Fly Waste Solutions Testimonial",
    "description": "Community Manager Aura Zeland and Vendor Supervisor William Barber from Encore Resort at Reunion discuss why On The Fly is the most reliable valet trash partner they've ever worked with. Serving over 700 units in Orlando, Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/gFYjibflN3U/maxresdefault.jpg",
    "uploadDate": "2024-01-01",
    "contentUrl": "https://www.youtube.com/watch?v=gFYjibflN3U",
    "embedUrl": "https://www.youtube.com/embed/gFYjibflN3U",
    "duration": "PT2M",
    "publisher": {
      "@type": "Organization",
      "name": "On The Fly Waste Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ontheflywastesolutions.com/logos/white-logo.png"
      }
    }
  };

  const videoSchema2 = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "The Aston at Uptown - On The Fly Waste Solutions Testimonial",
    "description": "Property management team at The Aston at Uptown shares their experience with On The Fly Waste Solutions' reliable valet trash and waste management services in Orlando, Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/3tCkAWYyJuE/maxresdefault.jpg",
    "uploadDate": "2024-01-01",
    "contentUrl": "https://www.youtube.com/watch?v=3tCkAWYyJuE",
    "embedUrl": "https://www.youtube.com/embed/3tCkAWYyJuE",
    "duration": "PT2M",
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
