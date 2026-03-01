import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Waste Management Services Central Florida | On The Fly',
  description: 'Professional valet trash, junk removal, bulk removal, and pressure washing services for apartment communities in Orlando and Central Florida. SLA-backed service with photo verification.',
  keywords: 'valet trash service, junk removal orlando, bulk removal, pressure washing, waste management central florida, apartment services',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
