import React, { useState } from 'react';
import { Image, Gallery } from '../components';
import { placeholderImages } from '../imageUtils';

interface ProductPageProps {
  id: string;
  name: string;
  price: number;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  reviews: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

const ProductPage: React.FC<ProductPageProps> = ({
  id,
  name,
  price,
  description,
  images,
  features,
  specifications,
  reviews,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0].src);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleAddToCart = () => {
    // Add to cart logic
  };

  return (
    <div className="product-page">
      <section className="product-hero">
        <div
          className="product-gallery"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <div
            className="gallery-thumbnails"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  border: selectedImage === image.src ? '2px solid #0070f3' : 'none',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            ))}
          </div>
          <div
            className="gallery-main"
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={selectedImage}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

      <section className="product-info">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <h1>{name}</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              ${price.toFixed(2)}
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  color: '#f1c40f',
                }}
              >
                ★★★★☆
              </span>
              <span
                style={{
                  color: '#666',
                }}
              >
                4.0 (12 reviews)
              </span>
            </div>
          </div>

          <div
            className="product-description"
            style={{
              marginBottom: '24px',
            }}
          >
            <h2>Description</h2>
            <p>{description}</p>
          </div>

          <div
            className="product-options"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '24px',
            }}
          >
            <div
              className="color-option"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <label
                style={{
                  fontWeight: 'bold',
                }}
              >
                Color
              </label>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: selectedColor,
                    cursor: 'pointer',
                    border: '2px solid #ddd',
                  }}
                  onClick={() => {
                    // Open color picker
                  }}
                />
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    border: '2px solid #ddd',
                  }}
                  onClick={() => setSelectedColor('#ffffff')}
                />
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    cursor: 'pointer',
                    border: '2px solid #ddd',
                  }}
                  onClick={() => setSelectedColor('#000000')}
                />
              </div>
            </div>

            <div
              className="size-option"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <label
                style={{
                  fontWeight: 'bold',
                }}
              >
                Size
              </label>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <button
                  onClick={() => setSelectedSize('extra-small')}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor:
                      selectedSize === 'extra-small' ? '#0070f3' : 'white',
                    color:
                      selectedSize === 'extra-small' ? 'white' : '#333',
                  }}
                >
                  XS
                </button>
                <button
                  onClick={() => setSelectedSize('small')}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor:
                      selectedSize === 'small' ? '#0070f3' : 'white',
                    color:
                      selectedSize === 'small' ? 'white' : '#333',
                  }}
                >
                  S
                </button>
                <button
                  onClick={() => setSelectedSize('medium')}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor:
                      selectedSize === 'medium' ? '#0070f3' : 'white',
                    color:
                      selectedSize === 'medium' ? 'white' : '#333',
                  }}
                >
                  M
                </button>
                <button
                  onClick={() => setSelectedSize('large')}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor:
                      selectedSize === 'large' ? '#0070f3' : 'white',
                    color:
                      selectedSize === 'large' ? 'white' : '#333',
                  }}
                >
                  L
                </button>
                <button
                  onClick={() => setSelectedSize('extra-large')}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor:
                      selectedSize === 'extra-large' ? '#0070f3' : 'white',
                    color:
                      selectedSize === 'extra-large' ? 'white' : '#333',
                  }}
                >
                  XL
                </button>
              </div>
            </div>

            <div
              className="quantity-option"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <label
                style={{
                  fontWeight: 'bold',
                }}
              >
                Quantity
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <button
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(
                        1,
                        parseInt(e.target.value) || 1
                      )
                    )
                  }
                  style={{
                    width: '60px',
                    padding: '8px',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div
            className="product-actions"
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <button
              onClick={handleAddToCart}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: 1,
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#f1c40f',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: 1,
              }}
            >
              Buy Now
            </button>
          </div>

          <div
            className="product-details"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '24px',
            }}
          >
            <div
              className="product-features"
              style={{
                padding: '16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
              }}
            >
              <h3>Features</h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#0070f3',
                        marginRight: '8px',
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="product-specifications"
              style={{
                padding: '16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
              }}
            >
              <h3>Specifications</h3>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                }}
              >
                <tbody>
                  {Object.entries(specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td
                        style={{
                          padding: '8px',
                          border: '1px solid #eee',
                          fontWeight: 'bold',
                        }}
                      >
                        {key}
                      </td>
                      <td
                        style={{
                          padding: '8px',
                          border: '1px solid #eee',
                        }}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="product-reviews"
            style={{
              marginBottom: '24px',
            }}
          >
            <h2>Customer Reviews</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    border: '1px solid #eee',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <img
                        src={placeholderImages.avatar}
                        alt={review.name}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                        }}
                      />
                      <span>{review.name}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color:
                              i < review.rating
                                ? '#f1c40f'
                                : '#ddd',
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>{review.comment}</p>
                  <div
                    style={{
                      color: '#666',
                      fontSize: '0.875rem',
                      marginTop: '8px',
                    }}
                  >
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="related-products"
            style={{
              marginBottom: '24px',
            }}
          >
            <h2>Related Products</h2>
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
                  borderRadius: '4px',
                }}
              >
                <img
                  src={placeholderImages.product}
                  alt="Related Product 1"
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
                    padding: '8px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                  }}
                >
                  Related Product 1
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={placeholderImages.product}
                  alt="Related Product 2"
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
                    padding: '8px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                  }}
                >
                  Related Product 2
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={placeholderImages.product}
                  alt="Related Product 3"
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
                    padding: '8px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                  }}
                >
                  Related Product 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
