import React from 'react';
import { Gallery, ImageGrid, ImageCard } from '../components';
import { placeholderImages } from '../imageUtils';

const AbayasPage: React.FC = () => {
  const abayaImages = [
    {
      src: placeholderImages.product,
      alt: 'Abaya 1',
      title: 'Classic Abaya',
      description: 'Traditional long-sleeve abaya with elegant design',
    },
    {
      src: placeholderImages.product,
      alt: 'Abaya 2',
      title: 'Modern Abaya',
      description: 'Contemporary abaya with modern cuts and styles',
    },
    {
      src: placeholderImages.product,
      alt: 'Abaya 3',
      title: 'Casual Abaya',
      description: 'Comfortable and casual abaya for everyday wear',
    },
    {
      src: placeholderImages.product,
      alt: 'Abaya 4',
      title: 'Embroidered Abaya',
      description: 'Luxurious abaya with intricate embroidery',
    },
    {
      src: placeholderImages.product,
      alt: 'Abaya 5',
      title: 'Maxi Abaya',
      description: 'Floor-length abaya with flowing silhouette',
    },
    {
      src: placeholderImages.product,
      alt: 'Abaya 6',
      title: 'Short Abaya',
      description: 'Shorter length abaya for a modern look',
    },
  ];

  return (
    <div className="abayas-page">
      <section className="hero-section">
        <h1>Our Abayas Collection</h1>
        <p>Discover our wide range of elegant abayas</p>
      </section>

      <section className="categories-section">
        <h2>Abaya Categories</h2>
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
              alt="Classic Abayas"
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
              Classic Abayas
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
              alt="Modern Abayas"
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
              Modern Abayas
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
              alt="Casual Abayas"
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
              Casual Abayas
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
              alt="Special Occasion Abayas"
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
              Special Occasion
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Abayas</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {abayaImages.map((abaya, index) => (
            <ImageCard
              key={index}
              src={abaya.src}
              alt={abaya.alt}
              title={abaya.title}
              description={abaya.description}
            />
          ))}
        </div>
      </section>

      <section className="new-arrivals-section">
        <h2>New Arrivals</h2>
        <ImageGrid
          images={abayaImages.map(img => ({
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

export default AbayasPage;
