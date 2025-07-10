import { useState, useEffect } from 'react';

interface UseImageLoadProps {
  src: string;
  onLoad?: () => void;
  onError?: () => void;
}

const useImageLoad = ({ src, onLoad, onError }: UseImageLoadProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      setIsLoaded(true);
      setError(null);
      onLoad?.();
    };

    const handleError = () => {
      const error = new Error(`Failed to load image: ${src}`);
      setError(error);
      setIsLoaded(false);
      onError?.();
    };

    // Use decode() for modern browsers
    img.decode()
      .then(handleLoad)
      .catch(handleError);

    // Fallback for older browsers
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    // Reset states when src changes
    setIsLoaded(false);
    setError(null);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, onLoad, onError]);

  return { isLoaded, error };
};

export default useImageLoad;