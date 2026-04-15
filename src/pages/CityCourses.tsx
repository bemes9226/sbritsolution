import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';
import SEO from '../components/SEO';

const INDIAN_CITIES = [
  'bangalore',
  'mumbai',
  'delhi',
  'hyderabad',
  'chennai',
  'pune',
  'kolkata',
  'noida',
  'gurgaon'
];

const CityCourses: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();

  if (!city || !INDIAN_CITIES.includes(city.toLowerCase())) {
    return <div>City not found.</div>;
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  
  const handleEnroll = (id: string) => {
    navigate(`/courses/${id}`);
  };

  const handleViewDetails = (id: string) => {
    navigate(`/courses/${id}`);
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

  const getSeoProps = () => {
    return {
      title: `IT Training Courses in ${cityName} | SBRIT Solution`,
      description: `Join the best IT training courses in ${cityName}. Learn from industry experts with hands-on projects, placement assistance, and certification. Next batch starting ${getNextWeekDate()}.`,
      keywords: `IT training in ${cityName}, software training ${cityName}, web development course ${cityName}, programming course ${cityName}, IT certification ${cityName}, best IT training institute ${cityName}, IT classes near me ${cityName}, IT training with placement ${cityName}, IT online training ${cityName}, IT corporate training ${cityName}`,
      ogTitle: `IT Training Courses in ${cityName} | SBRIT Solution`,
      ogDescription: `Expert-led IT training in ${cityName}. Learn from industry experts. Get certified and job-ready. Next batch starting ${getNextWeekDate()}.`,
      twitterTitle: `IT Training Courses in ${cityName} | SBRIT Solution`,
      twitterDescription: `Master IT skills with our comprehensive training in ${cityName}. Industry experts, hands-on projects, and placement support.`
    };
  };

  return (
    <>
      <SEO {...getSeoProps()} />
      <div style={{ paddingBottom: 80 }}>
        <h1 style={{ textAlign: 'center', margin: '24px 0' }}>
          IT Training Courses in {cityName}
        </h1>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '0 16px',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Join our expert-led training programs in {cityName}. Get hands-on experience, 
            industry-recognized certification, and placement assistance. Next batch starting {getNextWeekDate()}.
          </p>
        </div>
        <div className="cards-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <CourseCard 
                course={course} 
                onEnroll={handleEnroll} 
                onViewDetails={handleViewDetails} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CityCourses; 