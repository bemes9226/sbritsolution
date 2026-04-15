import React from 'react';
import SEO from '../components/SEO';

const PowerBI: React.FC = () => {
  return (
    <>
      <SEO 
        title="Power BI Training | Business Intelligence & Data Visualization Course - SBRIT Solution"
        description="Master Microsoft Power BI for business intelligence and data visualization. Learn DAX, Power Query, dashboard creation, and advanced analytics. Complete Power BI certification course with real projects."
        keywords="power bi training, business intelligence course, data visualization, power bi certification, microsoft power bi, dax training, power query, bi dashboard, data analytics"
        url="https://sbritsolution.in/courses/power-bi"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Power BI Training
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Business Intelligence | Data Visualization | Advanced Analytics | DAX
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹12,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Sample Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Power BI */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn Microsoft Power BI?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Industry Leader</h3>
                <p className="text-gray-600 text-sm">Microsoft Power BI is the #1 business intelligence tool globally</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">High Demand</h3>
                <p className="text-gray-600 text-sm">Power BI professionals earn 30% more than average analysts</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Easy to Learn</h3>
                <p className="text-gray-600 text-sm">User-friendly interface with drag-and-drop functionality</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Integration</h3>
                <p className="text-gray-600 text-sm">Seamlessly integrates with Microsoft ecosystem and 100+ data sources</p>
              </div>
            </div>
          </div>
        </div>

        {/* Power BI Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Power BI Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-600">Power BI Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Power BI Desktop Introduction</li>
                    <li>• Data Import & Connection</li>
                    <li>• Data Modeling Concepts</li>
                    <li>• Relationships & Cardinality</li>
                    <li>• Basic Visualizations</li>
                    <li>• Filters & Slicers</li>
                    <li>• Report Formatting</li>
                    <li>• Publishing to Power BI Service</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">Power Query & Data Transformation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Power Query Editor</li>
                    <li>• Data Cleaning & Transformation</li>
                    <li>• Merge & Append Queries</li>
                    <li>• Custom Columns & Functions</li>
                    <li>• Data Type Conversions</li>
                    <li>• Pivot & Unpivot Operations</li>
                    <li>• Advanced Query Techniques</li>
                    <li>• Query Optimization</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">DAX (Data Analysis Expressions)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• DAX Fundamentals</li>
                    <li>• Calculated Columns vs Measures</li>
                    <li>• Time Intelligence Functions</li>
                    <li>• Filter Context & Row Context</li>
                    <li>• CALCULATE & FILTER Functions</li>
                    <li>• Advanced DAX Patterns</li>
                    <li>• Performance Optimization</li>
                    <li>• Complex Business Logic</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Advanced Analytics & Deployment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced Visualizations</li>
                    <li>• Custom Visuals & R/Python</li>
                    <li>• Row Level Security (RLS)</li>
                    <li>• Power BI Service Administration</li>
                    <li>• Workspaces & Apps</li>
                    <li>• Scheduled Refresh</li>
                    <li>• Mobile Optimization</li>
                    <li>• Power BI Embedded</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Projects */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industry-Standard Projects</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold mb-3 text-yellow-700">Business Dashboards</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>📈 Sales Performance Dashboard</li>
                  <li>💰 Financial KPI Dashboard</li>
                  <li>👥 HR Analytics Dashboard</li>
                  <li>🛒 E-commerce Analytics</li>
                  <li>📊 Marketing Campaign Analysis</li>
                  <li>🏭 Manufacturing KPIs</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Advanced Analytics</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🔮 Predictive Analytics Models</li>
                  <li>📅 Time Series Forecasting</li>
                  <li>🎯 Customer Segmentation</li>
                  <li>💹 Profitability Analysis</li>
                  <li>🔄 Supply Chain Optimization</li>
                  <li>📱 Mobile-First Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2-Month Power BI Mastery Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-700">Month 1: Foundation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Power BI Desktop basics</li>
                    <li>• Data import & modeling</li>
                    <li>• Basic visualizations</li>
                    <li>• Power Query fundamentals</li>
                    <li>• First dashboard project</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">Month 2: Advanced</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• DAX mastery</li>
                    <li>• Advanced analytics</li>
                    <li>• Power BI Service</li>
                    <li>• Complex business projects</li>
                    <li>• Certification preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Power BI Career Opportunities</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-4">Job Roles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Power BI Developer</li>
                    <li>• Business Intelligence Analyst</li>
                    <li>• Data Analyst</li>
                    <li>• BI Consultant</li>
                    <li>• Data Visualization Specialist</li>
                    <li>• Business Analyst</li>
                    <li>• Reporting Analyst</li>
                    <li>• Data Scientist (with additional skills)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-4">Salary Expectations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹4-7 LPA</li>
                    <li>• Mid Level (2-4 yrs): ₹7-15 LPA</li>
                    <li>• Senior (5+ yrs): ₹15-25 LPA</li>
                    <li>• BI Consultant: ₹20-35 LPA</li>
                    <li>• Freelancing: ₹1000-3000/day</li>
                    <li>• International: $40-80/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Power BI Course Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">2 Months (Comprehensive Program)</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online + Hands-on Projects</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Prerequisites</h3>
                  <p className="text-gray-600">Basic Excel knowledge preferred</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹12,999 (EMI from ₹1,100/month)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Power BI Certificate + Microsoft Exam Prep</p>
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
        <div className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Business Intelligence?</h2>
            <p className="text-xl mb-8">Transform data into actionable insights with Power BI!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Learning - ₹12,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Free Power BI Demo
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch: 25th August 2024 | Build 5+ dashboards!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Expand Your Analytics Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/data-analytics" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">Data Analytics</a>
              <a href="/courses/power-apps" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Power Apps</a>
              <a href="/courses/data-science-ai" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">Data Science</a>
              <a href="/courses/python-data-science" className="bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-orange-700 font-medium transition-colors">Python for Data</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerBI;
