import React from 'react';
import SEO from '../components/SEO';

const NodeJS: React.FC = () => {
  return (
    <>
      <SEO 
        title="Node.js Training | Backend JavaScript Development Course - SBRIT Solution"
        description="Master Node.js backend development from basics to advanced. Learn Express.js, MongoDB, REST APIs, microservices, and build scalable server-side applications. Complete Node.js certification."
        keywords="nodejs training, node js course, backend development, express js, javascript backend, rest api development, nodejs certification, server side javascript"
        url="https://sbritsolution.in/courses/nodejs"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Node.js Training
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Backend JavaScript | Build Scalable APIs | Server-Side Development
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹14,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View API Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Node.js */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn Node.js?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">High Performance</h3>
                <p className="text-gray-600 text-sm">Event-driven, non-blocking I/O for lightning-fast applications</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">JavaScript Everywhere</h3>
                <p className="text-gray-600 text-sm">Use same language for frontend and backend development</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Rich Ecosystem</h3>
                <p className="text-gray-600 text-sm">NPM with millions of packages for rapid development</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Industry Demand</h3>
                <p className="text-gray-600 text-sm">Used by Netflix, LinkedIn, Uber, and thousands of companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Node.js Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Node.js Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Node.js Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Node.js Architecture & Event Loop</li>
                    <li>• Modules & NPM Package Management</li>
                    <li>• File System & Path Operations</li>
                    <li>• Streams & Buffers</li>
                    <li>• Error Handling & Debugging</li>
                    <li>• Asynchronous Programming</li>
                    <li>• Promises & Async/Await</li>
                    <li>• Environment Variables & Config</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-teal-600">Express.js Framework</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Express.js Setup & Routing</li>
                    <li>• Middleware & Request Processing</li>
                    <li>• RESTful API Development</li>
                    <li>• Request/Response Handling</li>
                    <li>• Template Engines (EJS, Pug)</li>
                    <li>• Static File Serving</li>
                    <li>• Error Handling Middleware</li>
                    <li>• API Documentation with Swagger</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Database Integration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• MongoDB & Mongoose ODM</li>
                    <li>• MySQL & PostgreSQL Integration</li>
                    <li>• Database Design & Modeling</li>
                    <li>• CRUD Operations</li>
                    <li>• Query Optimization</li>
                    <li>• Database Migrations</li>
                    <li>• Connection Pooling</li>
                    <li>• Redis for Caching</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">Advanced Node.js</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Authentication & Authorization</li>
                    <li>• JWT & Session Management</li>
                    <li>• Security Best Practices</li>
                    <li>• Testing (Jest, Mocha, Chai)</li>
                    <li>• Performance Optimization</li>
                    <li>• Microservices Architecture</li>
                    <li>• WebSocket & Real-time Apps</li>
                    <li>• Deployment & DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Projects */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Build Production-Ready Applications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-700">Backend APIs</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🛒 E-commerce REST API</li>
                  <li>📱 Social Media Backend</li>
                  <li>💰 Banking System API</li>
                  <li>📚 Learning Management System</li>
                  <li>🎬 Video Streaming Backend</li>
                  <li>📊 Analytics Dashboard API</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Full-Stack Applications</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>💬 Real-time Chat Application</li>
                  <li>📋 Task Management Platform</li>
                  <li>🏪 Multi-vendor Marketplace</li>
                  <li>📈 Business Intelligence Tool</li>
                  <li>🎯 Project Management System</li>
                  <li>🔐 Authentication Microservice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">3-Month Node.js Mastery Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Month 1: Foundation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Node.js fundamentals</li>
                    <li>• Express.js basics</li>
                    <li>• REST API development</li>
                    <li>• Database integration</li>
                    <li>• First backend project</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-teal-700">Month 2: Intermediate</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Authentication systems</li>
                    <li>• Advanced middleware</li>
                    <li>• Real-time features</li>
                    <li>• Testing strategies</li>
                    <li>• Complex applications</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Month 3: Advanced</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Microservices architecture</li>
                    <li>• Performance optimization</li>
                    <li>• Production deployment</li>
                    <li>• Portfolio projects</li>
                    <li>• Job preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Node.js Developer Career Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Node.js Developer</li>
                    <li>• Backend Developer</li>
                    <li>• Full Stack Developer</li>
                    <li>• API Developer</li>
                    <li>• Microservices Developer</li>
                    <li>• DevOps Engineer</li>
                    <li>• Technical Lead</li>
                    <li>• Solution Architect</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
                  <h3 className="text-xl font-semibold mb-4">Salary Expectations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹5-8 LPA</li>
                    <li>• Mid Level (2-4 yrs): ₹8-16 LPA</li>
                    <li>• Senior (5+ yrs): ₹16-28 LPA</li>
                    <li>• Tech Lead: ₹28-45 LPA</li>
                    <li>• Freelancing: ₹1500-3500/day</li>
                    <li>• International: $45-100/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Node.js Course Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">3 Months (Intensive Program)</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online + Hands-on Projects</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Prerequisites</h3>
                  <p className="text-gray-600">JavaScript knowledge required</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹14,999 (EMI from ₹1,250/month)</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Node.js Developer Certificate + Portfolio</p>
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
        <div className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Backend Development?</h2>
            <p className="text-xl mb-8">Build scalable server-side applications with Node.js!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Learning - ₹14,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Free Node.js Workshop
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch: 5th September 2024 | Build 6+ backend projects!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Expand Your Backend Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/express" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Express.js</a>
              <a href="/courses/mongodb" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">MongoDB</a>
              <a href="/courses/mern-stack" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">MERN Stack</a>
              <a href="/courses/mean-stack" className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-red-700 font-medium transition-colors">MEAN Stack</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeJS;
