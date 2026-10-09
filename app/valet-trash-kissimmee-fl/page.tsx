import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Kissimmee, FL | On The Fly Waste Solutions',
  description: 'Reliable valet trash service for apartment communities and resorts in Kissimmee, FL. Serving properties near Disney, Old Town, and throughout Osceola County.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-kissimmee-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Kissimmee, FL | On The Fly Waste Solutions',
    description: 'Professional valet trash service for Kissimmee apartment communities and resort properties.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-kissimmee-fl/',
  },
};

export default function ValetTrashKissimmeePage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-kissimmee-fl/"
        areaServed={['Kissimmee']}
      />
      <ServiceAreaClient
      city="Kissimmee"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Celebration',
        'Poinciana',
        'Old Town',
        'West Kissimmee',
        'East Kissimmee',
        'Buenaventura Lakes',
        'Reunion',
        'Champions Gate'
      ]}
    />
    </>
  );
}
