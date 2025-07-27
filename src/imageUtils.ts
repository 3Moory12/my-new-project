// Image optimization configuration
export const optimizeImage = (src: string, width: number, height: number) => {
  // Placeholder for image optimization logic
  // This could be replaced with actual optimization logic
  return {
    src,
    width,
    height,
    srcSet: `${src} ${width}w`,
  };
};

// Placeholder images
export const placeholderImages = {
  avatar: 'https://via.placeholder.com/150',
  banner: 'https://via.placeholder.com/1200x400',
  product: 'https://via.placeholder.com/300x300',
  thumbnail: 'https://via.placeholder.com/100x100',
};

// Responsive image handling
export const responsiveImage = (src: string, sizes: string[]) => {
  return sizes.map(size => {
    const [width, height] = size.split('x').map(Number);
    return {
      src: optimizeImage(src, width, height),
      media: `(min-width: ${width}px)`,
    };
  });
};

// Image loading utilities
export const useImageLoading = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(false);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isLoading,
  };
};

// Image styles
export const imageStyles = {
  responsive: `
    width: 100%;
    height: auto;
    object-fit: cover;
  `,
  lazy: `
    opacity: 0;
    transition: opacity 0.3s ease-in;
  `,
  placeholder: `
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
