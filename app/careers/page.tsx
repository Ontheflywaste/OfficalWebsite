import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | On The Fly Waste Solutions - Orlando FL',
  description: 'Join the On The Fly Waste Solutions team in Central Florida. Browse open positions in valet trash collection, operations, and sales. Competitive pay, growth opportunities, and a great team culture.',
  keywords: 'careers waste management orlando, valet trash jobs central florida, waste solutions employment, trash collection jobs orlando',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/careers/',
  },
  openGraph: {
    title: 'Careers | Join Our Team | On The Fly Waste Solutions',
    description: 'Browse open positions and join Central Florida\'s fastest-growing waste management team.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/careers/',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
