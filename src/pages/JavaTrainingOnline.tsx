import React from 'react';
import SEO from '../components/SEO';

const JavaTrainingOnline: React.FC = () => {
  return (
    <>
      <SEO 
        title="JAVA Training Online | Best Java Course with Placement Guarantee - SBRIT Solution"
        description="Learn Java programming online with expert trainers at SBRIT Solution. Complete Java training course with live projects, certification, and 100% placement assistance. Enroll now!"
        keywords="java training online, java course online, java programming training, java certification course, online java classes, java developer course, core java training, advanced java training, java with placement guarantee"
        url="https://sbritsolution.in/java-training-online"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                JAVA Training Online
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Java Programming with Expert Trainers | Live Projects | Certification | 100% Placement Guarantee
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Enroll Now - ₹15,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Java Training Online?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Placement Guarantee</h3>
                <p className="text-gray-600">Get guaranteed job placement with our extensive industry network and dedicated placement cell.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Trainers</h3>
                <p className="text-gray-600">Learn from industry experts with 10+ years of Java development experience.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Projects</h3>
                <p className="text-gray-600">Work on real-time projects to gain practical experience and build your portfolio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Java Course Curriculum</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Core Java Training</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Java Fundamentals & OOP Concepts</li>
                    <li>• Data Types, Variables & Operators</li>
                    <li>• Control Structures & Loops</li>
                    <li>• Arrays & String Handling</li>
                    <li>• Exception Handling</li>
                    <li>• Collections Framework</li>
                    <li>• Multithreading & Synchronization</li>
                    <li>• File I/O Operations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Advanced Java Training</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• JDBC & Database Connectivity</li>
                    <li>• Servlets & JSP</li>
                    <li>• Spring Framework & Spring Boot</li>
                    <li>• Hibernate ORM</li>
                    <li>• RESTful Web Services</li>
                    <li>• Microservices Architecture</li>
                    <li>• Maven & Build Tools</li>
                    <li>• JUnit Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Java Training Course Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">4-6 Months (Flexible Schedule)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode of Training</h3>
                  <p className="text-gray-600">Online Live Classes + Recorded Sessions</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Batch Timings</h3>
                  <p className="text-gray-600">Morning, Evening & Weekend Batches</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Course Fee</h3>
                  <p className="text-gray-600">₹15,999 (EMI Available)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Industry Recognized Certificate</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-gray-600">24/7 Technical Support & Doubt Clearing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Java Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">What is Java Programming?</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Java is a powerful, object-oriented programming language developed by Sun Microsystems (now Oracle). 
                  It's platform-independent, secure, and widely used for enterprise applications, web development, 
                  mobile apps (Android), and large-scale systems.
                </p>
                <h3 className="text-xl font-semibold mb-4">Why Learn Java?</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li>• High demand in job market</li>
                  <li>• Platform independence (Write Once, Run Anywhere)</li>
                  <li>• Strong memory management</li>
                  <li>• Extensive library support</li>
                  <li>• Used by top companies like Google, Amazon, Netflix</li>
                  <li>• Excellent career growth opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Is this Java training suitable for beginners?</h3>
                <p className="text-gray-700">Yes, our Java training online is designed for complete beginners. We start from basics and gradually move to advanced concepts.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Do you provide placement assistance?</h3>
                <p className="text-gray-700">Yes, we provide 100% placement assistance with our dedicated placement cell and industry partnerships.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">What is the duration of Java training?</h3>
                <p className="text-gray-700">The complete Java training course duration is 4-6 months, depending on your learning pace and batch schedule.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Will I get a certificate after completion?</h3>
                <p className="text-gray-700">Yes, you will receive an industry-recognized certificate upon successful completion of the Java training course.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Java Career?</h2>
            <p className="text-xl mb-8">Join thousands of successful Java developers who started their journey with us!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Enroll Now - ₹15,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call: +91-9876543210
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Limited Time Offer: Get 20% Discount on Early Bird Registration!</p>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Explore More IT Training Courses</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/python" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">Python Training</a>
              <a href="/courses/angular" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Angular Training</a>
              <a href="/courses/react" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">React Training</a>
              <a href="/courses/nodejs" className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-lg text-yellow-700 font-medium transition-colors">Node.js Training</a>
              <a href="/training/java/hyderabad" className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-red-700 font-medium transition-colors">Java Training Hyderabad</a>
              <a href="/blog" className="bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-lg text-indigo-700 font-medium transition-colors">IT Training Blog</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavaTrainingOnline;
