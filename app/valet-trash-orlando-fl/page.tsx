import type { Metadata } from 'next';
import ServiceAreaClient from '../components/ServiceAreaClient';

const orlandoFaqs = [
  {
    question: 'How do I know my community actually got serviced?',
    answer: "Every pickup is GPS-verified, so there's a record the whole community was covered. When needed, we add timestamped photos — either documenting a violation or confirming a unit was serviced — and you get a daily confirmation, so you're never taking anyone's word for it.",
  },
  {
    question: 'How many nights a week do you collect?',
    answer: "Seven nights a week, no exceptions — including Sundays and holidays. Residents make trash every night, so a doorstep service with dark nights isn't really doorstep service.",
  },
  {
    question: 'What happens if a resident leaves trash out against community rules?',
    answer: 'We document it with a timestamped photo so you have a clear record of the violation, and we flag it to management. Issues get handled with proof instead of back-and-forth.',
  },
  {
    question: 'What areas around Orlando do you serve?',
    answer: "Communities throughout the Orlando area and across Central Florida, including surrounding neighborhoods and nearby cities. Send us your community's location and we'll confirm coverage.",
  },
  {
    question: 'What can residents place out for collection?',
    answer: 'Standard bagged household trash at the door on service nights. We can also set up recycling as an add-on and handle bulk items on a schedule that fits your community.',
  },
  {
    question: 'How quickly can you start service at our community?',
    answer: "Once the agreement's in place, we can usually begin quickly. Call (407) 274-5019 or request a quote and we'll walk you through timing for your property.",
  },
];

const orlandoIntro = {
  heading: 'Valet Trash Service Orlando Property Managers Can Actually Verify',
  paragraphs: [
    'For an Orlando community, doorstep trash service only works if it happens every night — and if you can prove it did. We built our service around proof.',
    "Every pickup on our Orlando routes is GPS-verified, so there's a record that the whole community was covered — not just the buildings near the entrance. And when it matters, we back that up with timestamped photos — documenting a violation, like trash left out against community rules, or confirming that a specific unit was serviced. So when a question comes up about a door, you're not guessing — there's a record to look at.",
    "The service itself is built to be dependable: we collect 7 nights a week with no exceptions, including Sundays and holidays. Paired with the GPS records and photo documentation, that's what stands behind our 100% collection guarantee — a guarantee backed by a system, not just a promise.",
    "We serve communities across the Orlando area today, and the pitch to every property manager is the same: you shouldn't have to take your trash vendor's word for it. You should be able to see it.",
  ],
};

export const metadata: Metadata = {
  title: 'Valet Trash Service Orlando, FL | On The Fly Waste Solutions',
  description: 'Professional valet trash service for apartments, condos, and resorts in Orlando, FL. 100% collection commitment with GPS-tracked truck routing and verified missed pickups made right. Serving all Orlando neighborhoods.',
  alternates: {
    canonical: 'https://ontheflywastesolutions.com/valet-trash-orlando-fl/',
  },
  openGraph: {
    title: 'Valet Trash Service Orlando, FL | On The Fly Waste Solutions',
    description: 'Trusted valet trash service for Orlando apartment communities with 100% collection guarantee.',
    type: 'website',
    url: 'https://ontheflywastesolutions.com/valet-trash-orlando-fl/',
  },
};

export default function ValetTrashOrlandoPage() {
  return (
    <ServiceAreaClient
      city="Orlando"
      state="FL"
      service="valet-trash"
      serviceTitle="Valet Trash Service"
      intro={orlandoIntro}
      faq={orlandoFaqs}
      neighborhoods={[
        'Downtown Orlando',
        'Lake Nona',
        'Baldwin Park',
        'Colonialtown',
        'College Park',
        'Thornton Park',
        'Mills 50',
        'Audubon Park',
        'Metrowest',
        'Dr. Phillips',
        'Millenia',
        'Waterford Lakes'
      ]}
    />
  );
}
