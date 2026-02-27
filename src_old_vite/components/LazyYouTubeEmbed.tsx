import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface LazyYouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const LazyYouTubeEmbed: React.FC<LazyYouTubeEmbedProps> = ({ 
  videoId, 
  title = "YouTube Video" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={containerRef}
      className="aspect-video w-full rounded-xl overflow-hidden shadow-xl relative"
    >
      {!isLoaded ? (
        <div 
          className="w-full h-full bg-black bg-cover bg-center cursor-pointer relative group"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`
          }}
          onClick={handleLoad}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium">Click to load video</p>
          </div>
        </div>
      ) : (
        isVisible && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        )
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;