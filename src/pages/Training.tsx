import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';
import SEO from '../components/SEO';

const INDIAN_CITIES = {
  bangalore: {
    name: 'Bangalore',
    description: 'Bangalore, Karnataka',
    address: 'Bangalore, Karnataka',
    email: 'bemes0112@gmail.com',
    highlights: [
      'State-of-the-art training facility',
      'Industry expert trainers',
      '100% placement assistance',
      'Flexible batch timings',
      'Weekend batches available'
    ]
  },
  mumbai: {
    name: 'Mumbai',
    description: 'Financial Capital of India',
    address: 'Andheri East, Mumbai, Maharashtra',
    email: 'bemes0112@gmail.com',
    highlights: [
      'Modern training center',
      'Corporate training programs',
      'Job placement support',
      'Weekend and weekday batches',
      'Online and offline training'
    ]
  },
  delhi: {
    name: 'Delhi',
    description: 'National Capital Region',
    address: 'Saket, New Delhi',
    email: 'bemes0112@gmail.com',
    highlights: [
      'Expert-led training sessions',
      'Industry-aligned curriculum',
      'Placement assistance',
      'Flexible learning options',
      'Corporate tie-ups'
    ]
  },
  hyderabad: {
    name: 'Hyderabad',
    description: 'IT Hub of South India',
    address: 'Hitech City, Hyderabad, Telangana',
    email: 'bemes0112@gmail.com',
    highlights: [
      'Advanced training infrastructure',
      'Industry expert faculty',
      'Placement support',
      'Weekend batches',
      'Corporate training'
    ]
  },
  chennai: {
    name: 'Chennai',
    description: 'Gateway to South India',
    address: 'T Nagar, Chennai, Tamil Nadu',
    email: 'bemes0112@gmail.com',
    highlights: [
      'Modern training facility',
      'Expert trainers',
      'Placement assistance',
      'Flexible timings',
      'Corporate programs'
    ]
  }
};

const Training: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();

  if (!city || !INDIAN_CITIES[city.toLowerCase() as keyof typeof INDIAN_CITIES]) {
    return <div>City not found.</div>;
  }

  const cityData = INDIAN_CITIES[city.toLowerCase() as keyof typeof INDIAN_CITIES];
  
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
      title: `IT Training in ${cityData.name} | Best IT Training Institute | SBRIT Solution`,
      description: `Join the best IT training institute in ${cityData.name}. Learn from industry experts with hands-on projects, placement assistance, and certification. Next batch starting ${getNextWeekDate()}.`,
      keywords: `IT training in ${cityData.name}, software training ${cityData.name}, web development course ${cityData.name}, programming course ${cityData.name}, IT certification ${cityData.name}, best IT training institute ${cityData.name}, IT classes near me ${cityData.name}, IT training with placement ${cityData.name}, IT online training ${cityData.name}, IT corporate training ${cityData.name}`,
      ogTitle: `IT Training in ${cityData.name} | SBRIT Solution`,
      ogDescription: `Expert-led IT training in ${cityData.name}. Learn from industry experts. Get certified and job-ready. Next batch starting ${getNextWeekDate()}.`,
      twitterTitle: `IT Training in ${cityData.name} | SBRIT Solution`,
      twitterDescription: `Master IT skills with our comprehensive training in ${cityData.name}. Industry experts, hands-on projects, and placement support.`
    };
  };

  return (
    <>
      <SEO {...getSeoProps()} />
      <div style={{ paddingBottom: 80 }}>
        <div style={{ 
          background: '#1976d2',
          color: '#fff',
          padding: '48px 16px',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', marginBottom: '16px' }}>
            IT Training in {cityData.name}
          </h1>
          <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
            {cityData.description} - Next batch starting {getNextWeekDate()}
          </p>
        </div>

        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '32px 16px'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '32px',
            marginBottom: '48px'
          }}>
            <div>
              <h2 style={{ marginTop: 0 }}>Training Center</h2>
              <div style={{ 
                background: '#f5f5f5',
                padding: '24px',
                borderRadius: '8px'
              }}>
                <p><strong>Address:</strong><br />{cityData.address}</p>
                <p><strong>Email:</strong><br />{cityData.email}</p>
              </div>
            </div>
            <div>
              <h2 style={{ marginTop: 0 }}>Why Choose Us</h2>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                {cityData.highlights.map((highlight, index) => (
                  <li key={index} style={{
                    background: '#f5f5f5',
                    padding: '16px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ color: '#1976d2' }}>✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Available Courses in {cityData.name}</h2>
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
      </div>
    </>
  );
};

export default Training; 