import type { Metadata } from 'next';
import JunkRemovalClient from './JunkRemovalClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ServiceSchema from '../../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Professional Junk Removal Services Orlando FL | On The Fly',
  description: 'Fast, affordable junk removal for homes and businesses in Central Florida. Furniture, appliances, estate cleanouts, and more. Same-day service available.',
  keywords: 'junk removal orlando, furniture removal, appliance disposal, estate cleanout, same day junk removal central florida',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/junk-removal/',
  },
};

export default function JunkRemovalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Junk Removal', url: '/services/junk-removal/' },
        ]}
      />
      <ServiceSchema
        name="Junk Removal"
        description="Professional junk removal for homes, businesses, and apartment communities in Orlando and Central Florida. Furniture, appliances, estate cleanouts, and same-day service options."
        slug="/services/junk-removal/"
      />
      <JunkRemovalClient />
    </>
  );
}
