import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SEOKeywords: React.FC = () => {
  const topKeywords = [
    {
      keyword: "Angular training in Bangalore",
      volume: "2,400/month",
      difficulty: "Medium",
      description: "Master Angular framework with hands-on projects and 100% placement assistance in Bangalore's top IT companies.",
      url: "/courses/angular",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Java training institute",
      volume: "1,900/month", 
      difficulty: "Medium",
      description: "Learn Core Java, Advanced Java, Spring Boot from industry experts with guaranteed job placement.",
      url: "/courses/java",
      cities: ["Hyderabad", "Bangalore", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "React course with placement",
      volume: "1,600/month",
      difficulty: "Medium",
      description: "Complete React.js course with Redux, Hooks, and modern development practices. 100% placement guarantee.",
      url: "/courses/react",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Python training center",
      volume: "1,300/month",
      difficulty: "Low",
      description: "Learn Python programming, Django, Flask, and data science with hands-on projects and job assistance.",
      url: "/courses/python",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Best IT training institute",
      volume: "1,100/month",
      difficulty: "High",
      description: "SBRIT Solution - India's #1 IT training institute with 5000+ successful placements and industry expert trainers.",
      url: "/about",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Full stack developer course",
      volume: "980/month",
      difficulty: "Medium",
      description: "Complete full stack development course covering MEAN/MERN stack with live projects and placement support.",
      url: "/courses/fullstack",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Node.js certification",
      volume: "720/month",
      difficulty: "Low",
      description: "Get certified in Node.js with Express.js, MongoDB, and RESTful APIs. Industry-recognized certification program.",
      url: "/courses/nodejs",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Web development training",
      volume: "590/month",
      difficulty: "Medium",
      description: "Complete web development training covering HTML, CSS, JavaScript, React, Angular, and backend technologies.",
      url: "/courses/webdev",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    },
    {
      keyword: "Java developer course Hyderabad",
      volume: "480/month",
      difficulty: "Low",
      description: "Become a Java developer in Hyderabad with our comprehensive course covering Core Java to Spring Boot.",
      url: "/training/java/hyderabad",
      cities: ["Hyderabad"]
    },
    {
      keyword: "Angular developer certification",
      volume: "390/month",
      difficulty: "Low",
      description: "Get Angular developer certification with hands-on projects, TypeScript, and modern Angular features.",
      url: "/courses/angular",
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"]
    }
  ];

  return (
    <>
      <SEO 
        title="Top 10 IT Training Keywords | Best Courses for Career Growth | SBRIT Solution"
        description="Discover the top 10 IT training keywords that guarantee career success. From Angular training in Bangalore to Java developer courses, find the best IT training programs with 100% placement."
        keywords="Angular training Bangalore, Java training institute, React course placement, Python training center, best IT training institute, full stack developer course, Node.js certification, web development training, Java developer course Hyderabad, Angular developer certification"
        url="https://sbritsolution.in/seo-keywords"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Top 10 IT Training Keywords for Career Success
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most searched <strong>IT training keywords</strong> that lead to successful careers. 
            From <strong>Angular training in Bangalore</strong> to <strong>Java developer courses</strong>, 
            these are the skills employers are actively seeking in 2024.
          </p>
        </div>

        {/* Keywords Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Most In-Demand IT Training Keywords
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topKeywords.slice(0, 6).map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-600 mb-2">#{index + 1} {item.keyword}</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Volume:</span> {item.volume}<br/>
                  <span className="font-semibold">Difficulty:</span> {item.difficulty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Keywords Analysis */}
        <div className="space-y-8">
          {topKeywords.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    #{index + 1} {item.keyword}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      📈 {item.volume}
                    </span>
                    <span className={`px-3 py-1 rounded-full ${
                      item.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                      item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      🎯 {item.difficulty} Competition
                    </span>
                  </div>
                </div>
                <Link 
                  to={item.url}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                {item.description}
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Available in Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.cities.map((city, cityIndex) => (
                    <Link
                      key={cityIndex}
                      to={`/training/${item.keyword.split(' ')[0].toLowerCase()}/${city.toLowerCase()}`}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why These Keywords Drive Maximum Career Success
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">High-Demand Skills</h3>
              <p className="text-gray-600 mb-4">
                These <strong>IT training keywords</strong> represent the most in-demand skills in the current job market. 
                Companies are actively hiring professionals with expertise in <strong>Angular training</strong>, 
                <strong>Java development</strong>, and <strong>React programming</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Angular training in Bangalore</strong> - 2000+ job openings monthly</li>
                <li><strong>Java training institute</strong> - Average salary ₹6-12 LPA</li>
                <li><strong>React course with placement</strong> - 95% placement rate</li>
                <li><strong>Python training center</strong> - Fastest growing tech skill</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Strategic Career Investment</h3>
              <p className="text-gray-600 mb-4">
                Investing in training for these keywords ensures maximum ROI on your career. Our 
                <strong>best IT training institute</strong> programs are designed around these high-impact skills 
                with <strong>100% placement guarantee</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Industry-aligned curriculum based on job market trends</li>
                <li>Expert trainers with 10+ years of experience</li>
                <li>Live projects and hands-on learning approach</li>
                <li>Dedicated placement cell with 5000+ successful placements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Master These In-Demand Skills?</h2>
          <p className="text-xl mb-6">
            Join 5000+ successful students who transformed their careers with these high-impact IT skills
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey Today
            </Link>
            <Link 
              to="/courses/angular" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Top Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOKeywords;
