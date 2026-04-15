import React, { useEffect } from 'react';

interface ConsoleErrorHandlerProps {
  children: React.ReactNode;
}

const ConsoleErrorHandler: React.FC<ConsoleErrorHandlerProps> = ({ children }) => {
  useEffect(() => {
    // Store original console methods
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    const originalConsoleLog = console.log;

    // Override console.error to catch and handle errors
    console.error = (...args) => {
      // Log the original error
      originalConsoleError.apply(console, args);
      
      // Send error to analytics if available
      if (window.gtag) {
        const errorMessage = args.join(' ');
        window.gtag('event', 'console_error', {
          event_category: 'console_error',
          event_label: errorMessage.substring(0, 100),
          value: 1
        });
      }
      
      // Log to custom error tracking
      logError('error', args);
    };

    // Override console.warn to catch warnings
    console.warn = (...args) => {
      // Log the original warning
      originalConsoleWarn.apply(console, args);
      
      // Send warning to analytics if available
      if (window.gtag) {
        const warningMessage = args.join(' ');
        window.gtag('event', 'console_warning', {
          event_category: 'console_warning',
          event_label: warningMessage.substring(0, 100),
          value: 1
        });
      }
      
      // Log to custom error tracking
      logError('warning', args);
    };

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      if (window.gtag) {
        window.gtag('event', 'unhandled_rejection', {
          event_category: 'promise_error',
          event_label: event.reason?.toString() || 'Unknown error',
          value: 1
        });
      }
    };

    // Handle global errors
    const handleGlobalError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
      
      if (window.gtag) {
        window.gtag('event', 'global_error', {
          event_category: 'global_error',
          event_label: event.error?.message || event.message,
          value: 1
        });
      }
    };

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleGlobalError);

    // Cleanup function
    return () => {
      // Restore original console methods
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      console.log = originalConsoleLog;
      
      // Remove event listeners
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  const logError = (type: 'error' | 'warning', args: any[]) => {
    try {
      // Safely get errors from localStorage with fallback
      let errors: any[] = [];
      try {
        const storedErrors = localStorage.getItem('console_errors');
        errors = storedErrors ? JSON.parse(storedErrors) : [];
      } catch (e) {
        console.warn('Failed to parse stored errors:', e);
        errors = [];
      }

      // Ensure errors is an array
      if (!Array.isArray(errors)) {
        errors = [];
      }

      // Add new error
      errors.push({
        type,
        message: args.join(' '),
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      });
      
      // Keep only last 50 errors
      if (errors.length > 50) {
        errors = errors.slice(-50);
      }
      
      // Safely store errors
      try {
        localStorage.setItem('console_errors', JSON.stringify(errors));
      } catch (e) {
        console.warn('Failed to store errors in localStorage:', e);
      }
    } catch (e) {
      console.warn('Error in logError function:', e);
    }
  };

  return <>{children}</>;
};

export default ConsoleErrorHandler; 