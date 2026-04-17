import type { Metadata } from 'next';
import UnderConstruction from '../components/UnderConstruction';

export const metadata: Metadata = {
  title: 'Client Login | On The Fly Waste Solutions',
  description:
    'The On The Fly client portal is launching soon. Sign in will be available here shortly.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/client-login/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClientLoginPage() {
  return (
    <UnderConstruction
      title="Client Login Coming Soon"
      message="Our secure property-manager portal is almost ready. Please check back shortly to sign in and manage your community."
    />
  );
}
