import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data';
import SEO from '../components/SEO';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <SEO 
        title={`${course.title} - SBRIT Solution`}
        description={`Learn ${course.title} with our comprehensive training program. ${course.content}`}
        keywords={`${course.title}, ${course.topics?.join(', ')}, IT training, web development course, programming course, software development training`}
      />
      <div className="responsive-container">
        <h1>{course.title}</h1>
        <p>{course.content}</p>
        <h2>Course Details</h2>
        <p><strong>Price:</strong> ₹{course.price.toLocaleString('en-IN')}</p>
        <p><strong>Date:</strong> {course.date}</p>
        {course.agenda && (
          <>
            <h2>Agenda</h2>
            <p>{course.agenda}</p>
          </>
        )}
        {course.topics && (
          <>
            <h2>Topics Covered</h2>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </>
        )}
        {course.testimonial && (
          <>
            <h2>Student Testimonial</h2>
            <blockquote style={{ fontStyle: 'italic', color: '#666', borderLeft: '4px solid #1976d2', paddingLeft: 16, marginLeft: 0 }}>
              {course.testimonial}
            </blockquote>
          </>
        )}
        <button 
          onClick={() => navigate('/contact')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Enroll Now
        </button>
      </div>
    </>
  );
};

export default CourseDetails; 