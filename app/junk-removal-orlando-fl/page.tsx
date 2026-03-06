import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Junk Removal Service Orlando, FL | On The Fly Waste Solutions',
  description: 'Fast, professional junk removal service in Orlando, FL. Same-day service available for residential and commercial properties. Licensed, insured, and eco-friendly disposal.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/junk-removal-orlando-fl/',
  },
  openGraph: {
    title: 'Junk Removal Service Orlando, FL | On The Fly Waste Solutions',
    description: 'Professional junk removal service for Orlando residents and businesses.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/junk-removal-orlando-fl/',
  },
};

export default function JunkRemovalOrlandoPage() {
  return (
    <ServiceAreaClient
      city="Orlando"
      state="FL"
      service="junk-removal"
      serviceTitle="Junk Removal Service"
      neighborhoods={[
        'Downtown Orlando',
        'Lake Nona',
        'Baldwin Park',
        'Colonialtown',
        'College Park',
        'Thornton Park',
        'Mills 50',
        'Audubon Park',
        'Metrowest',
        'Dr. Phillips',
        'Millenia',
        'Waterford Lakes'
      ]}
    />
  );
}
