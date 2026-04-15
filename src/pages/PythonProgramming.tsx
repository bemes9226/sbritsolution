import React from 'react';
import SEO from '../components/SEO';

const PythonProgramming: React.FC = () => {
  return (
    <>
      <SEO 
        title="Python Programming Course | Learn Python from Scratch with Projects - SBRIT Solution"
        description="Master Python programming from basics to advanced concepts. Complete Python course with data structures, web development, automation, and real-world projects. Perfect for beginners and professionals."
        keywords="python programming course, learn python, python training, python for beginners, python certification, python web development, python automation, python data science"
        url="https://sbritsolution.in/courses/python"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Python Programming Course
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Learn Python from Scratch | Web Development | Automation | Data Science Ready
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹13,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Python Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Python */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Python Programming?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Easy to Learn</h3>
                <p className="text-gray-600 text-sm">Simple syntax makes Python perfect for beginners and rapid development</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Versatile Language</h3>
                <p className="text-gray-600 text-sm">Web development, data science, AI, automation - Python does it all</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">High Demand</h3>
                <p className="text-gray-600 text-sm">Most popular programming language with excellent job opportunities</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Rich Libraries</h3>
                <p className="text-gray-600 text-sm">Extensive library ecosystem for any project requirement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Python Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Python Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Python Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Python Installation & Environment Setup</li>
                    <li>• Variables, Data Types & Operators</li>
                    <li>• Control Flow & Decision Making</li>
                    <li>• Loops & Iterations</li>
                    <li>• Functions & Lambda Expressions</li>
                    <li>• Modules & Packages</li>
                    <li>• File Handling & I/O Operations</li>
                    <li>• Error Handling & Debugging</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Data Structures & OOP</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lists, Tuples & Dictionaries</li>
                    <li>• Sets & Frozen Sets</li>
                    <li>• String Manipulation & RegEx</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Classes & Objects</li>
                    <li>• Inheritance & Polymorphism</li>
                    <li>• Encapsulation & Abstraction</li>
                    <li>• Magic Methods & Decorators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">Advanced Python</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Generators & Iterators</li>
                    <li>• Context Managers</li>
                    <li>• Multithreading & Multiprocessing</li>
                    <li>• Database Connectivity (SQLite, MySQL)</li>
                    <li>• Web Scraping with BeautifulSoup</li>
                    <li>• API Development with Flask</li>
                    <li>• Testing with Unittest & Pytest</li>
                    <li>• Virtual Environments & pip</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">Practical Applications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• GUI Development with Tkinter</li>
                    <li>• Automation Scripts</li>
                    <li>• Data Analysis with Pandas</li>
                    <li>• Web Development Projects</li>
                    <li>• REST API Creation</li>
                    <li>• File Processing Automation</li>
                    <li>• Email Automation</li>
                    <li>• System Administration Scripts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Python Applications */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Can You Build with Python?</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Web Applications</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🌐 Dynamic websites with Django/Flask</li>
                  <li>🛒 E-commerce platforms</li>
                  <li>📱 RESTful APIs and microservices</li>
                  <li>💬 Real-time chat applications</li>
                  <li>📊 Dashboard and analytics tools</li>
                  <li>🔐 Authentication systems</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-700">Automation & Scripts</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🤖 Process automation scripts</li>
                  <li>📧 Email automation systems</li>
                  <li>📁 File organization tools</li>
                  <li>🕷️ Web scraping applications</li>
                  <li>📈 Report generation systems</li>
                  <li>⏰ Task scheduling automation</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold mb-3 text-purple-700">Data & Analytics</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>📊 Data analysis and visualization</li>
                  <li>🧮 Statistical analysis tools</li>
                  <li>📈 Business intelligence dashboards</li>
                  <li>🔍 Data mining applications</li>
                  <li>📋 Excel automation tools</li>
                  <li>🗃️ Database management systems</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold mb-3 text-orange-700">Desktop Applications</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🖥️ GUI applications with Tkinter</li>
                  <li>🎮 Simple games and utilities</li>
                  <li>📝 Text editors and IDEs</li>
                  <li>🧮 Calculator and productivity tools</li>
                  <li>📷 Image processing applications</li>
                  <li>🎵 Media players and converters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">3-Month Python Mastery Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Month 1: Foundation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Python basics & syntax</li>
                    <li>• Data types & variables</li>
                    <li>• Control structures</li>
                    <li>• Functions & modules</li>
                    <li>• Basic projects</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Month 2: Intermediate</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• OOP concepts</li>
                    <li>• Data structures</li>
                    <li>• File handling</li>
                    <li>• Database connectivity</li>
                    <li>• Web scraping projects</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">Month 3: Advanced</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Web development with Flask</li>
                    <li>• API development</li>
                    <li>• Automation projects</li>
                    <li>• Final capstone project</li>
                    <li>• Career preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Python Career Opportunities</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4">Job Roles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Python Developer</li>
                    <li>• Backend Developer</li>
                    <li>• Web Developer</li>
                    <li>• Data Analyst</li>
                    <li>• Automation Engineer</li>
                    <li>• DevOps Engineer</li>
                    <li>• Software Engineer</li>
                    <li>• Full Stack Developer</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4">Salary Range</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹4-8 LPA</li>
                    <li>• Mid Level (2-4 yrs): ₹8-15 LPA</li>
                    <li>• Senior (5+ yrs): ₹15-25 LPA</li>
                    <li>• Lead/Architect: ₹25+ LPA</li>
                    <li>• Data Science roles: ₹12-30 LPA</li>
                    <li>• Freelancing: $20-80/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Python Course Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">3 Months (Flexible Schedule)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online Classes + Hands-on Labs</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Prerequisites</h3>
                  <p className="text-gray-600">No programming experience required</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹13,999 (EMI from ₹1,200/month)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Python Programming Certificate + Portfolio</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-gray-600">Lifetime access & career guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Python Programming?</h2>
            <p className="text-xl mb-8">Join thousands of successful Python developers worldwide!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Python Journey - ₹13,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Try Free Python Class
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch: 18th August 2024 | Early bird discount: 20% off!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Advance with Python Specializations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/python-data-science" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">Python for Data Science</a>
              <a href="/courses/django" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Django Web Framework</a>
              <a href="/courses/full-stack-python" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">Full Stack Python</a>
              <a href="/courses/data-science-ai" className="bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-orange-700 font-medium transition-colors">Data Science & AI</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonProgramming;
