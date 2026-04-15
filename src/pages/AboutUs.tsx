import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => (
  <>
    <SEO 
      title="About SBR IT Solution - Leading IT Training Provider | Expert Instructors"
      description="Discover SBR IT Solution's mission to provide cutting-edge technology training. Learn from expert instructors in web development, data analytics, and modern programming languages with hands-on approach."
      keywords="SBR IT Solution, about us, IT training provider, expert instructors, technology training, web development training, data analytics courses, programming education, hands-on training, career growth"
      url="https://sbritsolution.in/about"
    />
    <div className="responsive-container">
      <h1>About SBR IT Solution</h1>
      <p>
        <strong>SBR IT Solution</strong> is dedicated to empowering learners and professionals with cutting-edge technology training. Our mission is to provide high-quality, hands-on courses in web development, data analytics, and modern programming languages.
      </p>
      
      <h2>Our Course Offerings</h2>
      <p>
        We offer a wide range of courses including <Link to="/courses/angular" className="text-blue-600 hover:underline">Angular</Link>, <Link to="/courses/react" className="text-blue-600 hover:underline">React</Link>, <Link to="/courses/java" className="text-blue-600 hover:underline">Java</Link>, <Link to="/courses/python" className="text-blue-600 hover:underline">Python</Link>, <Link to="/courses/powerbi" className="text-blue-600 hover:underline">Power BI</Link>, HTML, CSS, Bootstrap, jQuery, JavaScript, Tailwind, TypeScript, Node.js, and more. Our expert instructors and practical approach ensure you gain real-world skills for your career growth.
      </p>
      
      <h2>Why Choose Us</h2>
      <p>
        Join us to upskill, reskill, and stay ahead in the fast-evolving tech landscape! Our commitment to excellence and student success sets us apart in the IT training industry.
      </p>
      
      <div className="mt-8">
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us Today
        </Link>
      </div>
    </div>
  </>
);

export default AboutUs; 