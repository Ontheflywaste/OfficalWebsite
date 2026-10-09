import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Celebration, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for luxury apartment communities, vacation rentals, and resort properties in Celebration, FL. Reliable bulk removal and apartment waste management solutions.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-celebration-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Celebration, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for luxury apartment communities and resort properties in Celebration, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-celebration-fl/',
  },
};

const data: CityPageData = {
  city: 'Celebration',
  heroAlt: 'Luxury apartment community in Celebration FL',
  heroSubtitle:
    'Premium valet trash and bulk removal services for luxury apartment communities, vacation rentals, and resort properties in Celebration, Florida.',
  introH2: "Premium Valet Trash Service for Celebration's Master-Planned Community",
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides elite <strong>valet trash service</strong> to luxury
      apartment communities, vacation rentals, and resort properties throughout Celebration, FL.
      Our professional team delivers white-glove service with our GPS-verified routes and daily route confirmation.
    </>,
    <>
      Serving Disney's renowned master-planned community, we understand the elevated standards
      expected in Celebration. Our comprehensive <strong>apartment waste management</strong>{' '}
      solutions help property managers maintain the pristine environments that make Celebration
      one of Central Florida's most desirable addresses for{' '}
      <strong>luxury apartment communities</strong> and <strong>resort properties</strong>.
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
      title: 'Resort-Grade Service',
      description: 'White-glove service tailored for upscale communities',
    },
  ],
  inlineImageAlt: 'Valet trash service in Celebration FL luxury apartment community',
  servicesSubtitle: 'Premium solutions for Celebration luxury properties',
  whyH2: 'Why Celebration Properties Choose On The Fly',
  whySubtitle: 'Trusted by premier resort communities and luxury apartment complexes',
  serviceCardDescriptions: {
    valetTrash:
      'Premium doorstep trash collection for Celebration luxury communities with GPS-tracked routing and verified missed pickups made right.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Celebration property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Celebration residents and property managers.',
  },
  ctaH2: 'Get Started with Premium Valet Trash Service in Celebration',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Celebration property',
};

export default function CelebrationServiceAreaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-celebration-fl/"
        areaServed={['Celebration']}
      />
      <CityValetTrashTemplate data={data} />
    </>
  );
}
