import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { allBlogPosts } from '@/app/data/blogPosts';

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = allBlogPosts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
    alternates: {
      canonical: `https://ontheflywastesolutions.com/blog/${post.id}/`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://ontheflywastesolutions.com/blog/${post.id}/`,
      images: [post.image],
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = allBlogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image.startsWith('http')
      ? post.image
      : `https://ontheflywastesolutions.com${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'On The Fly Waste Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ontheflywastesolutions.com/Images/asset-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ontheflywastesolutions.com/blog/${post.id}/`,
    },
  };

  // Inline <script> from a server component is deferred to hydration in this
  // setup; wrapping it in raw HTML keeps the JSON-LD in the prerendered page.
  const schemaHtml = `<script type="application/ld+json">${JSON.stringify(
    blogPostingSchema
  ).replace(/</g, '\\u003c')}</script>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: schemaHtml }} />
      <BlogPostClient post={post} />
    </>
  );
}
