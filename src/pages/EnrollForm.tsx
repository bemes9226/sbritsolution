import React, { useState } from "react";
import emailjs from "emailjs-com";

const EnrollForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_slrxim8", // Replace with your EmailJS service ID
        "template_q9fc9jr", // Replace with your EmailJS template ID
        formData, // Data to send
        "mFRIsSwCYxzv3SMOW" // Optional: Replace with your EmailJS api key user ID if required
      )

      .then(() => {
        setStatus("✅ Enrollment successful!");
        setFormData({ name: "", email: "", course: "" });
        setShowForm(false);
        alert("Enrolled successfully!");
      })
      .catch(() => {
        setStatus("❌ Failed to send. Please try again.");
      });
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box' as const,
    marginBottom: '8px'
  };

  return (
    <div style={{ 
      padding: '24px',
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        marginBottom: '24px',
        color: '#333'
      }}>
        Please fill the form to enroll free course
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '4px', color: '#333' }}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '4px', color: '#333' }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '4px', color: '#333' }}>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Course</option>
            <option value="PowerBI">PowerBI</option>
            <option value="Java">Java</option>
            <option value="SpringBoot">Spring Boot</option>
            <option value="Python">Python</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Node.js">Node.js</option>
            <option value="MEAN">MEAN stack</option>
            <option value="MERN">MERN stack</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            background: "#1976d2",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            width: "100%",
            marginTop: "8px"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#1565c0"}
          onMouseOut={(e) => e.currentTarget.style.background = "#1976d2"}
        >
          Submit
        </button>
        {status && (
          <div style={{
            textAlign: 'center',
            padding: '8px',
            borderRadius: '4px',
            background: status.includes('✅') ? '#e8f5e9' : '#ffebee',
            color: status.includes('✅') ? '#2e7d32' : '#c62828',
            marginTop: '8px'
          }}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default EnrollForm;
