import React, { useRef, useState, useEffect } from 'react';
import { Image } from './Image';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  className?: string;
  style?: React.CSSProperties;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  className,
  style,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = sliderRef.current?.clientWidth || 0;
    if (Math.abs(translateX) > threshold / 3) {
      if (translateX > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    const threshold = sliderRef.current?.clientWidth || 0;
    if (Math.abs(translateX) > threshold / 3) {
      if (translateX > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
    setTranslateX(0);
  };

  return (
    <div
      className={`image-slider ${className}`}
      style={{
        ...style,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="image-slider-track"
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-slider-slide"
            style={{
              flex: '0 0 100%',
              position: 'relative',
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
      <div className="image-slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              margin: '0 4px',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
