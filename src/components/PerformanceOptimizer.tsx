import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/logo512.png', as: 'image' },
      { rel: 'preload', href: '/manifest.json', as: 'fetch', crossorigin: 'anonymous' },
    ];

    preloadLinks.forEach(({ rel, href, as, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (as) link.setAttribute('as', as);
      if (crossorigin) link.setAttribute('crossorigin', crossorigin);
      document.head.appendChild(link);
    });

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Optimize fonts loading
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Cleanup function
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer; 