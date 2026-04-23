import type { Metadata } from 'next';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';

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
      ensures reliable doorstep trash collection with our industry-leading 100% collection
      guarantee.
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
      description: 'Real-time tracking ensures every unit is serviced',
    },
    {
      title: '100% Collection Guarantee',
      description: 'GPS-tracked routing with same-night cure on verified missed pickups',
    },
    {
      title: 'Flexible Service Schedule',
      description: '5-7 nights per week service options available',
    },
  ],
  inlineImageAlt: 'Valet trash service in Davenport FL apartment community',
  servicesSubtitle: 'Complete solutions for Davenport apartment communities',
  whyH2: 'Why Davenport Properties Choose On The Fly',
  whySubtitle: 'Trusted by property managers throughout Davenport and Polk County',
  serviceCardDescriptions: {
    valetTrash:
      'Professional doorstep trash collection for your Davenport apartment community with GPS-tracked routing and same-night cure on verified missed pickups.',
    bulkRemoval:
      'Scheduled bulk item pickup for furniture, appliances, and large items at your Davenport property.',
    junkRemoval:
      'Fast and eco-friendly junk removal services for Davenport residents and property managers.',
  },
  ctaH2: 'Get Started with Valet Trash Service in Davenport',
  ctaSubtitle: 'Contact us today for a free quote tailored to your Davenport property',
};

export default function DavenportServiceAreaPage() {
  return <CityValetTrashTemplate data={data} />;
}
