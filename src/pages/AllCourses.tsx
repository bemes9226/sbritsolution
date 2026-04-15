import React from 'react';
import SEO from '../components/SEO';

const AllCourses: React.FC = () => {
  const courseCategories = [
    {
      title: "Full Stack Development",
      courses: [
        { name: "Full Stack Java Developer Program", url: "/courses/full-stack-java", duration: "6 months", fee: "₹25,999" },
        { name: "Full Stack .NET Core", url: "/courses/full-stack-dotnet", duration: "5 months", fee: "₹22,999" },
        { name: "Full Stack Python", url: "/courses/full-stack-python", duration: "5 months", fee: "₹23,999" },
        { name: "UI Full Stack Web Development with React", url: "/courses/react-fullstack", duration: "4 months", fee: "₹20,999" },
        { name: "MEAN Stack", url: "/courses/mean", duration: "4 months", fee: "₹19,999" },
        { name: "MERN Stack", url: "/courses/mern", duration: "4 months", fee: "₹19,999" }
      ]
    },
    {
      title: "Programming Languages",
      courses: [
        { name: "java Online Training", url: "/courses/java", duration: "3 months", fee: "₹12,999" },
        { name: "Advanced Java", url: "/courses/advanced-java", duration: "2 months", fee: "₹10,999" },
        { name: "Java Real Time Projects", url: "/courses/java-projects", duration: "2 months", fee: "₹15,999" },
        { name: "Python Programming", url: "/courses/python", duration: "3 months", fee: "₹13,999" },
        { name: "Python for Data Science", url: "/courses/python-data-science", duration: "4 months", fee: "₹18,999" },
        { name: "C# .NET", url: "/courses/csharp-dotnet", duration: "3 months", fee: "₹14,999" },
        { name: "C Language", url: "/courses/c-language", duration: "2 months", fee: "₹8,999" }
      ]
    },
    {
      title: "Frontend Technologies",
      courses: [
        { name: "Angular Online Training", url: "/courses/angular", duration: "3 months", fee: "₹15,999" },
        { name: "React JS", url: "/courses/react", duration: "3 months", fee: "₹15,999" },
        { name: "HTML CSS JavaScript", url: "/courses/html-css-js", duration: "2 months", fee: "₹9,999" },
        { name: "Bootstrap", url: "/courses/bootstrap", duration: "1 month", fee: "₹5,999" },
        { name: "Next.js", url: "/courses/nextjs", duration: "2 months", fee: "₹12,999" }
      ]
    },
    {
      title: "Backend Technologies",
      courses: [
        { name: "Node.js", url: "/courses/nodejs", duration: "3 months", fee: "₹14,999" },
        { name: "Spring Framework", url: "/courses/spring", duration: "2 months", fee: "₹12,999" },
        { name: "Spring Boot Microservices", url: "/courses/spring-boot", duration: "3 months", fee: "₹16,999" },
        { name: "ASP.NET MVC", url: "/courses/asp-net-mvc", duration: "3 months", fee: "₹15,999" },
        { name: "Django with REST API", url: "/courses/django", duration: "3 months", fee: "₹16,999" },
        { name: "PHP with MySQL", url: "/courses/php-mysql", duration: "3 months", fee: "₹12,999" }
      ]
    },
    {
      title: "Database Technologies",
      courses: [
        { name: "SQL Server", url: "/courses/sql-server", duration: "2 months", fee: "₹10,999" },
        { name: "MySQL", url: "/courses/mysql", duration: "2 months", fee: "₹9,999" },
        { name: "MongoDB", url: "/courses/mongodb", duration: "2 months", fee: "₹11,999" },
        { name: "Database for SQL and PL/SQL", url: "/courses/oracle-db", duration: "3 months", fee: "₹13,999" }
      ]
    },
    {
      title: "Cloud Technologies",
      courses: [
        { name: "AWS Certification", url: "/courses/aws", duration: "3 months", fee: "₹18,999" },
        { name: "Azure Fundamentals AZ-900", url: "/courses/azure-fundamentals", duration: "2 months", fee: "₹14,999" },
        { name: "Azure Developer Associate AZ-204", url: "/courses/azure-developer", duration: "3 months", fee: "₹17,999" },
        { name: "Azure Administrator AZ-104", url: "/courses/azure-admin", duration: "3 months", fee: "₹17,999" },
        { name: "Azure DevOps AZ-400", url: "/courses/azure-devops", duration: "2 months", fee: "₹16,999" },
        { name: "MS Azure Data Factory", url: "/courses/azure-data-factory", duration: "2 months", fee: "₹15,999" },
        { name: "Azure Data Engineer", url: "/courses/azure-data-engineer", duration: "4 months", fee: "₹22,999" }
      ]
    },
    {
      title: "Data Science & AI",
      courses: [
        { name: "Full Stack Data Science AI", url: "/courses/data-science-ai", duration: "6 months", fee: "₹35,999" },
        { name: "Data Analytics", url: "/courses/data-analytics", duration: "4 months", fee: "₹24,999" },
        { name: "Machine Learning Operations (MLOps)", url: "/courses/mlops", duration: "3 months", fee: "₹19,999" },
        { name: "R Programming", url: "/courses/r-programming", duration: "2 months", fee: "₹12,999" },
        { name: "ChatGPT Training", url: "/courses/chatgpt", duration: "1 month", fee: "₹7,999" }
      ]
    },
    {
      title: "Testing & QA",
      courses: [
        { name: "Selenium Online Training", url: "/courses/selenium", duration: "3 months", fee: "₹14,999" },
        { name: "Manual Testing", url: "/courses/manual-testing", duration: "2 months", fee: "₹11,999" },
        { name: "Tosca", url: "/courses/tosca", duration: "2 months", fee: "₹16,999" },
        { name: "Software Testing Certification", url: "/courses/testing-certification", duration: "4 months", fee: "₹19,999" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      courses: [
        { name: "DevOps Certification Course", url: "/courses/devops", duration: "4 months", fee: "₹21,999" },
        { name: "Docker Kubernetes", url: "/courses/docker-kubernetes", duration: "2 months", fee: "₹15,999" },
        { name: "Terraform Associate Certification", url: "/courses/terraform", duration: "2 months", fee: "₹14,999" },
        { name: "Linux/Unix", url: "/courses/linux-unix", duration: "2 months", fee: "₹10,999" }
      ]
    },
    {
      title: "Mobile Development",
      courses: [
        { name: "Android Online Training", url: "/courses/android", duration: "4 months", fee: "₹17,999" },
        { name: "iPhone iOS Development", url: "/courses/ios", duration: "4 months", fee: "₹19,999" }
      ]
    },
    {
      title: "Business Intelligence",
      courses: [
        { name: "Power BI", url: "/courses/power-bi", duration: "2 months", fee: "₹12,999" },
        { name: "Power Apps", url: "/courses/power-apps", duration: "2 months", fee: "₹11,999" },
        { name: "Real Time Projects using Power BI", url: "/courses/power-bi-projects", duration: "1 month", fee: "₹8,999" }
      ]
    },
    {
      title: "Automation & RPA",
      courses: [
        { name: "UiPath", url: "/courses/uipath", duration: "2 months", fee: "₹16,999" },
        { name: "Blue Prism", url: "/courses/blue-prism", duration: "2 months", fee: "₹15,999" },
        { name: "Automation Anywhere", url: "/courses/automation-anywhere", duration: "2 months", fee: "₹15,999" }
      ]
    },
    {
      title: "CRM & ERP",
      courses: [
        { name: "Salesforce CRM", url: "/courses/salesforce-crm", duration: "3 months", fee: "₹18,999" },
        { name: "Salesforce LWC", url: "/courses/salesforce-lwc", duration: "2 months", fee: "₹16,999" }
      ]
    },
    {
      title: "Digital Marketing",
      courses: [
        { name: "Digital Marketing", url: "/courses/digital-marketing", duration: "3 months", fee: "₹14,999" },
        { name: "SEO Training", url: "/courses/seo", duration: "2 months", fee: "₹12,999" }
      ]
    },
    {
      title: "Big Data",
      courses: [
        { name: "Hadoop", url: "/courses/hadoop", duration: "3 months", fee: "₹17,999" }
      ]
    },
    {
      title: "Integration",
      courses: [
        { name: "MuleSoft", url: "/courses/mulesoft", duration: "2 months", fee: "₹16,999" }
      ]
    },
    {
      title: "Soft Skills",
      courses: [
        { name: "Spoken English", url: "/courses/spoken-english", duration: "3 months", fee: "₹8,999" },
        { name: "Advanced Spoken English", url: "/courses/advanced-spoken-english", duration: "2 months", fee: "₹6,999" }
      ]
    },
    {
      title: "Security",
      courses: [
        { name: "Cyber Security and Ethical Hacking", url: "/courses/cyber-security", duration: "4 months", fee: "₹24,999" }
      ]
    },
    {
      title: "Specialized Programs",
      courses: [
        { name: "Industry Mentor Guided Internship Program", url: "/courses/internship-program", duration: "6 months", fee: "₹29,999" },
        { name: "Data Structures & Algorithms using Java", url: "/courses/dsa-java", duration: "3 months", fee: "₹15,999" },
        { name: "Data Structures & Algorithms using C++", url: "/courses/dsa-cpp", duration: "3 months", fee: "₹15,999" }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="All IT Training Courses | Complete List of Programming & Technology Courses - SBRIT Solution"
        description="Explore our comprehensive list of IT training courses including Java, Python, Angular, React, AWS, Data Science, DevOps, Testing and more. Expert trainers, live projects, placement assistance."
        keywords="IT training courses, programming courses, java training, python training, angular training, react training, aws training, data science courses, devops training, software testing courses"
        url="https://sbritsolution.in/courses"
        type="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete IT Training Courses
              </h1>
              <p className="text-xl mb-8">
                Master the latest technologies with our comprehensive course catalog. 
                Expert trainers, live projects, and 100% placement assistance.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                  Browse All Courses
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Free Counseling
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            {courseCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">
                        {course.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600">
                          <span className="font-medium">Duration:</span> {course.duration}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Fee:</span> {course.fee}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={course.url}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex-1 text-center"
                        >
                          View Details
                        </a>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SBRIT Solution?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">100+ Courses</h3>
                <p className="text-gray-600 text-sm">Comprehensive curriculum covering all major technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="font-semibold mb-2">Expert Trainers</h3>
                <p className="text-gray-600 text-sm">Industry professionals with 10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Live Projects</h3>
                <p className="text-gray-600 text-sm">Hands-on experience with real-world projects</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold mb-2">Placement Support</h3>
                <p className="text-gray-600 text-sm">100% placement assistance with top companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Most Popular Courses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Java Training Online</h3>
                <p className="text-gray-600 mb-4">Complete Java programming course with placement guarantee</p>
                <a href="/java-training-online" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors inline-block">
                  Learn More
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Full Stack Data Science</h3>
                <p className="text-gray-600 mb-4">Master AI, ML, and data science with hands-on projects</p>
                <a href="/courses/data-science-ai" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors inline-block">
                  Learn More
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">AWS Certification</h3>
                <p className="text-gray-600 mb-4">Get AWS certified and boost your cloud career</p>
                <a href="/courses/aws" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded font-medium transition-colors inline-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your IT Career?</h2>
            <p className="text-xl mb-8">Choose from 100+ courses and get expert guidance to achieve your career goals!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Career Counseling
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call: +91-9876543210
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
