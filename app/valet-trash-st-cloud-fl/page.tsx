import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in St. Cloud, FL | Resort & HOA Communities | On The Fly',
  description: 'Resort community and HOA valet trash in St. Cloud, FL. Door to door collection 7 days a week across Osceola County, with GPS-verified routes. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in St. Cloud, FL | Resort & HOA Communities | On The Fly',
    description: 'Resort community and HOA valet trash in St. Cloud, FL. Door to door collection 7 days a week across Osceola County, with GPS-verified routes. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-st-cloud-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const stCloudBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: 'St. Cloud used to be the quiet side of Osceola County. Not anymore. Master-planned communities now line Narcoossee Road, new neighborhoods reach toward Lake Nona, and resort-style and short-term rental communities have followed the growth east from Kissimmee.',
      },
      {
        p: (
          <>
            On The Fly Waste Solutions brings{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            to St. Cloud communities 7 days a week, including weekends and holidays, when resort and
            rental properties are at their busiest.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Why resort and rental communities need daily collection',
    blocks: [
      {
        p: "A home that turns over every few days produces trash on a schedule no weekly pickup can match. Guests don't know the rules, checkout days stack up, and one overflowing can is the first thing the next guest sees.",
      },
      {
        p: (
          <>
            <Link href="/services/valet-trash/" className={linkClass}>
              Resort community valet trash
            </Link>{' '}
            solves that:
          </>
        ),
      },
      {
        ul: [
          'Collection every day, so checkout-day trash is gone before the next arrival.',
          'GPS-verified routes, so your team can confirm when each street was serviced.',
          'Timestamped photo documentation when needed, to record a violation or confirm a specific home was serviced.',
          'A daily route confirmation sent to management.',
        ],
      },
      {
        p: "We started in Central Florida's resort communities, and it's still the work we know best.",
      },
    ],
  },
  {
    heading: 'HOA and gated community valet trash in St. Cloud',
    blocks: [
      {
        p: 'For HOA boards along Narcoossee Road and around East Lake Tohopekaliga, valet trash is about curb appeal and consistency. Cans stay off the street, common areas stay clean, and the board has records to point to when a homeowner asks a question.',
      },
      {
        p: "We work with boards and management companies directly, and we're glad to present at a board meeting before you decide.",
      },
    ],
  },
  {
    heading: 'One team for the whole property',
    blocks: [
      { p: 'Alongside gated community valet trash, we offer:' },
      {
        ul: [
          'Bulk and junk removal',
          'Compactor and dumpster enclosure management',
          'Pet waste station service',
          'Pressure washing',
          'Storm recovery cleanup, which matters in an Osceola County hurricane season',
        ],
      },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const stCloudFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Where in the St. Cloud area do you work?',
    answer: 'St. Cloud, Narcoossee, Harmony, and neighboring Kissimmee and Lake Nona communities.',
  },
  {
    question: 'Do you collect on weekends and holidays?',
    answer: 'Yes. Service runs 7 days a week.',
  },
  {
    question: "How do you handle short-term rental guests who don't know the rules?",
    answer: 'We can supply simple instructions for your welcome materials, and we document any trash set out against the rules so your office can follow up with the owner or manager.',
  },
  {
    question: 'How is pricing set?',
    answer: "Per home, per month, based on community size and the services you choose. Request a quote and we'll build one for your community.",
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

export default function ValetTrashStCloudPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-st-cloud-fl/"
        areaServed={['St. Cloud']}
      />
      <FaqSchema faqs={stCloudFaqs} />
      <ServiceAreaClient
        city="St. Cloud"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for resort and HOA communities"
        body={stCloudBody}
        faq={stCloudFaqs}
        faqHeading="St. Cloud valet trash questions"
        cta={{
          heading: 'Get a quote for your St. Cloud community',
          text: (
            <>
              Tell us about your community and we&apos;ll put a plan together. Call{' '}
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
