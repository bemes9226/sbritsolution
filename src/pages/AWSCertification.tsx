import React from 'react';
import SEO from '../components/SEO';

const AWSCertification: React.FC = () => {
  return (
    <>
      <SEO 
        title="AWS Certification Training | Cloud Practitioner to Solutions Architect - SBRIT Solution"
        description="Master Amazon Web Services with our comprehensive AWS certification training. Get certified in AWS Cloud Practitioner, Solutions Architect, Developer Associate with hands-on labs and placement support."
        keywords="aws certification training, aws cloud practitioner, aws solutions architect, aws developer associate, amazon web services training, cloud computing course"
        url="https://sbritsolution.in/courses/aws"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AWS Certification Training
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Amazon Web Services | Get AWS Certified | Cloud Career Acceleration
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹18,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free AWS Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AWS Certifications Offered */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AWS Certification Paths</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Cloud Practitioner</h3>
                <p className="text-gray-600 text-center mb-4">Foundation level certification for cloud basics</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• AWS Cloud fundamentals</li>
                  <li>• Core services overview</li>
                  <li>• Pricing and billing</li>
                  <li>• Security basics</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Solutions Architect</h3>
                <p className="text-gray-600 text-center mb-4">Design and deploy scalable systems</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Architecture design</li>
                  <li>• High availability systems</li>
                  <li>• Cost optimization</li>
                  <li>• Security best practices</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Developer Associate</h3>
                <p className="text-gray-600 text-center mb-4">Build and deploy applications on AWS</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Application development</li>
                  <li>• API Gateway & Lambda</li>
                  <li>• Database services</li>
                  <li>• DevOps practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive AWS Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">Core AWS Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• EC2 - Elastic Compute Cloud</li>
                    <li>• S3 - Simple Storage Service</li>
                    <li>• VPC - Virtual Private Cloud</li>
                    <li>• RDS - Relational Database Service</li>
                    <li>• Lambda - Serverless Computing</li>
                    <li>• CloudFormation - Infrastructure as Code</li>
                    <li>• IAM - Identity and Access Management</li>
                    <li>• CloudWatch - Monitoring & Logging</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Advanced Topics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Auto Scaling & Load Balancing</li>
                    <li>• API Gateway & Microservices</li>
                    <li>• Container Services (ECS, EKS)</li>
                    <li>• DevOps with CodePipeline</li>
                    <li>• Security & Compliance</li>
                    <li>• Cost Optimization Strategies</li>
                    <li>• Disaster Recovery Planning</li>
                    <li>• Multi-Region Deployments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hands-on Labs */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Hands-on AWS Labs</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold mb-3 text-orange-700">Practical Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🚀 Deploy web applications on EC2</li>
                  <li>🗄️ Set up RDS databases with backups</li>
                  <li>🌐 Configure VPC with public/private subnets</li>
                  <li>⚡ Build serverless applications with Lambda</li>
                  <li>📊 Implement monitoring with CloudWatch</li>
                  <li>🔒 Configure security groups and IAM policies</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Real-World Scenarios</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🏢 Enterprise migration to AWS</li>
                  <li>📱 Mobile app backend on AWS</li>
                  <li>🛒 E-commerce platform deployment</li>
                  <li>📈 Auto-scaling web applications</li>
                  <li>💾 Data backup and recovery solutions</li>
                  <li>🔄 CI/CD pipeline implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Career Benefits */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AWS Career Opportunities</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">High-Demand Roles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AWS Cloud Engineer</li>
                    <li>• Solutions Architect</li>
                    <li>• DevOps Engineer</li>
                    <li>• Cloud Security Specialist</li>
                    <li>• Site Reliability Engineer</li>
                    <li>• Cloud Consultant</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Salary Growth</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹6-12 LPA</li>
                    <li>• Certified Professional: ₹12-20 LPA</li>
                    <li>• Senior Architect: ₹20-35 LPA</li>
                    <li>• Cloud Consultant: ₹35+ LPA</li>
                    <li>• 67% salary increase post-certification</li>
                    <li>• Global opportunities available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Details */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Training Program Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">3 Months (Flexible Schedule)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Training Mode</h3>
                  <p className="text-gray-600">Live Online Classes + AWS Lab Access</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">AWS Official Certification Preparation</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹18,999 (Includes AWS Credits)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Lab Access</h3>
                  <p className="text-gray-600">24/7 AWS Sandbox Environment</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-gray-600">Expert mentorship & career guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose AWS */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why AWS Certification?</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="font-semibold mb-2">Market Leader</h3>
                <p className="text-gray-600 text-sm">AWS holds 32% of cloud market share globally</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">High ROI</h3>
                <p className="text-gray-600 text-sm">Average 25-30% salary increase post-certification</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold mb-2">Global Recognition</h3>
                <p className="text-gray-600 text-sm">Recognized by companies worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-500 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Cloud Career?</h2>
            <p className="text-xl mb-8">Join thousands of AWS certified professionals!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start AWS Journey - ₹18,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book Free Consultation
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next AWS batch: 20th August 2024 | Early bird discount available!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Cloud Courses</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/azure-fundamentals" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">Azure Fundamentals</a>
              <a href="/courses/devops" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">DevOps Training</a>
              <a href="/courses/docker-kubernetes" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">Docker & Kubernetes</a>
              <a href="/courses/terraform" className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-lg text-yellow-700 font-medium transition-colors">Terraform Training</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSCertification;
