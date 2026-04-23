import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Door to Door Trash Collection, Valet Trash & Waste Management Services for HOA, Resort & Condo Communities | Central Florida | On The Fly',
  description: 'Door to door trash collection, doorstep valet trash service, bulk item removal, compactor enclosure management, and pet waste station service for HOA, resort style, condo, and multifamily communities in Orlando, Kissimmee, Champions Gate, Lake Nona & Central Florida. SLA-backed with photo verification.',
  keywords: 'door to door trash collection, door to door trash pickup service, doorstep trash collection service, doorstep trash pickup apartments, door to door trash collection apartments, doorstep valet trash service, valet trash service HOA, HOA waste management company Central Florida, resort community trash collection service, resort style apartment trash collection, luxury community valet trash service, gated community valet trash service, condo community valet trash provider, vacation rental community valet trash, valet trash service multifamily, multifamily community waste management solutions, compactor enclosure management service, compactor area cleaning service apartments, pet waste station service apartment, bulk item removal apartment community, Orlando door to door trash collection, Kissimmee valet trash service, Lake Nona valet trash service, Champions Gate Florida valet trash',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
