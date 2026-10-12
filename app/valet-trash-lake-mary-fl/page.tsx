import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Lake Mary, FL | Class-A & Gated Communities | On The Fly',
  description: "Valet trash for Lake Mary's class-A apartments, gated HOAs, and townhome communities along I-4 and Lake Mary Boulevard. Door to door collection 7 days a week with GPS-verified routes. Get a quote.",
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-lake-mary-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Lake Mary, FL | Class-A & Gated Communities | On The Fly',
    description: "Valet trash for Lake Mary's class-A apartments, gated HOAs, and townhome communities along I-4 and Lake Mary Boulevard. Door to door collection 7 days a week with GPS-verified routes. Get a quote.",
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-lake-mary-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const lakeMaryBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: "Lake Mary sets a high bar. The I-4 corporate corridor brought class-A apartment communities, the gated neighborhoods around Heathrow and Markham Woods set expectations for how a community should look, and residents here notice when something is off. A full enclosure or a bag in a breezeway doesn't go unmentioned.",
      },
      {
        p: (
          <>
            On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            for Lake Mary apartment communities, gated HOAs, and townhomes, 7 days a week, with the
            documentation a community like this expects.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Service that matches the community',
    blocks: [
      {
        p: (
          <>
            In Lake Mary,{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>{' '}
            isn&apos;t just a convenience. It&apos;s part of how a property presents itself.
            Here&apos;s what that looks like with us:
          </>
        ),
      },
      {
        ul: [
          <>
            <strong>GPS-verified routes,</strong> so you can confirm when our team was on the
            property, every day.
          </>,
          <>
            <strong>Daily route confirmation</strong> to management.
          </>,
          <>
            <strong>Timestamped photo documentation when needed,</strong> to record a violation or
            confirm a specific home or unit was serviced.
          </>,
          <>
            <strong>Uniformed, trained crews with carts and satchels.</strong> Quiet, quick, and
            respectful of residents and their doors.
          </>,
        ],
      },
      {
        p: "Boards and managers here want proof, not promises. That's how we built the service.",
      },
    ],
  },
  {
    heading: 'Class-A apartments and corporate-corridor communities',
    blocks: [
      {
        p: 'The communities around Lake Mary Boulevard, Rinehart Road, and the I-4 interchange compete for the same residents, and amenities decide a lot of leases. Doorstep trash collection is one residents ask about. We make it easy to offer:',
      },
      {
        ul: [
          'Start on day one of a lease-up or add it to an established community.',
          'A route built around your buildings, your enclosures, and your collection window.',
          'A daily record your leasing and management team can point to.',
        ],
      },
    ],
  },
  {
    heading: 'Gated HOAs and townhome communities',
    blocks: [
      {
        p: 'For HOA boards in Heathrow, the neighborhoods off Rinehart Road, Markham Woods, and the townhome communities off Lake Emma Road, valet trash is about curb appeal and consistency. Cans stay off the street, common areas stay clean, and the board has records when a homeowner asks a question.',
      },
      {
        p: "We work with boards and management companies directly, and we're glad to present at a board meeting before you decide.",
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
          'Pressure washing for enclosures, walkways, and common areas',
          'Recycling collection as an add-on where the property supports it',
        ],
      },
    ],
  },
];

// Single source for the visible FAQ and the FAQPage JSON-LD.
const lakeMaryFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Where in the Lake Mary area do you work?',
    answer: 'Lake Mary, Heathrow, Markham Woods, Longwood, Sanford, and the communities along I-4 and Lake Mary Boulevard in Seminole County.',
  },
  {
    question: 'How is valet trash priced for a class-A community?',
    answer: "Per unit, per month, based on unit count and the services you include. Request a quote and we'll build one for your property.",
  },
  {
    question: 'How is pricing set for an HOA?',
    answer: "Per home, per month, based on community size and services. We'll walk the property and give you a number built for your community.",
  },
  {
    question: 'Does valet trash replace our current hauler?',
    answer: 'No. We work alongside your existing dumpster, compactor, or curbside service. We handle the trip from the door to the container.',
  },
  {
    question: 'Can you start during a lease-up?',
    answer: 'Yes. We can start with your first occupied building and add buildings as they open.',
  },
  {
    question: 'Can you name our HOA or management company as additional insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name HOAs and property management companies as additional insured.',
  },
];

export default function ValetTrashLakeMaryPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-lake-mary-fl/"
        areaServed={['Lake Mary']}
      />
      <FaqSchema faqs={lakeMaryFaqs} />
      <ServiceAreaClient
        city="Lake Mary"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for class-A apartment, gated HOA, and townhome communities"
        body={lakeMaryBody}
        faq={lakeMaryFaqs}
        faqHeading="Lake Mary valet trash questions"
        cta={{
          heading: 'Get a quote for your Lake Mary community',
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
