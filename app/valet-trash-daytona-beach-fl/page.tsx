import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Daytona Beach, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments and condos in Daytona Beach, FL. Serving Ormond Beach, Port Orange, DeLand, and surrounding areas. Call (407) 274-5019 for a free quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-daytona-beach-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Daytona Beach, FL | On The Fly Waste Solutions',
    description: 'Professional valet trash service for apartments and condos in Daytona Beach, FL. Serving Ormond Beach, Port Orange, DeLand, and surrounding areas.',
    type: 'website',
  },
};

const neighborhoods = [
  'Daytona Beach',
  'Ormond Beach',
  'Port Orange',
  'DeLand',
  'Daytona Beach Shores',
  'Holly Hill',
  'South Daytona',
  'Edgewater',
  'New Smyrna Beach',
  'Ponce Inlet',
  'Deltona',
  'Orange City'
];

export default function DaytonaBeachPage() {
  return (
    <ServiceAreaClient
      city="Daytona Beach"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={neighborhoods}
    />
  );
}
