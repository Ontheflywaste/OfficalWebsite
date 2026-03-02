import type { Metadata } from 'next';
import ServiceAreaClient from '../service-areas/ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Bulk Removal Service Orlando, FL | On The Fly Waste Solutions',
  description: 'Professional bulk item pickup and removal for Orlando apartment complexes. Furniture, appliances, and large item removal with photo documentation. Serving property managers across Orlando.',
  alternates: {
    canonical: 'https://www.ontheflywastesolutions.com/bulk-removal-orlando-fl/',
  },
  openGraph: {
    title: 'Bulk Removal Service Orlando, FL | On The Fly Waste Solutions',
    description: 'Scheduled bulk item pickup and removal for Orlando property managers.',
    type: 'website',
    url: 'https://www.ontheflywastesolutions.com/bulk-removal-orlando-fl/',
  },
};

export default function BulkRemovalOrlandoPage() {
  return (
    <ServiceAreaClient
      city="Orlando"
      state="FL"
      service="bulk-removal"
      serviceTitle="Bulk Removal Service"
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
