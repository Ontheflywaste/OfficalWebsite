import type { Metadata } from 'next';
import DemoClient from './DemoClient';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Request App Demo | On The Fly Waste Solutions',
  description:
    "See our GPS-verified valet trash app in action. Request your private access code to explore the property manager portal with live route tracking, photo verification, and service reports.",
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/demo/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Request App Demo | On The Fly Waste Solutions',
    description:
      "See our GPS-verified valet trash app in action. Request your private access code to explore the property manager portal.",
    url: 'https://ontheflywastesolutions.com/demo/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request App Demo | On The Fly Waste Solutions',
    description:
      "See our GPS-verified valet trash app in action — live route tracking, photo verification, and service reports.",
  },
};

export default function DemoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Request App Demo', url: '/demo/' },
        ]}
      />
      <DemoClient />
    </>
  );
}
