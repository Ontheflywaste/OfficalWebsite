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
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
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
    ];
  },
};

export default nextConfig;
