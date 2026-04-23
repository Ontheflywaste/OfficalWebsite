import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Four Corners, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for apartment communities and residential properties in Four Corners, FL. Reliable bulk removal and waste management solutions near Orlando.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-four-corners-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Four Corners, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for apartment communities and residential properties in Four Corners, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-four-corners-fl/',
  },
};

const data: CityPageData = {
  city: 'Four Corners',
  heroAlt: 'Apartment community in Four Corners FL',
  heroSubtitle:
    'Professional valet trash and bulk removal services for apartment communities and residential properties in Four Corners, Florida.',
  introH2: 'Trusted Valet Trash Service for Four Corners Communities',
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides reliable <strong>valet trash service</strong> to
      apartment communities and residential properties throughout Four Corners, FL. Our
      professional team delivers consistent, high-quality service with our industry-leading 100%
      collection guarantee.
    </>,
    <>
      Located at the intersection of Osceola and Polk counties, Four Corners is a rapidly growing
      community near Orlando. Our comprehensive <strong>apartment waste management</strong>{' '}
      solutions help property managers maintain clean, attractive properties that residents are
      proud to call home.
    </>,
  ],
  benefits: [
    {
      title: 'GPS-Verified Collection',
      description: 'GPS-tracked truck routing on every nightly route',
    },
    {
      title: '100% Collection Guarantee',
      description: 'GPS-tracked routing with same-night cure on verified missed pickups',
    },
    {
      title: 'Flexible Service Options',
      description: "Customized schedules for your property's needs",
    },
  ],
  inlineImageAlt: 'Valet trash service in Four Corners FL apartment community',
  servicesSubtitle: 'Complete solutions for Four Corners properties',
  whyH2: 'Why Four Corners Properties Choose On The Fly',
  whySubtitle: 'Trusted by property managers across Central Florida',
  serviceCardDescriptions: {
    valetTrash:
      'Professional doorstep trash collection for Four Corners communities with GPS-tracked routing and same-night cure on verified missed pickups.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Four Corners property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Four Corners residents and property managers.',
  },
  ctaH2: 'Get Started with Valet Trash Service in Four Corners',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Four Corners property',
};

export default function FourCornersServiceAreaPage() {
  return <CityValetTrashTemplate data={data} />;
}
