import type { Metadata } from 'next';
import Script from 'next/script';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Door to Door Valet Trash & Waste Management for HOA, Resort & Multifamily Communities | Central Florida | On The Fly Waste Solutions',
  description: 'On The Fly Waste Solutions provides door to door trash collection, doorstep valet trash service, bulk removal, and pressure washing for HOA, resort style, condo, and multifamily communities in Orlando, Kissimmee, Champions Gate, Lake Nona & Central Florida.',
  keywords: 'door to door trash collection, doorstep trash collection service, doorstep valet trash service, valet trash service HOA, resort community trash collection service, condo community valet trash provider, luxury community valet trash service, gated community valet trash service, valet trash service multifamily, HOA waste management company Central Florida, Orlando door to door trash collection, Kissimmee valet trash service, Lake Nona valet trash service, Champions Gate Florida valet trash, Osceola County waste management, Orange County valet trash company, compactor enclosure management service, pet waste station service apartment, bulk item removal apartment community',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/',
  },
  openGraph: {
    title: 'Door to Door Valet Trash & Waste Management for HOA, Resort & Multifamily Communities | Central Florida',
    description: 'Trusted by HOA boards, resort communities, condo associations, and multifamily property managers across Central Florida for door to door trash collection and doorstep valet trash service.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp',
        width: 1200,
        height: 630,
        alt: 'On The Fly Waste Solutions — door to door valet trash service for HOA, resort style, and condo communities in Central Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Door to Door Valet Trash for HOA, Resort & Multifamily Communities | Central Florida',
    description: 'Trusted door to door trash collection and doorstep valet trash service for HOA, resort style, condo, and multifamily communities across Central Florida.',
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
