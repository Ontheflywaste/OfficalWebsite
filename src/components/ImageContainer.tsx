import React from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9';
  rounded?: boolean;
  shadow?: boolean;
  overlay?: boolean;
  priority?: boolean;
  className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  aspectRatio = '16:9',
  rounded = false,
  shadow = false,
  overlay = false,
  priority = false,
  className = ''
}) => {
  const aspectRatioClass = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '21:9': 'aspect-[21/9]'
  }[aspectRatio];

  return (
    <div
      className={`
        relative overflow-hidden
        ${aspectRatioClass}
        ${rounded ? 'rounded-2xl' : ''}
        ${shadow ? 'shadow-xl' : ''}
        ${className}
      `}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        priority={priority}
        className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      )}
    </div>
  );
};

export default ImageContainer;