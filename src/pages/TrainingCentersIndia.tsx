import React from 'react';
import { Link } from 'react-router-dom';
import { courses, AVAILABLE_CITIES } from '../data';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BacklinksSEO from '../components/BacklinksSEO';
import StructuredDataSEO from '../components/StructuredDataSEO';

const TrainingCentersIndia: React.FC = () => {
  // Group courses by city
  const coursesByCity = AVAILABLE_CITIES.map(city => {
    const cityCourses = courses.filter(course => 
      course.availableCities?.includes(city.id)
    );
    
    return {
      ...city,
      courses: cityCourses
    };
  });

  const totalCourses = courses.length;
  const totalCities = AVAILABLE_CITIES.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Training Centers Across India | SBRIT Solution - IT Training Institutes"
        description="Explore SBRIT Solution training centers across India. Find IT training courses in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon. Learn programming, web development, data science, and more with expert trainers."
        keywords="training centers India, IT training centers, programming training centers, web development training centers, Java training centers, Python training centers, React training centers, Angular training centers, Node.js training centers, data science training centers, cyber security training centers, AWS training centers, DevOps training centers, software testing training centers, placement assistance, job oriented courses, corporate training, weekend classes, online training, classroom training, hands on training, project based training, industrial training, certification courses, professional training, skill development, career training, IT institute, best IT training, top IT institute, IT courses with placement, job guarantee courses, industry training, practical training, expert training, quality training"
        url="https://sbritsolution.in/training-centers"
        type="website"
      />
      <StructuredDataSEO type="organization" />
      
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training Centers Across India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover our comprehensive IT training centers spread across major cities in India. 
              Each center offers state-of-the-art facilities, expert trainers, and industry-relevant curriculum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{totalCities}</div>
                <div className="text-gray-600">Training Centers</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{totalCourses}</div>
                <div className="text-gray-600">IT Courses</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Placement Support</div>
              </div>
            </div>
          </div>

          {/* Training Centers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {coursesByCity.map((cityData) => (
              <div key={cityData.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* City Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{cityData.name}</h2>
                      <p className="text-blue-100">{cityData.state}</p>
                      <p className="text-blue-100 text-sm mt-1">{cityData.address}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{cityData.courses.length}</div>
                      <div className="text-blue-100 text-sm">Courses</div>
                    </div>
                  </div>
                </div>

                {/* Courses List */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {cityData.courses.slice(0, 8).map((course) => (
                      <Link
                        key={course.id}
                        to={`/course/${course.id}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-8 h-8 object-contain"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">
                            {course.title}
                          </h3>
                          <p className="text-gray-500 text-xs">₹{course.price.toLocaleString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* View All Courses Button */}
                  {cityData.courses.length > 8 && (
                    <div className="text-center">
                      <Link
                        to={`/courses/${cityData.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        View All {cityData.courses.length} Courses
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}

                  {/* Course Categories */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(cityData.courses.map(course => {
                        if (course.title.includes('Java')) return 'Java';
                        if (course.title.includes('Python')) return 'Python';
                        if (course.title.includes('React') || course.title.includes('Angular')) return 'Frontend';
                        if (course.title.includes('Data') || course.title.includes('AI')) return 'Data Science';
                        if (course.title.includes('AWS') || course.title.includes('Azure')) return 'Cloud';
                        if (course.title.includes('Security')) return 'Cyber Security';
                        if (course.title.includes('Testing')) return 'Testing';
                        if (course.title.includes('.NET')) return '.NET';
                        return 'Programming';
                      }))).slice(0, 6).map((category, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our Training Centers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Trainers</h3>
                <p className="text-gray-600 text-sm">Industry professionals with 10+ years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600 text-sm">Real-world projects and practical assignments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-600 text-sm">100% placement assistance and job guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Facilities</h3>
                <p className="text-gray-600 text-sm">State-of-the-art labs and infrastructure</p>
              </div>
            </div>
          </div>

          {/* Course Categories Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Course Categories Available</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">☕</div>
                <div className="font-semibold">Java</div>
                <div className="text-blue-100 text-sm">Core & Full Stack</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="font-semibold">Python</div>
                <div className="text-blue-100 text-sm">Programming & DS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold">React</div>
                <div className="text-blue-100 text-sm">Frontend & Full Stack</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🅰️</div>
                <div className="font-semibold">Angular</div>
                <div className="text-blue-100 text-sm">Frontend Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold">Data Science</div>
                <div className="text-blue-100 text-sm">AI & Analytics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">☁️</div>
                <div className="font-semibold">Cloud</div>
                <div className="text-blue-100 text-sm">AWS & Azure</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your IT Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose your preferred training center and begin your journey to success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse All Courses
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
                     </div>
         </div>
       </div>
       
       {/* SEO Backlinks Section */}
       <BacklinksSEO />
       
       <Footer />
     </div>
   );
 };

export default TrainingCentersIndia;
