import React from 'react';
import { optimizeImage } from './imageUtils';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Define default styles for image and placeholder
const imageStyles = {
  responsive: {
    width: '100%',
    height: 'auto',
    display: 'block',
  } as React.CSSProperties,
  placeholder: {
    background: '#f0f0f0',
    filter: 'blur(8px)',
  } as React.CSSProperties,
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes,
  placeholder,
  className,
  style,
}) => {
  const isLoading = false;
  const optimizedImage = optimizeImage(src, width || 800, height || 600);

  // Dummy implementation for responsiveImage if not already defined/imported
  function responsiveImage(src: string, sizes: string[]) {
    return sizes.map(size => ({
      src: optimizeImage(src, parseInt(size), parseInt(size)),
      media: `(max-width: ${size}px)`,
    }));
  }

  const responsiveImages = sizes
    ? responsiveImage(src, sizes)
    : [{ src: optimizedImage, media: '' }];

  return (
    <div
      className="image-container"
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {placeholder && (
        <div
          className="image-placeholder"
          style={{
            ...imageStyles.placeholder,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={placeholder}
            alt={alt}
            style={{
              ...imageStyles.responsive,
              opacity: isLoading ? 1 : 0,
            }}
          />
        </div>
      )}
      <img
        src={optimizedImage.src}
        alt={alt}
        width={width}
        height={height}
        srcSet={responsiveImages
          .filter(img => img.media)
          .map(img => `${img.src.src} ${img.src.width}w`)
          .join(', ')}
        sizes={responsiveImages
          .filter(img => img.media)
          .map(img => `${img.media} ${img.src.width}px`)
          .join(', ')}
        className={className}
        style={{
          ...imageStyles.responsive,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in',
        }}
        loading="lazy"
      />
    </div>
  );
};

export default Image;
