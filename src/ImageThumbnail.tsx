import React from 'react';
import { Image } from './Image';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  src,
  alt,
  width,
  height,
  onClick,
  className,
  style,
}) => {
  return (
    <div
      className={`image-thumbnail ${className}`}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      <div
        className="image-thumbnail-container"
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%', // 1:1 aspect ratio
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
        className="image-thumbnail-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.3)',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ImageThumbnail;
