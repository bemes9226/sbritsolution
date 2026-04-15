import React from 'react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AngularTrainingHyderabad: React.FC = () => {
  const navigate = useNavigate();

  // Comprehensive structured data for SEO - Location Specific
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SBRIT Solution - Angular Training in Hyderabad",
    "image": "https://sbritsolution.in/logo.png",
    "description": "Best Angular Training Institute in Hyderabad. Learn Angular framework from industry experts with hands-on projects, 100% placement assistance, and certification. Located in Hitech City, Madhapur, Hyderabad.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hitech City, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4486",
      "longitude": "78.3908"
    },
    "url": "https://sbritsolution.in/angular-training-in-hyderabad",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹16,999",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Angular Training in Hyderabad | Best Angular Course with Placement | SBRIT Solution",
    "description": "Master Angular framework with comprehensive training in Hyderabad. Learn from industry experts with hands-on projects, 100% placement assistance, and certification. Best Angular training institute in Hyderabad located in Hitech City, Madhapur.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "SBRIT Solution",
      "url": "https://sbritsolution.in",
      "logo": "https://sbritsolution.in/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+91-XXXXXXXXXX",
        "email": "bemes0112@gmail.com",
        "areaServed": "Hyderabad",
        "availableLanguage": ["English", "Hindi", "Telugu"]
      }
    },
    "courseCode": "ANGULAR-HYD-2024",
    "educationalLevel": "Beginner to Advanced",
    "inLanguage": "English",
    "teaches": [
      "Angular Framework",
      "TypeScript",
      "Component Architecture",
      "Services & Dependency Injection",
      "Routing & Navigation",
      "Forms & Validation",
      "HTTP Client & Observables",
      "State Management",
      "Testing",
      "Performance Optimization"
    ],
    "timeRequired": "P4M",
    "courseMode": "Online, Classroom, Hybrid",
    "offers": {
      "@type": "Offer",
      "price": "16999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "url": "https://sbritsolution.in/angular-training-in-hyderabad"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "maximumAttendeeCapacity": 30,
      "startDate": "2024-09-01",
      "location": {
        "@type": "Place",
        "name": "SBRIT Solution Hyderabad",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      }
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sbritsolution.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://sbritsolution.in/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Angular Training",
        "item": "https://sbritsolution.in/courses/angular"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Angular Training in Hyderabad",
        "item": "https://sbritsolution.in/angular-training-in-hyderabad"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the best Angular training institute in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SBRIT Solution is the best Angular training institute in Hyderabad, located in Hitech City, Madhapur. We offer comprehensive Angular training with industry experts, hands-on projects, 100% placement assistance, and certification. Our Angular course in Hyderabad covers everything from basics to advanced concepts."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee for Angular training in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Angular training course fee in Hyderabad is ₹16,999 with flexible EMI options starting from ₹1,420 per month. The course includes lifetime access, career guidance, placement assistance, and certification."
        }
      },
      {
        "@type": "Question",
        "name": "Is Angular training available in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer Angular training in Hyderabad with both classroom and online modes. Our training center is located in Hitech City, Madhapur, Hyderabad. We also offer weekend batches and weekday batches for your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of Angular training in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Angular training program in Hyderabad is a comprehensive 4-month course designed to make you a professional Angular developer. The course includes live training, hands-on projects, and real-world applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance for Angular training in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% placement assistance to all our Angular training students in Hyderabad. We help with resume building, interview preparation, mock interviews, and connecting you with top companies in Hyderabad like TCS, Infosys, Wipro, Tech Mahindra, and more."
        }
      },
      {
        "@type": "Question",
        "name": "What is the salary of Angular developer in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Angular developers in Hyderabad earn competitive salaries. Entry-level Angular developers can expect ₹6-10 LPA, mid-level developers (2-4 years) earn ₹10-20 LPA, senior developers (5+ years) earn ₹20-35 LPA, and tech leads can earn ₹35-55 LPA. With our Angular training and placement assistance, you can start your career as an Angular developer in Hyderabad."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Angular Training in Hyderabad | Best Angular Course with Placement | Hitech City | SBRIT Solution"
        description="🚀 Best Angular Training in Hyderabad - Master Angular framework at Hitech City, Madhapur. Learn Angular from industry experts with hands-on projects, 100% placement assistance, and certification. ✅ Live training ✅ Weekend batches ✅ Job guarantee. Enroll now for ₹16,999!"
        keywords="angular training in hyderabad, angular course hyderabad, best angular training hyderabad, angular training institute hyderabad, angular training hitech city, angular training madhapur, angular training with placement hyderabad, angular online training hyderabad, angular classroom training hyderabad, angular developer course hyderabad, angular certification hyderabad, learn angular hyderabad, angular training center hyderabad, angular weekend classes hyderabad, angular job oriented course hyderabad, angular corporate training hyderabad, angular bootcamp hyderabad, angular training institute in hyderabad, best angular institute hyderabad, top angular training hyderabad"
        url="https://sbritsolution.in/angular-training-in-hyderabad"
        type="article"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-red-600">Home</a></li>
              <li>/</li>
              <li><a href="/courses" className="hover:text-red-600">Courses</a></li>
              <li>/</li>
              <li><a href="/courses/angular" className="hover:text-red-600">Angular Training</a></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Hyderabad</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section - Location Specific */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Angular Training in Hyderabad | Best Angular Course | Hitech City, Madhapur
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Angular Framework in Hyderabad | TypeScript | Component Architecture | 100% Placement Assistance
              </p>
              <p className="text-lg mb-8 opacity-90">
                Join the <strong>best Angular training institute in Hyderabad</strong> located in <strong>Hitech City, Madhapur</strong>. 
                Learn Angular framework from industry experts with hands-on projects, live training, and certification. 
                <strong>Weekend batches</strong> and <strong>weekday batches</strong> available. <strong>100% placement assistance</strong> with top companies in Hyderabad.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Enroll Now - ₹16,999
                </button>
                <button 
                  onClick={() => navigate('/courses/angular')}
                  className="border-2 border-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  View Course Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Angular Training in Hyderabad */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Angular Training in Hyderabad at SBRIT Solution?</h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-gray-700 mb-8 text-lg">
                SBRIT Solution is the <strong>best Angular training institute in Hyderabad</strong>, located in the heart of <strong>Hitech City, Madhapur</strong>. 
                Our <strong>Angular training in Hyderabad</strong> is designed to make you a professional Angular developer with <strong>100% placement assistance</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg shadow-lg bg-red-50">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Prime Location</h3>
                  <p className="text-gray-600 text-sm">
                    Located in <strong>Hitech City, Madhapur, Hyderabad</strong> - the IT hub of Hyderabad. 
                    Easy access from all parts of the city with excellent connectivity.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg shadow-lg bg-blue-50">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Expert Trainers</h3>
                  <p className="text-gray-600 text-sm">
                    Learn from <strong>industry experts</strong> with 10+ years of experience in Angular development. 
                    Real-world experience from working on enterprise Angular applications.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg shadow-lg bg-green-50">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">100% Placement</h3>
                  <p className="text-gray-600 text-sm">
                    <strong>100% placement assistance</strong> with top companies in Hyderabad like <strong>TCS, Infosys, Wipro, Tech Mahindra, Cognizant</strong>, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Angular Training Center in Hyderabad</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">📍 Training Location</h3>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> Hitech City, Madhapur, Hyderabad, Telangana - 500081</p>
                    <p className="text-gray-700 mb-2"><strong>Area:</strong> Hitech City (IT Hub of Hyderabad)</p>
                    <p className="text-gray-700 mb-4"><strong>Nearby Landmarks:</strong> Close to major IT companies and tech parks</p>
                    
                    <h3 className="text-xl font-semibold mb-4 text-red-600 mt-6">📞 Contact Information</h3>
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91-XXXXXXXXXX</p>
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> bemes0112@gmail.com</p>
                    <p className="text-gray-700"><strong>Timings:</strong> Monday to Saturday, 9 AM to 7 PM</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">🎓 Training Modes</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span><strong>Classroom Training:</strong> In-person training at our Hitech City center</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span><strong>Online Training:</strong> Live interactive sessions from anywhere</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span><strong>Hybrid Mode:</strong> Combination of classroom and online</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span><strong>Weekend Batches:</strong> Saturday & Sunday classes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span><strong>Weekday Batches:</strong> Monday to Friday evening classes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Angular Training Course Details in Hyderabad</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Course Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Duration:</strong> 4 Months (Comprehensive Program)</li>
                    <li><strong>Mode:</strong> Classroom, Online, Hybrid</li>
                    <li><strong>Batches:</strong> Weekend & Weekday</li>
                    <li><strong>Fee:</strong> ₹16,999 (EMI from ₹1,420/month)</li>
                    <li><strong>Location:</strong> Hitech City, Madhapur, Hyderabad</li>
                    <li><strong>Certification:</strong> Industry-recognized certificate</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Angular Framework Fundamentals</li>
                    <li>• TypeScript Programming</li>
                    <li>• Component Architecture</li>
                    <li>• Services & Dependency Injection</li>
                    <li>• Routing & Navigation</li>
                    <li>• Forms & Validation</li>
                    <li>• HTTP Client & Observables</li>
                    <li>• State Management with NgRx</li>
                    <li>• Testing with Jasmine/Karma</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - Angular Training in Hyderabad</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Where is the best Angular training institute in Hyderabad?</h3>
                  <p className="text-gray-700">
                    SBRIT Solution is the <strong>best Angular training institute in Hyderabad</strong>, located in <strong>Hitech City, Madhapur</strong>. 
                    We offer comprehensive Angular training with industry experts, hands-on projects, 100% placement assistance, and certification. 
                    Our Angular course in Hyderabad covers everything from basics to advanced concepts including TypeScript, component architecture, routing, forms, HTTP client, state management, and more.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">What is the fee for Angular training in Hyderabad?</h3>
                  <p className="text-gray-700">
                    The Angular training course fee in Hyderabad is <strong>₹16,999</strong> with flexible EMI options starting from <strong>₹1,420 per month</strong>. 
                    The course includes lifetime access to course materials, career guidance, placement assistance, and certification. 
                    We also offer special discounts for early enrollment and group bookings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Is Angular training available in Hyderabad?</h3>
                  <p className="text-gray-700">
                    Yes, we offer <strong>Angular training in Hyderabad</strong> with both <strong>classroom and online modes</strong>. 
                    Our training center is located in <strong>Hitech City, Madhapur, Hyderabad</strong>. 
                    We offer <strong>weekend batches</strong> and <strong>weekday batches</strong> for your convenience. 
                    You can also choose <strong>hybrid mode</strong> (combination of online and classroom).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">What is the salary of Angular developer in Hyderabad?</h3>
                  <p className="text-gray-700">
                    Angular developers in Hyderabad earn competitive salaries. <strong>Entry-level Angular developers</strong> can expect <strong>₹6-10 LPA</strong>, 
                    <strong>mid-level developers</strong> (2-4 years) earn <strong>₹10-20 LPA</strong>, 
                    <strong>senior developers</strong> (5+ years) earn <strong>₹20-35 LPA</strong>, and 
                    <strong>tech leads</strong> can earn <strong>₹35-55 LPA</strong>. 
                    With our Angular training and placement assistance, you can start your career as an Angular developer in Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-red-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Angular Training in Hyderabad?</h2>
            <p className="text-xl mb-8">Join the best Angular training institute in Hyderabad and become a professional Angular developer!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Enroll Now - ₹16,999
              </button>
              <button 
                onClick={() => navigate('/courses/angular')}
                className="border-2 border-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Full Course Details
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">📍 Location: Hitech City, Madhapur, Hyderabad | 📞 Call: +91-XXXXXXXXXX</p>
          </div>
        </div>

        {/* Related Links */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Explore More Training Options in Hyderabad</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/training/react/hyderabad" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">React Training in Hyderabad</a>
              <a href="/training/java/hyderabad" className="bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-orange-700 font-medium transition-colors">Java Training in Hyderabad</a>
              <a href="/training/python/hyderabad" className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-lg text-yellow-700 font-medium transition-colors">Python Training in Hyderabad</a>
              <a href="/courses" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors">All Courses</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AngularTrainingHyderabad;

