import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service St. Cloud, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in St. Cloud, FL. 100% collection rate guarantee with GPS tracking and photo verification. Serving Osceola County properties.',
  alternates: {
    canonical: 'https://www.ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service St. Cloud, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for St. Cloud apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://www.ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
};

export default function ValetTrashStCloudPage() {
  return (
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
  );
}
