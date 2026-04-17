import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Space Coast, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments and condos in Space Coast, FL. Serving Melbourne, Palm Bay, Cocoa Beach, and surrounding areas. Call (407) 274-5019 for a free quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-space-coast-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Space Coast, FL | On The Fly Waste Solutions',
    description: 'Professional valet trash service for apartments and condos in Space Coast, FL. Serving Melbourne, Palm Bay, Cocoa Beach, and surrounding areas.',
    type: 'website',
  },
};

const neighborhoods = [
  'Melbourne',
  'Palm Bay',
  'Cocoa Beach',
  'Cocoa',
  'Rockledge',
  'Titusville',
  'Merritt Island',
  'Satellite Beach',
  'Indian Harbour Beach',
  'Cape Canaveral',
  'Viera',
  'West Melbourne'
];

export default function SpaceCoastPage() {
  return (
    <ServiceAreaClient
      city="Space Coast"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={neighborhoods}
    />
  );
}
