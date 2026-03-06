import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us - On The Fly Waste Solutions | Florida Waste Management Leaders',
  description: 'Learn about On The Fly Waste Solutions, Central Florida\'s premier valet trash and waste management company. Family-owned, locally operated, and committed to excellence since our founding.',
  keywords: 'about on the fly, waste management company florida, valet trash company, orlando waste services, florida waste solutions',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/about/',
  },
  openGraph: {
    title: 'About Us - On The Fly Waste Solutions',
    description: 'Central Florida\'s premier valet trash and waste management company. Family-owned and locally operated.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/about/',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/artemistradeshow.jpg',
        width: 1200,
        height: 630,
        alt: 'On The Fly Waste Solutions Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - On The Fly Waste Solutions',
    description: 'Central Florida\'s premier valet trash and waste management company. Family-owned and locally operated.',
    images: ['https://ontheflywastesolutions.com/Images/artemistradeshow.jpg'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
