import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  duration?: string;
}

interface OptimizedCourseCardProps {
  course: Course;
  onEnroll?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const OptimizedCourseCard: React.FC<OptimizedCourseCardProps> = ({
  course,
  onEnroll,
  onViewDetails
}) => {
  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll(course.id);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(course.id);
    }
  };

  return (
    <div className="course-card optimized-card">
      <div className="course-image-container">
        <img
          src={course.image}
          alt={`${course.title} logo`}
          className="course-logo"
          loading="lazy"
          width="120"
          height="120"
          style={{
            maxWidth: '120px',
            maxHeight: '120px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        
        {course.price && (
          <div className="course-price">
            <span className="price-label">Price:</span>
            <span className="price-value">{course.price}</span>
          </div>
        )}
        
        {course.duration && (
          <div className="course-duration">
            <span className="duration-label">Duration:</span>
            <span className="duration-value">{course.duration}</span>
          </div>
        )}
        
        <div className="course-actions">
          <button
            className="enroll-btn"
            onClick={handleEnroll}
            data-track="enrollment"
            data-course={course.title}
          >
            Enroll Now
          </button>
          <button
            className="details-btn"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizedCourseCard; 