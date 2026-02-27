import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
  description: 'On The Fly Waste Solutions provides professional valet trash, bulk removal, and pressure washing services for apartment communities and HOAs in Orlando, Kissimmee & Central Florida.',
  keywords: 'valet trash service orlando, junk removal orlando, bulk waste removal central florida, apartment trash service, property management waste solutions',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          On The Fly Waste Solutions
        </h1>
        <p className="text-xl text-gray-600">
          Professional Valet Trash Services for Central Florida
        </p>
        <p className="mt-4 text-gray-500">
          Next.js migration in progress. Full site coming soon.
        </p>
      </div>
    </div>
  );
}
