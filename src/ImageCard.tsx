import React from 'react';
import { Image } from './Image';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
  width,
  height,
  className,
  style,
}) => {
  return (
    <div
      className={`image-card ${className}`}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div
        className="image-card-image"
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '75%', // 4:3 aspect ratio
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="image-card-content"
        style={{
          padding: '16px',
        }}
      >
        {title && (
          <h3
            style={{
              margin: '0 0 8px 0',
              fontSize: '1.25rem',
              fontWeight: '600',
            }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            style={{
              margin: '0',
              color: '#666',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
