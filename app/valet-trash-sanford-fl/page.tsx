import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Sanford, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Sanford, FL. 100% collection commitment with GPS-tracked truck routing and same-night missed-pickup cure. Reliable service for Seminole County.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Sanford, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Sanford apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
};

export default function ValetTrashSanfordPage() {
  return (
    <ServiceAreaClient
      city="Sanford"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Historic Downtown Sanford',
        'Georgetown',
        'Goldsboro',
        'Lake Monroe',
        'Sanford Airport',
        'Crystal Lake',
        'Ravenna Park',
        'Lake Mary Boulevard'
      ]}
    />
  );
}
