import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Valet Trash Tips & Property Management Blog | On The Fly Waste Solutions',
  description: 'Expert insights on valet trash services and waste management. Tips and best practices for multifamily communities from industry professionals.',
  keywords: 'orlando valet trash blog, waste management tips orlando, apartment waste solutions florida, multifamily trash collection blog',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/blog/',
  },
  openGraph: {
    title: 'Waste Management Blog | On The Fly Waste Solutions',
    description: 'Expert insights and tips on valet trash services and waste management for multifamily properties.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/blog/',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
