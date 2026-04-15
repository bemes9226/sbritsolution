import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AVAILABLE_CITIES } from '../data';
import { Helmet } from 'react-helmet';

const INDIAN_CITIES = AVAILABLE_CITIES;

const COURSES = [
  { id: 'core-java', name: 'Core Java', icon: '☕' },
  { id: 'full-stack-java', name: 'Full Stack Java', icon: '☕' },
  { id: 'c-language', name: 'C Language', icon: '🔧' },
  { id: 'html-css-javascript', name: 'HTML CSS JavaScript', icon: '🌐' },
  { id: 'data-analytics-business-analytics', name: 'Data Analytics', icon: '📊' },
  { id: 'full-stack-data-science-ai', name: 'Data Science & AI', icon: '🤖' },
  { id: 'python-programming', name: 'Python Programming', icon: '🐍' },
  { id: 'full-stack-python', name: 'Full Stack Python', icon: '🐍' },
  { id: 'campus-recruitment-training', name: 'Campus Recruitment', icon: '🎓' },
  { id: 'cyber-security-ethical-hacking', name: 'Cyber Security', icon: '🔒' },
  { id: 'terraform-associate-certification', name: 'Terraform', icon: '🏗️' },
  { id: 'full-stack-software-testing', name: 'Software Testing', icon: '🧪' },
  { id: 'amazon-web-services-aws', name: 'AWS', icon: '☁️' },
  { id: 'asp-net-mvc', name: 'ASP.NET MVC', icon: '🪟' },
  { id: 'devops-with-aws', name: 'DevOps with AWS', icon: '⚙️' },
  { id: 'csharp-dotnet', name: 'C#.NET', icon: '🪟' },
  { id: 'full-stack-dotnet-core', name: 'Full Stack .NET', icon: '🪟' },
  { id: 'spring-boot-microservices', name: 'Spring Boot', icon: '🍃' },
  { id: 'full-stack-dotnet-placement', name: '.NET Placement', icon: '💼' },
  { id: 'full-stack-java-placement', name: 'Java Placement', icon: '💼' },
  { id: 'power-bi', name: 'Power BI', icon: '📈' },
  { id: 'ms-azure-azure-devops', name: 'Azure DevOps', icon: '☁️' },
  { id: 'ui-full-stack-react', name: 'UI Full Stack React', icon: '⚛️' },
  { id: 'angular', name: 'Angular', icon: '🅰️' },
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'html', name: 'HTML', icon: '🌐' },
  { id: 'css', name: 'CSS', icon: '🎨' },
  { id: 'bootstrap', name: 'Bootstrap', icon: '🎨' },
  { id: 'jquery', name: 'jQuery', icon: '📜' },
  { id: 'javascript', name: 'JavaScript', icon: '📜' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '🎨' },
  { id: 'typescript', name: 'TypeScript', icon: '📘' },
  { id: 'nodejs', name: 'Node.js', icon: '🟢' },
  { id: 'mean', name: 'MEAN Stack', icon: '📚' },
  { id: 'mern', name: 'MERN Stack', icon: '📚' }
];

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <><Helmet>
      <title>SBR IT Solution | Best Java Training Institute |Java Online Training | Angular Training | React Training | Python Training | Best Java Training Institute in Hyderabad | Best Java Training Institute in Bangalore | Best Java Training Institute in Mumbai | Best Java Training Institute in Delhi | Best Java Training Institute in Chennai | Best Java Training Institute in Pune | Best Java Training Institute in Noida | Best Java Training Institute in Gurgaon | Best Java Training Institute in Hyderabad | Best Java Training Institute in Bangalore | Best Java Training Institute in Mumbai | Best Java Training Institute in Delhi | Best Java Training Institute in Chennai | Best Java Training Institute in Pune | Best Java Training Institute in Noida</title>
      <meta name="description" content={"SBR IT solution is best Placement center for training in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, Gurgaon"} />
      <meta name="keywords" content={`Courses / Java Training in Hyderabad, Java Training in Bangalore, Java Training in Mumbai, Java Training in Delhi, Java Training in Chennai, Java Training in Pune, Java Training in Noida, Java Training in Gurgaon`} />
    </Helmet>
    <nav className="text-white fixed w-full top-0 z-50" style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #2563eb 100%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold">SBRIT Solution</Link>
            <button
              className="md:hidden p-2 ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link>
              <Link to="/training-centers" className="hover:text-blue-200 transition-colors">Training Centers</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
              {/* Dropdown for desktop */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="hover:text-blue-200 transition-colors flex items-center gap-1">
                  <span>Training Locations</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 bg-white text-gray-800 shadow-xl rounded-lg py-3 w-[900px] max-h-[600px] overflow-y-auto z-50"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-6">
                        {INDIAN_CITIES.map(city => (
                          <div key={city.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-blue-600">{city.name}</h3>
                                <p className="text-sm text-gray-500">{city.state}</p>
                              </div>
                              <Link
                                to={`/courses/${city.id}`}
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                View All {COURSES.length} Courses
                              </Link>
                            </div>
                            <div className="space-y-1 max-h-48 overflow-y-auto">
                              {COURSES.slice(0, 15).map(course => (
                                <Link
                                  key={course.id}
                                  to={`/course/${course.id}`}
                                  className="flex items-center space-x-2 text-xs hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition-colors"
                                >
                                  <span>{course.icon}</span>
                                  <span className="truncate">{course.name}</span>
                                </Link>
                              ))}
                              {COURSES.length > 15 && (
                                <Link
                                  to={`/courses/${city.id}`}
                                  className="flex items-center space-x-2 text-xs text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors font-medium"
                                >
                                  <span>📚</span>
                                  <span>View All {COURSES.length} Courses</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 rounded-b-lg border-t border-gray-100">
                      <Link
                        to="/training-centers"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors"
                      >
                        <span>View All Training Centers & Courses</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {isAuthenticated ? (
                <>
                  <Link to="/enroll" className="hover:text-blue-200 transition-colors">Enroll</Link>
                  <button onClick={handleLogout} className="hover:text-blue-200 transition-colors">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-blue-200 transition-colors">Login</Link>
                  <Link to="/register" className="hover:text-blue-200 transition-colors">Register</Link>
                </>
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/training-centers"
                  className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Training Centers
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {/* Mobile Dropdown */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-blue-600 transition-colors font-semibold"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    aria-expanded={mobileDropdownOpen}
                    aria-controls="mobile-training-dropdown"
                  >
                    <span>Training Locations</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div
                      id="mobile-training-dropdown"
                      className="bg-blue-800 rounded-md mt-1 px-2 py-2 max-h-80 overflow-y-auto"
                    >
                      {INDIAN_CITIES.map(city => (
                        <div key={city.id} className="mb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-blue-200">{city.name}</div>
                              <div className="text-sm text-blue-100">{city.state}</div>
                            </div>
                            <Link
                              to={`/courses/${city.id}`}
                              className="text-sm text-blue-200 hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              View All {COURSES.length} Courses
                            </Link>
                          </div>
                          <div className="space-y-1 mt-2">
                            {COURSES.slice(0, 8).map(course => (
                              <Link
                                key={course.id}
                                to={`/course/${course.id}`}
                                className="flex items-center space-x-2 text-sm hover:text-blue-200 pl-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{course.icon}</span>
                                <span className="truncate">{course.name}</span>
                              </Link>
                            ))}
                            {COURSES.length > 8 && (
                              <Link
                                to={`/courses/${city.id}`}
                                className="flex items-center space-x-2 text-sm text-blue-200 hover:text-white pl-2 transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>📚</span>
                                <span>View All {COURSES.length} Courses</span>
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 pt-3 border-t border-blue-600">
                        <Link
                          to="/training-centers"
                          className="flex items-center text-blue-200 hover:text-white transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>View All Training Centers & Courses</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/enroll"
                      className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Enroll
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav></>
  );
};

export default Navbar; 