import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Mock blog post data - in a real app, this would fetch from an API
    const blogPosts: Record<string, any> = {
      'how-to-choose-valet-trash-vendor': {
        title: 'How to Choose the Right Valet Trash Vendor Orlando: Questions Every Property Manager Should Ask',
        excerpt: 'Essential checklist and key questions Orlando property managers need to ask when selecting a valet trash service vendor to ensure reliable multifamily waste solutions.',
        content: `
          <p>Selecting the right valet trash service Orlando for your multifamily property is a critical decision that impacts resident satisfaction, operational efficiency, and your bottom line. With numerous providers in the Central Florida market, property managers need a systematic approach to evaluate potential vendors and ensure they're making the best choice for their community.</p>
          
          <h2>Essential Questions for Orlando Valet Trash Service Vendors</h2>
          
          <h3>Service Reliability and Coverage</h3>
          <p>When evaluating valet trash service Orlando providers, start with these fundamental questions about service reliability. Ask about their collection schedule flexibility, backup procedures for missed pickups, and how they handle service during holidays or severe weather. A reliable vendor should have clear protocols and contingency plans.</p>
          
          <h3>Staff Training and Professionalism</h3>
          <p>Your valet trash service team represents your property. Inquire about employee background checks, training programs, and uniform standards. Professional multifamily waste solutions providers invest in their staff and maintain high standards of appearance and conduct.</p>
          
          <h3>Technology and Reporting</h3>
          <p>Modern valet trash service Orlando should include technology solutions for tracking, reporting, and communication. Ask about their reporting capabilities, photo verification systems, and how they handle resident complaints or special requests.</p>
          
          <h3>Pricing Structure and Contract Terms</h3>
          <p>Understand the complete cost structure, including any setup fees, seasonal adjustments, or additional charges. Review contract terms carefully, paying attention to cancellation clauses, service level guarantees, and price escalation provisions.</p>
          
          <h3>Local Experience and References</h3>
          <p>Choose a provider with proven experience in the Orlando multifamily market. Request references from similar properties and ask about their experience with local regulations, waste disposal requirements, and community-specific challenges.</p>
          
          <p>By asking these targeted questions and thoroughly evaluating responses, Orlando property managers can select a valet trash service provider that enhances their property's value and resident satisfaction while delivering reliable, professional service.</p>
        `,
        date: 'July 9, 2025',
        readTime: '6 min read',
        author: 'Trevor Alston',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
        category: 'Property Management'
      },
      'hidden-costs-in-house-trash-management': {
        title: 'The Hidden Costs of In-House Trash Management vs Orlando Valet Trash Service',
        excerpt: 'Discover the overlooked expenses of managing trash in-house and how professional valet trash service Orlando can reduce costs for multifamily properties.',
        content: `
          <p>Many Orlando property managers initially consider in-house trash management as a cost-saving measure, but a comprehensive analysis often reveals that professional valet trash service Orlando provides better value and lower total costs. Understanding the hidden expenses of self-managed waste collection helps property managers make informed decisions about multifamily waste solutions.</p>
          
          <h2>Hidden Costs of In-House Trash Management</h2>
          
          <h3>Labor and Staffing Expenses</h3>
          <p>In-house trash management requires dedicated staff time for collection, transportation, and disposal. When you factor in wages, benefits, workers' compensation, and the opportunity cost of diverting maintenance staff from revenue-generating activities, the true labor cost often exceeds expectations.</p>
          
          <h3>Equipment and Maintenance</h3>
          <p>Self-managed collection requires carts, bags, cleaning supplies, and potentially vehicles for transportation. Equipment replacement, maintenance, and storage costs add up quickly, especially when considering the depreciation and ongoing upkeep requirements.</p>
          
          <h3>Liability and Insurance</h3>
          <p>In-house collection increases liability exposure for slip-and-fall incidents, property damage, and worker injuries. Additional insurance coverage and potential claims can significantly impact your total cost of ownership.</p>
          
          <h3>Compliance and Training</h3>
          <p>Proper waste handling requires ongoing staff training, compliance monitoring, and staying current with local regulations. These administrative costs are often overlooked but represent real expenses that professional valet trash service Orlando providers handle as part of their service.</p>
          
          <h2>Value of Professional Valet Trash Service Orlando</h2>
          
          <h3>Predictable Costs</h3>
          <p>Professional multifamily waste solutions provide predictable monthly costs with no surprise expenses for equipment failures, staff turnover, or compliance issues. This predictability helps with budgeting and financial planning.</p>
          
          <h3>Enhanced Property Value</h3>
          <p>Valet trash service Orlando becomes a marketable amenity that can justify higher rents and improve resident retention. The revenue impact often exceeds the service cost, creating positive ROI for property owners.</p>
          
          <p>When comparing costs, consider the total cost of ownership rather than just the obvious expenses. Professional valet trash service Orlando often provides better value while improving resident satisfaction and reducing management headaches.</p>
        `,
        date: 'July 8, 2025',
        readTime: '7 min read',
        author: 'Donnell Edwards',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800',
        category: 'Cost Analysis'
      }
    };

    if (id && blogPosts[id]) {
      setPost(blogPosts[id]);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Post not found</h1>
          <Link to="/blog" className="text-[#049704] hover:text-[#038203]">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Orlando Valet Trash Service Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content="valet trash service Orlando, multifamily waste solutions, property management tips, Central Florida" />
        <link rel="canonical" href={`https://ontheflywastesolutions.com/blog/${id}`} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <ScrollReveal>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-[#049704] hover:text-[#038203] mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orlando Valet Trash Service Blog
            </Link>
          </ScrollReveal>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <ScrollReveal>
              <div className="relative h-64 md:h-96">
                <img
                  src={post.image}
                  alt={`${post.title} - Orlando valet trash service insights`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 bg-[#049704] text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <div className="p-8 md:p-12">
              <ScrollReveal delay={0.1}>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#049704] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.author}</h4>
                        <p className="text-sm text-gray-600">Orlando Valet Trash Service Expert</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.category}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </article>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Orlando Valet Trash Service for Your Property?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get professional multifamily waste solutions for your Central Florida community
              </p>
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Get Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default BlogPost;