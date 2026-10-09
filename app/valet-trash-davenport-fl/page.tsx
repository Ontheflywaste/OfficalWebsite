import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Davenport, FL | On The Fly Waste Solutions',
  description:
    'Professional valet trash service for apartment communities and vacation rentals in Davenport, FL. Reliable bulk removal and waste management solutions serving Davenport apartment complexes.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-davenport-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Davenport, FL | On The Fly Waste Solutions',
    description:
      'Professional valet trash service for apartment communities and vacation rentals in Davenport, FL.',
    url: 'https://ontheflywastesolutions.com/valet-trash-davenport-fl/',
  },
};

const data: CityPageData = {
  city: 'Davenport',
  heroAlt: 'Apartment community in Davenport FL',
  heroSubtitle:
    'Professional valet trash and bulk removal services for apartment communities and vacation rentals in Davenport, Florida.',
  introH2: 'Trusted Valet Trash Service for Davenport Apartment Communities',
  introParagraphs: [
    <>
      On The Fly Waste Solutions provides comprehensive <strong>valet trash service</strong> to
      apartment communities and vacation rentals throughout Davenport, FL. Our professional team
      ensures reliable doorstep trash collection with our GPS-verified routes and daily route confirmation.
    </>,
    <>
      Serving the growing Davenport area, we understand the unique needs of{' '}
      <strong>apartment waste management</strong> in this vibrant community. From luxury vacation
      rental properties to family-oriented apartment complexes, our services help property managers
      maintain pristine communities that residents love.
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
  inlineImageAlt: 'Valet trash service in Davenport FL apartment community',
  servicesSubtitle: 'Complete solutions for Davenport apartment communities',
  whyH2: 'Why Davenport Properties Choose On The Fly',
  whySubtitle: 'Trusted by property managers throughout Davenport and Polk County',
  serviceCardDescriptions: {
    valetTrash:
      'Professional doorstep trash collection for your Davenport apartment community with GPS-tracked routing and verified missed pickups made right.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Davenport property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Davenport residents and property managers.',
  },
  ctaH2: 'Get Started with Valet Trash Service in Davenport',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Davenport property',
};

export default function DavenportServiceAreaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-davenport-fl/"
        areaServed={['Davenport']}
      />
      <CityValetTrashTemplate data={data} />
    </>
  );
}
