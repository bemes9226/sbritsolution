import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Reasons to Choose Angular Training in Bangalore 2024",
      excerpt: "Discover why Angular training in Bangalore is the best career move. Learn about job opportunities, salary packages, and top companies hiring Angular developers.",
      keywords: "Angular training Bangalore, Angular jobs, Angular salary",
      readTime: "5 min read",
      date: "2024-08-09"
    },
    {
      id: 2,
      title: "Java Developer Salary in Hyderabad: Complete Guide 2024",
      excerpt: "Complete guide to Java developer salaries in Hyderabad. Learn about entry-level to senior positions, top companies, and how to increase your Java developer salary.",
      keywords: "Java developer salary Hyderabad, Java jobs Hyderabad",
      readTime: "7 min read",
      date: "2024-08-08"
    },
    {
      id: 3,
      title: "React vs Angular: Which Framework to Learn in 2024?",
      excerpt: "Comprehensive comparison between React and Angular frameworks. Discover which technology offers better career prospects and job opportunities in India.",
      keywords: "React vs Angular, frontend frameworks, web development",
      readTime: "10 min read",
      date: "2024-08-07"
    },
    {
      id: 4,
      title: "Python Training with Placement: Success Stories from SBRIT",
      excerpt: "Read success stories of students who completed Python training at SBRIT Solution and landed jobs at top companies like TCS, Infosys, and Wipro.",
      keywords: "Python training placement, Python jobs, Python success stories",
      readTime: "6 min read",
      date: "2024-08-06"
    },
    {
      id: 5,
      title: "Best IT Training Institute in Bangalore: How to Choose",
      excerpt: "Complete guide to selecting the best IT training institute in Bangalore. Compare course curriculum, placement records, and student reviews.",
      keywords: "best IT training institute Bangalore, IT courses Bangalore",
      readTime: "8 min read",
      date: "2024-08-05"
    },
    {
      id: 6,
      title: "Node.js Career Opportunities in India: Complete Guide",
      excerpt: "Explore Node.js career opportunities in India. Learn about job roles, salary expectations, and top companies hiring Node.js developers.",
      keywords: "Node.js jobs India, Node.js career, Node.js salary",
      readTime: "9 min read",
      date: "2024-08-04"
    }
  ];

  return (
    <>
      <SEO 
        title="IT Training Blog | Programming Tips & Career Guidance | SBRIT Solution"
        description="Read our comprehensive IT training blog covering Angular, Java, React, Python programming tips, career guidance, salary insights, and placement success stories from SBRIT Solution."
        keywords="IT training blog, programming tips, Angular tutorials, Java programming guide, React development, Python career, web development blog, coding tutorials, IT career guidance"
        url="https://sbritsolution.in/blog"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            IT Training Blog & Career Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in <strong>Angular training</strong>, <strong>Java programming</strong>, 
            <strong>React development</strong>, and <strong>Python courses</strong>. Get expert tips from industry professionals 
            and success stories from our students.
          </p>
        </div>

        {/* Featured Keywords Section */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Popular Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Angular Training Bangalore", "Java Training Hyderabad", "React Course with Placement",
              "Python Training Center", "Best IT Training Institute", "Full Stack Developer Course",
              "Node.js Certification", "Web Development Training", "Programming Jobs India",
              "IT Career Guidance", "Coding Bootcamp", "Software Development Courses"
            ].map((keyword, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-blue-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </Link>
                  <div className="text-xs text-gray-500">
                    {post.keywords.split(', ').slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose SBRIT Solution for IT Training?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Best IT Training Institute in Bangalore</h3>
              <p className="text-gray-600 mb-4">
                SBRIT Solution is recognized as the <strong>best IT training institute in Bangalore</strong> with over 
                5000+ successful placements. Our <strong>Angular training in Bangalore</strong> and <strong>Java training programs</strong> 
                are designed by industry experts with 100% placement assistance.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Angular Training Bangalore</strong> - Master Angular 15+ with live projects</li>
                <li><strong>Java Training Institute</strong> - Core Java to Spring Boot certification</li>
                <li><strong>React Course with Placement</strong> - Build modern web applications</li>
                <li><strong>Python Training Center</strong> - Data Science and web development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">100% Placement Guarantee Programs</h3>
              <p className="text-gray-600 mb-4">
                Our <strong>IT courses with job guarantee</strong> ensure you land your dream job. Students from our 
                <strong>Java training in Hyderabad</strong> and <strong>Angular training programs</strong> have been 
                placed in top companies like TCS, Infosys, Wipro, and Accenture.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Average salary package: ₹4.5 - 8 LPA</li>
                <li>2000+ students placed in last 2 years</li>
                <li>Dedicated placement cell with industry connections</li>
                <li>Interview preparation and resume building support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-6">
            Join India's #1 IT training institute with guaranteed placements
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              to="/courses/angular" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
