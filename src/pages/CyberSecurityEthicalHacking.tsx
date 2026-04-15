import React from 'react';
import SEO from '../components/SEO';

const CyberSecurityEthicalHacking: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cyber Security & Ethical Hacking Training | Cybersecurity Course - SBRIT Solution"
        description="Learn cybersecurity fundamentals and ethical hacking techniques. Master network security, penetration testing, and security tools for protecting digital assets."
        keywords="cyber security training, ethical hacking course, cybersecurity certification, penetration testing, network security, security tools, information security, cyber defense"
        url="https://sbritsolution.in/courses/cyber-security-ethical-hacking"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cyber Security & Ethical Hacking
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Cybersecurity | Ethical Hacking | Network Security | Penetration Testing
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning - ₹27,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Cybersecurity */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Learn Cybersecurity?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">High Demand</h3>
                <p className="text-gray-600">Cybersecurity professionals are in extremely high demand with excellent salary packages and job security.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Protect Digital Assets</h3>
                <p className="text-gray-600">Learn to protect organizations from cyber threats and secure sensitive information.</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-gray-600">Pathway to advanced roles in security architecture, incident response, and security leadership.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cybersecurity Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Cybersecurity Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Cybersecurity Fundamentals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Introduction to Cybersecurity</li>
                    <li>• Security Principles & Concepts</li>
                    <li>• Threat Landscape & Attack Vectors</li>
                    <li>• Security Policies & Procedures</li>
                    <li>• Risk Assessment & Management</li>
                    <li>• Compliance & Regulations</li>
                    <li>• Security Architecture</li>
                    <li>• Incident Response Planning</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">Network Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Network Protocols & Security</li>
                    <li>• Firewall Configuration</li>
                    <li>• Intrusion Detection Systems</li>
                    <li>• VPN & Remote Access Security</li>
                    <li>• Wireless Network Security</li>
                    <li>• Network Monitoring & Analysis</li>
                    <li>• Security Information & Event Management</li>
                    <li>• Network Forensics</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Web Application Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• OWASP Top 10 Vulnerabilities</li>
                    <li>• SQL Injection Attacks</li>
                    <li>• Cross-Site Scripting (XSS)</li>
                    <li>• Authentication & Authorization</li>
                    <li>• Session Management</li>
                    <li>• Input Validation & Sanitization</li>
                    <li>• Secure Coding Practices</li>
                    <li>• Web Application Firewalls</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Penetration Testing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Penetration Testing Methodology</li>
                    <li>• Reconnaissance & Information Gathering</li>
                    <li>• Vulnerability Assessment</li>
                    <li>• Exploitation Techniques</li>
                    <li>• Post-Exploitation</li>
                    <li>• Social Engineering</li>
                    <li>• Physical Security Testing</li>
                    <li>• Report Writing & Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies You'll Master</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kali Linux</h3>
                <p className="text-gray-600 text-sm">Penetration testing platform with 600+ tools</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wireshark</h3>
                <p className="text-gray-600 text-sm">Network protocol analyzer for security analysis</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Metasploit</h3>
                <p className="text-gray-600 text-sm">Penetration testing framework for exploitation</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Nmap</h3>
                <p className="text-gray-600 text-sm">Network discovery and security auditing tool</p>
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
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Content</h3>
                <p className="text-gray-600 text-sm">80+ hours of structured learning with hands-on labs</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Virtual Labs</h3>
                <p className="text-gray-600 text-sm">Real-world penetration testing environments</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Certification</h3>
                <p className="text-gray-600 text-sm">Industry-recognized cybersecurity certificate</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg border">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">24/7 support from cybersecurity experts</p>
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
                <h3 className="text-xl font-semibold mb-4 text-red-600">Security Analyst</h3>
                <p className="text-gray-600 mb-4">Monitor and analyze security threats and incidents</p>
                <div className="text-sm text-gray-500">Average Salary: ₹6-12 LPA</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Penetration Tester</h3>
                <p className="text-gray-600 mb-4">Conduct security assessments and vulnerability testing</p>
                <div className="text-sm text-gray-500">Average Salary: ₹8-15 LPA</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Security Engineer</h3>
                <p className="text-gray-600 mb-4">Design and implement security solutions</p>
                <div className="text-sm text-gray-500">Average Salary: ₹10-18 LPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-red-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Defend Against Cyber Threats?</h2>
            <p className="text-xl mb-8">Join the cybersecurity professionals protecting digital assets worldwide</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Enroll Now - ₹27,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Download Course Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSecurityEthicalHacking;
