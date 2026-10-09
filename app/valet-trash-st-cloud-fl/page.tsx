import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service St. Cloud, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in St. Cloud, FL. GPS-verified routes with daily route confirmation and verified missed pickups made right. Serving Osceola County properties.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service St. Cloud, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for St. Cloud apartment communities with GPS-verified routes and daily route confirmation.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
};

export default function ValetTrashStCloudPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-st-cloud-fl/"
        areaServed={['St. Cloud']}
      />
      <ServiceAreaClient
      city="St. Cloud"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      neighborhoods={[
        'Downtown St. Cloud',
        'East Lake Tohopekaliga',
        'Lakefront Park',
        'Narcoossee',
        'Harmony',
        'Nolte',
        'Canoe Creek',
        'Buenaventura Lakes'
      ]}
    />
    </>
  );
}
