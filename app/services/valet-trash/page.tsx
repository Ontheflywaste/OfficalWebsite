import type { Metadata } from 'next';
import ValetTrashClient from './ValetTrashClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ServiceSchema from '../../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Door-to-Door Valet Trash Service Orlando - Apartment Communities | Call (407) 274-5019',
  description: 'Professional valet trash service for Orlando, Kissimmee & Central Florida apartment communities. Licensed & insured with 5+ days weekly service. Door-to-door pickup, uniformed staff, 24/7 support. Call (407) 274-5019 for free quote!',
  keywords: 'valet trash service Orlando, doorstep trash pickup Orlando, apartment trash collection Orlando, professional valet trash Florida, multifamily waste services Orlando, top valet trash companies in Orlando, waste management for apartment complexes, valet trash services for student housing, contract valet trash for property managers',
  openGraph: {
    title: 'Door-to-Door Valet Trash Service Orlando | On The Fly',
    description: 'Professional valet trash service for Orlando apartment communities. Licensed & insured with flexible schedules and 24/7 support.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/services/valet-trash/',
    images: ['https://ontheflywastesolutions.com/Images/gallery12813_1920x831@2x.jpg'],
  },
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/valet-trash/',
  },
};

export default function ValetTrashPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: 'Valet Trash', url: '/services/valet-trash/' },
        ]}
      />
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS tracking and a 100% collection guarantee."
        slug="/services/valet-trash/"
      />
      <ValetTrashClient />
    </>
  );
}
