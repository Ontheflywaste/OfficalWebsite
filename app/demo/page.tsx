import type { Metadata } from 'next';
import DemoClient from './DemoClient';

export const metadata: Metadata = {
  title: 'Schedule a Live Demo — On The Fly Waste Solutions',
  description:
    'Schedule a live, guided demo of the On The Fly valet trash platform for resort communities, HOAs, and property managers across Central Florida — GPS-verified routes, photo documentation, and real service visibility.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/demo/',
  },
  openGraph: {
    title: 'Schedule a Live Demo — On The Fly Waste Solutions',
    description:
      'A guided walkthrough of GPS-verified valet trash service for resort communities and HOAs across Central Florida.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/demo/',
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
