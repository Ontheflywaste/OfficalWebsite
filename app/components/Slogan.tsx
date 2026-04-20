import type { CSSProperties } from 'react';

interface SloganProps {
  /**
   * 'light' = WASTE/RIGHT in white (use on dark backgrounds)
   * 'dark'  = WASTE/RIGHT in ink-dark (use on light backgrounds)
   */
  variant?: 'light' | 'dark';
  /** Tailwind size + tracking classes; override per placement. */
  className?: string;
  /** Visual treatment. 'plain' = inline text, 'badge' = pill, 'stamp' = framed brand mark. */
  as?: 'plain' | 'badge' | 'stamp';
}

/**
 * Brand slogan: "WASTE DONE RIGHT"
 *  - DONE always #049704 (primary.done token)
 *  - WASTE / RIGHT switch white <-> ink based on variant
 */
export default function Slogan({
  variant = 'light',
  className = '',
  as = 'plain',
}: SloganProps) {
  const wordColor = variant === 'light' ? 'text-white' : 'text-ink';
  const dotColor = variant === 'light' ? 'bg-white/40' : 'bg-ink/30';

  const inner = (
    <span
      className={`inline-flex items-baseline gap-2 font-extrabold uppercase tracking-[0.18em] ${wordColor} ${className}`}
      aria-label="Waste Done Right — On The Fly Waste Solutions slogan"
    >
      <span>WASTE</span>
      <span className="text-primary-done" style={{ color: '#049704' } as CSSProperties}>DONE</span>
      <span>RIGHT</span>
    </span>
  );

  if (as === 'badge') {
    const badgeBg =
      variant === 'light'
        ? 'bg-white/10 border-white/20 backdrop-blur-sm'
        : 'bg-primary-done/5 border-primary-done/30';
    return (
      <span
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${badgeBg}`}
      >
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${dotColor}`}
          aria-hidden="true"
        />
        {inner}
      </span>
    );
  }

  if (as === 'stamp') {
    const stampBorder =
      variant === 'light' ? 'border-white/20' : 'border-ink/15';
    return (
      <div
        className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-dashed ${stampBorder}`}
      >
        <span
          className={`inline-block w-2 h-2 rounded-full ${dotColor}`}
          aria-hidden="true"
        />
        {inner}
        <span
          className={`inline-block w-2 h-2 rounded-full ${dotColor}`}
          aria-hidden="true"
        />
      </div>
    );
  }

  return inner;
}
