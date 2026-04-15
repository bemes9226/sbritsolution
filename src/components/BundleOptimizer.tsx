import React, { useEffect } from 'react';

interface BundleOptimizerProps {
  children: React.ReactNode;
}

const BundleOptimizer: React.FC<BundleOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Optimize bundle loading
    const optimizeBundle = () => {
      try {
        // Preload critical resources
        const criticalResources = [
          '/static/js/main.chunk.js',
          '/static/css/main.chunk.css'
        ];

        criticalResources.forEach(resource => {
          try {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.js') ? 'script' : 'style';
            if (document.head) {
              document.head.appendChild(link);
            }
          } catch (e) {
            console.warn('Failed to preload resource:', resource, e);
          }
        });

        // Defer non-critical scripts
        const deferScripts = () => {
          try {
            const scripts = document.querySelectorAll('script[data-defer]');
            scripts.forEach(script => {
              script.setAttribute('async', 'true');
              script.setAttribute('defer', 'true');
            });
          } catch (e) {
            console.warn('Failed to defer scripts:', e);
          }
        };

        // Run after DOM is ready
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', deferScripts);
        } else {
          deferScripts();
        }
      } catch (e) {
        console.warn('Bundle optimization failed:', e);
      }
    };

    optimizeBundle();

    // Monitor bundle performance
    try {
      const observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource' && entry.name.includes('.js')) {
              console.log(`Bundle loaded: ${entry.name} in ${entry.duration}ms`);
              
              // Send to analytics if available
              if (window.gtag) {
                window.gtag('event', 'bundle_load', {
                  event_category: 'performance',
                  event_label: entry.name,
                  value: Math.round(entry.duration)
                });
              }
            }
          });
        } catch (e) {
          console.warn('Performance observer callback failed:', e);
        }
      });

      observer.observe({ entryTypes: ['resource'] });

      return () => {
        try {
          observer.disconnect();
        } catch (e) {
          console.warn('Failed to disconnect observer:', e);
        }
      };
    } catch (e) {
      console.warn('Performance monitoring not supported:', e);
      return () => {};
    }
  }, []);

  return <>{children}</>;
};

export default BundleOptimizer; 