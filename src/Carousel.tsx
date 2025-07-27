import React from 'react';
import { useState, useEffect } from 'react';
import { Image } from './Image';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoplay = false,
  interval = 5000,
  className,
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoplay && !isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay, isPaused, interval, images.length]);

  const handleMouseEnter = () => {
    if (autoplay) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay) {
      setIsPaused(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`carousel ${className}`}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
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

      <div className="carousel-controls">
        <button
          className="carousel-prev"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
          style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          &lt;
        </button>
        <button
          className="carousel-next"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          style={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          &gt;
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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

export default Carousel;
