import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { courses } from '../data';

const INDIAN_CITIES = [
  'hyderabad',
  'bangalore',
  'mumbai',
  'delhi',
  'chennai',
  'pune',
  'kolkata',
  'noida',
  'gurgaon'
] as const;

type IndianCity = typeof INDIAN_CITIES[number];

const CITY_LOCATIONS = {
  hyderabad: {
    address: 'Hitech City, Madhapur',
    state: 'Telangana'
  },
  bangalore: {
    address: 'Koramangala',
    state: 'Karnataka'
  },
  mumbai: {
    address: 'Andheri East',
    state: 'Maharashtra'
  },
  delhi: {
    address: 'Noida Sector 62',
    state: 'Delhi NCR'
  },
  chennai: {
    address: 'T Nagar',
    state: 'Tamil Nadu'
  },
  pune: {
    address: 'Hinjewadi Phase 2',
    state: 'Maharashtra'
  },
  kolkata: {
    address: 'Salt Lake City',
    state: 'West Bengal'
  },
  noida: {
    address: 'Sector 62',
    state: 'Uttar Pradesh'
  },
  gurgaon: {
    address: 'Cyber City',
    state: 'Haryana'
  }
} as const;

const CourseCityTraining: React.FC = () => {
  const { courseId, city } = useParams<{ courseId: string; city: string }>();
  const navigate = useNavigate();
  
  // Validate city and courseId
  if (!city || !courseId || !INDIAN_CITIES.includes(city.toLowerCase() as IndianCity)) {
    return <div>Invalid city or course</div>;
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return <div>Course not found</div>;
  }

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

  const handleEnroll = () => {
    navigate('/enroll');
  };

  // Format city name for display
  const formatCityName = (cityName: string) => {
    return cityName.charAt(0).toUpperCase() + cityName.slice(1);
  };

  // Format course name for display
  const formatCourseName = (courseName: string) => {
    return courseName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Get SEO-optimized keywords based on course type
  const getSEOKeywords = (course: string, city: string) => {
    const baseKeywords = [
      `${course.toLowerCase()} training in ${city.toLowerCase()}`,
      `${course.toLowerCase()} course ${city.toLowerCase()}`,
      `${course.toLowerCase()} classes ${city.toLowerCase()}`,
      `${course.toLowerCase()} institute ${city.toLowerCase()}`,
      `${course.toLowerCase()} certification ${city.toLowerCase()}`,
      `best ${course.toLowerCase()} training ${city.toLowerCase()}`,
      `${course.toLowerCase()} programming course ${city.toLowerCase()}`,
      `${course.toLowerCase()} developer training ${city.toLowerCase()}`,
      `${course.toLowerCase()} bootcamp ${city.toLowerCase()}`,
      `${course.toLowerCase()} tutorial ${city.toLowerCase()}`,
      `learn ${course.toLowerCase()} ${city.toLowerCase()}`,
      `${course.toLowerCase()} training with placement ${city.toLowerCase()}`,
      `${course.toLowerCase()} job oriented course ${city.toLowerCase()}`,
      `${course.toLowerCase()} corporate training ${city.toLowerCase()}`,
      `${course.toLowerCase()} weekend classes ${city.toLowerCase()}`,
      `${course.toLowerCase()} online training`,
      `${course.toLowerCase()} classroom training ${city.toLowerCase()}`,
      `${course.toLowerCase()} hands on training ${city.toLowerCase()}`,
      `${course.toLowerCase()} project based training ${city.toLowerCase()}`,
      `${course.toLowerCase()} industrial training ${city.toLowerCase()}`
    ];
    return baseKeywords.join(', ');
  };

  // Get enhanced meta description
  const getEnhancedDescription = (course: string, city: string) => {
    return `🚀 Master ${course} with SBRIT Solution's comprehensive training in ${city}. ✅ Industry experts ✅ Hands-on projects ✅ 100% placement assistance ✅ Live projects ✅ Certification. Join ${course} course starting ${getNextWeekDate()}. Enroll now for the best ${course} training institute in ${city}!`;
  };

  const displayCity = formatCityName(city);
  const displayCourse = formatCourseName(courseId);
  const cityInfo = CITY_LOCATIONS[city.toLowerCase() as keyof typeof CITY_LOCATIONS];

  // Generate structured data for better SEO
  const structuredData = (() => {
    const courseData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `${displayCourse} Training in ${displayCity}`,
      "description": `Comprehensive ${displayCourse} training course in ${displayCity}. Learn ${displayCourse} from industry experts with hands-on projects, placement assistance, and certification.`,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SBRIT Solution",
        "url": "https://sbritsolution.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": cityInfo.address,
          "addressLocality": displayCity,
          "addressRegion": cityInfo.state,
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-1234567890",
          "contactType": "customer service",
          "email": "bemes0112@gmail.com",
          "areaServed": displayCity
        }
      },
      "courseCode": courseId.toUpperCase(),
      "educationalLevel": "Beginner to Advanced",
      "teaches": course.topics || [],
      "timeRequired": "P2M",
      "startDate": getNextWeekDate(),
      "offers": {
        "@type": "Offer",
        "price": course.price?.toString() || "16999",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString().split('T')[0]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "classroom",
        "location": {
          "@type": "Place",
          "name": `SBRIT Solution ${displayCity}`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": cityInfo.address,
            "addressLocality": displayCity,
            "addressRegion": cityInfo.state,
            "addressCountry": "IN"
          }
        },
        "startDate": getNextWeekDate(),
        "endDate": new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0],
        "instructor": {
          "@type": "Person",
          "name": "Expert Instructor",
          "jobTitle": `${displayCourse} Expert`
        }
      }
    };

    // Add LocalBusiness schema for location-specific pages
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `SBRIT Solution - ${displayCourse} Training in ${displayCity}`,
      "image": "https://sbritsolution.in/logo.png",
      "description": `Best ${displayCourse} Training Institute in ${displayCity}. Learn ${displayCourse} from industry experts with hands-on projects, 100% placement assistance, and certification.`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityInfo.address,
        "addressLocality": displayCity,
        "addressRegion": cityInfo.state,
        "postalCode": city.toLowerCase() === 'hyderabad' ? '500081' : '560001',
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.toLowerCase() === 'hyderabad' ? "17.4486" : "12.9716",
        "longitude": city.toLowerCase() === 'hyderabad' ? "78.3908" : "77.5946"
      },
      "url": `https://sbritsolution.in/training/${courseId}/${city}`,
      "telephone": "+91-1234567890",
      "priceRange": `₹${course.price || 16999}`,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    };

    return { courseData, localBusinessData };
  })();

  return (
    <>
      <SEO 
        title={`${displayCourse} Training in ${displayCity} | Best ${displayCourse} Course | SBRIT Solution`}
        description={getEnhancedDescription(displayCourse, displayCity)}
        keywords={getSEOKeywords(displayCourse, displayCity)}
        url={`https://sbritsolution.in/training/${courseId}/${city}`}
        type="course"
      />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.courseData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.localBusinessData)
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">{displayCourse} Training in {displayCity}</h1>
            <p className="text-xl mb-6">Master {displayCourse} Development with Industry Experts</p>
            <button
              onClick={handleEnroll}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Enroll Now
            </button>
          </div>

          {/* Training Center Info */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-4">Training Center in {displayCity}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  {cityInfo.address}<br />
                  {displayCity}, {cityInfo.state}
                </p>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">Email: bemes0112@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Training Highlights</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Expert {displayCourse} Trainers</li>
                  <li>Hands-on Projects</li>
                  <li>Placement Assistance</li>
                  <li>Flexible Timings</li>
                  <li>Weekend Batches Available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Our {displayCourse} training in {displayCity} is designed to make you a professional {displayCourse} developer. 
                Learn from industry experts with years of experience in {displayCourse} development.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Course Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>40+ Hours of Training</li>
                    <li>10+ Real-time Projects</li>
                    <li>Interview Preparation</li>
                    <li>Resume Building</li>
                    <li>Mock Interviews</li>
                    <li>Placement Support</li>
                    <li>Course Completion Certificate</li>
                    <li>Lifetime Access to Materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Next Batch Info */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Next Batch Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Batch Schedule</h3>
                <p className="text-gray-600">
                  Starting Date: {getNextWeekDate()}<br />
                  Duration: 2 Months<br />
                  Timings: 10:00 AM - 1:00 PM (Weekdays)<br />
                  Weekend Batches Available
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enrollment</h3>
                <p className="text-gray-600 mb-4">
                  Limited seats available for the next batch. Book your seat now to get early bird discount.
                </p>
                <button
                  onClick={handleEnroll}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Your Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCityTraining; 