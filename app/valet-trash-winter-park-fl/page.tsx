import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service Winter Park, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Winter Park, FL. GPS-verified routes with daily route confirmation and verified missed pickups made right. Premium service for luxury properties.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Winter Park, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Winter Park apartment communities with GPS-verified routes and daily route confirmation.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
};

export default function ValetTrashWinterParkPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-winter-park-fl/"
        areaServed={['Winter Park']}
      />
      <ServiceAreaClient
      city="Winter Park"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Downtown Winter Park',
        'Park Avenue',
        'College Quarter',
        'Hannibal Square',
        'Mead Garden',
        'Aloma',
        'Howell Branch',
        'Langford Park'
      ]}
    />
    </>
  );
}
