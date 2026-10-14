import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceAreaClient, {
  type ServiceAreaBodySection,
  type ServiceAreaFaqItem,
} from '../components/ServiceAreaClient';
import FaqSchema from '../components/FaqSchema';
import ServiceSchema from '../components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Valet Trash Service in Winter Park, FL | Condo & HOA Communities | On The Fly',
  description: 'Door to door valet trash for Winter Park condo associations, HOAs, and apartment communities, from Park Avenue to Aloma and Howell Branch. Service 7 days a week with GPS-verified routes and records your board can review. Get a quote.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service in Winter Park, FL | Condo & HOA Communities | On The Fly',
    description: 'Door to door valet trash for Winter Park condo associations, HOAs, and apartment communities, from Park Avenue to Aloma and Howell Branch. Service 7 days a week with GPS-verified routes and records your board can review. Get a quote.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-winter-park-fl/',
  },
};

const linkClass = 'text-primary hover:underline font-medium';

const winterParkBody: ServiceAreaBodySection[] = [
  {
    blocks: [
      {
        p: 'Winter Park holds itself to a standard. The brick streets near Park Avenue, the condo buildings along Aloma and Howell Branch, the garden-style communities around Rollins and Baldwin Park, the neighborhoods off Lakemont and Winter Park Road. Residents here notice when something is off, and a full enclosure or a bag in a breezeway gets mentioned at the next board meeting.',
      },
      {
        p: (
          <>
            On The Fly Waste Solutions provides{' '}
            <Link href="/door-to-door-trash-collection/" className={linkClass}>
              door to door trash collection
            </Link>{' '}
            for Winter Park condo associations, HOAs, and apartment communities, 7 days a week, with
            the records a board like yours expects.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Built for boards',
    blocks: [
      {
        p: "Winter Park is a board-driven market. Condo associations and HOAs make the decisions here, and they want proof, not promises. That's how we built the service:",
      },
      {
        ul: [
          <>
            <strong>GPS-verified routes,</strong> so the board can confirm when our team was on the
            property, every day.
          </>,
          <>
            <strong>Daily route confirmation</strong> to the manager or board contact.
          </>,
          <>
            <strong>Timestamped photo documentation when needed,</strong> to record a violation or
            confirm a specific unit or home was serviced.
          </>,
          <>
            <strong>Uniformed, trained crews with carts and satchels.</strong> Quiet, quick, and
            respectful of residents and their doors.
          </>,
        ],
      },
      {
        p: "We work with boards and management companies directly, and we're glad to present at a board meeting before you decide.",
      },
    ],
  },
  {
    heading: 'Condos, HOAs, and apartments across Winter Park',
    blocks: [
      {
        ul: [
          <>
            <strong>Condo associations</strong> along Aloma, Howell Branch, and near downtown, where
            shared hallways and small enclosures make daily collection the difference between tidy
            and not.
          </>,
          <>
            <strong>HOA and townhome communities</strong> off Lakemont, Winter Park Road, and toward
            Maitland, where the board wants cans off the street.
          </>,
          <>
            <strong>Apartment communities</strong> around Rollins, Baldwin Park, and the Aloma
            corridor, where doorstep collection is an amenity residents expect.
          </>,
          <>
            <strong>Older garden-style communities</strong> that were built before valet trash
            existed and are adding it now to stay competitive.
          </>,
        ],
      },
    ],
  },
  {
    heading: 'More than doorstep collection',
    blocks: [
      {
        p: (
          <>
            Alongside{' '}
            <Link href="/services/valet-trash/" className={linkClass}>
              valet trash
            </Link>
            , we offer:
          </>
        ),
      },
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
const winterParkFaqs: ServiceAreaFaqItem[] = [
  {
    question: 'Which areas near Winter Park do you cover?',
    answer: 'Winter Park, Maitland, Baldwin Park, Aloma, Goldenrod, and the communities along Howell Branch Road and Aloma Avenue in Orange and Seminole counties.',
  },
  {
    question: 'How is valet trash priced for a condo association?',
    answer: "Per unit, per month, based on unit count and the services you include. We'll walk the property and give you a number built for your building.",
  },
  {
    question: 'Can you present to our board?',
    answer: "Yes. We're glad to walk your board through how the service works and what records they'll receive before anyone signs.",
  },
  {
    question: 'Does valet trash replace our current hauler?',
    answer: 'No. We work alongside your existing dumpster, compactor, or curbside service. We handle the trip from the door to the container.',
  },
  {
    question: 'Can an older community add valet trash?',
    answer: "Yes. Some of our best-running routes are in communities built decades ago. We'll look at the layout and recommend a collection window and setup that fits.",
  },
  {
    question: 'Can you name our association or management company as additional insured?',
    answer: 'Yes. We carry commercial general liability, auto, and workers’ compensation, and we name associations and property management companies as additional insured.',
  },
];

export default function ValetTrashWinterParkPage() {
  return (
    <>
      <ServiceSchema
        name="Valet Trash Service"
        description="Door-to-door doorstep trash collection for apartment communities, condos, and resort properties across Central Florida with GPS-verified routes and daily route confirmation."
        slug="/valet-trash-winter-park-fl/"
        areaServed={['Winter Park']}
      />
      <FaqSchema faqs={winterParkFaqs} />
      <ServiceAreaClient
        city="Winter Park"
        state="FL"
        service="valet-trash"
        serviceTitle="Valet Trash Service"
        headline="Valet Trash Service in"
        serviceDescription="professional valet trash service for condo, HOA, and apartment communities"
        body={winterParkBody}
        faq={winterParkFaqs}
        faqHeading="Winter Park valet trash questions"
        cta={{
          heading: 'Get a quote for your Winter Park community',
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
