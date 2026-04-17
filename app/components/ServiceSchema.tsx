interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
  areaServed?: string[];
}

export default function ServiceSchema({
  name,
  description,
  slug,
  serviceType,
  areaServed = [
    'Orlando',
    'Kissimmee',
    'Altamonte Springs',
    'Lake Mary',
    'Apopka',
    'Sanford',
    'Winter Park',
    'St. Cloud',
    'Clermont',
    'Davenport',
    'Celebration',
    'Winter Garden',
  ],
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: serviceType ?? name,
    url: `https://ontheflywastesolutions.com${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'On The Fly Waste Solutions',
      telephone: '+1-407-274-5019',
      url: 'https://ontheflywastesolutions.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Orlando',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: areaServed.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'Florida' },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
