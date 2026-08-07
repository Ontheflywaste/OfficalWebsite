import type { Metadata } from 'next';
import ValetTrashClient from './ValetTrashClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ServiceSchema from '../../components/ServiceSchema';
import FaqSchema from '../../components/FaqSchema';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: 'Valet Trash Service for HOA & Resort Communities | Central Florida',
  description: 'Door-to-door valet trash for HOA, resort, and multifamily communities across Central Florida — 7 nights a week, GPS-verified routes, and photo documentation when it matters, backed by a 100% collection guarantee. Call (407) 274-5019.',
  keywords: 'valet trash service, doorstep trash collection, door to door trash collection, HOA valet trash, resort community valet trash, gated community valet trash, multifamily valet trash, Central Florida valet trash, doorstep trash pickup',
  openGraph: {
    title: 'Valet Trash Service for HOA & Resort Communities | Central Florida',
    description: 'Reliable door-to-door valet trash across Central Florida — 7 nights a week, GPS-verified, photo-documented when it matters, backed by a 100% collection guarantee.',
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
      <FaqSchema faqs={faqs} />
      <ValetTrashClient />
    </>
  );
}
