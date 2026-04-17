import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  keywords,
  image = 'https://ontheflywastesolutions.com/Images/og-image.jpg',
  imageAlt = 'On The Fly Waste Solutions - Professional Valet Trash Services',
  type = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataProps): Metadata {
  const baseUrl = 'https://ontheflywastesolutions.com';
  const canonicalUrl = `${baseUrl}${path}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      siteName: 'On The Fly Waste Solutions',
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: ['On The Fly Waste Solutions Team'],
    };
  }

  return metadata;
}

export const defaultOGImage = 'https://ontheflywastesolutions.com/Images/og-image.jpg';
export const baseUrl = 'https://ontheflywastesolutions.com';
