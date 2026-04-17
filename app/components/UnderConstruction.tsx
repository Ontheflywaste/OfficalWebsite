import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';

interface UnderConstructionProps {
  title?: string;
  message?: string;
}

export default function UnderConstruction({
  title = 'Under Construction',
  message = "We're putting the finishing touches on this experience. Check back soon.",
}: UnderConstructionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-dark via-primary-deep to-surface-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(22, 163, 74, 0.25) 0%, transparent 55%), radial-gradient(circle at 70% 60%, rgba(22, 163, 74, 0.15) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/15 border-2 border-primary/40 mb-8">
          <Construction
            className="w-12 h-12 text-primary"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight lg:leading-snug">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          {message}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
