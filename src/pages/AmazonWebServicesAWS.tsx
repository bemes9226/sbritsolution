import React from 'react';
import SEO from '../components/SEO';

const AmazonWebServicesAWS: React.FC = () => {
  return (
    <>
      <SEO 
        title="Amazon Web Services (AWS) Training | AWS Cloud Computing Course - SBRIT Solution"
        description="Master AWS cloud services and prepare for AWS certifications. Learn cloud computing fundamentals, AWS services, and prepare for professional certifications."
        keywords="aws training, amazon web services course, aws certification, cloud computing, aws cloud, aws solutions architect, aws developer, aws sysops"
        url="https://sbritsolution.in/courses/amazon-web-services-aws"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Amazon Web Services (AWS)
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Cloud Computing | AWS Services | Cloud Architecture | AWS Certifications
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹24,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why AWS */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn AWS?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Market Leader</h3>
                <p className="text-gray-600">AWS is the world's leading cloud platform with 32% market share and growing rapidly.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">High Demand</h3>
                <p className="text-gray-600">AWS professionals are in extremely high demand with excellent salary packages worldwide.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-gray-600">Pathway to roles like Cloud Architect, DevOps Engineer, and Solutions Architect.</p>
              </div>
            </div>
          </div>
        </div>

        {/* AWS Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete AWS Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">AWS Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Introduction to Cloud Computing</li>
                    <li>• AWS Global Infrastructure</li>
                    <li>• AWS Account Setup & IAM</li>
                    <li>• AWS Pricing & Cost Management</li>
                    <li>• AWS Well-Architected Framework</li>
                    <li>• Security & Compliance</li>
                    <li>• AWS Support Plans</li>
                    <li>• AWS CLI & SDK</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-600">Compute Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amazon EC2 (Elastic Compute Cloud)</li>
                    <li>• EC2 Instance Types & Pricing</li>
                    <li>• Auto Scaling Groups</li>
                    <li>• Load Balancers (ALB, NLB, CLB)</li>
                    <li>• AWS Lambda (Serverless)</li>
                    <li>• Elastic Beanstalk</li>
                    <li>• Container Services (ECS, EKS)</li>
                    <li>• Batch Processing</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Storage & Database</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amazon S3 (Simple Storage Service)</li>
                    <li>• S3 Lifecycle & Versioning</li>
                    <li>• Amazon EBS (Elastic Block Store)</li>
                    <li>• Amazon RDS (Relational Database)</li>
                    <li>• Amazon DynamoDB (NoSQL)</li>
                    <li>• Amazon ElastiCache</li>
                    <li>• Amazon Redshift (Data Warehouse)</li>
                    <li>• Storage Gateway</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Networking & Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amazon VPC (Virtual Private Cloud)</li>
                    <li>• Subnets, Route Tables & Internet Gateway</li>
                    <li>• Security Groups & NACLs</li>
                    <li>• AWS Direct Connect</li>
                    <li>• Amazon CloudFront (CDN)</li>
                    <li>• AWS Certificate Manager</li>
                    <li>• AWS WAF & Shield</li>
                    <li>• AWS Secrets Manager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AWS Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AWS Services You'll Master</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">EC2</h3>
                <p className="text-gray-600 text-sm">Virtual servers in the cloud with flexible configuration</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">S3</h3>
                <p className="text-gray-600 text-sm">Object storage for data backup, archiving, and analytics</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lambda</h3>
                <p className="text-gray-600 text-sm">Serverless compute for event-driven applications</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">VPC</h3>
                <p className="text-gray-600 text-sm">Isolated cloud resources with network security</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Content</h3>
                <p className="text-gray-600 text-sm">100+ hours of structured learning with hands-on labs</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AWS Labs</h3>
                <p className="text-gray-600 text-sm">Real AWS environment for practical experience</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Certification Prep</h3>
                <p className="text-gray-600 text-sm">Prepare for AWS Solutions Architect certification</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">24/7 support from AWS certified experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Cloud Engineer</h3>
                <p className="text-gray-600 mb-4">Design and implement cloud infrastructure solutions</p>
                <div className="text-sm text-gray-500">Average Salary: ₹8-15 LPA</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
                <h3 className="text-xl font-semibold mb-4 text-yellow-600">DevOps Engineer</h3>
                <p className="text-gray-600 mb-4">Automate deployment and infrastructure management</p>
                <div className="text-sm text-gray-500">Average Salary: ₹10-18 LPA</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Solutions Architect</h3>
                <p className="text-gray-600 mb-4">Design scalable and secure cloud architectures</p>
                <div className="text-sm text-gray-500">Average Salary: ₹12-25 LPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master AWS Cloud?</h2>
            <p className="text-xl mb-8">Join millions of professionals building the future with AWS</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Enroll Now - ₹24,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Download Course Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmazonWebServicesAWS;
