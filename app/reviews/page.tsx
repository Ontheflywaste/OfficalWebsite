import type { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';

export const metadata: Metadata = {
  title: 'Customer Reviews | On The Fly Waste Solutions',
  description: 'Read reviews from property managers, HOAs, and residents who trust On The Fly Waste Solutions for valet trash, junk removal, and waste management services in Orlando.',
  openGraph: {
    title: 'Customer Reviews | On The Fly Waste Solutions',
    description: 'Real reviews from satisfied clients. See why property managers choose On The Fly.',
    type: 'website',
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
