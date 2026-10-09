import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | On The Fly Waste Solutions - Orlando FL',
  description: 'Join the On The Fly Waste Solutions team in Central Florida. Apply online for valet trash collection, operations, and supervisor roles. Competitive pay, growth from within, and a crew that has your back.',
  keywords: 'careers waste management orlando, valet trash jobs central florida, waste solutions employment, trash collection jobs orlando',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/careers/',
  },
  openGraph: {
    title: 'Careers | Join Our Team | On The Fly Waste Solutions',
    description: 'Apply online and join Central Florida\'s fastest-growing waste management team.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/careers/',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
