import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Winter Haven, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for apartment communities in Winter Haven, FL. Reliable bulk removal and apartment waste management solutions serving Winter Haven apartment complexes.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-haven-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Winter Haven, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for apartment communities in Winter Haven, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-haven-fl/',
  },
};

const data: CityPageData = {
  city: 'Winter Haven',
  heroAlt: 'Apartment community in Winter Haven FL',
  heroSubtitle:
    'Professional valet trash and bulk removal services for apartment communities in Winter Haven, Florida.',
  introH2: 'Trusted Valet Trash Service for Winter Haven Apartment Communities',
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides comprehensive <strong>valet trash service</strong> to
      apartment communities throughout Winter Haven, FL. Our professional team ensures reliable
      doorstep trash collection with our industry-leading 100% collection guarantee.
    </>,
    <>
      Serving the Chain of Lakes city, we understand the unique needs of{' '}
      <strong>apartment waste management</strong> in Winter Haven's growing community. Our
      comprehensive solutions help property managers maintain clean, attractive properties that
      residents are proud to call home.
    </>,
  ],
  benefits: [
    {
      title: 'GPS-Verified Collection',
      description: 'Real-time tracking ensures every unit is serviced',
    },
    {
      title: '100% Collection Guarantee',
      description: 'SLA-backed service commitment with photo verification',
    },
    {
      title: 'Flexible Service Schedule',
      description: '5-7 nights per week service options available',
    },
  ],
  inlineImageAlt: 'Valet trash service in Winter Haven FL apartment community',
  servicesSubtitle: 'Complete solutions for Winter Haven apartment communities',
  whyH2: 'Why Winter Haven Properties Choose On The Fly',
  whySubtitle: 'Trusted by property managers throughout Winter Haven and Polk County',
  serviceCardDescriptions: {
    valetTrash:
      'Professional doorstep trash collection for your Winter Haven apartment community with GPS tracking and photo verification.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Winter Haven property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Winter Haven residents and property managers.',
  },
  ctaH2: 'Get Started with Valet Trash Service in Winter Haven',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Winter Haven property',
};

export default function WinterHavenServiceAreaPage() {
  return <CityValetTrashTemplate data={data} />;
}
