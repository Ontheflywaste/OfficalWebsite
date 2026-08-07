import type { Metadata } from 'next';
import HoaResortValetTrashClient from './HoaResortValetTrashClient';

export const metadata: Metadata = {
  title: 'Door to Door Valet Trash for HOA & Resort Communities — Central Florida | On The Fly Waste Solutions',
  description: 'Door to door trash collection and resort community valet trash service for HOA, resort style, luxury, condo, gated, and vacation rental communities across Central Florida. Orlando, Kissimmee, Champions Gate, Lake Nona, Windermere, Winter Garden, and beyond.',
  keywords: 'valet trash service HOA, HOA door to door trash collection, HOA waste management company Central Florida, resort community trash collection service, resort style apartment trash collection, luxury community valet trash service, gated community valet trash service, condo community valet trash provider, vacation rental community valet trash, vacation home community waste management, short term rental community trash service, doorstep valet trash service, Champions Gate Florida valet trash, Kissimmee valet trash service, Lake Nona valet trash service, Osceola County waste management, Orange County valet trash company, Orlando door to door trash collection, Central Florida doorstep trash pickup',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/hoa-resort-valet-trash/',
  },
  openGraph: {
    title: 'Door to Door Valet Trash for HOA & Resort Communities — Central Florida',
    description: 'Discreet, uniformed, GPS-tracked door to door trash collection for HOA, resort style, and condo communities across Central Florida — with verified missed pickups made right.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/hoa-resort-valet-trash/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/ApartmentBuildingHero.webp',
        width: 1200,
        height: 630,
        alt: 'Door to door valet trash service for HOA, resort style, and luxury communities across Central Florida',
      },
    ],
  },
};

export default function HoaResortValetTrashPage() {
  return <HoaResortValetTrashClient />;
}
