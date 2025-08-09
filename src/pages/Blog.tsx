import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ScrollReveal from '../components/ScrollReveal';
import { featuredPost, blogPosts } from '../data/blogPosts';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Property Management', 'Cost Analysis', 'Valet Trash', 'Sustainability', 'Bulk Removal'];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Valet Trash Tips & Property Management Insights | Blog</title>
        <meta name="description" content="Expert insights on valet trash and property management. Industry tips and best practices for apartment communities from Orlando professionals." />
        <meta name="keywords" content="orlando valet trash blog, waste management tips orlando, apartment waste solutions florida, multifamily trash collection blog" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/blog" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "On The Fly Waste Solutions Blog",
            "description": "Expert insights on valet trash services and property management",
            "url": "https://ontheflywastesolutions.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "On The Fly Waste Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png"
              }
            },
            "blogPost": allBlogPosts.slice(0, 5).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt.replace(/<[^>]*>/g, ''),
              "url": `https://ontheflywastesolutions.com/blog/${post.id}`,
              "datePublished": new Date(post.date).toISOString(),
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#049704] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center pt-40 pb-28">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#049704]/20 text-[#049704] rounded-full text-sm font-medium backdrop-blur-sm border border-[#049704]/30">
                    Industry Insights
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Orlando Waste Management
                  <span className="block text-[#049704]">Insights & Tips</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Expert insights and practical advice for property managers looking to optimize their waste management operations and enhance resident satisfaction
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                <div className="w-24 h-1 bg-[#049704] mx-auto rounded-full" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to={`/blog/${featuredPost.id}`} className="group block">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1 bg-[#049704] text-white rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {featuredPost.category}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#049704] transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: featuredPost.excerpt }} />
                      </p>
                      <div className="flex items-center text-[#049704] font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Read Article
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#049704] text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-[#049704] hover:text-white shadow-md hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {selectedCategory === 'All' 
                    ? 'Stay updated with the latest trends and best practices in waste management'
                    : `Explore our ${selectedCategory.toLowerCase()} insights and expertise`
                  }
                </p>
              </div>
            </ScrollReveal>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 text-[#049704] hover:text-[#038203] font-medium"
                >
                  View all articles
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal 
                    key={post.id}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <Link to={`/blog/${post.id}`} className="group block h-full">
                      <article className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
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
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Stay Updated with Industry Insights
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Get the latest tips and best practices in waste management delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent focus:outline-none"
                  />
                  <button className="px-6 py-2.5 bg-[#049704] text-white rounded-lg font-medium hover:bg-[#038203] transition-colors duration-300 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  No spam, unsubscribe at any time
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;