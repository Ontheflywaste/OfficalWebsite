import type { Metadata } from 'next';
import Link from 'next/link';
import CityValetTrashTemplate, { type CityPageData } from '../components/CityValetTrashTemplate';
import type { ServiceAreaBodySection, ServiceAreaFaqItem } from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Winter Garden, FL | Horizon West & Hamlin | On The Fly',
  description: 'Door to door valet trash for new apartment, townhome, and HOA communities in Winter Garden, Horizon West, Hamlin, and Windermere. Start on day one of lease-up. 7 days a week, GPS-verified routes. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-garden-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Winter Garden, FL | Horizon West & Hamlin | On The Fly',
    description: 'Door to door valet trash for new apartment, townhome, and HOA communities in Winter Garden, Horizon West, Hamlin, and Windermere. Start on day one of lease-up. 7 days a week, GPS-verified routes. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-garden-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const winterGardenBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: "Winter Garden and Horizon West are growing faster than almost anywhere in the country. Hamlin went from orange groves to a town center in a few years. New apartment communities, townhomes, and master-planned HOAs open along SR 429, Avalon Road, and the 535 corridor every season, and the people moving in expect the amenities they'd find anywhere else in Orlando, starting with doorstep trash collection.",
      },
      {
        p: (
          <>
            On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            for Winter Garden, Horizon West, Hamlin, and Windermere communities, 7 days a week.
            Residents set bagged trash at their door during the collection window. Our crew
            collects it and takes it to your dumpster or compactor.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Start on day one of your lease-up',
    blocks: [
      {
        p: (
          <>
            Opening a new community is the easiest time to start{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>
            . Residents learn the routine at move-in, your enclosures stay clean through lease-up,
            and your leasing team has one more amenity to show on the tour.
          </>
        ),
      },
      {
        p: "We build the route before the first resident arrives and grow it building by building as you fill. For a townhome or HOA community that's still selling, we can start with the occupied streets and add as closings happen.",
      },
    ],
  },
  {
    heading: 'Apartments, townhomes, and HOAs across the 429 corridor',
    blocks: [
      { p: 'Horizon West was planned around villages, and each one has a different mix:' },
      {
        ul: [
          <>
            <strong>Class-A apartment communities</strong> in Hamlin, around Flamingo Crossings, and
            along Avalon Road, where doorstep collection is table stakes.
          </>,
          <>
            <strong>Townhome communities,</strong> where tight parking and shared drives make
            curbside pickup messy and doorstep collection clean.
          </>,
          <>
            <strong>Master-planned HOAs</strong> in Horizon West, Summerlake, and Independence,
            where the board wants cans off the street and records it can point to.
          </>,
          <>
            <strong>Established Winter Garden neighborhoods</strong> near downtown and Plant Street,
            and gated communities in Windermere.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'What Winter Garden property managers get from us',
    blocks: [
      {
        ul: [
          <>
            <strong>GPS-verified routes.</strong> Every route is tracked, so you can see when our
            team was on the property.
          </>,
          <>
            <strong>Daily route confirmation</strong> to management.
          </>,
          <>
            <strong>Photo documentation when it matters,</strong> to record a violation or confirm a
            specific home or unit was serviced.
          </>,
          <>
            <strong>Uniformed crews with carts and satchels.</strong> Quiet, quick, and respectful
            of residents.
          </>,
          <>
            <strong>A local team.</strong> BBB accredited, rated 5.0 on Google, and a direct line
            when you need one.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'One team for the whole property',
    blocks: [
      { p: 'Alongside valet trash, we offer:' },
      {
        ul: [
          'Bulk and junk removal for move-outs and left-behind furniture',
          'Compactor and dumpster enclosure management',
          'Pet waste station service',
          'Pressure washing for enclosures, breezeways, and common areas',
          'Recycling collection as an add-on where the property supports it',
        ],
      },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const winterGardenFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Which areas near Winter Garden do you cover?',
    answer: 'Winter Garden, Horizon West, Hamlin, Windermere, Ocoee, Oakland, and the communities along SR 429, Avalon Road, and the 535 corridor in west Orange County.',
  },
  {
    question: 'Can you start before our community is full?',
    answer: "Yes. We can begin with the first occupied building or street and grow the route as you fill. That's how most of our new-construction clients start.",
  },
  {
    question: 'How is valet trash priced?',
    answer: "Per unit or per home, per month, based on community size and the services you include. Request a quote and we'll build one for your property.",
  },
  {
    question: 'Do residents need special containers?',
    answer: "It depends on the property. Some communities supply bins and some ask us to. We'll recommend what fits your buildings.",
  },
  {
    question: 'Does valet trash replace our current hauler?',
    answer: 'No. We work alongside your dumpster, compactor, or curbside service. We handle the trip from the door to the container.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

const data: CityPageData = {
  city: 'Winter Garden',
  heroAlt: 'Apartment community in Winter Garden FL',
  heroSubtitle:
    'On The Fly Waste Solutions provides professional valet trash service for new apartment, townhome, and HOA communities in Winter Garden and Horizon West.',
  body: winterGardenBody,
  faq: winterGardenFaqs,
  faqHeading: 'Winter Garden valet trash questions',
  ctaH2: 'Request a quote for your Winter Garden community',
  ctaSubtitle: (
    <>
      Send us your unit count and a little about the community, and we&apos;ll come back with a
      plan. Call{' '}
      <a href="tel:407-274-5019" className={linkClass}>
        407-274-5019
      </a>{' '}
      or request a quote online.
    </>
  ),
  ctaSignoff: 'Consider It Done!',
};

export default function WinterGardenServiceAreaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-winter-garden-fl/"
        areaServed={['Winter Garden']}
      />
      <FaqSchema faqs={winterGardenFaqs} />
      <CityValetTrashTemplate data={data} />
    </>
  );
}
