import { generateMetadata as generateSeoMetadata } from '../utils/metadata';

export const metadata = generateSeoMetadata({
  title: 'Privacy Policy | On The Fly Waste Solutions',
  description: 'Privacy policy for On The Fly Waste Solutions describing how we collect, use, and protect personal information.',
  path: '/privacy/',
});

const lastUpdated = 'April 16, 2026';

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Privacy Policy</h1>
        <p className="text-ink-muted mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none text-ink">
          <h2 className="text-2xl font-semibold mt-8 mb-3">Overview</h2>
          <p>
            On The Fly Waste Solutions ("we", "us", "our") respects your privacy. This Privacy Policy
            explains what information we collect when you visit ontheflywastesolutions.com or interact
            with our services, how we use it, and the choices you have.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Information we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information you provide:</strong> name, email address, phone number, property
              details, and any other information submitted through our contact, demo, or quote forms.
            </li>
            <li>
              <strong>Automatically collected:</strong> device, browser, IP address, pages viewed, and
              referring URLs, gathered through cookies and analytics tools such as Google Analytics
              and Google Tag Manager.
            </li>
            <li>
              <strong>Service communications:</strong> records of phone, email, and chat conversations
              about valet trash, bulk removal, junk removal, and pressure washing services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">How we use information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and quote requests.</li>
            <li>To provide and improve our services and customer support.</li>
            <li>To send service updates and, with your consent, marketing communications.</li>
            <li>To measure site performance and improve user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing</h2>
          <p>
            We do not sell personal information. We share information only with service providers
            (such as HubSpot for forms and CRM, Google for analytics, and our hosting providers) who
            process it on our behalf, and when required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies</h2>
          <p>
            We use cookies and similar technologies to operate the site, remember preferences, and
            measure traffic. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Your choices</h2>
          <p>
            You can request access, correction, or deletion of your personal information, or opt out
            of marketing communications, by emailing{' '}
            <a href="mailto:info@ontheflywastesolutions.com" className="text-primary hover:underline">
              info@ontheflywastesolutions.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p>
            On The Fly Waste Solutions
            <br />
            Central Florida
            <br />
            Phone:{' '}
            <a href="tel:407-274-5019" className="text-primary hover:underline">
              407-274-5019
            </a>
            <br />
            Email:{' '}
            <a href="mailto:info@ontheflywastesolutions.com" className="text-primary hover:underline">
              info@ontheflywastesolutions.com
            </a>
          </p>

          <p className="mt-8 text-ink-muted text-sm">
            We may update this policy from time to time. The "Last updated" date above reflects the
            most recent revision.
          </p>
        </div>
      </div>
    </article>
  );
}
