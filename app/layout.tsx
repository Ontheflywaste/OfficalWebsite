import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "On The Fly Waste Solutions",
              "image": "https://ontheflywastesolutions.com/logos/white-logo.png",
              "description": "Professional valet trash and bulk removal services in Orlando, FL",
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
              "sameAs": [
                "https://www.facebook.com/ontheflywastesolutions",
                "https://www.instagram.com/ontheflywaste/",
                "https://www.linkedin.com/in/on-the-fly-waste-solutions-23a48b296/"
              ]
            })
          }}
        />
        <Script
          id="hs-script-loader"
          type="text/javascript"
          src="//js.hs-scripts.com/22416220.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
