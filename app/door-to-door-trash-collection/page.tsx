import type { Metadata } from 'next';
import DoorToDoorClient from './DoorToDoorClient';

export const metadata: Metadata = {
  title: 'Door to Door Trash Collection Service — Central Florida Apartments & Communities | On The Fly Waste Solutions',
  description: 'Door to door trash collection and doorstep trash pickup service for apartments, HOA, resort, and condo communities across Central Florida. GPS-tracked truck routing with a 100% collection commitment and same-night cure on verified missed pickups. Orlando, Kissimmee, Champions Gate, Lake Nona.',
  keywords: 'door to door trash collection, door to door trash pickup service, doorstep trash collection service, doorstep trash pickup apartments, door to door trash collection apartments, door to door garbage collection service, doorstep valet trash service, door to door waste collection Central Florida, Orlando door to door trash collection, Central Florida doorstep trash pickup, door to door trash collection multifamily, HOA door to door trash collection, Kissimmee valet trash service, Lake Nona valet trash service, Champions Gate Florida valet trash, Osceola County waste management, Orange County valet trash company',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/door-to-door-trash-collection/',
  },
  openGraph: {
    title: 'Door to Door Trash Collection Service — Central Florida',
    description: 'How our door to door trash collection and doorstep valet trash service works — for apartments, HOA, resort, and condo communities across Central Florida.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/door-to-door-trash-collection/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/Valettrashimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Door to door trash collection apartment community — On The Fly Waste Solutions doorstep valet trash service Central Florida',
      },
    ],
  },
};

export default function DoorToDoorPage() {
  return <DoorToDoorClient />;
}
