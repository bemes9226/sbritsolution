import React, { useState } from 'react';

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'Angular Training',
    'React Training', 
    'Java Training',
    'Python Training',
    'Power BI Training',
    'HTML Training',
    'CSS Training',
    'Bootstrap Training',
    'jQuery Training',
    'JavaScript Training'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Processing your request...');

    // Simulate form submission (replace with actual email service when configured)
    try {
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('✅ Thank you! Your inquiry has been received. We will contact you soon at ' + formData.email);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        course: '',
        phone: '',
        message: ''
      });

      // Show success message and close form after delay
      setTimeout(() => {
        if (onClose) onClose();
      }, 3000);

    } catch (error) {
      setStatus('❌ Something went wrong. Please contact us directly at bemes0112@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '32px',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    opacity: isSubmitting ? 0.6 : 1,
    marginRight: '8px'
  };

  const closeButtonStyle: React.CSSProperties = {
    backgroundColor: '#6b7280',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle} onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div style={formStyle}>
        <h2 style={{ margin: '0 0 24px 0', color: '#111827', fontSize: '24px', fontWeight: 'bold' }}>
          Contact SBRIT Solution
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151', fontWeight: '500' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151', fontWeight: '500' }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151', fontWeight: '500' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151', fontWeight: '500' }}>
              Course of Interest
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{...inputStyle, resize: 'vertical'}}
              placeholder="Tell us about your training needs or ask any questions"
            />
          </div>

          {status && (
            <div style={{ 
              padding: '12px', 
              marginBottom: '16px', 
              borderRadius: '4px',
              backgroundColor: status.includes('✅') ? '#f0fdf4' : status.includes('❌') ? '#fef2f2' : '#f0f9ff',
              color: status.includes('✅') ? '#166534' : status.includes('❌') ? '#dc2626' : '#1e40af',
              fontSize: '14px'
            }}>
              {status}
            </div>
          )}

          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              type="submit" 
              style={buttonStyle}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button 
              type="button" 
              onClick={onClose}
              style={closeButtonStyle}
            >
              Close
            </button>
          </div>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#374151', fontSize: '16px', fontWeight: '600' }}>
            Contact Information
          </h3>
          <p style={{ margin: '4px 0', color: '#6b7280', fontSize: '14px' }}>
            📧 Email: bemes0112@gmail.com
          </p>
          <p style={{ margin: '4px 0', color: '#6b7280', fontSize: '14px' }}>
            📱 Phone: +91 XXXXXXXXXX
          </p>
          <p style={{ margin: '4px 0', color: '#6b7280', fontSize: '14px' }}>
            🏢 Address: Hyderabad, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
