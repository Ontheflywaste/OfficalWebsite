'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import { featuredPost, blogPosts } from '@/app/data/blogPosts';

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Property Management', 'Holiday Tips', 'Cost Analysis', 'Valet Trash', 'Sustainability', 'Bulk Removal'];

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredPosts = selectedCategory === 'All'
    ? sortedBlogPosts
    : sortedBlogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#16a34a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-28">
            <ScrollReveal>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#16a34a]/20 text-[#16a34a] rounded-full text-sm font-medium backdrop-blur-sm border border-[#16a34a]/30">
                  Industry Insights
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Orlando Waste Management
                <span className="block text-[#16a34a]">Insights & Tips</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Expert insights and practical advice for property managers looking to optimize their waste management operations and enhance resident satisfaction
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <div className="w-24 h-1 bg-[#16a34a] mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href={`/blog/${featuredPost.id}/`} className="block">
              <article className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-2 bg-[#16a34a] text-white rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#16a34a] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center text-[#16a34a] font-semibold group-hover:translate-x-2 transition-transform">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
              <div className="w-24 h-1 bg-[#16a34a] mx-auto rounded-full mb-8" />

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-[#16a34a] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.id}/`} className="block">
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 bg-[#16a34a] text-white rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16a34a] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm">
                        {post.excerpt.replace(/<[^>]*>/g, '')}
                      </p>

                      <div className="flex items-center text-[#16a34a] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#16a34a] to-[#16a34a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our valet trash services can enhance your property's operations and resident satisfaction
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-4 bg-white text-[#16a34a] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
