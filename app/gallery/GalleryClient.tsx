'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import { GALLERY_CATEGORIES, GALLERY_PHOTOS, type GalleryCategoryId } from './photos';

const PAGE_SIZE = 24;

type Filter = 'all' | GalleryCategoryId;

export default function GalleryClient() {
  const [filter, setFilter] = useState<Filter>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: GALLERY_PHOTOS.length };
    for (const p of GALLERY_PHOTOS) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () => (filter === 'all' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );
  const visible = filtered.slice(0, visibleCount);
  const current = lightboxIndex === null ? null : filtered[lightboxIndex];

  function selectFilter(next: Filter) {
    setFilter(next);
    setVisibleCount(PAGE_SIZE);
  }

  function openLightbox(index: number, trigger: HTMLElement) {
    lastTriggerRef.current = trigger;
    setLightboxIndex(index);
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((i) => (i === null ? i : (i + delta + filtered.length) % filtered.length));
    },
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, step]);

  const categoryLabel = (id: GalleryCategoryId) => GALLERY_CATEGORIES.find((c) => c.id === id)?.label ?? id;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 pt-32 md:pt-40 bg-surface-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 25% 30%, rgba(22, 163, 74, 0.22) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(22, 163, 74, 0.12) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Camera className="w-4 h-4" aria-hidden="true" />
                Photo Gallery
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Work and Events</h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Real photos of our crews on the job, our team at industry events, and the people behind On The Fly across Central Florida.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter photos by category">
            {[{ id: 'all' as const, label: 'All' }, ...GALLERY_CATEGORIES].map((c) => {
              const count = counts[c.id] ?? 0;
              if (count === 0) return null;
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectFilter(c.id)}
                  aria-pressed={active}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                    active
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {c.label} <span className={active ? 'text-white/80' : 'text-gray-400'}>({count})</span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-600 py-16">Photos are on the way. Check back soon.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {visible.map((photo, i) => (
                <li key={photo.src}>
                  <figure className="h-full flex flex-col">
                    <button
                      type="button"
                      onClick={(e) => openLightbox(i, e.currentTarget)}
                      className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 transition-shadow group"
                      aria-label={`Open larger view: ${photo.caption}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading={i < 3 ? 'eager' : 'lazy'}
                      />
                    </button>
                    <figcaption className="mt-3 flex items-start justify-between gap-3">
                      <span className="text-gray-700 leading-snug">{photo.caption}</span>
                      <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {categoryLabel(photo.category)}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}

          {visibleCount < filtered.length && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="btn-primary"
              >
                Show more ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {current && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}

          <div className="relative w-[92vw] max-w-6xl h-[72vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-center text-gray-200 max-w-3xl px-4" onClick={(e) => e.stopPropagation()}>
            {current.caption}
            {filtered.length > 1 && (
              <span className="block text-sm text-gray-400 mt-1">
                {lightboxIndex + 1} of {filtered.length}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
