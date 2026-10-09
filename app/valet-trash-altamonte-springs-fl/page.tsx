import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Altamonte Springs, FL | On The Fly Waste Solutions',
  description: 'Premium valet trash service for Altamonte Springs apartments and condos. Serving Uptown Altamonte, Cranes Roost, and surrounding communities in Seminole County.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-altamonte-springs-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Altamonte Springs, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Altamonte Springs apartment communities.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-altamonte-springs-fl/',
  },
};

export default function ValetTrashAltamonteSpringsPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-altamonte-springs-fl/"
        areaServed={['Altamonte Springs']}
      />
      <ServiceAreaClient
      city="Altamonte Springs"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Uptown Altamonte',
        'Cranes Roost',
        'Spring Lake Hills',
        'Westmonte',
        'Pearl Lake',
        'Sanlando Springs'
      ]}
    />
    </>
  );
}
