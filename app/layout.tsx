import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

const HubSpotChat = dynamic(() => import('./components/HubSpotChat'), { ssr: false });
import ChunkErrorBoundary from './components/ChunkErrorBoundary';
const WebVitals = dynamic(() => import('./components/WebVitals'), { ssr: false });
const MobileStickyCTA = dynamic(() => import('./components/MobileStickyCTA'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['400', '600', '700', '800'],
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
    google: 'tK6BlVpZq83PNDahaecRB7Ii7mxTvE9Wmc6lLzJiiaU',
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
    "image": "https://ontheflywastesolutions.com/Images/orlando-community-hero.webp",
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
      },
      {
        "@type": "City",
        "name": "Champions Gate",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Winter Garden",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Apopka",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Clermont",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Davenport",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Celebration",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Osceola County",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Orange County",
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
            "name": "Door to Door Trash Collection",
            "description": "Door to door trash collection and doorstep trash pickup service for apartment communities, HOA, resort, and condo communities across Central Florida. GPS-tracked truck routing with verified missed pickups made right.",
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
            "name": "Doorstep Valet Trash Service",
            "description": "Doorstep valet trash service for HOA communities, resort style apartments, luxury condo associations, gated communities, and vacation rental properties in Orlando, Kissimmee, Champions Gate, Lake Nona, and Central Florida.",
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
            "name": "Valet Trash Service",
            "description": "Door-to-door trash collection for apartment communities, condos, and resorts with a 100% collection commitment, GPS-tracked routing, and verified missed pickups made right",
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
            "name": "HOA & Resort Community Valet Trash",
            "description": "HOA waste management and resort community valet trash service — including luxury community valet trash service, gated community valet trash service, and vacation home community waste management.",
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
            "name": "Multifamily Waste Management",
            "description": "Valet trash service multifamily, including valet trash for new construction apartments and multifamily community waste management solutions for developers and property management groups.",
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
            "description": "Scheduled bulk item pickup for apartment complexes and property managers including furniture, appliances, and large items. Bulk item removal apartment community coverage available.",
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
            "name": "Compactor Enclosure Management Service",
            "description": "Compactor enclosure management service and compactor area cleaning service for apartment communities — keeping compactor areas clean, organized, and compliant.",
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
            "name": "Pet Waste Station Service",
            "description": "Pet waste station service for apartment communities and HOA properties — regular restocking, cleaning, and disposal.",
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
          "text": "Valet trash service is a convenient waste removal solution where residents place their bagged trash outside their door, and our professional team collects it directly from their doorstep. This eliminates the need for residents to walk to distant dumpsters and keeps your property cleaner. We provide service 5-7 nights per week with GPS-tracked truck routing, a 100% collection commitment, and verified missed pickups made right."
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
          "text": "Absolutely! We specialize in providing valet trash service for resort communities, luxury condos, and high-end apartment properties across Central Florida. Our resort valet trash service is designed to meet the elevated expectations of upscale properties, with white-glove service, GPS-tracked routing, and dedicated account management."
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MXVDRR9H');
            `,
          }}
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GX402N41TM"
        />
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GX402N41TM', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Script
          id="chunk-error-handler"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.message && (
                  e.message.includes('Loading chunk') ||
                  e.message.includes('ChunkLoadError') ||
                  e.message.includes('Failed to fetch dynamically imported module') ||
                  e.message.includes('Importing a module script failed')
                )) {
                  var retryCount = parseInt(sessionStorage.getItem('chunkRetryCount') || '0', 10);
                  if (retryCount < 3) {
                    sessionStorage.setItem('chunkRetryCount', String(retryCount + 1));
                    window.location.reload();
                  }
                }
              });
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.message && (
                  e.reason.message.includes('Loading chunk') ||
                  e.reason.message.includes('ChunkLoadError') ||
                  e.reason.message.includes('Failed to fetch dynamically imported module') ||
                  e.reason.message.includes('Importing a module script failed')
                )) {
                  var retryCount = parseInt(sessionStorage.getItem('chunkRetryCount') || '0', 10);
                  if (retryCount < 3) {
                    sessionStorage.setItem('chunkRetryCount', String(retryCount + 1));
                    window.location.reload();
                  }
                }
              });
              if (sessionStorage.getItem('chunkRetryCount')) {
                setTimeout(function() { sessionStorage.removeItem('chunkRetryCount'); }, 5000);
              }
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXVDRR9H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
        <Navbar />
        <main>
          <ChunkErrorBoundary>{children}</ChunkErrorBoundary>
        </main>
        <Footer />
        <HubSpotChat />
        <MobileStickyCTA />
        <WebVitals />
      </body>
    </html>
  );
}
