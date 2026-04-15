import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { courses, AVAILABLE_CITIES } from '../data';
import SEO from './SEO';
import { generateCitySEOKeywords, generateCitySEODescription } from '../utils/seoUtils';

interface CityWiseCoursesProps {
  selectedCity?: string;
}

const CityWiseCourses: React.FC<CityWiseCoursesProps> = ({ selectedCity }) => {
  const [filterCity, setFilterCity] = useState(selectedCity || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter courses based on selected city and search term
  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by city
    if (filterCity !== 'all') {
      filtered = filtered.filter(course => 
        course.availableCities?.includes(filterCity)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [filterCity, searchTerm]);

  const selectedCityData = AVAILABLE_CITIES.find(city => city.id === filterCity);

  const getSEOKeywords = (cityName: string) => {
    return generateCitySEOKeywords(cityName);
  };

  const getSEODescription = (cityName: string) => {
    return generateCitySEODescription(cityName);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SEO
        title={filterCity !== 'all' ? `IT Training Courses in ${selectedCityData?.name} | SBRIT Solution` : 'IT Training Courses in All Cities | SBRIT Solution'}
        description={filterCity !== 'all' ? getSEODescription(selectedCityData?.name || '') : 'Comprehensive IT training courses across all major cities in India. Learn programming, web development, data science, and more with expert trainers and placement assistance.'}
        keywords={filterCity !== 'all' ? getSEOKeywords(selectedCityData?.name || '') : 'IT training, programming courses, web development training, Java training, Python training, React training, Angular training, Node.js training, data science training, cyber security training, AWS training, DevOps training, software testing training, placement assistance, job oriented courses, corporate training, weekend classes, online training, classroom training, hands on training, project based training, industrial training, certification courses, professional training, skill development, career training, IT institute, best IT training, top IT institute, IT courses with placement, job guarantee courses, industry training, practical training, expert training, quality training'}
        url={filterCity !== 'all' ? `https://sbritsolution.in/courses/${filterCity}` : 'https://sbritsolution.in/courses'}
        type="website"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {filterCity !== 'all' ? `IT Training Courses in ${selectedCityData?.name}` : 'IT Training Courses'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {filterCity !== 'all' 
              ? `Comprehensive IT training programs in ${selectedCityData?.name}, ${selectedCityData?.state}. Learn from industry experts with hands-on projects and placement assistance.`
              : 'Explore our comprehensive IT training programs available across major cities in India. Learn from industry experts with hands-on projects and placement assistance.'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* City Filter */}
            <div>
              <label htmlFor="cityFilter" className="block text-sm font-medium text-gray-700 mb-2">
                Select City
              </label>
              <select
                id="cityFilter"
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Cities</option>
                {AVAILABLE_CITIES.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name}, {city.state}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Filter */}
            <div>
              <label htmlFor="searchFilter" className="block text-sm font-medium text-gray-700 mb-2">
                Search Courses
              </label>
              <input
                type="text"
                id="searchFilter"
                placeholder="Search by course name, topic, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* City Information */}
        {filterCity !== 'all' && selectedCityData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {selectedCityData.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCityData.name}</h2>
                <p className="text-gray-600">{selectedCityData.state}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Training Center Address</h3>
                <p className="text-gray-600">{selectedCityData.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Available Courses</h3>
                <p className="text-gray-600">{filteredCourses.length} courses available</p>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {filterCity !== 'all' && ` in ${selectedCityData?.name}`}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-12 h-12 object-contain mr-3"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.duration} • {course.mode}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.content}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">₹{course.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">Batch Size: {course.batchSize}</span>
                    </div>
                    <p className="text-sm text-gray-500">Next batch: {course.date}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 4).map((topic, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{course.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 italic">"{course.testimonial}"</p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Link
                      to={`/course/${course.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Course Details
                    </Link>
                    {filterCity !== 'all' && (
                      <Link
                        to={`/training/${course.id}/${filterCity}`}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition-colors duration-200"
                      >
                        Enroll in {selectedCityData?.name}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">
              {searchTerm 
                ? `No courses match your search for "${searchTerm}"`
                : `No courses available in ${selectedCityData?.name}`
              }
            </p>
            <button
              onClick={() => {
                setFilterCity('all');
                setSearchTerm('');
              }}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              View All Courses
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mt-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-6">
            Join thousands of successful professionals who have transformed their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 py-3 px-6 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white py-3 px-6 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWiseCourses;
