import type { Metadata } from 'next';
import DemoClient from './DemoClient';

export const metadata: Metadata = {
  title: 'Try the On The Fly App — On The Fly Waste Solutions',
  description:
    'Two easy ways to see the On The Fly app: request a self-guided demo link or book a live Zoom walkthrough. GPS-verified routes, photo documentation, and nightly service visibility for resort communities and HOAs across Central Florida.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/demo/',
  },
  openGraph: {
    title: 'Try the On The Fly App — On The Fly Waste Solutions',
    description:
      'Explore the On The Fly app on your own with a demo link, or book a live Zoom walkthrough — proof-of-service valet trash for resort communities and HOAs across Central Florida.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/demo/',
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
