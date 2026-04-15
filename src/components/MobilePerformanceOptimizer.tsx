import React, { useEffect, useState } from 'react';

interface MobilePerformanceOptimizerProps {
  children: React.ReactNode;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

const MobilePerformanceOptimizer: React.FC<MobilePerformanceOptimizerProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Remove loading state once React is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Remove the loading div from DOM
      const loadingDiv = document.querySelector('.loading');
      if (loadingDiv) {
        loadingDiv.remove();
      }
    }, 100);

    // Optimize images for mobile
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add lazy loading for images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add proper sizing to prevent layout shift
        if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
          (img as HTMLImageElement).style.width = '100%';
          (img as HTMLImageElement).style.height = 'auto';
        }
        
        // Use WebP format if supported
        if (window.location.search.includes('webp=true')) {
          const src = img.src;
          if (src.includes('.png') || src.includes('.jpg') || src.includes('.jpeg')) {
            img.src = src.replace(/\.(png|jpg|jpeg)/, '.webp');
          }
        }
      });
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      if ('fonts' in document) {
        // Use system fonts as fallback for better performance
        document.documentElement.classList.add('fonts-fallback');
        
        // Preload critical fonts if needed
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        link.as = 'style';
        link.onload = () => {
          document.documentElement.classList.add('fonts-loaded');
        };
        document.head.appendChild(link);
      }
    };

    // Optimize CSS delivery
    const optimizeCSS = () => {
      // Inline critical CSS
      const criticalCSS = `
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        
        .course-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        
        .course-card:hover {
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
            padding: 10px;
          }
        }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    // Optimize JavaScript execution
    const optimizeJS = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });
    };

    // Optimize Core Web Vitals
    const optimizeCoreWebVitals = () => {
      // Prevent layout shift by reserving space
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const aspectRatio = img.getAttribute('data-aspect-ratio') || '16/9';
        const [width, height] = aspectRatio.split('/').map(Number);
        const ratio = height / width;
        
        (img as HTMLImageElement).style.aspectRatio = aspectRatio;
        (img as HTMLImageElement).style.width = '100%';
        (img as HTMLImageElement).style.height = 'auto';
      });

      // Optimize Largest Contentful Paint (LCP)
      const lcpElements = document.querySelectorAll('img, video, div[data-lcp]');
      lcpElements.forEach(element => {
        if (element instanceof HTMLImageElement) {
          element.setAttribute('fetchpriority', 'high');
        }
      });
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Break up long tasks
      const longTasks = [
        () => optimizeImages(),
        () => optimizeFonts(),
        () => optimizeCSS(),
        () => optimizeJS(),
        () => optimizeCoreWebVitals()
      ];

      // Execute tasks with delays to prevent blocking
      longTasks.forEach((task, index) => {
        setTimeout(task, index * 50);
      });
    };

    // Initialize optimizations
    optimizeFID();

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Monitor LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const fidEntry = entry as FirstInputEntry;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor CLS
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const clsEntry = entry as LayoutShiftEntry;
            console.log('CLS:', clsEntry.value);
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('Performance monitoring not supported');
      }
    }

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
};

export default MobilePerformanceOptimizer; 