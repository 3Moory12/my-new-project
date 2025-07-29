

import React from 'react';
import { Gallery, ImageGrid, ImageCard } from '../components';
import { placeholderImages } from '../imageUtils';
import '../assets/styles/section-pages.css';


const DressesPage: React.FC = () => {
  const dressImages = [
    {
      src: placeholderImages.product,
      alt: 'Dress 1',
      title: 'Evening Dress',
      description: 'Elegant evening dress for special occasions',
    },
    {
      src: placeholderImages.product,
      alt: 'Dress 2',
      title: 'Summer Dress',
      description: 'Light and comfortable dress for summer days',
    },
    {
      src: placeholderImages.product,
      alt: 'Dress 3',
      title: 'Cocktail Dress',
      description: 'Stylish cocktail dress for parties and events',
    },
    {
      src: placeholderImages.product,
      alt: 'Dress 4',
      title: 'Casual Dress',
      description: 'Comfortable casual dress for everyday wear',
    },
    {
      src: placeholderImages.product,
      alt: 'Dress 5',
      title: 'Wedding Dress',
      description: 'Beautiful wedding dress for your special day',
    },
    {
      src: placeholderImages.product,
      alt: 'Dress 6',
      title: 'Maxi Dress',
      description: 'Flowing maxi dress for a graceful look',
    },
  ];

  return (
    <div className="dresses-page">
      <section className="hero-section">
        <h1>Our Dresses Collection</h1>
        <p>Discover our wide range of elegant dresses</p>
      </section>

      <section className="categories-section">
        <h2>Dress Categories</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Evening Dresses"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Evening Dresses
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Casual Dresses"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Casual Dresses
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Party Dresses"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Party Dresses
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Wedding Dresses"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Wedding Dresses
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Dresses</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {dressImages.map((dress, index) => (
            <ImageCard
              key={index}
              src={dress.src}
              alt={dress.alt}
              title={dress.title}
              description={dress.description}
            />
          ))}
        </div>
      </section>

      <section className="new-arrivals-section">
        <h2>New Arrivals</h2>
        <ImageGrid
          images={dressImages.map(img => ({
            src: img.src,
            alt: img.alt,
          }))}
        />
      </section>

      <section className="collections-section">
        <h2>Our Collections</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Spring Collection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Spring Collection
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Summer Collection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Summer Collection
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Autumn Collection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Autumn Collection
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={placeholderImages.banner}
              alt="Winter Collection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
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
              Winter Collection
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DressesPage;
