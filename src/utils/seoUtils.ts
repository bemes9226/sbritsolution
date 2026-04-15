import { AVAILABLE_CITIES } from '../data';

// Generate comprehensive SEO keywords for any course
export const generateCourseSEOKeywords = (courseTitle: string, courseId: string) => {
  const baseKeywords = [
    `${courseTitle.toLowerCase()} training`,
    `${courseTitle.toLowerCase()} course`,
    `${courseTitle.toLowerCase()} classes`,
    `${courseTitle.toLowerCase()} institute`,
    `${courseTitle.toLowerCase()} certification`,
    `best ${courseTitle.toLowerCase()} training`,
    `${courseTitle.toLowerCase()} programming course`,
    `${courseTitle.toLowerCase()} developer training`,
    `${courseTitle.toLowerCase()} bootcamp`,
    `${courseTitle.toLowerCase()} tutorial`,
    `learn ${courseTitle.toLowerCase()}`,
    `${courseTitle.toLowerCase()} training with placement`,
    `${courseTitle.toLowerCase()} job oriented course`,
    `${courseTitle.toLowerCase()} corporate training`,
    `${courseTitle.toLowerCase()} weekend classes`,
    `${courseTitle.toLowerCase()} online training`,
    `${courseTitle.toLowerCase()} classroom training`,
    `${courseTitle.toLowerCase()} hands on training`,
    `${courseTitle.toLowerCase()} project based training`,
    `${courseTitle.toLowerCase()} industrial training`,
    `${courseTitle.toLowerCase()} certification course`,
    `${courseTitle.toLowerCase()} professional training`,
    `${courseTitle.toLowerCase()} skill development`,
    `${courseTitle.toLowerCase()} career training`,
    `${courseTitle.toLowerCase()} placement assistance`,
    `${courseTitle.toLowerCase()} job guarantee`,
    `${courseTitle.toLowerCase()} industry training`,
    `${courseTitle.toLowerCase()} practical training`,
    `${courseTitle.toLowerCase()} expert training`,
    `${courseTitle.toLowerCase()} quality training`
  ];

  // Add city-specific keywords
  const cityKeywords = AVAILABLE_CITIES.flatMap(city => [
    `${courseTitle.toLowerCase()} training in ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} course ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} classes ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} institute ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} certification ${city.name.toLowerCase()}`,
    `best ${courseTitle.toLowerCase()} training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} programming course ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} developer training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} bootcamp ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} tutorial ${city.name.toLowerCase()}`,
    `learn ${courseTitle.toLowerCase()} ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} training with placement ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} job oriented course ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} corporate training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} weekend classes ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} classroom training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} hands on training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} project based training ${city.name.toLowerCase()}`,
    `${courseTitle.toLowerCase()} industrial training ${city.name.toLowerCase()}`
  ]);

  return [...baseKeywords, ...cityKeywords].join(', ');
};

// Generate SEO description for a course
export const generateCourseSEODescription = (courseTitle: string, courseContent: string) => {
  const cities = AVAILABLE_CITIES.map(city => city.name).join(', ');
  return `🚀 Master ${courseTitle} with SBRIT Solution's comprehensive training in ${cities}. ✅ Industry experts ✅ Hands-on projects ✅ 100% placement assistance ✅ Live projects ✅ Certification. Join ${courseTitle} course starting ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}. Enroll now for the best ${courseTitle} training institute! ${courseContent}`;
};

// Generate city-specific SEO keywords
export const generateCitySEOKeywords = (cityName: string) => {
  return [
    `IT training in ${cityName}`,
    `programming courses in ${cityName}`,
    `web development training in ${cityName}`,
    `Java training in ${cityName}`,
    `Python training in ${cityName}`,
    `React training in ${cityName}`,
    `Angular training in ${cityName}`,
    `Node.js training in ${cityName}`,
    `data science training in ${cityName}`,
    `cyber security training in ${cityName}`,
    `AWS training in ${cityName}`,
    `DevOps training in ${cityName}`,
    `software testing training in ${cityName}`,
    `placement assistance in ${cityName}`,
    `job oriented courses in ${cityName}`,
    `corporate training in ${cityName}`,
    `weekend classes in ${cityName}`,
    `online training in ${cityName}`,
    `classroom training in ${cityName}`,
    `hands on training in ${cityName}`,
    `project based training in ${cityName}`,
    `industrial training in ${cityName}`,
    `certification courses in ${cityName}`,
    `professional training in ${cityName}`,
    `skill development in ${cityName}`,
    `career training in ${cityName}`,
    `IT institute in ${cityName}`,
    `best IT training in ${cityName}`,
    `top IT institute in ${cityName}`,
    `IT courses with placement in ${cityName}`,
    `job guarantee courses in ${cityName}`,
    `industry training in ${cityName}`,
    `practical training in ${cityName}`,
    `expert training in ${cityName}`,
    `quality training in ${cityName}`
  ].join(', ');
};

// Generate city-specific SEO description
export const generateCitySEODescription = (cityName: string) => {
  return `🚀 Comprehensive IT training courses in ${cityName} by SBRIT Solution. ✅ Java, Python, React, Angular, Node.js, Data Science, Cyber Security, AWS, DevOps training. ✅ Industry experts ✅ Hands-on projects ✅ 100% placement assistance ✅ Live projects ✅ Certification. Join our courses starting ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}. Enroll now for the best IT training institute in ${cityName}!`;
};
