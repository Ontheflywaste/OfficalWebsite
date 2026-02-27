import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Coming Soon | On The Fly Waste Solutions',
  description: 'Service page under construction',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen pt-32">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Service Coming Soon</h1>
          <p className="text-xl text-gray-600">This service page is under construction.</p>
        </div>
      </section>
    </div>
  );
}
