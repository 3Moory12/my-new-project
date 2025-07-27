import React from 'react';
import { Image } from './Image';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  columns?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  gap = 16,
  className,
  style,
}) => {
  return (
    <div
      className={`image-grid ${className}`}
      style={{
        ...style,
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
        gap: `${gap}px`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="image-grid-item"
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
