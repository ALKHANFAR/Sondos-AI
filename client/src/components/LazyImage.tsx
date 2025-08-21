import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  threshold?: number;
  rootMargin?: string;
  blur?: boolean;
  fadeIn?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  className = '',
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px',
  blur = true,
  fadeIn = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    const currentImg = imgRef.current;
    if (!currentImg) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentImg);

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      // Preload the actual image
      const imageLoader = new Image();
      
      imageLoader.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      
      imageLoader.onerror = () => {
        setHasError(true);
        onError?.();
      };

      // Add sizes and srcset support for responsive images
      if (props.sizes) {
        imageLoader.sizes = props.sizes;
      }
      if (props.srcSet) {
        imageLoader.srcset = props.srcSet;
      }
      
      imageLoader.src = src;
    }
  }, [isInView, isLoaded, hasError, src, onLoad, onError, props.sizes, props.srcSet]);

  const imageClasses = `
    ${className}
    ${fadeIn ? 'transition-all duration-500 ease-in-out' : ''}
    ${isLoaded ? 'opacity-100' : 'opacity-75'}
    ${blur && !isLoaded ? 'filter blur-sm' : ''}
    ${isLoaded && blur ? 'filter blur-0' : ''}
  `.trim();

  const handleImageLoad = () => {
    if (!isLoaded) {
      setIsLoaded(true);
      onLoad?.();
    }
  };

  const handleImageError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
        {...props}
      >
        <svg 
          className="w-8 h-8 text-gray-400" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={imageClasses}
      onLoad={handleImageLoad}
      onError={handleImageError}
      loading="lazy"
      decoding="async"
      {...props}
      style={{
        ...props.style,
        contentVisibility: 'auto',
        containIntrinsicSize: props.style?.height || 'auto'
      }}
    />
  );
};

export default LazyImage;