import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
  metadataBase: new URL('https://www.ontheflywastesolutions.com'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//js.hs-scripts.com" />
        <link rel="dns-prefetch" href="//js.hsforms.net" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "name": "On The Fly Waste Solutions",
              "image": "https://www.ontheflywastesolutions.com/Images/Theastonatuptownheroimage.webp",
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
              "url": "https://www.ontheflywastesolutions.com",
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
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <WebVitals />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <HubSpotChat />
      </body>
    </html>
  );
}
