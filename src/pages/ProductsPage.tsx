import React from 'react';
import { Gallery, ImageGrid, ImageCard } from '../components';
import { placeholderImages } from '../imageUtils';

const ProductsPage: React.FC = () => {
  const productImages = [
    {
      src: placeholderImages.product,
      alt: 'Product 1',
      title: 'Product 1',
      description: 'Description for product 1',
    },
    {
      src: placeholderImages.product,
      alt: 'Product 2',
      title: 'Product 2',
      description: 'Description for product 2',
    },
    {
      src: placeholderImages.product,
      alt: 'Product 3',
      title: 'Product 3',
      description: 'Description for product 3',
    },
    {
      src: placeholderImages.product,
      alt: 'Product 4',
      title: 'Product 4',
      description: 'Description for product 4',
    },
    {
      src: placeholderImages.product,
      alt: 'Product 5',
      title: 'Product 5',
      description: 'Description for product 5',
    },
    {
      src: placeholderImages.product,
      alt: 'Product 6',
      title: 'Product 6',
      description: 'Description for product 6',
    },
  ];

  return (
    <div className="products-page">
      <section className="hero-section">
        <h1>Our Products</h1>
        <p>Explore our wide range of high-quality products</p>
      </section>

      <section className="gallery-section">
        <h2>Featured Products</h2>
        <Gallery
          images={productImages.map(img => ({
            src: img.src,
            alt: img.alt,
          }))}
          columns={4}
          gap={24}
        />
      </section>

      <section className="cards-section">
        <h2>Popular Items</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {productImages.map((product, index) => (
            <ImageCard
              key={index}
              src={product.src}
              alt={product.alt}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2>All Products</h2>
        <ImageGrid
          images={productImages.map(img => ({
            src: img.src,
            alt: img.alt,
          }))}
        />
      </section>

      <section className="categories-section">
        <h2>Product Categories</h2>
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
              alt="Category 1"
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
              Category 1
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
              alt="Category 2"
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
              Category 2
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
              alt="Category 3"
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
              Category 3
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
