import React from 'react';
import { Gallery, Carousel, FeaturedImage, ImageGrid, ImageCard } from '../components';
import { placeholderImages } from '../imageUtils';

const HomePage: React.FC = () => {
  const galleryImages = [
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 1',
    },
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 2',
    },
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 3',
    },
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 4',
    },
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 5',
    },
    {
      src: placeholderImages.product,
      alt: 'Gallery Image 6',
    },
  ];

  const carouselImages = [
    {
      src: placeholderImages.banner,
      alt: 'Carousel Image 1',
    },
    {
      src: placeholderImages.banner,
      alt: 'Carousel Image 2',
    },
    {
      src: placeholderImages.banner,
      alt: 'Carousel Image 3',
    },
  ];

  const gridImages = [
    {
      src: placeholderImages.product,
      alt: 'Grid Image 1',
    },
    {
      src: placeholderImages.product,
      alt: 'Grid Image 2',
    },
    {
      src: placeholderImages.product,
      alt: 'Grid Image 3',
    },
    {
      src: placeholderImages.product,
      alt: 'Grid Image 4',
    },
    {
      src: placeholderImages.product,
      alt: 'Grid Image 5',
    },
    {
      src: placeholderImages.product,
      alt: 'Grid Image 6',
    },
  ];

  const cardImages = [
    {
      src: placeholderImages.product,
      alt: 'Card Image 1',
      title: 'Product 1',
      description: 'Description for product 1',
    },
    {
      src: placeholderImages.product,
      alt: 'Card Image 2',
      title: 'Product 2',
      description: 'Description for product 2',
    },
    {
      src: placeholderImages.product,
      alt: 'Card Image 3',
      title: 'Product 3',
      description: 'Description for product 3',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <FeaturedImage
          src={placeholderImages.banner}
          alt="Hero Image"
          caption="Welcome to our website"
        />
      </section>

      <section className="gallery-section">
        <h2>Our Products</h2>
        <Gallery images={galleryImages} columns={3} gap={16} />
      </section>

      <section className="carousel-section">
        <h2>Featured Items</h2>
        <Carousel images={carouselImages} autoplay={true} interval={5000} />
      </section>

      <section className="grid-section">
        <h2>Latest Products</h2>
        <ImageGrid images={gridImages} />
      </section>

      <section className="cards-section">
        <h2>Popular Items</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {cardImages.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
