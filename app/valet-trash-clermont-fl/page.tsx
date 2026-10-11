import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Clermont, FL | HOA & Gated Communities | On The Fly',
  description: 'Door to door valet trash for Clermont HOAs, gated communities, and apartments. Collection 7 days a week with GPS-verified routes. Request a quote today.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Clermont, FL | HOA & Gated Communities | On The Fly',
    description: 'Door to door valet trash for Clermont HOAs, gated communities, and apartments. Collection 7 days a week with GPS-verified routes. Request a quote today.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-clermont-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const clermontBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: 'Clermont is growing faster than almost anywhere in Lake County. New neighborhoods keep opening along US 27 and south toward Hartwood Marsh Road, and every one of them has the same question to answer: how do you keep a community looking the way it did on move-in day?',
      },
      {
        p: (
          <>
            On The Fly Waste Solutions answers that with{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>
            , 7 days a week. Residents set bagged trash at their door during the collection window.
            Our crew picks it up and takes it to your dumpster or compactor. Nobody hauls bags across
            the property, and nothing sits out where it shouldn&apos;t.
          </>
        ),
      },
    ],
  },
  {
    heading: "Built for Clermont's HOA and gated communities",
    blocks: [
      {
        p: 'A lot of valet trash companies only know apartments. We work with HOA boards and gated communities too, and the job is different. Boards want proof, not promises, and they answer to homeowners who notice everything.',
      },
      { p: 'Here is what that looks like with us:' },
      {
        ul: [
          <>
            <strong>GPS-verified routes.</strong> Every route is tracked, so you can see when our team
            was on your property.
          </>,
          <>
            <strong>Daily route confirmation.</strong> Your manager gets a message each day confirming
            the route was run.
          </>,
          <>
            <strong>Photo documentation when it matters.</strong> If trash is left out against
            community rules, or you need to confirm a specific home was serviced, we document it with a
            timestamped photo.
          </>,
          <>
            <strong>Uniformed, respectful crews.</strong> Our team works with carts and satchels,
            quietly and quickly.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'New construction and lease-ups along the US 27 corridor',
    blocks: [
      {
        p: (
          <>
            Opening a new community in Clermont or Minneola? Starting{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>{' '}
            on day one is easier than adding it later. Residents learn the routine at move-in, your
            enclosures stay clean through lease-up, and your leasing team has one more amenity to show.
          </>
        ),
      },
      {
        p: 'We can build your route before the first resident arrives and grow it building by building as you fill.',
      },
    ],
  },
  {
    heading: 'More than valet trash',
    blocks: [
      {
        p: 'Most Clermont properties we talk to need help with more than doorstep collection. We also handle:',
      },
      {
        ul: [
          'Bulk and junk removal for move-outs and left-behind furniture',
          'Compactor and dumpster enclosure management',
          'Pet waste station service',
          'Pressure washing for enclosures, breezeways, and common areas',
        ],
      },
      { p: 'One vendor, one point of contact, one invoice.' },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const clermontFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Do you serve communities outside Clermont city limits?',
    answer: 'Yes. We serve Clermont, Minneola, Groveland, and the communities running south along US 27 toward Four Corners.',
  },
  {
    question: 'How is valet trash priced for an HOA?',
    answer: "Pricing is per home, per month, and depends on the size of the community and the services you include. We'll walk the property and give you a number built for your community.",
  },
  {
    question: 'Does valet trash replace our current hauler?',
    answer: 'No. We work alongside your existing dumpster, compactor, or curbside service. We handle the trip from the door to the container.',
  },
  {
    question: 'Can you name our HOA as additional insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and management companies as additional insured.',
  },
];

export default function ValetTrashClermontPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-clermont-fl/"
        areaServed={['Clermont']}
      />
      <FaqSchema faqs={clermontFaqs} />
      <ServiceAreaClient
        city="Clermont"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for HOA and gated communities"
        body={clermontBody}
        faq={clermontFaqs}
        faqHeading="Clermont valet trash questions"
        cta={{
          heading: 'Get a quote for your Clermont community',
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
