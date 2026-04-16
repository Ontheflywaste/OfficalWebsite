/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'stackblitz.com',
      },
      {
        protocol: 'https',
        hostname: 'seal-centralflorida.bbb.org',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|jpg|jpeg|png|gif|ico|webp|avif|mp4|webm)).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ontheflywastesolutions.com',
          },
        ],
        destination: 'https://ontheflywastesolutions.com/:path*',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/blog/valet-trash-benefits',
        destination: '/blog/valet-trash-benefits-orlando-apartments/',
        permanent: true,
      },
      {
        source: '/blog/valet-trash-benefits/',
        destination: '/blog/valet-trash-benefits-orlando-apartments/',
        permanent: true,
      },
      {
        source: '/blog/bulk-waste-removal-guide',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/bulk-waste-removal-guide/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/what-property-managers-should-expect-valet-trash-company',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/what-property-managers-should-expect-valet-trash-company/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/post/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/posts/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/article/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/articles/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/news/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/service/:slug*',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/valet-trash',
        destination: '/services/valet-trash/',
        permanent: true,
      },
      {
        source: '/junk-removal',
        destination: '/services/junk-removal/',
        permanent: true,
      },
      {
        source: '/bulk-removal',
        destination: '/services/bulk-removal/',
        permanent: true,
      },
      {
        source: '/pressure-washing',
        destination: '/services/pressure-washing/',
        permanent: true,
      },
      {
        source: '/locations/:slug*',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/area/:slug*',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/areas/:slug*',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/quote/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/get-quote',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/get-quote/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/free-quote',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/free-quote/',
        destination: '/contact/',
        permanent: true,
      },
      // Service-area URL consolidation: /service-areas/<city>-fl/ -> /valet-trash-<city>-fl/
      {
        source: '/service-areas/davenport-fl/:path*',
        destination: '/valet-trash-davenport-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/davenport-fl',
        destination: '/valet-trash-davenport-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/championsgate-fl/:path*',
        destination: '/valet-trash-championsgate-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/championsgate-fl',
        destination: '/valet-trash-championsgate-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/celebration-fl/:path*',
        destination: '/valet-trash-celebration-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/celebration-fl',
        destination: '/valet-trash-celebration-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/four-corners-fl/:path*',
        destination: '/valet-trash-four-corners-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/four-corners-fl',
        destination: '/valet-trash-four-corners-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/winter-haven-fl/:path*',
        destination: '/valet-trash-winter-haven-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/winter-haven-fl',
        destination: '/valet-trash-winter-haven-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/winter-garden-fl/:path*',
        destination: '/valet-trash-winter-garden-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/winter-garden-fl',
        destination: '/valet-trash-winter-garden-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/space-coast-fl/:path*',
        destination: '/valet-trash-space-coast-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/space-coast-fl',
        destination: '/valet-trash-space-coast-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/daytona-beach-fl/:path*',
        destination: '/valet-trash-daytona-beach-fl/',
        permanent: true,
      },
      {
        source: '/service-areas/daytona-beach-fl',
        destination: '/valet-trash-daytona-beach-fl/',
        permanent: true,
      },
      // Catch any other /service-areas/* request
      {
        source: '/service-areas/:slug*',
        destination: '/services/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
