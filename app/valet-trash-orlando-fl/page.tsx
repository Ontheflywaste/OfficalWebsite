import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Orlando, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Orlando, FL. 100% collection rate guarantee with GPS tracking and photo verification. Serving all Orlando neighborhoods.',
  alternates: {
    canonical: 'https://www.ontheflywastesolutions.com/valet-trash-orlando-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Orlando, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Orlando apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://www.ontheflywastesolutions.com/valet-trash-orlando-fl/',
  },
};

export default function ValetTrashOrlandoPage() {
  return (
    <ServiceAreaClient
      city="Orlando"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Downtown Orlando',
        'Lake Nona',
        'Baldwin Park',
        'Colonialtown',
        'College Park',
        'Thornton Park',
        'Mills 50',
        'Audubon Park',
        'Metrowest',
        'Dr. Phillips',
        'Millenia',
        'Waterford Lakes'
      ]}
    />
  );
}
