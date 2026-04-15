import React from 'react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About SBR IT Solution - IT Training Institute"
        description="Learn about SBR IT Solution, a leading IT training institute offering professional courses in web development, programming, and software development. Our mission is to provide quality education and career opportunities."
        keywords="about SBR IT Solution, IT training institute, web development training center, programming education, software development courses, IT education provider, professional training institute,best training institute in hyderabad,best training institute in bangalore,best training institute in mumbai,best training institute in delhi,best training institute in chennai,best training institute in pune,best training institute in noida,best training institute in gurgaon,best training institute in hyderabad,best training institute in bangalore,best training institute in mumbai,best training institute in delhi,best training institute in chennai,best training institute in pune,best training institute"
      />

      <div className="responsive-container">
        <h1>About Us</h1>
        <p>
          SBR IT Solution is a premier IT training institute dedicated to providing high-quality education
          in web development and programming. Our mission is to empower students with practical skills
          and knowledge needed to succeed in the technology industry.
        </p>
        <h2>Our Vision</h2>
        <p>
          To be the leading provider of IT education and training, producing skilled professionals
          who can meet the demands of the ever-evolving technology landscape.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert instructors with industry experience</li>
          <li>Hands-on practical training</li>
          <li>Industry-relevant curriculum</li>
          <li>Placement assistance</li>
          <li>Flexible learning schedules</li>
        </ul>
      </div>
    </>
  );
};

export default About; 