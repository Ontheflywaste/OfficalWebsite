import type { Metadata } from 'next';
import Script from 'next/script';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
  description: 'On The Fly Waste Solutions provides professional valet trash, bulk removal, and pressure washing services for apartment communities and HOAs in Orlando, Kissimmee & Central Florida.',
  keywords: 'valet trash service orlando, junk removal orlando, bulk waste removal central florida, apartment trash service, property management waste solutions',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/',
  },
  openGraph: {
    title: 'Professional Valet Trash & Junk Removal Services Orlando FL | On The Fly',
    description: 'Trusted by property managers across Central Florida for reliable valet trash and waste management solutions.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/',
    siteName: 'On The Fly Waste Solutions',
    locale: 'en_US',
    images: [
      {
        url: 'https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp',
        width: 1200,
        height: 630,
        alt: 'On The Fly Waste Solutions - Valet Trash Services Orlando FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Valet Trash & Junk Removal Services Orlando FL',
    description: 'Trusted by property managers across Central Florida for reliable valet trash and waste management solutions.',
    images: ['https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp'],
  },
};

const faqs = [
  {
    question: "What is valet trash service for apartments?",
    answer: "Valet trash service is a convenient waste removal solution where residents place their bagged trash outside their door, and our professional team collects it directly from their doorstep. This eliminates the need for residents to walk to distant dumpsters and keeps your property cleaner. We provide service 5-7 nights per week with photo verification and a 100% collection guarantee."
  },
  {
    question: "How much does valet trash cost for an apartment community in Orlando?",
    answer: "Valet trash service costs typically range from $25-60 per unit per month for high-end resort style communities depending on property size, collection frequency, and specific service requirements. We offer customized pricing based on your property's unique needs. Contact us for a free, no-obligation quote tailored to your Orlando apartment community."
  },
  {
    question: "Do you offer bulk item removal for apartment complexes in Central Florida?",
    answer: "Yes! We provide comprehensive bulk item pickup services for apartment complexes throughout Central Florida. Our bulk removal service handles furniture, appliances, mattresses, and other large items on a scheduled basis. We offer flexible pickup schedules and can accommodate both routine and on-demand bulk removal needs for property managers."
  },
  {
    question: "What areas in Central Florida do you serve?",
    answer: "We proudly serve Orlando, Kissimmee, Altamonte Springs, Winter Park, Lake Nona, and surrounding Central Florida communities. Our service area covers apartment communities, condos, and resort-style properties throughout the region. Contact us to confirm service availability in your specific location."
  },
  {
    question: "Do you serve resort communities and condos?",
    answer: "Absolutely! We specialize in providing valet trash service for resort communities, luxury condos, and high-end apartment properties across Central Florida. Our resort valet trash service is designed to meet the elevated expectations of upscale properties, with white-glove service, photo verification, and dedicated account management."
  }
];

export default function HomePage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "On The Fly Waste Solutions - Professional Valet Trash & Junk Removal Services",
    "description": "See how On The Fly Waste Solutions provides professional valet trash pickup, junk removal, and waste management services for apartment communities and residents in Central Florida.",
    "thumbnailUrl": "https://img.youtube.com/vi/gFYjibflN3U/maxresdefault.jpg",
    "uploadDate": "2024-01-01T00:00:00+00:00",
    "embedUrl": "https://www.youtube.com/embed/gFYjibflN3U",
    "contentUrl": "https://www.youtube.com/watch?v=gFYjibflN3U"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
