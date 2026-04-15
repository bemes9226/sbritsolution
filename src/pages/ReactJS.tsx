import React from 'react';
import SEO from '../components/SEO';

const ReactJS: React.FC = () => {
  return (
    <>
      <SEO 
        title="React.js Training | Master Modern Frontend Development - SBRIT Solution"
        description="Learn React.js from basics to advanced concepts. Master hooks, state management, component lifecycle, and build dynamic web applications. Complete React certification course with real projects."
        keywords="react js training, react course, react certification, frontend development, react hooks, jsx, react components, react state management, react developer course"
        url="https://sbritsolution.in/courses/react"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                React.js Training
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Modern Frontend Development | Build Dynamic UIs | React Ecosystem
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹15,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View React Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why React */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn React.js?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Industry Standard</h3>
                <p className="text-gray-600 text-sm">Used by Facebook, Netflix, Airbnb, and thousands of companies worldwide</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">High Performance</h3>
                <p className="text-gray-600 text-sm">Virtual DOM and efficient rendering for lightning-fast applications</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Component-Based</h3>
                <p className="text-gray-600 text-sm">Reusable components make development faster and more maintainable</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Career Growth</h3>
                <p className="text-gray-600 text-sm">React developers earn 40% more than average frontend developers</p>
              </div>
            </div>
          </div>
        </div>

        {/* React Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete React.js Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">React Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React Introduction & Setup</li>
                    <li>• JSX Syntax & Components</li>
                    <li>• Props & State Management</li>
                    <li>• Event Handling</li>
                    <li>• Conditional Rendering</li>
                    <li>• Lists & Keys</li>
                    <li>• Component Lifecycle</li>
                    <li>• React Developer Tools</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-600">Modern React Hooks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• useState & useEffect Hooks</li>
                    <li>• useContext for State Management</li>
                    <li>• useReducer for Complex State</li>
                    <li>• useMemo & useCallback</li>
                    <li>• useRef & Custom Hooks</li>
                    <li>• Hook Rules & Best Practices</li>
                    <li>• Performance Optimization</li>
                    <li>• Error Boundaries</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Advanced React Concepts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React Router for Navigation</li>
                    <li>• Form Handling & Validation</li>
                    <li>• API Integration with Axios</li>
                    <li>• State Management with Redux</li>
                    <li>• Context API Patterns</li>
                    <li>• Higher-Order Components</li>
                    <li>• Render Props Pattern</li>
                    <li>• Code Splitting & Lazy Loading</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">React Ecosystem & Tools</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Create React App & Vite</li>
                    <li>• Styled Components & CSS Modules</li>
                    <li>• Material-UI & Ant Design</li>
                    <li>• Testing with Jest & React Testing Library</li>
                    <li>• Storybook for Component Development</li>
                    <li>• Deployment & Production Builds</li>
                    <li>• Performance Monitoring</li>
                    <li>• Next.js Introduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Projects */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Build Real-World React Applications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Frontend Applications</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🛒 E-commerce Shopping Cart</li>
                  <li>📱 Social Media Dashboard</li>
                  <li>📝 Task Management App</li>
                  <li>🌤️ Weather Forecast App</li>
                  <li>📊 Data Visualization Dashboard</li>
                  <li>💬 Real-time Chat Application</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-700">Full-Stack Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🔐 User Authentication System</li>
                  <li>📚 Blog Management Platform</li>
                  <li>💰 Expense Tracker Application</li>
                  <li>🎬 Movie Database Browser</li>
                  <li>📈 Analytics Dashboard</li>
                  <li>🏪 Multi-vendor Marketplace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">3-Month React Mastery Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Month 1: Foundation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• React basics & JSX</li>
                    <li>• Components & props</li>
                    <li>• State & event handling</li>
                    <li>• First React projects</li>
                    <li>• Development environment</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-cyan-50 to-cyan-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-700">Month 2: Advanced</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• React Hooks mastery</li>
                    <li>• React Router</li>
                    <li>• API integration</li>
                    <li>• State management</li>
                    <li>• Complex applications</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Month 3: Professional</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Redux & advanced patterns</li>
                    <li>• Testing & optimization</li>
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
            <h2 className="text-3xl font-bold text-center mb-12">React Developer Career Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React.js Developer</li>
                    <li>• Frontend Developer</li>
                    <li>• Full Stack Developer</li>
                    <li>• UI/UX Developer</li>
                    <li>• JavaScript Developer</li>
                    <li>• Senior React Engineer</li>
                    <li>• Technical Lead</li>
                    <li>• Freelance React Developer</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
                  <h3 className="text-xl font-semibold mb-4">Salary Expectations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹5-9 LPA</li>
                    <li>• Mid Level (2-4 yrs): ₹9-18 LPA</li>
                    <li>• Senior (5+ yrs): ₹18-30 LPA</li>
                    <li>• Tech Lead: ₹30-50 LPA</li>
                    <li>• Freelancing: ₹1500-4000/day</li>
                    <li>• International: $50-120/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">React Course Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">3 Months (Comprehensive Program)</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online + Hands-on Projects</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Prerequisites</h3>
                  <p className="text-gray-600">HTML, CSS, JavaScript knowledge required</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹15,999 (EMI from ₹1,350/month)</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">React Developer Certificate + Portfolio</p>
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
        <div className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master React.js?</h2>
            <p className="text-xl mb-8">Build modern, interactive web applications with React!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Learning - ₹15,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Free React Workshop
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch: 28th August 2024 | Build 8+ React projects!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Advance Your React Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/nextjs" className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-colors">Next.js</a>
              <a href="/courses/redux" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">Redux</a>
              <a href="/courses/typescript" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">TypeScript</a>
              <a href="/courses/mern-stack" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">MERN Stack</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactJS;
