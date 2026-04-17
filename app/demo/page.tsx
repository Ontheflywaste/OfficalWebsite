import type { Metadata } from 'next';
import UnderConstruction from '../components/UnderConstruction';

export const metadata: Metadata = {
  title: 'Request App Demo | On The Fly Waste Solutions',
  description:
    'Our property-manager demo portal is launching soon. Check back to request your access code.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/demo/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DemoPage() {
  return (
    <UnderConstruction
      title="Demo Coming Soon"
      message="We're putting the finishing touches on our property manager demo portal. Please check back shortly to request your access code."
    />
  );
}
