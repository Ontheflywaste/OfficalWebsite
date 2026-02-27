import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | On The Fly Waste Solutions - Orlando Valet Trash Services',
  description: 'Contact On The Fly Waste Solutions for professional valet trash and bulk removal services in Orlando, Kissimmee, and Central Florida. Get a free quote today!',
  keywords: 'contact valet trash orlando, waste management quote central florida, orlando trash services contact, apartment waste solutions',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/contact/',
  },
  openGraph: {
    title: 'Contact Us | On The Fly Waste Solutions',
    description: 'Get in touch for professional valet trash services in Orlando and Central Florida.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/contact/',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
