import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Sanford, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Sanford, FL. GPS-verified routes with daily route confirmation and verified missed pickups made right. Reliable service for Seminole County.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Sanford, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Sanford apartment communities with GPS-verified routes and daily route confirmation.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
};

export default function ValetTrashSanfordPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-sanford-fl/"
        areaServed={['Sanford']}
      />
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
    </>
  );
}
