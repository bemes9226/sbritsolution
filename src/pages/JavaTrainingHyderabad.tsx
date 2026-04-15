import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { courses } from '../data';

const JavaTrainingHyderabad: React.FC = () => {
  const navigate = useNavigate();
  const javaCourse = courses.find(course => course.id === 'java');

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

  return (
    <>
      <SEO 
        title="#1 Java Training Institute in Hyderabad | 100% Job Placement | SBRIT Solution"
        description={`Best Java training institute in Hyderabad with 100% placement guarantee. Learn Core Java, Advanced Java, Spring Boot from industry experts. 2000+ students placed in top companies. Next batch starting ${getNextWeekDate()}. Fee: ₹15,000 only.`}
        keywords="java training institute hyderabad, best java course hyderabad, java training with placement hyderabad, java programming classes hyderabad, core java training hyderabad, advanced java course hyderabad, java developer course hyderabad, java certification training hyderabad, java training center hitech city, java classes ameerpet hyderabad, java training madhapur, spring boot training hyderabad"
        url="https://sbritsolution.in/training/java/hyderabad"
        type="course"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Java Training in Hyderabad</h1>
            <p className="text-xl mb-6">Master Java Development with Industry Experts</p>
            <button
              onClick={handleEnroll}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Enroll Now
            </button>
          </div>

          {/* Training Center Info */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-4">Training Center in Hyderabad</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  Hitech City, Madhapur<br />
                  Hyderabad, Telangana 500081
                </p>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">Email: bemes0112@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Training Highlights</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Expert Java Trainers</li>
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
                Our Java training in Hyderabad is designed to make you a professional Java developer. 
                Learn from industry experts with years of experience in Java development.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Core Java Programming</li>
                    <li>Object-Oriented Programming</li>
                    <li>Java Collections Framework</li>
                    <li>Exception Handling</li>
                    <li>Multithreading</li>
                    <li>JDBC and Database Connectivity</li>
                    <li>Spring Framework</li>
                    <li>Hibernate ORM</li>
                    <li>RESTful Web Services</li>
                    <li>Unit Testing with JUnit</li>
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

export default JavaTrainingHyderabad; 