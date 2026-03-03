import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Clermont, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Clermont, FL. 100% collection rate guarantee with GPS tracking and photo verification. Serving all Clermont neighborhoods.',
  alternates: {
    canonical: 'https://www.ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Clermont, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Clermont apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://www.ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
};

export default function ValetTrashClermontPage() {
  return (
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
  );
}
