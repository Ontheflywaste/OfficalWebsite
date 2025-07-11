import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  objectFit = 'cover'
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerClasses = `
    relative overflow-hidden
    ${className}
  `.trim();

  const imageClasses = `
    w-full h-full
    transition-opacity duration-300
    ${isLoaded ? 'opacity-100' : 'opacity-0'}
  `.trim();

  return (
    <div 
      ref={imageRef}
      className={containerClasses}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : 'auto'
      }}
    >
      {/* Loading skeleton */}
      <div className="absolute inset-0 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shimmer" />
      </div>

      {/* Main image */}
      {(priority || isInView) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={imageClasses}
          style={{ objectFit }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;