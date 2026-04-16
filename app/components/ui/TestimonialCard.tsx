import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  initials,
  rating = 5,
}: TestimonialCardProps) {
  const fallbackInitials = initials ?? author.charAt(0).toUpperCase();

  return (
    <div className="bg-surface-card p-6 rounded-xl shadow-lg border border-surface-card-border hover:border-primary transition-all h-full flex flex-col">
      <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
        ))}
      </div>
      <p className="text-ink mb-4 leading-relaxed flex-grow">"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          {fallbackInitials}
        </div>
        <div>
          <div className="font-semibold text-ink">{author}</div>
          <div className="text-sm text-ink-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}
