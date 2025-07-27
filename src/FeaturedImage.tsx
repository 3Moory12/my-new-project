import React from 'react';
// import {heroImage} from '../assets/hero-image.jpg.jpg';//"C:\Users\ONE\Desktop\مشروع ستايلك\Image\hero-image.jpg.jpg"

interface FeaturedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({
  src,
  alt,
  width,
  height,
  caption,
  className,
  style,
}) => {
  return (
    <div
      className={`featured-image ${className}`}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {caption && (
        <div
          className="featured-image-caption"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default FeaturedImage;
