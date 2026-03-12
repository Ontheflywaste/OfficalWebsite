import type { Metadata } from 'next';
import PressureWashingClient from './PressureWashingClient';

export const metadata: Metadata = {
  title: 'Professional Pressure Washing Services Central Florida | On The Fly',
  description: 'Expert pressure washing for apartment communities, commercial properties, and HOAs. Building exteriors, driveways, walkways, and more in Orlando & Central Florida.',
  keywords: 'pressure washing orlando, commercial pressure washing, apartment pressure washing, property exterior cleaning central florida',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/services/pressure-washing/',
  },
};

export default function PressureWashingPage() {
  return <PressureWashingClient />;
}
