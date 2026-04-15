import React from 'react';
import { Helmet } from 'react-helmet';

type Course = {
  id: string;
  title: string;
  image?: string;
  techLogos?: string[];
  content: string;
  price: number;
  date: string;
  agenda?: string;
  topics?: string[];
  testimonial?: string;
};

interface CourseCardProps {
  course: Course;
  onEnroll: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const CARD_MIN_HEIGHT = 420;

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onViewDetails }) => (
  <><Helmet>
    <title>{course.title}</title>
    <meta name="description" content={`Enroll in ${course.title} – ${course.content.slice(0, 120)}...`} />
    <meta name="keywords" content={`${course.title.toLowerCase()}, online course, ${course.techLogos?.join(', '), "best javatraining institute", "best java training in hyderabad", "java training in hyderabad", "java training in bangalore", "java training in mumbai", "java training in delhi", "java training in chennai", "java training in pune", "java training in noida", "java training in gurgaon"}`} />
  </Helmet>
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, width: 300, minHeight: CARD_MIN_HEIGHT, boxShadow: '0 2px 8px #eee', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      {course.image && (
        <img src={course.image} alt={course.title} style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }} />
      )}
      {course.techLogos && (
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          {course.techLogos.map((logo, idx) => (
            <img key={idx} src={logo} alt="tech" style={{ height: 32, width: 'auto', background: '#fff', borderRadius: 4, border: '1px solid #eee', padding: 2 }} />
          ))}
        </div>
      )}
      <h3 style={{ minHeight: 48, textAlign: 'center' }}>{course.title}</h3>
      <p style={{ flex: 1, textAlign: 'center' }}>{course.content}</p>
      <div style={{ margin: '8px 0' }}>
        <strong>Price:</strong> ₹{course.price.toLocaleString('en-IN')}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Date:</strong> {course.date}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onEnroll(course.id)} style={{ padding: '8px 16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Enroll
        </button>
        <button onClick={() => onViewDetails(course.id)} style={{ padding: '8px 16px', background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 4, cursor: 'pointer' }}>
          View Details
        </button>
      </div>
    </div></>
);

export default CourseCard; 