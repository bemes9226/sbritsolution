import React from 'react';
import { Link } from 'react-router-dom';
import { courses, AVAILABLE_CITIES } from '../data';

const BacklinksSEO: React.FC = () => {
  // Generate city-specific backlinks
  const generateCityBacklinks = () => {
    return AVAILABLE_CITIES.map(city => ({
      city: city.name,
      links: [
        `${city.name} IT Training Institute`,
        `Best ${city.name} Programming Courses`,
        `${city.name} Web Development Training`,
        `${city.name} Java Training Center`,
        `${city.name} Python Training Institute`,
        `${city.name} React Training Center`,
        `${city.name} Angular Training Institute`,
        `${city.name} Data Science Training`,
        `${city.name} AWS Training Center`,
        `${city.name} DevOps Training Institute`,
        `${city.name} Cyber Security Training`,
        `${city.name} Software Testing Training`,
        `${city.name} .NET Training Center`,
        `${city.name} Full Stack Training`,
        `${city.name} Placement Assistance`,
        `${city.name} Job Oriented Courses`,
        `${city.name} Corporate Training`,
        `${city.name} Weekend Classes`,
        `${city.name} Online Training`,
        `${city.name} Classroom Training`
      ]
    }));
  };

  // Generate course-specific backlinks
  const generateCourseBacklinks = () => {
    return courses.map(course => ({
      course: course.title,
      links: [
        `${course.title} Training`,
        `${course.title} Course`,
        `${course.title} Classes`,
        `${course.title} Institute`,
        `${course.title} Certification`,
        `Best ${course.title} Training`,
        `${course.title} Programming Course`,
        `${course.title} Developer Training`,
        `${course.title} Bootcamp`,
        `${course.title} Tutorial`,
        `Learn ${course.title}`,
        `${course.title} Training with Placement`,
        `${course.title} Job Oriented Course`,
        `${course.title} Corporate Training`,
        `${course.title} Weekend Classes`,
        `${course.title} Online Training`,
        `${course.title} Classroom Training`,
        `${course.title} Hands on Training`,
        `${course.title} Project Based Training`,
        `${course.title} Industrial Training`
      ]
    }));
  };

  const cityBacklinks = generateCityBacklinks();
  const courseBacklinks = generateCourseBacklinks();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* SEO Backlinks Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Comprehensive IT Training Resources
          </h2>
          
          {/* City-wise Training Centers */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Training Centers Across Major Cities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityBacklinks.map((cityData, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-blue-600 mb-4 text-lg">
                    {cityData.city} Training Centers
                  </h4>
                  <div className="space-y-2">
                    {cityData.links.slice(0, 8).map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={`/courses/${cityData.city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link}
                      </Link>
                    ))}
                    <Link
                      to={`/courses/${cityData.city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All {cityData.city} Courses →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Popular Course Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseBacklinks.slice(0, 12).map((courseData, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-green-600 mb-4 text-lg">
                    {courseData.course} Training
                  </h4>
                  <div className="space-y-2">
                    {courseData.links.slice(0, 6).map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={`/course/${courseData.course.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        {link}
                      </Link>
                    ))}
                    <Link
                      to={`/course/${courseData.course.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="block text-sm text-green-600 hover:text-green-800 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Backlinks */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Technology Stack Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-purple-600 mb-4 text-lg">Java Technology</h4>
                <div className="space-y-2">
                  <Link to="/course/core-java" className="block text-sm text-gray-600 hover:text-purple-600">Core Java Training</Link>
                  <Link to="/course/full-stack-java" className="block text-sm text-gray-600 hover:text-purple-600">Full Stack Java Development</Link>
                  <Link to="/course/spring-boot-microservices" className="block text-sm text-gray-600 hover:text-purple-600">Spring Boot Training</Link>
                  <Link to="/course/full-stack-java-placement" className="block text-sm text-gray-600 hover:text-purple-600">Java Placement Program</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-blue-600 mb-4 text-lg">Python Technology</h4>
                <div className="space-y-2">
                  <Link to="/course/python-programming" className="block text-sm text-gray-600 hover:text-blue-600">Python Programming</Link>
                  <Link to="/course/full-stack-python" className="block text-sm text-gray-600 hover:text-blue-600">Full Stack Python</Link>
                  <Link to="/course/full-stack-data-science-ai" className="block text-sm text-gray-600 hover:text-blue-600">Data Science & AI</Link>
                  <Link to="/course/data-analytics-business-analytics" className="block text-sm text-gray-600 hover:text-blue-600">Data Analytics</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-cyan-600 mb-4 text-lg">Frontend Technology</h4>
                <div className="space-y-2">
                  <Link to="/course/react" className="block text-sm text-gray-600 hover:text-cyan-600">React Training</Link>
                  <Link to="/course/angular" className="block text-sm text-gray-600 hover:text-cyan-600">Angular Training</Link>
                  <Link to="/course/html-css-javascript" className="block text-sm text-gray-600 hover:text-cyan-600">HTML CSS JavaScript</Link>
                  <Link to="/course/ui-full-stack-react" className="block text-sm text-gray-600 hover:text-cyan-600">UI Full Stack React</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-orange-600 mb-4 text-lg">Cloud & DevOps</h4>
                <div className="space-y-2">
                  <Link to="/course/amazon-web-services-aws" className="block text-sm text-gray-600 hover:text-orange-600">AWS Training</Link>
                  <Link to="/course/ms-azure-azure-devops" className="block text-sm text-gray-600 hover:text-orange-600">Azure DevOps</Link>
                  <Link to="/course/devops-with-aws" className="block text-sm text-gray-600 hover:text-orange-600">DevOps with AWS</Link>
                  <Link to="/course/terraform-associate-certification" className="block text-sm text-gray-600 hover:text-orange-600">Terraform Training</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Industry-Specific Backlinks */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Industry-Specific Training Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-red-600 mb-4 text-lg">Cyber Security</h4>
                <div className="space-y-2">
                  <Link to="/course/cyber-security-ethical-hacking" className="block text-sm text-gray-600 hover:text-red-600">Ethical Hacking Training</Link>
                  <Link to="/course/cyber-security-ethical-hacking" className="block text-sm text-gray-600 hover:text-red-600">Cyber Security Certification</Link>
                  <Link to="/course/cyber-security-ethical-hacking" className="block text-sm text-gray-600 hover:text-red-600">Information Security Training</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-indigo-600 mb-4 text-lg">Software Testing</h4>
                <div className="space-y-2">
                  <Link to="/course/full-stack-software-testing" className="block text-sm text-gray-600 hover:text-indigo-600">Software Testing Training</Link>
                  <Link to="/course/full-stack-software-testing" className="block text-sm text-gray-600 hover:text-indigo-600">QA Testing Course</Link>
                  <Link to="/course/full-stack-software-testing" className="block text-sm text-gray-600 hover:text-indigo-600">Manual Testing Training</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-teal-600 mb-4 text-lg">Placement Programs</h4>
                <div className="space-y-2">
                  <Link to="/course/campus-recruitment-training" className="block text-sm text-gray-600 hover:text-teal-600">Campus Recruitment Training</Link>
                  <Link to="/course/full-stack-java-placement" className="block text-sm text-gray-600 hover:text-teal-600">Java Placement Program</Link>
                  <Link to="/course/full-stack-dotnet-placement" className="block text-sm text-gray-600 hover:text-teal-600">.NET Placement Program</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Training Mode Backlinks */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Training Modes & Schedules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-emerald-600 mb-4 text-lg">Classroom Training</h4>
                <div className="space-y-2">
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-emerald-600">In-Person Training</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-emerald-600">Hands-on Practice</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-emerald-600">Live Project Training</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-pink-600 mb-4 text-lg">Online Training</h4>
                <div className="space-y-2">
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-pink-600">Live Online Classes</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-pink-600">Virtual Training</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-pink-600">Remote Learning</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-yellow-600 mb-4 text-lg">Weekend Classes</h4>
                <div className="space-y-2">
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-yellow-600">Weekend Training</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-yellow-600">Flexible Schedule</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-yellow-600">Part-time Courses</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold text-violet-600 mb-4 text-lg">Corporate Training</h4>
                <div className="space-y-2">
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-violet-600">Corporate Programs</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-violet-600">Enterprise Training</Link>
                  <Link to="/courses" className="block text-sm text-gray-600 hover:text-violet-600">Company Training</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Additional Training Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Training Centers</h4>
              <div className="space-y-2">
                {AVAILABLE_CITIES.map((city, index) => (
                  <Link
                    key={index}
                    to={`/courses/${city.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {city.name} Training Center
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Popular Courses</h4>
              <div className="space-y-2">
                {courses.slice(0, 10).map((course, index) => (
                  <Link
                    key={index}
                    to={`/course/${course.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Training Services</h4>
              <div className="space-y-2">
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">IT Training Programs</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Programming Courses</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Web Development Training</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Data Science Training</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Cloud Computing Training</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Cyber Security Training</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Software Testing Training</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Placement Assistance</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Job Oriented Courses</Link>
                <Link to="/courses" className="block text-sm text-gray-600 hover:text-blue-600">Certification Training</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinksSEO;
