import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CtaSection({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-surface-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{heading}</h2>
        {subheading && (
          <p className="text-xl text-gray-300 mb-8">{subheading}</p>
        )}
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:scale-[0.98] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
        >
          {ctaLabel}
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
