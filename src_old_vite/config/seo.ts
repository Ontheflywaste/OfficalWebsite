// Centralized SEO Configuration for On The Fly Waste Solutions
// All canonical URLs and SEO constants are defined here for consistency

export const SITE_CONFIG = {
  baseUrl: 'https://ontheflywastesolutions.com',
  siteName: 'On The Fly Waste Solutions',
  defaultTitle: 'Professional Valet Trash & Waste Management Services | Orlando, FL',
  defaultDescription: 'On The Fly Waste Solutions provides professional valet trash, junk removal, and pressure washing services for apartment communities in Orlando, Kissimmee & Central Florida.',
  businessPhone: '(407) 274-5019',
  businessEmail: 'info@ontheflywastesolutions.com',
  logo: 'https://ontheflywastesolutions.com/logos/white-logo.png',
  socialImage: 'https://ontheflywastesolutions.com/Images/gallery12813_1920x831@2x.jpg',
} as const;

// Canonical URLs for all pages
export const CANONICAL_URLS = {
  home: `${SITE_CONFIG.baseUrl}/`,
  about: `${SITE_CONFIG.baseUrl}/about`,
  services: `${SITE_CONFIG.baseUrl}/services`,
  contact: `${SITE_CONFIG.baseUrl}/contact`,
  reviews: `${SITE_CONFIG.baseUrl}/reviews`,
  blog: `${SITE_CONFIG.baseUrl}/blog`,

  // Service pages
  valetTrash: `${SITE_CONFIG.baseUrl}/services/valet-trash`,
  junkRemoval: `${SITE_CONFIG.baseUrl}/services/junk-removal`,
  bulkRemoval: `${SITE_CONFIG.baseUrl}/services/bulk-removal`,
  pressureWashing: `${SITE_CONFIG.baseUrl}/services/pressure-washing`,

  // Blog posts
  blogPosts: {
    'holiday-waste-management-guide-thanksgiving-christmas-newyears': `${SITE_CONFIG.baseUrl}/blog/holiday-waste-management-guide-thanksgiving-christmas-newyears`,
    'valet-trash-benefits-orlando-apartments': `${SITE_CONFIG.baseUrl}/blog/valet-trash-benefits-orlando-apartments`,
    'new-construction-apartments-valet-trash-guide': `${SITE_CONFIG.baseUrl}/blog/new-construction-apartments-valet-trash-guide`,
    'what-property-managers-should-expect-valet-trash-company': `${SITE_CONFIG.baseUrl}/blog/what-property-managers-should-expect-valet-trash-company`,
    'hidden-costs-in-house-trash-management': `${SITE_CONFIG.baseUrl}/blog/hidden-costs-in-house-trash-management`,
    'valet-trash-benefits': `${SITE_CONFIG.baseUrl}/blog/valet-trash-benefits`,
    'sustainable-waste-management': `${SITE_CONFIG.baseUrl}/blog/sustainable-waste-management`,
    'bulk-waste-removal-guide': `${SITE_CONFIG.baseUrl}/blog/bulk-waste-removal-guide`,
    'how-to-choose-valet-trash-vendor': `${SITE_CONFIG.baseUrl}/blog/how-to-choose-valet-trash-vendor`,
  }
} as const;

// Helper function to get blog post canonical URL
export function getBlogPostCanonicalUrl(postId: string): string {
  return CANONICAL_URLS.blogPosts[postId as keyof typeof CANONICAL_URLS.blogPosts] || `${SITE_CONFIG.baseUrl}/blog/${postId}`;
}

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleAuthor?: string;
}

// Generate full SEO metadata for pages
export function generateSEOMetadata(page: keyof typeof CANONICAL_URLS | string, customData?: Partial<SEOMetadata>): SEOMetadata {
  const canonical = typeof page === 'string' && page.startsWith('http')
    ? page
    : CANONICAL_URLS[page as keyof typeof CANONICAL_URLS] || `${SITE_CONFIG.baseUrl}/${page}`;

  return {
    title: customData?.title || SITE_CONFIG.defaultTitle,
    description: customData?.description || SITE_CONFIG.defaultDescription,
    keywords: customData?.keywords,
    canonical,
    ogImage: customData?.ogImage || SITE_CONFIG.socialImage,
    ogType: customData?.ogType || 'website',
    articlePublishedTime: customData?.articlePublishedTime,
    articleAuthor: customData?.articleAuthor,
  };
}
