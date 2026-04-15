import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log error to analytics or monitoring service
    if (window.gtag) {
      window.gtag('event', 'error', {
        event_category: 'error_boundary',
        event_label: error.message,
        value: 1
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          color: '#666',
          fontSize: '14px',
          background: '#f8f9fa',
          borderRadius: '8px',
          margin: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>Something went wrong</h3>
          <p style={{ margin: '0 0 15px 0' }}>Please try navigating to a different page or reload the application.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 