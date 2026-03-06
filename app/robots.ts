import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: [
      'https://ontheflywastesolutions.com/sitemap.xml',
      'https://ontheflywastesolutions.com/video-sitemap.xml',
    ],
  };
}
