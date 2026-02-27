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

  return <BlogPostClient post={post} />;
}
