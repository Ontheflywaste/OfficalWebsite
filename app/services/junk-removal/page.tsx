import type { Metadata } from 'next';
import JunkRemovalClient from './JunkRemovalClient';

export const metadata: Metadata = {
  title: 'Professional Junk Removal Services Orlando FL | On The Fly',
  description: 'Fast, affordable junk removal for homes and businesses in Central Florida. Furniture, appliances, estate cleanouts, and more. Same-day service available.',
  keywords: 'junk removal orlando, furniture removal, appliance disposal, estate cleanout, same day junk removal central florida',
};

export default function JunkRemovalPage() {
  return <JunkRemovalClient />;
}
