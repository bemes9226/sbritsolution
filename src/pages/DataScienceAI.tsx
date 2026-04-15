import React from 'react';
import SEO from '../components/SEO';

const DataScienceAI: React.FC = () => {
  return (
    <>
      <SEO 
        title="Full Stack Data Science & AI Course | Machine Learning Training with Placement - SBRIT Solution"
        description="Master Data Science, Machine Learning, and Artificial Intelligence with Python. Complete 6-month program with real projects, industry mentorship, and guaranteed placement assistance."
        keywords="data science course, machine learning training, artificial intelligence course, python data science, AI training, data analytics course, ML engineer training"
        url="https://sbritsolution.in/courses/data-science-ai"
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Full Stack Data Science & AI
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Master Machine Learning | Deep Learning | AI | Python | Real-World Projects
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Enroll Now - ₹35,999
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Data Science Program?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">AI & ML Mastery</h3>
                <p className="text-gray-600 text-sm">Deep learning, neural networks, and advanced algorithms</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Real Data Projects</h3>
                <p className="text-gray-600 text-sm">Work with industry datasets and solve business problems</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Industry Mentorship</h3>
                <p className="text-gray-600 text-sm">Learn from data scientists at top tech companies</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Placement Guarantee</h3>
                <p className="text-gray-600 text-sm">100% placement assistance with top companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Curriculum */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Data Science Curriculum</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">Foundation & Programming</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Python Programming & Advanced Concepts</li>
                    <li>• Statistics & Probability Theory</li>
                    <li>• Linear Algebra & Calculus for ML</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• SQL & Database Management</li>
                    <li>• Git Version Control</li>
                    <li>• Jupyter Notebooks & IDEs</li>
                    <li>• Data Ethics & Privacy</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Data Analysis & Visualization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• NumPy & Pandas for Data Manipulation</li>
                    <li>• Matplotlib & Seaborn Visualization</li>
                    <li>• Plotly & Interactive Dashboards</li>
                    <li>• Exploratory Data Analysis (EDA)</li>
                    <li>• Data Cleaning & Preprocessing</li>
                    <li>• Feature Engineering Techniques</li>
                    <li>• Time Series Analysis</li>
                    <li>• A/B Testing & Experimentation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Machine Learning</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supervised Learning Algorithms</li>
                    <li>• Unsupervised Learning & Clustering</li>
                    <li>• Scikit-learn & Model Building</li>
                    <li>• Model Evaluation & Validation</li>
                    <li>• Hyperparameter Tuning</li>
                    <li>• Ensemble Methods & Boosting</li>
                    <li>• Natural Language Processing (NLP)</li>
                    <li>• Computer Vision Basics</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">Deep Learning & AI</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Neural Networks & Backpropagation</li>
                    <li>• TensorFlow & Keras Framework</li>
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Recurrent Neural Networks (RNN/LSTM)</li>
                    <li>• Transfer Learning & Pre-trained Models</li>
                    <li>• Generative AI & Large Language Models</li>
                    <li>• MLOps & Model Deployment</li>
                    <li>• Cloud ML (AWS/Azure/GCP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">6-Month Learning Journey</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">Months 1-2: Foundation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Python Programming Mastery</li>
                    <li>• Statistics & Mathematics</li>
                    <li>• Data Analysis with Pandas</li>
                    <li>• Data Visualization</li>
                    <li>• SQL & Database Skills</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Months 3-4: Machine Learning</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• ML Algorithms Implementation</li>
                    <li>• Model Building & Evaluation</li>
                    <li>• Feature Engineering</li>
                    <li>• NLP & Text Analytics</li>
                    <li>• Real-world ML Projects</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Months 5-6: AI & Deployment</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Deep Learning & Neural Networks</li>
                    <li>• Computer Vision Projects</li>
                    <li>• MLOps & Model Deployment</li>
                    <li>• Capstone Project</li>
                    <li>• Interview Preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Projects */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real-World Industry Projects</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">Business Analytics Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🛒 E-commerce Customer Segmentation</li>
                  <li>📈 Sales Forecasting & Demand Planning</li>
                  <li>💳 Credit Risk Assessment Model</li>
                  <li>🏥 Healthcare Data Analytics</li>
                  <li>📱 Social Media Sentiment Analysis</li>
                  <li>🚗 Predictive Maintenance System</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">AI & Deep Learning Projects</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🖼️ Image Classification & Object Detection</li>
                  <li>🗣️ Speech Recognition System</li>
                  <li>🤖 Chatbot with Natural Language Processing</li>
                  <li>📊 Stock Price Prediction with LSTM</li>
                  <li>🎬 Movie Recommendation Engine</li>
                  <li>🔍 Fraud Detection System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Data Science Career Paths</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4">High-Demand Roles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data Scientist</li>
                    <li>• Machine Learning Engineer</li>
                    <li>• AI Research Scientist</li>
                    <li>• Data Analyst</li>
                    <li>• Business Intelligence Analyst</li>
                    <li>• MLOps Engineer</li>
                    <li>• Computer Vision Engineer</li>
                    <li>• NLP Specialist</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4">Salary Expectations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entry Level: ₹6-12 LPA</li>
                    <li>• Mid Level (2-4 yrs): ₹12-25 LPA</li>
                    <li>• Senior (5+ yrs): ₹25-50 LPA</li>
                    <li>• Principal DS: ₹50+ LPA</li>
                    <li>• FAANG Companies: ₹80+ LPA</li>
                    <li>• Freelancing: $50-150/hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Program Investment & Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-600">6 Months (Intensive Program)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Mode</h3>
                  <p className="text-gray-600">Live Online + Recorded Sessions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Batch Size</h3>
                  <p className="text-gray-600">Max 20 students for personalized attention</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-gray-600">₹35,999 (EMI starting ₹3,000/month)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Industry Certificate + Portfolio</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-gray-600">Lifetime career support & mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies You'll Master</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🐍</div>
                  <h4 className="font-semibold">Python</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold">Pandas</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🧠</div>
                  <h4 className="font-semibold">TensorFlow</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold">PyTorch</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">📈</div>
                  <h4 className="font-semibold">Matplotlib</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🗄️</div>
                  <h4 className="font-semibold">SQL</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">☁️</div>
                  <h4 className="font-semibold">AWS/Azure</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">📓</div>
                  <h4 className="font-semibold">Jupyter</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Data Science Expert?</h2>
            <p className="text-xl mb-8">Join the most comprehensive Data Science & AI program in India!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Enroll Now - ₹35,999
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book Free Demo Class
              </button>
            </div>
            <p className="mt-4 text-sm opacity-90">Next batch starts: 25th August 2024 | Only 5 seats remaining!</p>
          </div>
        </div>

        {/* Related Courses */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Data Courses</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/courses/python" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors">Python Programming</a>
              <a href="/courses/data-analytics" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-green-700 font-medium transition-colors">Data Analytics</a>
              <a href="/courses/mlops" className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 font-medium transition-colors">MLOps Training</a>
              <a href="/courses/aws" className="bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-orange-700 font-medium transition-colors">AWS for ML</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataScienceAI;
