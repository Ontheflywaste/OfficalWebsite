import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Valet Trash Service Winter Park, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Winter Park, FL. 100% collection rate guarantee with GPS tracking and photo verification. Premium service for luxury properties.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Winter Park, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Winter Park apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
};

export default function ValetTrashWinterParkPage() {
  return (
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
  );
}
