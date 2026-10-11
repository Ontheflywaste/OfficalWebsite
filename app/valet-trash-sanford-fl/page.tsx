import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Sanford, FL | Apartments & Multifamily | On The Fly',
  description: 'Doorstep trash collection for Sanford apartments, condos, and townhome communities. 7 days a week, GPS-verified routes, daily confirmation. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Sanford, FL | Apartments & Multifamily | On The Fly',
    description: 'Doorstep trash collection for Sanford apartments, condos, and townhome communities. 7 days a week, GPS-verified routes, daily confirmation. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-sanford-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const sanfordBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: "Sanford has become one of Seminole County's busiest places to rent. Between the I-4 and SR 417 interchange, the SR 46 corridor, and the blocks around historic downtown and Lake Monroe, there are more apartment homes here every year, and more competition for every lease.",
      },
      {
        p: (
          <>
            <Link href="/services/valet-trash/" className={linkClass}>
              Valet trash
            </Link>{' '}
            is one of the amenities residents now expect. On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              doorstep trash collection
            </Link>{' '}
            for Sanford apartment, condo, and townhome communities, 7 days a week.
          </>
        ),
      },
    ],
  },
  {
    heading: 'How doorstep trash collection works',
    blocks: [
      {
        ul: [
          'Residents set out bagged trash at their door during the collection window.',
          'Our crew walks every building with carts and satchels and collects door to door.',
          'Everything goes to your compactor or dumpster. We leave the enclosure tidy, not overflowing.',
          'Your manager gets a daily confirmation that the route was completed.',
        ],
      },
      {
        p: "That's it. Residents get the convenience, and your maintenance team stops spending its day on trash.",
      },
    ],
  },
  {
    heading: 'What Sanford property managers get from us',
    blocks: [
      {
        p: (
          <>
            <strong>Accountability you can check.</strong> Every route is GPS-verified. If a resident
            says they were skipped, you don&apos;t have to guess. We can show when our team was on
            site, and we document specific units with timestamped photos when a question comes up.
          </>
        ),
      },
      {
        p: (
          <>
            <strong>Cleaner breezeways and enclosures.</strong> Trash left in hallways and stairwells
            is one of the fastest ways to lose a renewal. Doorstep collection on a daily schedule keeps
            it from piling up.
          </>
        ),
      },
      {
        p: (
          <>
            <strong>Rule enforcement without the awkward conversation.</strong> When trash is set out
            against community rules, we document the violation and pass it to your office so you have
            what you need to follow up.
          </>
        ),
      },
      {
        p: (
          <>
            <strong>A partner, not a ticket number.</strong> You&apos;ll have a direct line to our
            team. We&apos;re local, BBB accredited, and rated 5.0 on Google.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Services that pair with valet trash',
    blocks: [
      {
        ul: [
          'Bulk removal for move-outs, evictions, and items left at the dumpster',
          'Compactor enclosure management to keep the area usable and presentable',
          'Pet waste station service, stocked and emptied on schedule',
          'Pressure washing for enclosures, sidewalks, and breezeways',
          'Recycling collection as an add-on where your property supports it',
        ],
      },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const sanfordFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Which areas near Sanford do you cover?',
    answer: 'Sanford, Lake Mary, Heathrow, and the surrounding Seminole County communities, including properties near Orlando Sanford International Airport.',
  },
  {
    question: 'Can you start during a lease-up?',
    answer: 'Yes. We can start with your first occupied building and add buildings as they open.',
  },
  {
    question: 'What does valet trash cost for an apartment community?',
    answer: "It's priced per unit, per month. The rate depends on your unit count and which services you include. Request a quote and we'll price it for your property.",
  },
  {
    question: 'Do residents need special containers?',
    answer: "That depends on the property. Some communities supply bins and some ask us to. We'll recommend what fits your buildings.",
  },
];

export default function ValetTrashSanfordPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-sanford-fl/"
        areaServed={['Sanford']}
      />
      <FaqSchema faqs={sanfordFaqs} />
      <ServiceAreaClient
        city="Sanford"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for apartment and multifamily communities"
        body={sanfordBody}
        faq={sanfordFaqs}
        faqHeading="Sanford valet trash questions"
        cta={{
          heading: 'Request a quote for your Sanford property',
          text: (
            <>
              Send us your unit count and a little about the community, and we&apos;ll come back with
              a plan. Call{' '}
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
