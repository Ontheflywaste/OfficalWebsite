import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { GALLERY_PHOTOS } from './photos';

const BASE_URL = 'https://ontheflywastesolutions.com';
const TITLE = 'Photo Gallery: Our Crews, Events and Community | On The Fly Waste Solutions';
const DESCRIPTION =
  'Real photos of the On The Fly Waste Solutions team at work across Central Florida: valet trash crews, industry trade shows, and community events.';
const shareImage = GALLERY_PHOTOS[0] ? `${BASE_URL}${GALLERY_PHOTOS[0].src}` : `${BASE_URL}/Images/og-image.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'on the fly waste solutions photos, valet trash crew photos, central florida waste management team, property management trade show',
  alternates: { canonical: `${BASE_URL}/gallery/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: `${BASE_URL}/gallery/`,
    images: [shareImage],
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'On The Fly Waste Solutions Photo Gallery',
    description: DESCRIPTION,
    url: `${BASE_URL}/gallery/`,
    image: GALLERY_PHOTOS.map((p) => ({
      '@type': 'ImageObject',
      contentUrl: `${BASE_URL}${p.src}`,
      name: p.alt,
      caption: p.caption,
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery/' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <GalleryClient />
    </>
  );
}
