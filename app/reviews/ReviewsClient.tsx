'use client';

import React from 'react';
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
      author: "S B",
      rating: 5
    }
  ];

  const googleReviewUrl = "https://www.google.com/search?q=on+the+fly+waste+solutions#lrd=0x88e771e84f7b6b0d:0x3c99f8d5f69668d2,1";

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#027502] text-white px-6 py-3 rounded-full mb-6">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real reviews from property managers, HOAs, and residents who trust On The Fly Waste Solutions.
            </p>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
            >
              Leave Us a Review on Google
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 0.1}>
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  gridRow: index === 1 ? 'span 2' : 'span 1'
                }}
              >
                <Quote className="w-12 h-12 text-[#027502] mb-4 opacity-30" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-[#1A1A1A] text-lg leading-relaxed mb-6">
                  {review.text}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-[#1A1A1A]">{review.author}</p>
                  <p className="text-sm text-gray-500">Google Review</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
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
              className="inline-flex items-center gap-3 bg-[#027502] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#038503] transition-all transform hover:scale-105 shadow-lg"
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
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-[#027502] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038503] transition-all transform hover:scale-105"
              >
                Request a Quote
              </Link>
              <a
                href="tel:407-274-5019"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#027502] border-2 border-[#027502] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
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
