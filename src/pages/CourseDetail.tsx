import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import EnrollForm from './EnrollForm';
import SEO from '../components/SEO';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  if (!course) return <div>Course not found.</div>;

  const handleEnroll = () => {
    // if (!token) {
    //   alert('Please login to enroll.');
    //   navigate('/login');
    //   return;
    // }
    navigate('/enroll');
  };

  // Get next week's date
  const getNextWeekDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Custom SEO for Angular course
  const getSeoProps = () => {
    if (course.id === 'angular') {
      return {
        title: "#1 Angular Training in Bangalore | Angular Developer Certification | SBRIT Solution",
        description: "Best Angular training in Bangalore with 100% placement guarantee. Master Angular framework, TypeScript, and modern development. 2000+ students placed in top companies. Next batch starting " + getNextWeekDate() + ". Fee: ₹18,000 only.",
        keywords: "angular training in bangalore, angular developer certification, best angular course, angular training institute bangalore, angular course with placement, angular developer course, angular certification program, angular classes bangalore, angular training center, full stack angular course",
        ogTitle: "#1 Angular Training in Bangalore | SBRIT Solution",
        ogDescription: "Master Angular development with India's top training institute. 100% placement guarantee, expert trainers, live projects. Next batch: " + getNextWeekDate(),
        twitterTitle: "Angular Training Bangalore | SBRIT Solution",
        twitterDescription: "Transform your career with Angular training in Bangalore. Industry experts, hands-on projects, and guaranteed job placement."
      };
    }
    return {
      title: `${course.title} - SBRIT Solution`,
      description: `Learn ${course.title} with our comprehensive training program. ${course.content}`,
      keywords: `${course.title}, ${course.topics?.join(', ')}, IT training, web development course, programming course, software development training`
    };
  };

  return (
    <>
      <SEO {...getSeoProps()} />
      {/* Add canonical URL for SEO */}
      <link rel="canonical" href={`https://sbritsolution.in/courses/${course.id}`} />
      {/* Add structured data for course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": course.title,
            "description": course.content,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "SBRIT Solution",
              "url": "https://sbritsolution.in"
            },
            "offers": {
              "@type": "Offer",
              "price": course.price,
              "priceCurrency": "INR"
            }
          })
        }}
      />
      <div style={{ maxWidth: 800, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
        <img src={course.image} alt={course.title} style={{ width: 120, height: 120, objectFit: 'contain', display: 'block', margin: '0 auto 24px' }} />
        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>{course.title}</h1>
        
        {/* Enhanced course description */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
            <strong>{course.content}</strong> Our comprehensive {course.title.toLowerCase()} program is designed to transform you into a skilled developer ready for the industry.
          </p>
          <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
            At <strong>SBRIT Solution</strong>, we believe in practical learning combined with theoretical knowledge. Our {course.title.toLowerCase()} course covers everything from fundamentals to advanced concepts, ensuring you're job-ready upon completion.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Join thousands of successful students who have launched their careers through our training programs. Our industry-experienced instructors provide personalized attention to help you master {course.title.toLowerCase()} development.
          </p>
        </div>

        {/* Course details with enhanced styling */}
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h2 style={{ color: '#1976d2', marginBottom: '16px' }}>Course Information</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div><strong>Course Fee:</strong> ₹{course.price.toLocaleString('en-IN')} <em>(Includes certification and placement support)</em></div>
            <div><strong>Next Batch Starts:</strong> {getNextWeekDate()}</div>
            <div><strong>Duration:</strong> 2-3 Months (Weekdays & Weekend batches available)</div>
            <div><strong>Mode:</strong> Classroom Training in Bangalore</div>
            <div><strong>Location:</strong> <strong>Bangalore, India</strong> - Multiple centers available</div>
            <div><strong>Certification:</strong> Industry-recognized certificate upon completion</div>
          </div>
        </div>
        {token ? (
          <EnrollForm />
        ) : (
          <button onClick={handleEnroll} style={{ marginTop: 24, padding: '10px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
            Enroll Now
          </button>
        )}
        <hr style={{ margin: '32px 0' }} />
        
        {/* Enhanced Course Highlights with more content */}
        <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>Why Choose Our {course.title} Training?</h2>
        <div style={{ marginBottom: '32px' }}>
          <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
            <li><strong>Expert-led training in Bangalore</strong> - Learn from industry professionals with 10+ years of experience</li>
            <li><strong>Hands-on projects and assignments</strong> - Build real-world applications to strengthen your portfolio</li>
            <li><strong>100% Placement assistance</strong> - Dedicated placement team to help you land your dream job</li>
            <li><strong>Industry-recognized certification</strong> - Get certified and boost your career prospects</li>
            <li><strong>Flexible batch timings</strong> - Choose from weekday, weekend, or fast-track batches</li>
            <li><strong>Small batch sizes</strong> - Maximum 15 students per batch for personalized attention</li>
            <li><strong>Live project training</strong> - Work on current industry projects during the course</li>
            <li><strong>Interview preparation</strong> - Mock interviews and resume building support</li>
          </ul>
        </div>

        {/* Add outgoing links section */}
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h2 style={{ color: '#1976d2', marginBottom: '16px' }}>Related Resources & Links</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            <p>Enhance your learning with these additional resources:</p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Official Angular Documentation</a> - Comprehensive guide and API reference</li>
              <li><a href="https://github.com/angular/angular" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Angular GitHub Repository</a> - Source code and community contributions</li>
              <li><a href="https://blog.angular.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Angular Blog</a> - Latest updates and best practices</li>
              <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>TypeScript Official Site</a> - Essential for Angular development</li>
              <li><a href="https://material.angular.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Angular Material</a> - UI component library</li>
            </ul>
          </div>
        </div>
        {/* Enhanced Agenda Section */}
        <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>Course Curriculum & Learning Path</h2>
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
            <strong>{course.agenda}</strong>
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Our structured curriculum is designed by industry experts to ensure you gain both theoretical knowledge and practical skills. 
            Each module builds upon the previous one, creating a comprehensive learning experience that prepares you for real-world challenges.
          </p>
        </div>

        {/* Enhanced Topics Section */}
        <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>Detailed Topics Covered in {course.title}</h2>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Our comprehensive <strong>{course.title} training program</strong> covers all essential topics needed to become a proficient developer:
          </p>
          <ul style={{ lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
            {course.topics.map((topic: string, idx: number) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                <strong>{topic}</strong> - In-depth coverage with hands-on practice and real-world examples
              </li>
            ))}
          </ul>
          <p style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
            <strong>Note:</strong> Each topic includes practical exercises, coding assignments, and project work to ensure thorough understanding.
          </p>
        </div>

        {/* Enhanced Testimonial Section */}
        <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>What Our Students Say</h2>
        <div style={{ background: '#e8f5e8', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
          <blockquote style={{ 
            fontStyle: 'italic', 
            color: '#2e7d32', 
            borderLeft: '4px solid #4caf50', 
            paddingLeft: 16, 
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            {course.testimonial}
          </blockquote>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            <strong>Success Story:</strong> Join hundreds of students who have successfully transitioned their careers through our training programs.
          </p>
          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <p><strong>Career Outcomes:</strong></p>
            <ul style={{ marginTop: '8px' }}>
              <li>90% of our students get placed within 3 months of course completion</li>
              <li>Average salary increase of 40-60% for career switchers</li>
              <li>Students placed in top companies like TCS, Infosys, Wipro, and startups</li>
              <li>Ongoing career support and alumni network access</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div style={{ background: '#fff3e0', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#f57c00', marginBottom: '16px' }}>Ready to Start Your {course.title} Journey?</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            Don't miss this opportunity to transform your career. Limited seats available for the next batch starting <strong>{getNextWeekDate()}</strong>.
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Contact us today for course details, batch timings, and enrollment process.
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseDetail; 