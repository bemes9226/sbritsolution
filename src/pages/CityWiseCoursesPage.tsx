import React from 'react';
import { useParams } from 'react-router-dom';
import CityWiseCourses from '../components/CityWiseCourses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CityWiseCoursesPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <CityWiseCourses selectedCity={city} />
      </div>
      <Footer />
    </div>
  );
};

export default CityWiseCoursesPage;
