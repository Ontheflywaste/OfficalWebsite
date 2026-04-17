import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';

export const metadata: Metadata = {
  title: 'Valet Trash Service in ChampionsGate, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for luxury apartment communities, vacation rentals, and resort properties in ChampionsGate, FL. Reliable bulk removal and apartment waste management solutions.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-championsgate-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in ChampionsGate, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for luxury apartment communities and resort properties in ChampionsGate, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-championsgate-fl/',
  },
};

const data: CityPageData = {
  city: 'ChampionsGate',
  heroAlt: 'Luxury resort property in ChampionsGate FL',
  heroSubtitle:
    'Premium valet trash and bulk removal services for luxury apartment communities, vacation rentals, and resort properties in ChampionsGate, Florida.',
  introH2: 'Premium Valet Trash Service for ChampionsGate Luxury Communities',
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides elite <strong>valet trash service</strong> to luxury
      apartment communities, vacation rentals, and resort properties throughout ChampionsGate, FL.
      Our professional team delivers white-glove service with our industry-leading 100% collection
      guarantee.
    </>,
    <>
      Serving the prestigious ChampionsGate area, we understand the elevated standards required
      for <strong>luxury apartment communities</strong> and <strong>resort properties</strong>.
      Our comprehensive <strong>apartment waste management</strong> solutions help property
      managers maintain the pristine environments that residents and guests expect.
    </>,
  ],
  benefits: [
    {
      title: 'GPS-Verified Collection',
      description: 'Real-time tracking with photo verification for every pickup',
    },
    {
      title: '100% Collection Guarantee',
      description: 'SLA-backed commitment perfect for luxury properties',
    },
    {
      title: 'Resort-Grade Service',
      description: 'White-glove service tailored for upscale communities',
    },
  ],
  inlineImageAlt: 'Valet trash service in ChampionsGate FL luxury apartment community',
  servicesSubtitle: 'Premium solutions for ChampionsGate luxury properties',
  whyH2: 'Why ChampionsGate Luxury Properties Choose On The Fly',
  whySubtitle: 'Trusted by premier resort communities and luxury apartment complexes',
  serviceCardDescriptions: {
    valetTrash:
      'Premium doorstep trash collection for ChampionsGate luxury communities with GPS tracking and photo verification.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your ChampionsGate property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for ChampionsGate residents and property managers.',
  },
  ctaH2: 'Get Started with Premium Valet Trash Service in ChampionsGate',
  ctaSubtitle: 'Contact us today for a free quote tailored to your luxury property',
};

export default function ChampionsGateServiceAreaPage() {
  return <CityValetTrashTemplate data={data} />;
}
