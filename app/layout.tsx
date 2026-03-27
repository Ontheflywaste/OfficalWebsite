import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HubSpotChat from './components/HubSpotChat';
import { WebVitals } from './components/WebVitals';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'On The Fly Waste Solutions | Professional Valet Trash Services Orlando FL',
  description: 'Professional valet trash, bulk removal, and pressure washing services for Central Florida communities.',
  icons: {
    icon: [
      { url: '/Images/Favicon1.png' },
      { url: '/Images/Favicon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/Images/Favicon1.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/Images/Favicon1.png',
  },
  metadataBase: new URL('https://ontheflywastesolutions.com'),
  verification: {
    google: 'your-google-verification-code',
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": "On The Fly Waste Solutions",
    "image": "https://ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp",
    "description": "Professional valet trash, bulk removal, junk removal, and pressure washing services for apartment communities, condos, and resorts in Orlando and Central Florida",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5383,
      "longitude": -81.3792
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Orlando",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Kissimmee",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Altamonte Springs",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Lake Mary",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Ocoee",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Windermere",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Dr. Phillips",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Sanford",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Winter Park",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Lake Nona",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 28.5383,
        "longitude": -81.3792
      },
      "geoRadius": "50000"
    },
    "url": "https://ontheflywastesolutions.com",
    "telephone": "+1-407-274-5019",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waste Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Valet Trash Service",
            "description": "Door-to-door trash collection for apartment communities, condos, and resorts with 100% collection guarantee and photo verification",
            "provider": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bulk Removal",
            "description": "Scheduled bulk item pickup for apartment complexes and property managers including furniture, appliances, and large items",
            "provider": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal",
            "description": "Professional junk removal services for residential and commercial properties in Orlando and Central Florida",
            "provider": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pressure Washing",
            "description": "Commercial pressure washing services for apartment communities, common areas, and building exteriors",
            "provider": {
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://www.facebook.com/ontheflywastesolutions",
      "https://www.instagram.com/ontheflywaste/",
      "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is valet trash service for apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Valet trash service is a convenient waste removal solution where residents place their bagged trash outside their door, and our professional team collects it directly from their doorstep. This eliminates the need for residents to walk to distant dumpsters and keeps your property cleaner. We provide service 5-7 nights per week with photo verification and a 100% collection guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "How much does valet trash cost for an apartment community in Orlando?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Valet trash service costs typically range from $25-60 per unit per month for high-end resort style communities depending on property size, collection frequency, and specific service requirements. We offer customized pricing based on your property's unique needs. Contact us for a free, no-obligation quote tailored to your Orlando apartment community."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk item removal for apartment complexes in Central Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide comprehensive bulk item pickup services for apartment complexes throughout Central Florida. Our bulk removal service handles furniture, appliances, mattresses, and other large items on a scheduled basis. We offer flexible pickup schedules and can accommodate both routine and on-demand bulk removal needs for property managers."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Central Florida do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We proudly serve Orlando, Kissimmee, Altamonte Springs, Winter Park, Lake Nona, and surrounding Central Florida communities. Our service area covers apartment communities, condos, and resort-style properties throughout the region. Contact us to confirm service availability in your specific location."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve resort communities and condos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in providing valet trash service for resort communities, luxury condos, and high-end apartment properties across Central Florida. Our resort valet trash service is designed to meet the elevated expectations of upscale properties, with white-glove service, photo verification, and dedicated account management."
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          strategy="beforeInteractive"
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        <WebVitals />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <HubSpotChat />
      </body>
    </html>
  );
}
