import React from "react";
import { courses } from "../data";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleEnroll = (id: string) => {
    navigate(`/courses/${id}`);
  };
  const handleViewDetails = (id: string) => {
    navigate(`/courses/${id}`);
  };

  // Structured Data for SEO
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SBRIT Solution",
    "url": "https://sbritsolution.in",
    "logo": "https://sbritsolution.in/logo.png",
    "description": "Best IT Training Institute offering all courses in Angular, React, Java, Python, Full Stack Development, Data Science, AWS, and more with 100% placement assistance.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "bemes0112@gmail.com",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const courseListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All IT Training Courses - SBRIT Solution",
    "description": "Complete list of all IT training courses including Angular, React, Java, Python, Full Stack Development, Data Science, AWS, and more.",
    "itemListElement": courses.slice(0, 20).map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.content,
        "url": `https://sbritsolution.in/courses/${course.id}`,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "SBRIT Solution"
        },
        "offers": {
          "@type": "Offer",
          "price": course.price.toString(),
          "priceCurrency": "INR"
        }
      }
    }))
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are all the courses available at SBRIT Solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SBRIT Solution offers all IT training courses including Angular, React, Java, Python, Full Stack Development, Data Science, AWS, Azure, DevOps, Cyber Security, Software Testing, and more. We have over 30+ comprehensive courses with 100% placement assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best IT training institute for all courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SBRIT Solution is the best IT training institute offering all courses with expert instructors, hands-on projects, industry certification, and 100% placement assistance. We have trained 5000+ students who are now working at top companies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance for all courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% placement assistance for all courses. Our placement team helps with resume building, interview preparation, mock interviews, and connecting students with top IT companies like TCS, Infosys, Wipro, Accenture, and more."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="All IT Training Courses | Best IT Training Institute | Angular, React, Java, Python Courses | SBRIT Solution"
        description="Explore all IT training courses at SBRIT Solution - Angular, React, Java, Python, Full Stack Development, Data Science, AWS, and 30+ more courses. Best IT training institute with 100% placement assistance. Join 5000+ successful students. Enroll now!"
        keywords="all courses, all IT courses, all training courses, best IT training institute, Angular training, React course, Java training, Python course, Full Stack Development, Data Science course, AWS training, all programming courses, IT courses with placement, software development courses, web development training, best training institute, IT certification courses, job oriented courses, placement guaranteed courses, all IT training courses, complete course list, all courses list, IT institute all courses"
        url="https://sbritsolution.in"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseListStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <div style={{ paddingBottom: 80 }}>
        {/* Professional Hero Banner Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #EF4444 0%, #F97316 50%, #EC4899 100%)', 
          color: 'white', 
          padding: '80px 20px', 
          textAlign: 'center',
          marginBottom: '0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: '400px',
            height: '400px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 'bold', 
              marginBottom: '24px',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
              All IT Training Courses | Best IT Training Institute | 30+ Courses with 100% Placement
            </h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
              marginBottom: '16px', 
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 24px',
              opacity: 0.95
            }}>
              <strong>Explore all IT training courses</strong> at SBRIT Solution - <strong>Angular, React, Java, Python, Full Stack Development, Data Science, AWS, Azure, DevOps, Cyber Security</strong> and <strong>30+ more comprehensive courses</strong>. 
              <strong>Best IT training institute</strong> with <strong>expert instructors</strong>, <strong>hands-on projects</strong>, <strong>industry certification</strong>, and <strong>100% placement assistance</strong>.
            </p>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
              marginBottom: '40px', 
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Join <strong>5000+ successful students</strong> who mastered <strong>all courses</strong> and landed jobs at <strong>TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini</strong> with salary packages up to <strong>₹12 LPA</strong>.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
              <button 
                onClick={() => navigate('/courses')}
                style={{ 
                  background: 'white', 
                  color: '#EF4444', 
                  padding: '16px 40px', 
                  border: 'none', 
                  borderRadius: '30px', 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
              >
                View All Courses
              </button>
              <button 
                onClick={() => navigate('/contact')}
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  padding: '16px 40px', 
                  border: '3px solid white', 
                  borderRadius: '30px', 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Enroll Now - Get 20% Off
              </button>
            </div>
            
            {/* Key Features */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '20px', 
              marginTop: '50px',
              maxWidth: '1000px',
              margin: '50px auto 0'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>30+</div>
                <div style={{ fontSize: '1rem', fontWeight: '600' }}>All Courses Available</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>5000+</div>
                <div style={{ fontSize: '1rem', fontWeight: '600' }}>Students Trained</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>100%</div>
                <div style={{ fontSize: '1rem', fontWeight: '600' }}>Placement Assistance</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>4.8★</div>
                <div style={{ fontSize: '1rem', fontWeight: '600' }}>Student Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* All Courses Overview Section - SEO Rich Content */}
        <div style={{ 
          background: '#ffffff', 
          padding: '60px 20px',
          marginTop: '0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              textAlign: 'center', 
              marginBottom: '20px', 
              color: '#1a1a1a',
              fontWeight: 'bold'
            }}>
              All IT Training Courses - Complete Course List
            </h2>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '1.1rem', 
              marginBottom: '30px', 
              color: '#555', 
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 30px'
            }}>
              SBRIT Solution offers <strong>all IT training courses</strong> covering every aspect of software development, programming, and IT skills. 
              Whether you're looking for <strong>Angular training</strong>, <strong>React course</strong>, <strong>Java programming</strong>, <strong>Python development</strong>, 
              <strong>Full Stack Development</strong>, <strong>Data Science</strong>, <strong>AWS certification</strong>, or any other IT course, we have it all. 
              Our <strong>comprehensive course list</strong> includes <strong>30+ industry-relevant courses</strong> designed by experts with <strong>100% placement guarantee</strong>.
            </p>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '1rem', 
              marginBottom: '40px', 
              color: '#666', 
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto 40px'
            }}>
              Explore our <strong>complete list of all courses</strong> below. Each course includes <strong>live training</strong>, <strong>hands-on projects</strong>, 
              <strong>industry certification</strong>, <strong>placement assistance</strong>, and <strong>lifetime access</strong> to course materials. 
              All courses are available in <strong>Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon</strong>.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#1976d2' }}>
            Why Choose SBRIT Solution?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>Expert Instructors</h3>
              <p style={{ lineHeight: '1.6', color: '#666' }}>
                Learn from <strong>industry professionals</strong> with 10+ years of experience in software development and training.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>100% Placement Support</h3>
              <p style={{ lineHeight: '1.6', color: '#666' }}>
                Dedicated <strong>placement assistance</strong> with resume building, interview preparation, and job referrals.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>Hands-on Projects</h3>
              <p style={{ lineHeight: '1.6', color: '#666' }}>
                Build <strong>real-world applications</strong> and create a portfolio that showcases your skills to employers.
              </p>
            </div>
          </div>
        </div>

        {/* All Courses Section - Main Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#1a1a1a',
            fontWeight: 'bold'
          }}>
            Browse All IT Training Courses - Complete Course Catalog
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            marginBottom: '40px', 
            color: '#555', 
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto 40px'
          }}>
            Discover <strong>all courses</strong> at SBRIT Solution - India's <strong>best IT training institute</strong>. 
            Our <strong>complete course list</strong> includes <strong>all IT courses</strong> from beginner to advanced level. 
            Whether you want to learn <strong>Angular</strong>, <strong>React</strong>, <strong>Java</strong>, <strong>Python</strong>, 
            <strong>Full Stack Development</strong>, <strong>Data Science</strong>, <strong>AWS</strong>, <strong>Azure</strong>, 
            <strong>DevOps</strong>, <strong>Cyber Security</strong>, or any other technology, we have <strong>all the courses</strong> you need. 
            Each course in our <strong>all courses list</strong> comes with <strong>expert training</strong>, <strong>real-world projects</strong>, 
            <strong>industry certification</strong>, and <strong>100% placement assistance</strong>.
          </p>
          <div className="cards-container">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <CourseCard
                  course={course}
                  onEnroll={handleEnroll}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popular Courses Section */}
        <div style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1976d2' }}>Popular Courses</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#666' }}>
              Choose from our comprehensive range of industry-focused training programs
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        </div>

        {/* City-Specific Training Links Section */}
        <div style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1976d2' }}>Training Centers Across India</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#666' }}>
              Find our training programs in your city
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
              {['hyderabad', 'bangalore', 'mumbai', 'delhi', 'chennai'].map(city => (
                <div key={city} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1976d2', textTransform: 'capitalize' }}>{city}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {city === 'hyderabad' ? (
                      <a href="/angular-training-in-hyderabad" style={{ background: '#1976d2', border: '1px solid #1976d2', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', textDecoration: 'none', textAlign: 'center', fontWeight: 'bold' }}>Angular Training in Hyderabad</a>
                    ) : (
                      <button onClick={() => navigate(`/training/angular/${city}`)} style={{ background: 'transparent', border: '1px solid #1976d2', color: '#1976d2', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Angular Training</button>
                    )}
                    <button onClick={() => navigate(`/training/react/${city}`)} style={{ background: 'transparent', border: '1px solid #1976d2', color: '#1976d2', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>React Training</button>
                    <button onClick={() => navigate(`/training/java/${city}`)} style={{ background: 'transparent', border: '1px solid #1976d2', color: '#1976d2', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Java Training</button>
                    <button onClick={() => navigate(`/training/python/${city}`)} style={{ background: 'transparent', border: '1px solid #1976d2', color: '#1976d2', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Python Training</button>
                    <button onClick={() => navigate(`/training/nodejs/${city}`)} style={{ background: 'transparent', border: '1px solid #1976d2', color: '#1976d2', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Node.js Training</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Locations Section */}
        <div style={{ background: '#f5f5f5', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#1976d2' }}>
              Training Centers Across India
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
              We offer <strong>classroom training</strong> in major cities across India. Find a center near you:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'center' }}>
              {[
                { city: 'Bangalore', courses: 'Angular, React, Java, Python' },
                { city: 'Hyderabad', courses: 'Node.js, Angular, React, Java' },
                { city: 'Mumbai', courses: 'Python, Java, React, Angular' },
                { city: 'Delhi', courses: 'Angular, Java, Python, React' },
                { city: 'Chennai', courses: 'React, Angular, Java, Python' },
                { city: 'Pune', courses: 'Java, Angular, React, Python' }
              ].map((location, index) => (
                <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1976d2' }}>{location.city}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{location.courses}</p>
                  <button 
                    onClick={() => navigate(`/training/${location.city.toLowerCase()}`)}
                    style={{ 
                      marginTop: '15px',
                      background: '#1976d2', 
                      color: 'white', 
                      padding: '8px 20px', 
                      border: 'none', 
                      borderRadius: '20px', 
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    View Courses
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#1976d2' }}>
            Student Success Stories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#e8f5e8', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
                "The <strong>Angular training</strong> at SBRIT Solution completely transformed my career. Got placed at TCS with 60% salary hike!"
              </p>
              <p style={{ fontWeight: 'bold', color: '#2e7d32' }}>- Priya S., Software Developer</p>
            </div>
            <div style={{ background: '#e3f2fd', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
                "Excellent <strong>Java training</strong> with hands-on projects. The placement support helped me land my dream job at Infosys."
              </p>
              <p style={{ fontWeight: 'bold', color: '#1976d2' }}>- Rajesh K., Java Developer</p>
            </div>
            <div style={{ background: '#fff3e0', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #ff9800' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
                "The <strong>React course</strong> was comprehensive and practical. Now working as a Frontend Developer at a startup!"
              </p>
              <p style={{ fontWeight: 'bold', color: '#f57c00' }}>- Sneha M., Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Top 10 SEO Keywords Section */}
        <div style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1976d2' }}>Top 10 Most Searched IT Training Keywords</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#666' }}>
              Master these high-demand skills and boost your career prospects with guaranteed job placement
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
              {[
                { keyword: 'Angular training in Bangalore', searches: '2,400/month', url: '/courses/angular' },
                { keyword: 'Java training institute', searches: '1,900/month', url: '/courses/java' },
                { keyword: 'React course with placement', searches: '1,600/month', url: '/courses/react' },
                { keyword: 'Python training center', searches: '1,300/month', url: '/courses/python' },
                { keyword: 'Best IT training institute', searches: '1,100/month', url: '/about' },
                { keyword: 'Full stack developer course', searches: '980/month', url: '/courses/fullstack' },
                { keyword: 'Node.js certification', searches: '720/month', url: '/courses/nodejs' },
                { keyword: 'Web development training', searches: '590/month', url: '/courses/webdev' },
                { keyword: 'Java developer course Hyderabad', searches: '480/month', url: '/training/java/hyderabad' },
                { keyword: 'Angular developer certification', searches: '390/month', url: '/courses/angular' }
              ].map((item, index) => (
                <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '14px', color: '#1976d2', fontWeight: 'bold', marginBottom: '8px' }}>#{index + 1} Most Searched</div>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#333', fontWeight: 'bold' }}>{item.keyword}</h3>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>📈 {item.searches}</div>
                  <button 
                    onClick={() => navigate(item.url)}
                    style={{ 
                      background: '#1976d2', 
                      color: 'white', 
                      padding: '8px 16px', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => navigate('/seo-keywords')}
                style={{ 
                  background: '#1976d2', 
                  color: 'white', 
                  padding: '12px 30px', 
                  border: 'none', 
                  borderRadius: '25px', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                View Complete Keyword Analysis
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section - SEO Optimized */}
        <div style={{ background: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              textAlign: 'center', 
              marginBottom: '40px', 
              color: '#1a1a1a',
              fontWeight: 'bold'
            }}>
              Frequently Asked Questions - All Courses
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#EF4444', fontWeight: 'bold' }}>
                  What are all the courses available at SBRIT Solution?
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>
                  SBRIT Solution offers <strong>all IT training courses</strong> including <strong>Angular training</strong>, <strong>React course</strong>, 
                  <strong>Java programming</strong>, <strong>Python development</strong>, <strong>Full Stack Development</strong>, 
                  <strong>Data Science & AI</strong>, <strong>AWS certification</strong>, <strong>Azure training</strong>, 
                  <strong>DevOps</strong>, <strong>Cyber Security</strong>, <strong>Software Testing</strong>, and <strong>30+ more comprehensive courses</strong>. 
                  Our <strong>complete course list</strong> covers all major IT technologies and programming languages with <strong>100% placement assistance</strong>.
                </p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#EF4444', fontWeight: 'bold' }}>
                  Which is the best IT training institute for all courses?
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>
                  SBRIT Solution is the <strong>best IT training institute</strong> offering <strong>all courses</strong> with 
                  <strong>expert instructors</strong> having 10+ years of industry experience, <strong>hands-on projects</strong>, 
                  <strong>industry certification</strong>, and <strong>100% placement assistance</strong>. We have trained <strong>5000+ students</strong> 
                  who are now working at top companies like <strong>TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini</strong>. 
                  Our <strong>all courses</strong> are designed by industry experts and updated regularly to match current industry standards.
                </p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#EF4444', fontWeight: 'bold' }}>
                  Do you provide placement assistance for all courses?
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>
                  Yes, we provide <strong>100% placement assistance</strong> for <strong>all courses</strong>. Our dedicated placement team helps with 
                  <strong>resume building</strong>, <strong>interview preparation</strong>, <strong>mock interviews</strong>, and connecting students with 
                  top IT companies. We have strong partnerships with <strong>TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, HCL, Tech Mahindra</strong>, 
                  and many more. Our <strong>all courses</strong> include placement support as a standard feature.
                </p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#EF4444', fontWeight: 'bold' }}>
                  Where are all courses available?
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>
                  <strong>All courses</strong> are available in <strong>Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon</strong>. 
                  We offer both <strong>classroom training</strong> and <strong>online training</strong> for <strong>all courses</strong>. 
                  You can choose to attend <strong>weekend batches</strong> or <strong>weekday batches</strong> based on your convenience. 
                  Our <strong>all courses</strong> are also available in <strong>hybrid mode</strong> (combination of online and classroom).
                </p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#EF4444', fontWeight: 'bold' }}>
                  What is included in all courses?
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>
                  <strong>All courses</strong> at SBRIT Solution include <strong>live training sessions</strong> by industry experts, 
                  <strong>hands-on projects</strong> and <strong>real-world applications</strong>, <strong>industry-recognized certification</strong>, 
                  <strong>100% placement assistance</strong>, <strong>resume building</strong> and <strong>interview preparation</strong>, 
                  <strong>lifetime access</strong> to course materials, <strong>24/7 support</strong>, and <strong>job placement guarantee</strong>. 
                  Our <strong>all courses</strong> are designed to make you job-ready from day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div style={{ background: 'linear-gradient(135deg, #EF4444 0%, #F97316 50%, #EC4899 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px', fontWeight: 'bold' }}>
              Ready to Explore All Courses and Transform Your Career?
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '30px', lineHeight: '1.8', opacity: 0.95 }}>
              Join <strong>5000+ successful students</strong> who explored <strong>all courses</strong> at SBRIT Solution and landed jobs at 
              <strong>TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini</strong> with salary packages up to <strong>₹12 LPA</strong>. 
              <strong>Limited seats available</strong> for upcoming batches! Enroll now in <strong>any of our all courses</strong> and get <strong>20% discount</strong>.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/contact')}
                style={{ 
                  background: 'white', 
                  color: '#1976d2', 
                  padding: '15px 40px', 
                  border: 'none', 
                  borderRadius: '25px', 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Enroll Now - Get 20% Off
              </button>
              <button 
                onClick={() => navigate('/seo-keywords')}
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  padding: '15px 40px', 
                  border: '2px solid white', 
                  borderRadius: '25px', 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                View All Keywords
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
