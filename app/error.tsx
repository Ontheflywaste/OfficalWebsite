'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkLoadError =
      error.name === 'ChunkLoadError' ||
      error.message.includes('Loading chunk') ||
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed');

    if (isChunkLoadError) {
      const retryCount = parseInt(sessionStorage.getItem('chunkRetryCount') || '0', 10);

      if (retryCount < 3) {
        sessionStorage.setItem('chunkRetryCount', String(retryCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('chunkRetryCount');
      }
    }
  }, [error]);

  const handleRetry = () => {
    sessionStorage.removeItem('chunkRetryCount');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary-dark rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">
            We encountered an issue loading the page. This sometimes happens after we update our site.
          </p>
        </div>
        <div className="space-y-3">
          <button
            onClick={handleRetry}
            className="w-full bg-primary-dark text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-deep transition-colors"
          >
            Refresh Page
          </button>
          <a
            href="/"
            className="block w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          If this problem persists, please{' '}
          <a href="/contact/" className="text-primary underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
