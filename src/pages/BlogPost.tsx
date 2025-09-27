import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';
import { allBlogPosts, ContentBlock } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the current blog post
  const currentPost = allBlogPosts.find(post => post.id === id);
  
  // Get related posts (exclude current post and take 3 random ones)
  const relatedPosts = allBlogPosts
    .filter(post => post.id !== id)
    .slice(0, 3);

  // If post not found, show 404
  if (!currentPost) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | On The Fly Waste Solutions</title>
          <meta name="description" content="The requested blog post could not be found." />
        </Helmet>
        <div className="min-h-screen pt-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading1':
        return (
          <h1 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {block.text}
          </h1>
        );
      case 'heading2':
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            {block.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            <span dangerouslySetInnerHTML={{ __html: block.text || '' }} />
          </p>
        );
      case 'image':
        return (
          <div key={index} className="my-8">
            <img
              src={block.src}
              alt={block.alt || ''}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#049704] pl-6 my-8 italic text-gray-700 text-lg">
            {block.text}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{currentPost.metaTitle || currentPost.title}</title>
        <meta name="description" content={currentPost.metaDescription || currentPost.excerpt.replace(/<[^>]*>/g, '')} />
        <meta name="keywords" content={currentPost.metaKeywords || ''} />
        <link rel="canonical" href={`https://ontheflywastesolutions.com/blog/${currentPost.id}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={currentPost.metaTitle || currentPost.title} />
        <meta property="og:description" content={currentPost.metaDescription || currentPost.excerpt.replace(/<[^>]*>/g, '')} />
        <meta property="og:image" content={currentPost.image} />
        <meta property="og:url" content={`https://ontheflywastesolutions.com/blog/${currentPost.id}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentPost.metaTitle || currentPost.title} />
        <meta name="twitter:description" content={currentPost.metaDescription || currentPost.excerpt.replace(/<[^>]*>/g, '')} />
        <meta name="twitter:image" content={currentPost.image} />
        
        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": currentPost.title,
            "description": currentPost.metaDescription || currentPost.excerpt.replace(/<[^>]*>/g, ''),
            "image": currentPost.image,
            "author": {
              "@type": "Person",
              "name": currentPost.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "On The Fly Waste Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png"
              }
            },
            "datePublished": new Date(currentPost.date).toISOString(),
            "dateModified": new Date(currentPost.date).toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://ontheflywastesolutions.com/blog/${currentPost.id}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-24 bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-white/80 hover:text-white font-medium transition-colors duration-200"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#049704] text-white rounded-full text-sm font-medium">
                    {currentPost.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {currentPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 mb-8">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                {currentPost.fullContent.map((block, index) => 
                  renderContentBlock(block, index)
                )}
              </div>
            </ScrollReveal>
          </div>
        </article>

        {/* Related Posts Section - moved outside of main article */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
                  <p className="text-lg text-gray-600">
                    Continue reading about waste management best practices
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <ScrollReveal 
                    key={post.id}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <Link to={`/blog/${post.id}`} className="group block">
                      <article className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 bg-[#049704] text-white rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#049704] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                            <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                          </p>
                          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                            <div className="flex items-center text-[#049704] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <div className="text-center mt-12">
                  <Link to="/blog" className="btn-primary">
                    View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default BlogPost;