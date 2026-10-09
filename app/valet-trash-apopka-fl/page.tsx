import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Apopka, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Apopka, FL. GPS-verified routes with daily route confirmation and verified missed pickups made right. Trusted by property managers.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Apopka, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Apopka apartment communities with GPS-verified routes and daily route confirmation.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
};

export default function ValetTrashApopkaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-apopka-fl/"
        areaServed={['Apopka']}
      />
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
    </>
  );
}
