import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
  description: 'On The Fly Waste Solutions provides professional valet trash, bulk removal, and pressure washing services for apartment communities and HOAs in Orlando, Kissimmee & Central Florida.',
  keywords: 'valet trash service orlando, junk removal orlando, bulk waste removal central florida, apartment trash service, property management waste solutions',
  alternates: {
    canonical: 'https://www.ontheflywastesolutions.com/',
  },
  openGraph: {
    title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
    description: 'Trusted by property managers across Central Florida for reliable valet trash and waste management solutions.',
    type: 'website',
    url: 'https://www.ontheflywastesolutions.com/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp',
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
    images: ['https://www.ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp'],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
