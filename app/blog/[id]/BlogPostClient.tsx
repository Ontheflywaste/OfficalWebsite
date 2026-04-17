'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import type { BlogPost } from '@/app/data/blogPosts';
import { allBlogPosts } from '@/app/data/blogPosts';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const currentIndex = allBlogPosts.findIndex((p) => p.id === post.id);
  const previousPost = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;

  const renderContent = (content: BlogPost['fullContent']) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'heading1':
          return (
            <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {block.text}
            </h1>
          );
        case 'heading2':
          return (
            <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-12 leading-tight">
              {block.text}
            </h2>
          );
        case 'paragraph':
          return (
            <p
              key={index}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.text || '' }}
            />
          );
        case 'image':
          return (
            <figure key={index} className="my-12">
              <Image
                src={block.src}
                alt={block.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              {block.alt && (
                <figcaption className="text-sm text-gray-600 text-center mt-4 italic">
                  {block.alt}
                </figcaption>
              )}
            </figure>
          );
        case 'list':
          return (
            <ul key={index} className="space-y-3 mb-6">
              {block.items?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-lg text-gray-700"
                  dangerouslySetInnerHTML={{ __html: `<span class="text-primary mr-3">•</span>${item}` }}
                />
              ))}
            </ul>
          );
        case 'quote':
          return (
            <blockquote key={index} className="border-l-4 border-primary pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
              <p className="text-xl text-gray-800 italic">{block.text}</p>
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <article>
        <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/90">
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    {post.author}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              {renderContent(post.fullContent)}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags:
                </span>
                {post.metaKeywords.split(', ').map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {previousPost && (
              <ScrollReveal delay={0.1}>
                <Link
                  href={`/blog/${previousPost.id}/`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous Article
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {previousPost.title}
                  </h3>
                </Link>
              </ScrollReveal>
            )}
            {nextPost && (
              <ScrollReveal delay={0.2}>
                <Link
                  href={`/blog/${nextPost.id}/`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group text-right"
                >
                  <div className="flex items-center justify-end text-sm text-gray-600 mb-2">
                    Next Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </article>

      <section className="py-20 bg-gradient-to-r from-primary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to learn how we can help your property succeed
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
