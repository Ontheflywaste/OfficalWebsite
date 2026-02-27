import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewProps {
  review: {
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
  };
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#049704] flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {review.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold text-gray-900">{review.name}</div>
          <p className="text-sm text-gray-600">{review.location}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      <div className="mb-4">
        <Quote className="h-8 w-8 text-[#049704]/20 mb-2" />
        <p className="text-gray-700">{review.text}</p>
      </div>
      <div className="text-sm text-gray-600">{review.date}</div>
    </div>
  );
};

export default ReviewCard;