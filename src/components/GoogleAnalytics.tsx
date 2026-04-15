import React, { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX' // Replace with your actual GA4 measurement ID
}) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Track custom events
    const trackEvent = (eventName: string, parameters: any = {}) => {
      window.gtag('event', eventName, parameters);
    };

    // Track course enrollments
    const trackEnrollment = (courseName: string) => {
      trackEvent('course_enrollment', {
        course_name: courseName,
        event_category: 'engagement',
        event_label: 'course_enrollment'
      });
    };

    // Track contact form submissions
    const trackContactForm = () => {
      trackEvent('contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
    };

    // Track phone number clicks
    const trackPhoneClick = () => {
      trackEvent('phone_click', {
        event_category: 'engagement',
        event_label: 'phone_contact'
      });
    };

    // Add event listeners for tracking
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Track enrollment button clicks
      if (target.closest('[data-track="enrollment"]')) {
        const courseName = target.closest('[data-track="enrollment"]')?.getAttribute('data-course');
        if (courseName) {
          trackEnrollment(courseName);
        }
      }

      // Track contact form submissions
      if (target.closest('[data-track="contact"]')) {
        trackContactForm();
      }

      // Track phone number clicks
      if (target.closest('[data-track="phone"]')) {
        trackPhoneClick();
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackEvent('scroll_depth', {
          scroll_percentage: scrollPercent,
          event_category: 'engagement'
        });
      }
    };

    window.addEventListener('scroll', trackScrollDepth);

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage >= 30) {
        trackEvent('time_on_page', {
          time_seconds: timeOnPage,
          event_category: 'engagement'
        });
        startTime = Date.now();
      }
    };

    const timeInterval = setInterval(trackTimeOnPage, 30000);

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
    };
  }, [measurementId]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 