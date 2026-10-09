import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Winter Garden, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for apartment communities in Winter Garden, FL. Reliable bulk removal and apartment waste management solutions serving Winter Garden apartment complexes.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-garden-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Winter Garden, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for apartment communities in Winter Garden, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-garden-fl/',
  },
};

const data: CityPageData = {
  city: 'Winter Garden',
  heroAlt: 'Apartment community in Winter Garden FL',
  heroSubtitle:
    'Professional valet trash and bulk removal services for apartment communities in Winter Garden, Florida.',
  introH2: 'Trusted Valet Trash Service for Winter Garden Apartment Communities',
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides comprehensive <strong>valet trash service</strong> to
      apartment communities throughout Winter Garden, FL. Our professional team ensures reliable
      doorstep trash collection with our GPS-verified routes and daily route confirmation.
    </>,
    <>
      Serving Winter Garden's thriving community, we understand the unique needs of{' '}
      <strong>apartment waste management</strong> in this rapidly growing west Orlando area. Our
      comprehensive solutions help property managers maintain clean, attractive properties that
      residents love calling home.
    </>,
  ],
  benefits: [
    {
      title: 'GPS-Verified Collection',
      description: 'GPS-tracked truck routing on every daily route',
    },
    {
      title: 'Daily Route Confirmation',
      description: 'A route confirmation to management every day, with verified missed pickups made right',
    },
    {
      title: 'Service 7 Days a Week',
      description: '7 days a week, including Sundays and holidays',
    },
  ],
  inlineImageAlt: 'Valet trash service in Winter Garden FL apartment community',
  servicesSubtitle: 'Complete solutions for Winter Garden apartment communities',
  whyH2: 'Why Winter Garden Properties Choose On The Fly',
  whySubtitle: 'Trusted by property managers throughout Winter Garden and West Orlando',
  serviceCardDescriptions: {
    valetTrash:
      'Professional doorstep trash collection for your Winter Garden apartment community with GPS-tracked routing and verified missed pickups made right.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Winter Garden property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Winter Garden residents and property managers.',
  },
  ctaH2: 'Get Started with Valet Trash Service in Winter Garden',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Winter Garden property',
};

export default function WinterGardenServiceAreaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-winter-garden-fl/"
        areaServed={['Winter Garden']}
      />
      <CityValetTrashTemplate data={data} />
    </>
  );
}
