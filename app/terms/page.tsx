import { generateMetadata as generateSeoMetadata } from '../utils/metadata';

export const metadata = generateSeoMetadata({
  title: 'Terms of Service | On The Fly Waste Solutions',
  description: 'Terms of service governing use of the On The Fly Waste Solutions website and services.',
  path: '/terms/',
});

const lastUpdated = 'April 16, 2026';

export default function TermsPage() {
  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Terms of Service</h1>
        <p className="text-ink-muted mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none text-ink">
          <h2 className="text-2xl font-semibold mt-8 mb-3">Acceptance of terms</h2>
          <p>
            By accessing ontheflywastesolutions.com or using any services from On The Fly Waste
            Solutions ("we", "us", "our"), you agree to these Terms of Service. If you do not agree,
            please do not use the site or our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Use of the site</h2>
          <p>
            You agree to use the site for lawful purposes only and in a manner that does not
            interfere with other users' enjoyment of the site. You may not attempt to gain
            unauthorized access to any portion of the site or any related systems.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Service quotes and agreements</h2>
          <p>
            Information presented on the site about valet trash, bulk removal, junk removal, and
            pressure washing services is for general informational purposes. Specific service terms,
            pricing, and scheduling are established in a separate written service agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Intellectual property</h2>
          <p>
            All content on this site, including text, graphics, logos, images, and the underlying
            code, is the property of On The Fly Waste Solutions or its licensors and is protected by
            copyright and trademark law. You may not copy, reproduce, or redistribute any content
            without prior written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Disclaimer of warranties</h2>
          <p>
            The site is provided "as is" without warranties of any kind, either express or implied.
            We do not warrant that the site will be uninterrupted, error-free, or free of harmful
            components.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, On The Fly Waste Solutions shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages arising from
            your use of the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to these terms</h2>
          <p>
            We may revise these Terms of Service at any time. Continued use of the site after
            revisions become effective constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Florida, without regard to its
            conflict-of-law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p>
            Questions about these Terms can be sent to{' '}
            <a href="mailto:info@ontheflywastesolutions.com" className="text-primary hover:underline">
              info@ontheflywastesolutions.com
            </a>{' '}
            or by phone at{' '}
            <a href="tel:407-274-5019" className="text-primary hover:underline">
              407-274-5019
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
