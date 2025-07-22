import React, { lazy, Suspense } from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ReviewCard = lazy(() => import('../components/ReviewCard'));

function Reviews() {
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

  return (
    <>
      <Helmet>
        <title>Orlando Valet Trash Service Reviews | On The Fly Waste Solutions</title>
        <meta name="description" content="See what Orlando property managers and residents say about our valet trash services. Read reviews of our professional waste management and bulk removal solutions in Central Florida." />
        <meta name="keywords" content="orlando valet trash reviews, waste management testimonials orlando, apartment trash service reviews florida" />
        <link rel="canonical" href="https://ontheflywastesolutions.com/reviews" />
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
              <div className="flex flex-col justify-center items-center h-full text-center pt-32 md:pt-40 pb-16 md:pb-20">
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
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </Suspense>
            </div>

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