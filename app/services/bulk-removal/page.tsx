import type { Metadata } from 'next';
import BulkRemovalClient from './BulkRemovalClient';

export const metadata: Metadata = {
  title: 'Bulk Removal Services for Apartments & Properties | On The Fly',
  description: 'Professional bulk item removal for apartment communities, HOAs, and residents in Central Florida. Furniture, appliances, and oversized items removed quickly.',
  keywords: 'bulk removal orlando, furniture removal apartments, bulk pickup service, apartment bulk waste, property bulk removal central florida',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/bulk-removal/',
  },
};

export default function BulkRemovalPage() {
  return <BulkRemovalClient />;
}
