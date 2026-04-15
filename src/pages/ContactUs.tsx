import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_slrxim8";
  const EMAILJS_TEMPLATE_ID = "template_q9fc9jr";
  const EMAILJS_USER_ID = "mFRIsSwCYxzv3SMOW";
  const NOTIFICATION_EMAIL = "bemes0112@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      // Get current page URL and timestamp
      const currentPage = window.location.href;
      const pageTitle = document.title;
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });

      // Format email content
      const emailContent = `
New contact form submission from your website:

Name: ${name}
Email: ${email}

Message:
${message}

---
Page: ${pageTitle}
URL: ${currentPage}
Time: ${timestamp}

---
This is an automated notification from SBRIT Solution Contact Form.
      `.trim();

      // Prepare email template parameters
      const templateParams: { [key: string]: string } = {
        to_email: NOTIFICATION_EMAIL,
        to_name: 'SBRIT Solution',
        from_name: name || 'Website Visitor',
        reply_to: email || NOTIFICATION_EMAIL,
        subject: `New Contact Form Submission - ${name || 'Anonymous'}`,
        message: emailContent,
        name: name,
        email: email,
        user_message: message,
        page_url: currentPage,
        page_title: pageTitle,
        timestamp: timestamp,
        course: 'Contact Inquiry'
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      // Success
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      
      console.log('✅ Contact form email sent successfully to', NOTIFICATION_EMAIL);
    } catch (error) {
      console.error('❌ Failed to send contact form email:', error);
      setError('Failed to send message. Please try again or contact us directly at bemes0112@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact SBR IT Solution - Get in Touch | Course Inquiries & Support"
        description="Contact SBR IT Solution for course inquiries, enrollment support, and training information. Reach out via phone, email, or our contact form. We're here to help with your IT training journey."
        keywords="contact SBR IT Solution, course inquiry, training support, enrollment help, IT training contact, course information, student support, training institute contact"
        url="https://sbritsolution.in/contact"
      />
      <div className="responsive-container">
        <h1>Contact Us</h1>
        <p>Have questions or need help? Reach out to SBR IT Solution!</p>
        
        <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{ width: '100%', padding: 8, minHeight: 80 }}
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '10px 24px', 
            background: isSubmitting ? '#ccc' : '#1976d2', 
            color: '#fff', 
            border: 'none', 
            borderRadius: 4, 
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {success && (
          <div style={{ color: 'green', marginTop: 12, padding: '8px', background: '#e8f5e9', borderRadius: 4 }}>
            ✅ Thank you! We have received your message and will contact you soon.
          </div>
        )}
        {error && (
          <div style={{ color: 'red', marginTop: 12, padding: '8px', background: '#ffebee', borderRadius: 4 }}>
            ❌ {error}
          </div>
        )}
      </form>
      
      <h2>Contact Information</h2>
      <div>
        <strong>Email:</strong> bemes0112@gmail.com<br />
        <strong>Phone:</strong> +91-1234567890<br />
        <strong>Address:</strong> 123 Tech Park, Bengaluru, India
      </div>
      
      <h2>Explore Our Courses</h2>
      <p>While you're here, check out our popular training programs:</p>
      <div className="mt-4 space-y-2">
        <Link to="/courses/angular" className="text-blue-600 hover:underline block">Angular Training</Link>
        <Link to="/courses/react" className="text-blue-600 hover:underline block">React Training</Link>
        <Link to="/courses/java" className="text-blue-600 hover:underline block">Java Training</Link>
        <Link to="/courses/python" className="text-blue-600 hover:underline block">Python Training</Link>
        <Link to="/" className="text-blue-600 hover:underline block">View All Courses</Link>
      </div>
      </div>
    </>
  );
};

export default ContactUs; 