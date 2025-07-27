// Image optimization utilities
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

// Code splitting configuration
export const loadComponent = async (componentName: string) => {
  switch (componentName) {
    case 'Header':
      return import('./components/Header').then((module) => module.default);
    case 'Footer':
      return import('./components/Footer').then((module) => module.default);
    case 'Dashboard':
      return import('./components/Dashboard').then((module) => module.default);
    default:
      throw new Error(`Component ${componentName} not found`);
  }
};

// Lazy loading components
export const lazyLoadComponents = {
  Header: React.lazy(() => import('./components/Header')),
  Footer: React.lazy(() => import('./components/Footer')),
  Dashboard: React.lazy(() => import('./components/Dashboard')),
};

// Performance utilities
export const usePerformance = () => {
  const measure = (name: string, callback: () => void) => {
    performance.mark(name);
    callback();
    performance.measure(name, name);
  };

  const trackPageLoad = () => {
    const startTime = performance.now();
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
    });
  };

  return {
    measure,
    trackPageLoad,
  };
};

// Performance styles
export const performanceStyles = {
  skeleton: `
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  `,
  lazyLoad: `
    opacity: 0;
    transition: opacity 0.3s ease-in;
  `,
};

// Performance hooks
export const useLazyLoad = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return isIntersecting;
};
