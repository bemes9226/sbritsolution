import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseDetail from "./pages/CourseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SEO from "./components/SEO";
import Chatbot from "./components/Chatbot";
import "./responsive.css";
import EnrollForm from "./pages/EnrollForm";
import Training from "./pages/Training";
import CourseCityTraining from "./pages/CourseCityTraining";
import Blog from './pages/Blog';
import SEOKeywords from './pages/SEOKeywords';
import JavaTrainingOnline from './pages/JavaTrainingOnline';
import FullStackJava from './pages/FullStackJava';
import AWSCertification from './pages/AWSCertification';
import DataScienceAI from './pages/DataScienceAI';
import CoreJava from './pages/CoreJava';
import PythonProgramming from './pages/PythonProgramming';
import HTMLCSSJavaScript from './pages/HTMLCSSJavaScript';
import PowerBI from './pages/PowerBI';
import CLanguage from './pages/CLanguage';
import DataAnalyticsBusinessAnalytics from './pages/DataAnalyticsBusinessAnalytics';
import CyberSecurityEthicalHacking from './pages/CyberSecurityEthicalHacking';
import AmazonWebServicesAWS from './pages/AmazonWebServicesAWS';
import FullStackPython from './pages/FullStackPython';
import SpringBootMicroservices from './pages/SpringBootMicroservices';
import UIFullStackReact from './pages/UIFullStackReact';
import CityWiseCoursesPage from './pages/CityWiseCoursesPage';
import TrainingCentersIndia from './pages/TrainingCentersIndia';
import Angular from './pages/Angular';
import AngularTrainingHyderabad from './pages/AngularTrainingHyderabad';
import AngularTrainingIndia from './pages/AngularTrainingIndia';
import "./index.css";

const NAV_HEIGHT = 80;

const App: React.FC = () => {
  return (
    <>
      <SEO
        title="SBRIT Solution - Professional IT Training Institute"
        description="Learn web development, programming, and IT skills with our expert-led courses. Get certified in MEAN Stack, MERN Stack, Angular, React, Node.js, and more."
        keywords="IT training, web development course, programming course, MEAN stack training, MERN stack training, Angular training, React training, Node.js training, JavaScript course, TypeScript course, IT certification, software development training, coding bootcamp, IT institute, professional training"
      />
      <div
        style={{ minHeight: "100vh", position: "relative", paddingBottom: 60 }}
      >
        <Navbar />
        <div style={{ paddingTop: NAV_HEIGHT }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/enroll" element={<EnrollForm />} />
            <Route path="/training/:city" element={<Training />} />
            <Route
              path="/training/:courseId/:city"
              element={<CourseCityTraining />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/seo-keywords" element={<SEOKeywords />} />
            <Route path="/java-training-online" element={<JavaTrainingOnline />} />
            {/* Training Centers page */}
            <Route path="/training-centers" element={<TrainingCentersIndia />} />
            {/* Redirect old courses path to new city-wise courses */}
            <Route path="/all-courses" element={<Navigate to="/courses" replace />} />
            {/* City-wise courses routes - must come before specific course routes */}
            <Route path="/courses" element={<CityWiseCoursesPage />} />
            <Route path="/courses/:city" element={<CityWiseCoursesPage />} />
            {/* Specific course detail routes */}
            <Route path="/courses/java" element={<CoreJava />} />
            <Route path="/courses/full-stack-java" element={<FullStackJava />} />
            <Route path="/courses/aws-certification" element={<AWSCertification />} />
            <Route path="/courses/data-science-ai" element={<DataScienceAI />} />
            <Route path="/courses/python" element={<PythonProgramming />} />
            <Route path="/courses/html-css-js" element={<HTMLCSSJavaScript />} />
            <Route path="/courses/power-bi" element={<PowerBI />} />
            <Route path="/courses/c-language" element={<CLanguage />} />
            <Route path="/courses/data-analytics-business-analytics" element={<DataAnalyticsBusinessAnalytics />} />
            <Route path="/courses/cyber-security-ethical-hacking" element={<CyberSecurityEthicalHacking />} />
            <Route path="/courses/amazon-web-services-aws" element={<AmazonWebServicesAWS />} />
            <Route path="/courses/full-stack-python" element={<FullStackPython />} />
            <Route path="/courses/spring-boot-microservices" element={<SpringBootMicroservices />} />
            <Route path="/courses/ui-full-stack-react" element={<UIFullStackReact />} />
            <Route path="/courses/angular" element={<Angular />} />
            <Route path="/angular-training-in-india" element={<AngularTrainingIndia />} />
            <Route path="/angular-training-in-hyderabad" element={<AngularTrainingHyderabad />} />
            {/* Generic course detail route - must come last */}
            <Route path="/course/:id" element={<CourseDetail />} />
              </Routes>
        </div>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
};

export default App;
