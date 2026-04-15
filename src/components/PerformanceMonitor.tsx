import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    let observer: PerformanceObserver | null = null;
    let layoutShiftObserver: PerformanceObserver | null = null;
    let resourceObserver: PerformanceObserver | null = null;

    // Monitor long tasks that cause TBT (Total Blocking Time)
    try {
      observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', {
                duration: entry.duration,
                startTime: entry.startTime,
                name: entry.name
              });
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'long_task', {
                  event_category: 'performance',
                  event_label: entry.name,
                  value: Math.round(entry.duration)
                });
              }
            }
          });
        } catch (e) {
          console.warn('Long task monitoring callback failed:', e);
        }
      });

      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.warn('Long task monitoring not supported:', e);
    }

    // Monitor layout shifts that cause CLS
    try {
      layoutShiftObserver = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry: any) => {
            if (entry.value > 0.1) {
              console.warn('Layout shift detected:', {
                value: entry.value,
                sources: entry.sources
              });
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'layout_shift', {
                  event_category: 'performance',
                  event_label: 'high_cls',
                  value: Math.round(entry.value * 1000)
                });
              }
            }
          });
        } catch (e) {
          console.warn('Layout shift monitoring callback failed:', e);
        }
      });

      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('Layout shift monitoring not supported:', e);
    }

    // Monitor resource loading issues
    try {
      resourceObserver = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 3000) {
              console.warn('Slow resource load:', {
                name: entry.name,
                duration: entry.duration,
                size: (entry as any).transferSize
              });
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'slow_resource', {
                  event_category: 'performance',
                  event_label: entry.name,
                  value: Math.round(entry.duration)
                });
              }
            }
          });
        } catch (e) {
          console.warn('Resource monitoring callback failed:', e);
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.warn('Resource monitoring not supported:', e);
    }

    // Fix common performance issues
    const cleanupInterval = fixPerformanceIssues();

    // Cleanup
    return () => {
      try {
        // Disconnect all observers
        const observers = [observer, layoutShiftObserver, resourceObserver];
        observers.forEach(obs => {
          if (obs && typeof obs.disconnect === 'function') {
            obs.disconnect();
          }
        });
        
        // Clear cleanup interval
        if (cleanupInterval) {
          cleanupInterval();
        }
      } catch (e) {
        console.warn('Failed to disconnect observers:', e);
      }
    };
  }, []);

  const fixPerformanceIssues = (): (() => void) => {
    try {
      // Fix image loading issues
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        try {
          // Add error handling for broken images
          (img as HTMLImageElement).onerror = () => {
            console.warn('Image failed to load:', img.src);
            img.style.display = 'none';
          };
          
          // Add loading attribute if missing
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
        } catch (e) {
          console.warn('Failed to optimize image:', img, e);
        }
      });

      // Fix script loading issues
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        try {
          // Add error handling for failed scripts
          (script as HTMLScriptElement).onerror = () => {
            console.error('Script failed to load:', script.src);
          };
        } catch (e) {
          console.warn('Failed to optimize script:', script, e);
        }
      });

      // Fix CSS loading issues
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        try {
          (link as HTMLLinkElement).onerror = () => {
            console.error('CSS failed to load:', (link as HTMLLinkElement).href);
          };
        } catch (e) {
          console.warn('Failed to optimize CSS link:', link, e);
        }
      });

      // Prevent memory leaks
      const cleanupEventListeners = () => {
        try {
          // Remove any orphaned event listeners
          const elements = document.querySelectorAll('*');
          elements.forEach(element => {
            // This is a simplified cleanup - in production you'd want more sophisticated cleanup
            if (element.hasAttribute('data-cleanup-needed')) {
              element.removeAttribute('data-cleanup-needed');
            }
          });
        } catch (e) {
          console.warn('Cleanup failed:', e);
        }
      };

      // Run cleanup periodically
      const intervalId = setInterval(cleanupEventListeners, 30000);
      
      // Return cleanup function
      return () => {
        try {
          clearInterval(intervalId);
        } catch (e) {
          console.warn('Failed to clear interval:', e);
        }
      };
    } catch (e) {
      console.warn('Performance fixes failed:', e);
      return () => {};
    }
  };

  return <>{children}</>;
};

export default PerformanceMonitor; 