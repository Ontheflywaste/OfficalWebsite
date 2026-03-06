import type { Metadata } from 'next';
import Script from 'next/script';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
  description: 'On The Fly Waste Solutions provides professional valet trash, bulk removal, and pressure washing services for apartment communities and HOAs in Orlando, Kissimmee & Central Florida.',
  keywords: 'valet trash service orlando, junk removal orlando, bulk waste removal central florida, apartment trash service, property management waste solutions',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/',
  },
  openGraph: {
    title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
    description: 'Trusted by property managers across Central Florida for reliable valet trash and waste management solutions.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp',
        width: 1200,
        height: 630,
        alt: 'On The Fly Waste Solutions - Valet Trash Services Orlando FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Valet Trash & Junk Removal Services Orlando FL',
    description: 'Trusted by property managers across Central Florida for reliable valet trash and waste management solutions.',
    images: ['https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp'],
  },
};

export default function HomePage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "On The Fly Waste Solutions - Professional Valet Trash & Junk Removal Services",
    "description": "See how On The Fly Waste Solutions provides professional valet trash pickup, junk removal, and waste management services for apartment communities and residents in Central Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/gFYjibflN3U/maxresdefault.jpg",
    "uploadDate": "2024-01-01T00:00:00+00:00",
    "embedUrl": "https://www.youtube.com/embed/gFYjibflN3U",
    "contentUrl": "https://www.youtube.com/watch?v=gFYjibflN3U"
  };

  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <HomeClient />
    </>
  );
}
