import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Apopka, FL | Local HOA & Apartment Service | On The Fly',
  description: 'Door to door valet trash for Apopka HOAs, apartments, and townhome communities, from a company based right here in Apopka. Collection 7 days a week with GPS-verified routes. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Apopka, FL | Local HOA & Apartment Service | On The Fly',
    description: 'Door to door valet trash for Apopka HOAs, apartments, and townhome communities, from a company based right here in Apopka. Collection 7 days a week with GPS-verified routes. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-apopka-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const apopkaBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: "Apopka is home for us. Our office is on Border Lake Road, our crews live and work here, and we've watched this city grow from the Wekiva Parkway out to the new neighborhoods along Kelly Park Road and Rock Springs. When an Apopka community calls, the people who show up are neighbors.",
      },
      {
        p: (
          <>
            On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            for Apopka HOAs, apartment communities, townhomes, and gated neighborhoods, 7 days a
            week. Residents set bagged trash at their door during the collection window. Our crew
            collects it and takes it to your dumpster or compactor. Nobody carries bags across the
            property, and your enclosures stay orderly.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Built for the way Apopka is growing',
    blocks: [
      {
        p: "The SR 429 and Wekiva Parkway corridor has opened Apopka up in a way the city hasn't seen before. New garden-style apartments, townhome communities, and master-planned HOAs are going in from Kelly Park to Plymouth, and every one of them needs a plan for trash before the first resident moves in.",
      },
      { p: "That's the stage where we do our best work:" },
      {
        ul: [
          <>
            <strong>GPS-verified routes.</strong> Every route is tracked, so your manager can see
            when our team was on the property.
          </>,
          <>
            <strong>Daily route confirmation.</strong> A message each day confirming the route was
            run, sent to management.
          </>,
          <>
            <strong>Photo documentation when it matters.</strong> If trash is set out against
            community rules, or you need to confirm a specific home or unit was serviced, we
            document it with a timestamped photo.
          </>,
          <>
            <strong>Uniformed crews with carts and satchels.</strong> Quiet, quick, and respectful
            of residents.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'HOAs, apartments, and everything in between',
    blocks: [
      {
        p: (
          <>
            Apopka&apos;s communities don&apos;t all look alike, and{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>{' '}
            shouldn&apos;t either. We work with:
          </>
        ),
      },
      {
        ul: [
          <>
            <strong>HOA and gated communities,</strong> where the board wants cans off the street
            and records it can point to when a homeowner asks.
          </>,
          <>
            <strong>Apartment and multifamily communities,</strong> where doorstep collection is an
            amenity residents expect and a daily chore your maintenance team is glad to hand off.
          </>,
          <>
            <strong>Townhome communities,</strong> where tight parking and shared drives make
            curbside pickup messy and doorstep collection clean.
          </>,
          <>
            <strong>Condos and 55+ communities,</strong> where residents appreciate not hauling bags
            to a far enclosure.
          </>,
        ],
      },
      {
        p: 'Whatever the property, the setup is the same: we walk it with you, build the route, and start on day one.',
      },
    ],
  },
  {
    heading: 'More than doorstep collection',
    blocks: [
      {
        p: 'Most Apopka properties we talk to need a hand with more than valet trash. We also handle:',
      },
      {
        ul: [
          'Bulk and junk removal for move-outs, evictions, and items left at the dumpster',
          'Compactor and dumpster enclosure management',
          'Pet waste station service',
          'Pressure washing for enclosures, breezeways, and common areas',
          'Recycling collection as an add-on where the property supports it',
        ],
      },
      { p: 'One local vendor, one point of contact, one invoice.' },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const apopkaFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Do you serve the whole Apopka area?',
    answer: 'Yes. We serve Apopka, Wekiva Springs, Rock Springs, Kelly Park, Plymouth, Zellwood, and the communities along SR 429 and the Wekiva Parkway.',
  },
  {
    question: "You're based in Apopka. Does that matter?",
    answer: 'It means short drive times, crews who know the area, and a team you can reach without a phone tree.',
  },
  {
    question: 'How is valet trash priced?',
    answer: "Per home or per unit, per month, based on the size of the community and the services you include. We'll walk the property and give you a number built for it.",
  },
  {
    question: 'Does valet trash replace our current hauler?',
    answer: 'No. We work alongside your dumpster, compactor, or curbside service. We handle the trip from the door to the container.',
  },
  {
    question: 'Can you start before our community is full?',
    answer: 'Yes. We can begin with the first occupied buildings or streets and grow the route as you fill.',
  },
  {
    question: 'Can you name our HOA or management company as additional insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

export default function ValetTrashApopkaPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-apopka-fl/"
        areaServed={['Apopka']}
      />
      <FaqSchema faqs={apopkaFaqs} />
      <ServiceAreaClient
        city="Apopka"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for HOA, apartment, and townhome communities"
        body={apopkaBody}
        faq={apopkaFaqs}
        faqHeading="Apopka valet trash questions"
        cta={{
          heading: 'Get a quote from your Apopka neighbors',
          text: (
            <>
              Tell us about your community and we&apos;ll put together a plan and a price. Call{' '}
              <a href="tel:407-274-5019" className="font-semibold underline">
                407-274-5019
              </a>{' '}
              or{' '}
              <Link href="/contact/" className="font-semibold underline">
                request a quote online
              </Link>
              .
            </>
          ),
          signoff: 'Consider It Done!',
        }}
      />
    </>
  );
}
