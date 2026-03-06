import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Lake Mary, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for Lake Mary apartments and luxury communities. Serving Heathrow, Timacuan, and all Lake Mary neighborhoods in Seminole County.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-lake-mary-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Lake Mary, FL | On The Fly Waste Solutions',
    description: 'Premium valet trash service for Lake Mary apartment and luxury communities.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-lake-mary-fl/',
  },
};

export default function ValetTrashLakeMaryPage() {
  return (
    <ServiceAreaClient
      city="Lake Mary"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Heathrow',
        'Timacuan',
        'Markham Woods',
        'Colonial Town Park',
        'Bella Vista',
        'Greenwood Lakes'
      ]}
    />
  );
}
