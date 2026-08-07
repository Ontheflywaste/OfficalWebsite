import type { Metadata } from 'next';
import BulkRemovalClient from './BulkRemovalClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ServiceSchema from '../../components/ServiceSchema';
import FaqSchema from '../../components/FaqSchema';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: 'Bulk Removal Services for Apartments & Properties | On The Fly',
  description: 'Professional bulk item removal for apartment communities, HOAs, and residents in Central Florida. Furniture, appliances, and oversized items removed quickly.',
  keywords: 'bulk removal orlando, furniture removal apartments, bulk pickup service, apartment bulk waste, property bulk removal central florida',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/bulk-removal/',
  },
};

export default function BulkRemovalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Bulk Removal', url: '/services/bulk-removal/' },
        ]}
      />
      <ServiceSchema
        name="Bulk Removal"
        description="Scheduled and on-demand bulk item pickup for apartment communities, HOAs, and property managers in Central Florida. Furniture, appliances, mattresses, and oversized items."
        slug="/services/bulk-removal/"
      />
      <FaqSchema faqs={faqs} />
      <BulkRemovalClient />
    </>
  );
}
