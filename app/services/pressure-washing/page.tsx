import type { Metadata } from 'next';
import PressureWashingClient from './PressureWashingClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ServiceSchema from '../../components/ServiceSchema';
import FaqSchema from '../../components/FaqSchema';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: 'Professional Pressure Washing Services Central Florida | On The Fly',
  description: 'Expert pressure washing for apartment communities, commercial properties, and HOAs. Building exteriors, driveways, walkways, and more in Orlando & Central Florida.',
  keywords: 'pressure washing orlando, commercial pressure washing, apartment pressure washing, property exterior cleaning central florida',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/pressure-washing/',
  },
};

export default function PressureWashingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Pressure Washing', url: '/services/pressure-washing/' },
        ]}
      />
      <ServiceSchema
        name="Pressure Washing"
        description="Commercial pressure washing for apartment communities, common areas, building exteriors, walkways, and driveways across Orlando and Central Florida."
        slug="/services/pressure-washing/"
      />
      <FaqSchema faqs={faqs} />
      <PressureWashingClient />
    </>
  );
}
