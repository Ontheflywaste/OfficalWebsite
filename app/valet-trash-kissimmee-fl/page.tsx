import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Kissimmee, FL | Osceola County Communities | On The Fly',
  description: 'Door to door valet trash for Kissimmee apartments, HOAs, and resort communities along US 192, Poinciana, and Buenaventura Lakes. Serving all of Osceola County 7 days a week with GPS-verified routes. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-kissimmee-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Kissimmee, FL | Osceola County Communities | On The Fly',
    description: 'Door to door valet trash for Kissimmee apartments, HOAs, and resort communities along US 192, Poinciana, and Buenaventura Lakes. Serving all of Osceola County 7 days a week with GPS-verified routes. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-kissimmee-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const kissimmeeBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: "Kissimmee is where Osceola County lives. The US 192 corridor runs from the resort strip near the theme parks all the way to the old downtown by Lake Tohopekaliga, and along it you'll find every kind of community there is: vacation rental neighborhoods full of weekly turnover, workforce apartments in Buenaventura Lakes and Poinciana, established HOAs off John Young Parkway, and new master-planned communities going up on the east side.",
      },
      {
        p: (
          <>
            On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            for all of them, 7 days a week. Residents set bagged trash at their door during the
            collection window. Our crew collects it and takes it to your dumpster or compactor.
            Nobody hauls bags across the property, and your enclosures stay orderly.
          </>
        ),
      },
    ],
  },
  {
    heading: "Built for Kissimmee's mix of communities",
    blocks: [
      { p: 'No two Kissimmee properties look alike, so the service bends to the property:' },
      {
        ul: [
          <>
            <strong>Vacation rental and resort communities</strong> along US 192 and toward the
            parks, where guests turn over every few days and checkout-day trash piles up on a
            schedule no weekly pickup can match. Daily collection is the only thing that keeps up.
          </>,
          <>
            <strong>Apartment and multifamily communities</strong> in Buenaventura Lakes, Poinciana,
            and along Osceola Parkway, where doorstep collection is an amenity residents expect and
            a chore your maintenance team is glad to hand off.
          </>,
          <>
            <strong>HOA and gated neighborhoods</strong> off John Young Parkway, Pleasant Hill Road,
            and around the lakes, where the board wants cans off the street and records it can
            point to when a homeowner asks.
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
    heading: 'What Kissimmee property managers get from us',
    blocks: [
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
            document it with a timestamped photo. For vacation rentals, that record is what lets
            your office follow up with an owner or manager instead of guessing.
          </>,
          <>
            <strong>Uniformed crews with carts and satchels.</strong> Quiet, quick, and respectful
            of residents and guests.
          </>,
          <>
            <strong>A local team.</strong> We&apos;re based in Central Florida, BBB accredited, and
            rated 5.0 on Google. You&apos;ll have a direct line, not a ticket number.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'Nearby communities we serve',
    blocks: [
      {
        p: "Kissimmee is the center of our Osceola County routes, and we've built dedicated pages for the communities around it:",
      },
      {
        ul: [
          <>
            <Link href="/valet-trash-celebration-fl/" className={linkClass}>
              Celebration
            </Link>
            , the master-planned town south of US 192
          </>,
          <>
            <Link href="/valet-trash-championsgate-fl/" className={linkClass}>
              ChampionsGate
            </Link>
            , golf resort and vacation rental communities off I-4
          </>,
          <>
            <Link href="/valet-trash-davenport-fl/" className={linkClass}>
              Davenport
            </Link>
            , the US 27 growth corridor in north Polk County
          </>,
          <>
            <Link href="/valet-trash-four-corners-fl/" className={linkClass}>
              Four Corners
            </Link>
            , where Osceola, Polk, Lake, and Orange counties meet
          </>,
        ],
      },
      { p: "If your community is anywhere in that stretch, we're already nearby." },
    ],
  },
  {
    heading: 'More than doorstep collection',
    blocks: [
      {
        p: (
          <>
            Most Kissimmee properties we talk to need a hand with more than{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>
            . We also handle:
          </>
        ),
      },
      {
        ul: [
          'Bulk and junk removal for move-outs, evictions, and items left at the dumpster',
          'Compactor and dumpster enclosure management',
          'Pet waste station service',
          'Pressure washing for enclosures, breezeways, and common areas',
          'Recycling collection as an add-on where the property supports it',
          'Storm recovery cleanup, which matters in an Osceola County hurricane season',
        ],
      },
      { p: 'One vendor, one point of contact, one invoice.' },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const kissimmeeFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Which parts of Kissimmee and Osceola County do you serve?',
    answer: 'All of it: Kissimmee proper, the US 192 corridor, Buenaventura Lakes, Poinciana, Celebration, ChampionsGate, Four Corners, and east toward St. Cloud and Lake Nona.',
  },
  {
    question: 'Do you collect on weekends and holidays?',
    answer: "Yes. Service runs 7 days a week. For resort and vacation rental communities, that's the whole point.",
  },
  {
    question: "How do you handle short-term rental guests who don't know the rules?",
    answer: 'We can supply simple instructions for your welcome materials, and we document any trash set out against the rules so your office can follow up with the owner or manager.',
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
    question: 'Can you name our HOA or management company as additional insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

export default function ValetTrashKissimmeePage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-kissimmee-fl/"
        areaServed={['Kissimmee']}
      />
      <FaqSchema faqs={kissimmeeFaqs} />
      <ServiceAreaClient
        city="Kissimmee"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        heroSubtitle="professional valet trash service for apartment, HOA, and resort communities across Kissimmee and Osceola County"
        body={kissimmeeBody}
        faq={kissimmeeFaqs}
        faqHeading="Kissimmee valet trash questions"
        cta={{
          heading: 'Get a quote for your Kissimmee community',
          text: (
            <>
              Tell us about your property and we&apos;ll put together a plan and a price. Call{' '}
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
