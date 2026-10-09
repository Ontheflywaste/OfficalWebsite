import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Clermont, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Clermont, FL. GPS-verified routes with daily route confirmation and verified missed pickups made right. Serving all Clermont neighborhoods.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Clermont, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Clermont apartment communities with GPS-verified routes and daily route confirmation.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
};

export default function ValetTrashClermontPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-clermont-fl/"
        areaServed={['Clermont']}
      />
      <ServiceAreaClient
      city="Clermont"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Downtown Clermont',
        'South Lake',
        'Legends',
        'Hancock Landing',
        'Lake Ridge',
        'Champions Ridge',
        'Clermont Landing',
        'Monteverde'
      ]}
    />
    </>
  );
}
