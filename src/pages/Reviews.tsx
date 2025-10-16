import React, { lazy, Suspense } from 'react';
import { ArrowRight, Star, Send } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ScrollReveal from '../components/ScrollReveal';

// Lazy load ReviewCard component
const ReviewCard = lazy(() => import('../components/ReviewCard'));

function Reviews() {
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);

  const reviews = [
    {
      name: "Antonio Marcuz",
      location: "Orlando, FL",
      rating: 5,
      text: "I'd like to say how good they are, very responsive. I own a property management company and anytime we need them, they show up fast and their team members are always smiling. I strongly recommend On The Fly.",
      date: "1 month ago"
    },
    {
      name: "Shaianne Berry",
      location: "Orlando, FL",
      rating: 5,
      text: "On The Fly is great! They are professional and are always on top of things in the neighborhood. Anytime I see them they are friendly and would definitely recommend their serves to anyone looking.",
      date: "2 months ago"
    },
    {
      name: "William Barber",
      location: "Orlando, FL",
      rating: 5,
      text: "Mr. Donnell and Mr. Trevor are outstanding young men with a high drive that makes them excel at what they do. Their crew works hard and quickly and are friendly. I would highly recommend giving these young men a chance.",
      date: "2 months ago"
    },
    {
      name: "Lynn Mollison",
      location: "Orlando, FL",
      rating: 5,
      text: "Our HOA uses On The Fly for our trash collection service, and I am just super impressed with Donnell and his team. They are professional and dedicated to their job - no short-cuts with them. They work super fast, and they are helpful and friendly. Donnell will go above and beyond to help anyone out - he is amazing.",
      date: "2 days ago"
    }
  ];

  // Calculate aggregate rating data for schema markup
  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / totalReviews;

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the new review to the submitted reviews
      const reviewWithDate = {
        ...newReview,
        date: 'Just now'
      };
      
      setSubmittedReviews(prev => [reviewWithDate, ...prev]);
      
      // Reset form
      setNewReview({
        name: '',
        location: '',
        rating: 5,
        text: ''
      });
      
      toast.success('Thank you for your review!');
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Combine original reviews with submitted reviews
  const allReviews = [...submittedReviews, ...reviews];

  return (
    <>
      <Helmet>
        <title>Orlando Valet Trash Reviews | Client Testimonials</title>
        <meta name="description" content="See what Orlando property managers say about our valet trash services. Read reviews of professional waste management in Central Florida." />
        <meta name="keywords" content="orlando valet trash reviews, waste management testimonials orlando, apartment trash service reviews florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/reviews" />
        
        {/* Enhanced AggregateRating Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "On The Fly Waste Solutions",
            "image": "https://ontheflywastesolutions.com/Images/OnTheFlyRecycleLogoWhitenobackground.png",
            "description": "Professional valet trash and bulk removal services in Orlando, FL",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-407-274-5019",
            "url": "https://ontheflywastesolutions.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating.toFixed(1),
              "reviewCount": totalReviews,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": reviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5",
                "worstRating": "1"
              },
              "reviewBody": review.text,
              "datePublished": new Date(Date.now() - (review.date.includes('month') ? 30 : 2) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <div className="relative min-h-[60vh] hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1280"
            alt="Customer Reviews for On The Fly Waste Solutions Orlando Valet Trash Services"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="relative h-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex flex-col justify-center items-center h-full text-center" style={{ paddingTop: '25vh', paddingBottom: '10vh' }}>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Client Reviews</h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
                  See what our satisfied clients have to say about our valet trash services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>}>
                {allReviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </Suspense>
            </div>

            {/* Review Submission Section */}
            <section className="mt-20">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">We Would Like to Hear From You!</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Share your experience with our valet trash and waste management services
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                  <form onSubmit={handleSubmitReview}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={newReview.name}
                          onChange={handleReviewChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={newReview.location}
                          onChange={handleReviewChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200"
                          placeholder="Orlando, FL"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rating *
                      </label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className="focus:outline-none transition-colors duration-200"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= newReview.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              } hover:text-yellow-400 hover:fill-current`}
                            />
                          </button>
                        ))}
                        <span className="ml-3 text-sm text-gray-600">
                          ({newReview.rating} star{newReview.rating !== 1 ? 's' : ''})
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Review *
                      </label>
                      <textarea
                        id="text"
                        name="text"
                        value={newReview.text}
                        onChange={handleReviewChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#049704] focus:border-transparent transition duration-200 resize-none"
                        placeholder="Tell us about your experience with our services..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#049704] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#038203] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Review
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </section>

            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/search?q=on+the+fly+waste+solutions+orlando"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                See More Reviews on Google <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;