import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Altamonte Springs, FL | Apartments & Condos | On The Fly',
  description: 'Doorstep trash collection for Altamonte Springs apartments, condos, and HOA communities along SR 436 and I-4. 7 days a week, GPS-verified routes, daily confirmation. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-altamonte-springs-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Altamonte Springs, FL | Apartments & Condos | On The Fly',
    description: 'Doorstep trash collection for Altamonte Springs apartments, condos, and HOA communities along SR 436 and I-4. 7 days a week, GPS-verified routes, daily confirmation. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-altamonte-springs-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const altamonteBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: 'Altamonte Springs has some of the densest apartment living in Seminole County. Mid-rise and garden communities line SR 436 and the I-4 corridor, cluster around Uptown Altamonte and Cranes Roost, and fill the blocks between Maitland and Longwood. More residents in less space means more trash, tighter enclosures, and less patience for bags left in breezeways.',
      },
      {
        p: (
          <>
            <Link href="/services/valet-trash/" className={linkClass}>
              Valet trash
            </Link>{' '}
            is built for exactly that. On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              doorstep trash collection
            </Link>{' '}
            for Altamonte Springs apartment communities, condos, and HOAs, 7 days a week, from an
            office fifteen minutes up the road in Apopka.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Why dense communities run better with daily collection',
    blocks: [
      {
        p: 'When hundreds of homes share a few enclosures, trash finds its way into hallways, stairwells, and parking lots fast. Daily doorstep collection stops it before it starts:',
      },
      {
        ul: [
          'Residents set bagged trash at their door during the collection window.',
          'Our crew walks every building with carts and satchels and collects door to door.',
          'Everything goes to your compactor or dumpster. We leave the enclosure tidy.',
          'Your manager gets a daily confirmation that the route was completed.',
        ],
      },
      {
        p: 'Residents get the convenience. Your maintenance team gets its day back. Your breezeways stay clean, which matters at renewal time.',
      },
    ],
  },
  {
    heading: 'What Altamonte Springs managers get from us',
    blocks: [
      {
        p: (
          <>
            <strong>Accountability you can check.</strong> Every route is GPS-verified. When a
            resident says they were skipped, you don&apos;t have to guess. We can show when our team
            was on site, and we document specific units with timestamped photos when a question
            comes up.
          </>
        ),
      },
      {
        p: (
          <>
            <strong>Rule enforcement without the awkward conversation.</strong> Trash set out
            against community rules gets documented and sent to your office, so you have what you
            need to follow up.
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
    heading: 'Apartments, condos, and HOAs across Altamonte',
    blocks: [
      { p: "Altamonte isn't only large apartment communities. We also serve:" },
      {
        ul: [
          <>
            <strong>Condo associations</strong> around Cranes Roost and Westmonte, where boards
            want consistent service and clean records.
          </>,
          <>
            <strong>HOA and townhome communities</strong> off Montgomery Road and in Sanlando
            Springs.
          </>,
          <>
            <strong>Mixed-use and mid-rise buildings</strong> in Uptown Altamonte, where enclosures
            are tight and schedules matter.
          </>,
        ],
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
          'Recycling collection as an add-on where the property supports it',
        ],
      },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const altamonteFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Which areas near Altamonte Springs do you cover?',
    answer: 'Altamonte Springs, Longwood, Maitland, Casselberry, Forest City, and the communities along SR 436 and I-4 in south Seminole County.',
  },
  {
    question: 'How quickly can you start?',
    answer: 'Once the agreement is in place, we build your route and begin. For a lease-up, we can start with the first occupied building and add buildings as they open.',
  },
  {
    question: 'What does valet trash cost for an apartment community?',
    answer: "It's priced per unit, per month. The rate depends on your unit count and which services you include. Request a quote and we'll price it for your property.",
  },
  {
    question: 'Do residents need special containers?',
    answer: "It depends on the property. Some communities supply bins and some ask us to. We'll recommend what fits your buildings.",
  },
  {
    question: 'Can you handle a large community?',
    answer: 'Yes. Our routes are built around the property, and we scale the crew to the unit count.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

export default function ValetTrashAltamonteSpringsPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-altamonte-springs-fl/"
        areaServed={['Altamonte Springs']}
      />
      <FaqSchema faqs={altamonteFaqs} />
      <ServiceAreaClient
        city="Altamonte Springs"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for apartment, condo, and HOA communities"
        body={altamonteBody}
        faq={altamonteFaqs}
        faqHeading="Altamonte Springs valet trash questions"
        cta={{
          heading: 'Request a quote for your Altamonte Springs property',
          text: (
            <>
              Send us your unit count and a little about the community, and we&apos;ll come back
              with a plan. Call{' '}
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
