import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Apopka, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Apopka, FL. 100% collection commitment with GPS-tracked truck routing and same-night missed-pickup cure. Trusted by property managers.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Apopka, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Apopka apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
};

export default function ValetTrashApopkaPage() {
  return (
    <ServiceAreaClient
      city="Apopka"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Rock Springs',
        'Kelly Park',
        'Errol Estate',
        'Piedmont Lakes',
        'Wellesley',
        'Wekiva Springs',
        'Plymouth',
        'Sorrento'
      ]}
    />
  );
}
