import React from 'react';
import SEO from '../components/SEO';

const HTMLCSSJavaScript: React.FC = () => {
  return (
    <>
      <SEO 
        title="HTML CSS JavaScript Course | Complete Frontend Web Development Training - SBRIT Solution"
        description="Master frontend web development with HTML5, CSS3, and JavaScript. Learn responsive design, DOM manipulation, ES6+, and build interactive websites from scratch. Perfect for beginners."
        keywords="html css javascript course, frontend web development, web development training, html5 css3 javascript, responsive web design, javascript programming, frontend developer course"
        url="https://sbritsolution.in/courses/html-css-js"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                HTML CSS JavaScript Course
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Frontend Web Development | Responsive Design | Interactive Websites
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Building - ₹9,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Learn Frontend */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn HTML, CSS & JavaScript?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Foundation of Web</h3>
                <p className="text-gray-600">Every website uses HTML, CSS, and JavaScript - the core technologies of the web.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">High Demand Skills</h3>
                <p className="text-gray-600">Frontend developers are in high demand with excellent career growth opportunities.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick to Learn</h3>
                <p className="text-gray-600">Start building websites immediately and see your progress in real-time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Frontend Development Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 text-white p-2 rounded">
                      <span className="font-bold">HTML5</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">Structure & Content</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• HTML5 Semantic Elements</li>
                    <li>• Document Structure & Tags</li>
                    <li>• Forms & Input Elements</li>
                    <li>• Tables & Lists</li>
                    <li>• Media Elements (Audio/Video)</li>
                    <li>• Canvas & SVG Graphics</li>
                    <li>• Accessibility Best Practices</li>
                    <li>• SEO-Friendly HTML</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white p-2 rounded">
                      <span className="font-bold">CSS3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Styling & Layout</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CSS Selectors & Properties</li>
                    <li>• Box Model & Positioning</li>
                    <li>• Flexbox & CSS Grid</li>
                    <li>• Responsive Design & Media Queries</li>
                    <li>• CSS Animations & Transitions</li>
                    <li>• CSS Preprocessors (Sass)</li>
                    <li>• Bootstrap Framework</li>
                    <li>• Modern CSS Techniques</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white p-2 rounded">
                      <span className="font-bold">JS</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-600">Interactivity & Logic</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• JavaScript Fundamentals</li>
                    <li>• DOM Manipulation</li>
                    <li>• Event Handling</li>
                    <li>• ES6+ Modern Features</li>
                    <li>• Async Programming (Promises/Async-Await)</li>
                    <li>• AJAX & Fetch API</li>
                    <li>• Local Storage & Session Storage</li>
                    <li>• JavaScript Libraries & Frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project-Based Learning */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Build Real-World Projects</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold mb-3 text-orange-700">Beginner Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🏠 Personal Portfolio Website</li>
                  <li>📄 Business Landing Page</li>
                  <li>📝 Contact Form with Validation</li>
                  <li>🖼️ Image Gallery with Lightbox</li>
                  <li>📊 Interactive Resume</li>
                  <li>🎯 Simple Calculator</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Advanced Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🛒 E-commerce Product Catalog</li>
                  <li>🌤️ Weather App with API</li>
                  <li>📋 Todo List Application</li>
                  <li>🎮 Interactive Games</li>
                  <li>📈 Data Visualization Dashboard</li>
                  <li>💬 Real-time Chat Interface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2-Month Learning Journey</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Week 1-2: HTML5</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• HTML basics & structure</li>
                    <li>• Semantic elements</li>
                    <li>• Forms & media</li>
                    <li>• First website project</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Week 3-4: CSS3</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• CSS fundamentals</li>
                    <li>• Flexbox & Grid</li>
                    <li>• Responsive design</li>
                    <li>• Styled portfolio</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-700">Week 5-6: JavaScript</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• JS fundamentals</li>
                    <li>• DOM manipulation</li>
                    <li>• Event handling</li>
                    <li>• Interactive features</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Week 7-8: Projects</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advanced projects</li>
                    <li>• API integration</li>
                    <li>• Final portfolio</li>
                    <li>• Career preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies You'll Master</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🌐</div>
                  <h4 className="font-semibold">HTML5</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold">CSS3</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold">JavaScript</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-semibold">Bootstrap</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🔧</div>
                  <h4 className="font-semibold">VS Code</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🌍</div>
                  <h4 className="font-semibold">Git/GitHub</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold">Netlify</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold">Chrome DevTools</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frontend Developer Career Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Frontend Developer</li>
                    <li>• Web Developer</li>
                    <li>• UI Developer</li>
                    <li>• JavaScript Developer</li>
                    <li>• Web Designer</li>
                    <li>• Freelance Web Developer</li>
                    <li>• Full Stack Developer (with backend)</li>
                    <li>• React/Angular Developer (next step)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4">Salary Expectations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹2.5-5 LPA</li>
                    <li>• Junior (1-2 yrs): ₹5-8 LPA</li>
                    <li>• Mid Level (3-5 yrs): ₹8-15 LPA</li>
                    <li>• Senior (5+ yrs): ₹15-25 LPA</li>
                    <li>• Freelancing: ₹500-2000/day</li>
                    <li>• International: $25-60/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Course Details & Investment</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">2 Months (Intensive Program)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online + Hands-on Projects</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Prerequisites</h3>
                  <p className="text-gray-600">Basic computer skills (No coding experience needed)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹9,999 (EMI from ₹850/month)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Frontend Development Certificate + Portfolio</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-gray-600">Lifetime access & career guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Amazing Websites?</h2>
            <p className="text-xl mb-8">Start your frontend development journey and create stunning web experiences!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Building - ₹9,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                See Live Projects
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch: 22nd August 2024 | Build 6+ projects in 2 months!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Advance Your Frontend Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/react" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">React.js</a>
              <a href="/courses/angular" className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-red-700 font-medium transition-colors">Angular</a>
              <a href="/courses/bootstrap" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">Bootstrap</a>
              <a href="/courses/react-fullstack" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Full Stack React</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HTMLCSSJavaScript;
