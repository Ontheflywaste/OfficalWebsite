'use client';

import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  ctaLabel = 'Learn More',
}: ServiceCardProps) {
  return (
    <Link href={href} className="group h-full block">
      <div className="bg-surface-card border border-surface-card-border p-8 rounded-xl hover:shadow-2xl hover:border-primary transition-all transform hover:-translate-y-1 h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
          <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-3">{title}</h3>
        <p className="text-ink-muted mb-6 leading-relaxed flex-grow">{description}</p>
        <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
          {ctaLabel}
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
