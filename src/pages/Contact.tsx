import React from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact SBRIT Solution - IT Training Institute"
        description="Get in touch with SBRIT Solution for information about our IT training courses, enrollment, and career opportunities. Contact us for expert guidance on your learning journey."
        keywords="contact SBRIT Solution, IT training contact, course inquiry, training institute contact, enrollment information, IT education contact, course details inquiry"
      />
      <div className="responsive-container">
        <h1>Contact Us</h1>
        <p>
          Have questions about our courses or want to enroll? We're here to help!
          Reach out to us through any of the following channels:
        </p>
        <div style={{ marginTop: '20px' }}>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@sbritsolution.in</p>
          <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
          <p><strong>Address:</strong> Your Address Here, City, State, India</p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </>
  );
};

export default Contact; 