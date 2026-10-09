import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | On The Fly Waste Solutions - Orlando FL',
  description: 'Now hiring trash collectors, driver/collectors, and sales reps in Central Florida. Apply online in two minutes and a real person will get back to you.',
  keywords: 'careers waste management orlando, valet trash jobs central florida, waste solutions employment, trash collection jobs orlando',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/careers/',
  },
  openGraph: {
    title: 'Careers | Join Our Team | On The Fly Waste Solutions',
    description: 'Now hiring trash collectors, driver/collectors, and sales reps. Apply online and join Central Florida\'s fastest-growing waste management team.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/careers/',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
