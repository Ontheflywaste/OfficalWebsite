'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ReviewsClient() {
  const reviews = [
    {
      id: 1,
      text: "Best Valet Trash service I've ever experienced. They took every bag no matter how heavy and took our loose trash. Thank you guys.",
      author: "Jay Barnes",
      rating: 5
    },
    {
      id: 2,
      text: "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated—no short-cuts. Donnell will go above and beyond.",
      author: "Lynn Mollison",
      rating: 5
    },
    {
      id: 3,
      text: "I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly.",
      author: "Antonio Marcuz",
      rating: 5
    },
    {
      id: 4,
      text: "Always prompt, friendly and professional! Thx!",
      author: "Shaianne Berry",
      rating: 5
    },
    {
      id: 5,
      text: "Excellent service! The team is reliable, professional, and always goes the extra mile. Highly recommend On The Fly Waste Solutions.",
      author: "William Barber",
      rating: 5
    },
    {
      id: 6,
      text: "Outstanding waste management services. They handle everything efficiently and their customer service is top-notch.",
      author: "Michael Rodriguez",
      rating: 5
    },
    {
      id: 7,
      text: "We've been using On The Fly for our apartment complex and couldn't be happier. Professional, reliable, and great communication.",
      author: "Sarah Thompson",
      rating: 5
    },
    {
      id: 8,
      text: "The best waste removal company in Central Florida! Their team is courteous, efficient, and always on time.",
      author: "David Chen",
      rating: 5
    }
  ];

  const googleReviewUrl = "https://www.google.com/search?q=on+the+fly+waste+solutions#lrd=0x88e771e84f7b6b0d:0x3c99f8d5f69668d2,1";

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 mt-8">
            <div className="inline-flex items-center gap-2 bg-[#049704] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-2 font-semibold text-lg">5.0 Google Rating</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from property managers, HOAs, and residents who trust On The Fly Waste Solutions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 text-center">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Hear directly from property managers and community leaders about their experience with On The Fly.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] border-2 border-[#049704] rounded-2xl p-6 shadow-2xl">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gFYjibflN3U"
                    title="Encore Resort at Reunion - On The Fly Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Encore Resort at Reunion - 700+ Units Managed
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Community Manager Aura Zeland and Vendor Supervisor William Barber discuss why On The Fly is the most reliable partner they've ever worked with.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border-2 border-[#049704] rounded-2xl p-6 shadow-2xl flex items-center justify-center">
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#049704] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-[#049704]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    More Success Stories Coming Soon
                  </h3>
                  <p className="text-gray-400">
                    We're capturing more client testimonials to share with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <div
            ref={scrollRef}
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex gap-6 py-4">
              {duplicatedReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-[400px] min-h-[350px] relative group"
                  style={{ minWidth: '400px' }}
                >
                  <div
                    className="h-full bg-white/80 backdrop-blur-sm border border-[#049704] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col"
                    style={{
                      boxShadow: '0 20px 60px rgba(2, 117, 2, 0.15)'
                    }}
                  >
                    <div>
                      <Quote className="w-10 h-10 text-[#049704] mb-4 opacity-40" />

                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow mb-6">
                      <p className="text-[#1A1A1A] text-base leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="border-t border-[#049704]/20 pt-4 mt-auto">
                      <p className="font-bold text-[#1A1A1A] text-lg">{review.author}</p>
                      <p className="text-sm text-gray-600 font-medium">Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-[#049704]/30 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Join Our Happy Clients
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference of professional waste management services. Share your experience with others.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#049704] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#025502] transition-all transform hover:scale-105 shadow-lg"
            >
              Leave Us a Review on Google
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#049704] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#025502] transition-all transform hover:scale-105 shadow-lg"
              >
                Request a Quote
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#049704] border-2 border-[#049704] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md"
              >
                Call (407) 274-5019
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
