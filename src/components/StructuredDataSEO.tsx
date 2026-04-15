import React from 'react';
import { generateCourseStructuredData, generateOrganizationStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData } from '../utils/sitemapGenerator';
import { courses } from '../data';

interface StructuredDataSEOProps {
  type: 'course' | 'organization' | 'breadcrumb' | 'faq';
  course?: any;
  breadcrumbs?: Array<{name: string, url: string}>;
  faqs?: Array<{question: string, answer: string}>;
}

const StructuredDataSEO: React.FC<StructuredDataSEOProps> = ({ 
  type, 
  course, 
  breadcrumbs = [], 
  faqs = [] 
}) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'course':
        return course ? generateCourseStructuredData(course) : null;
      case 'organization':
        return generateOrganizationStructuredData();
      case 'breadcrumb':
        return breadcrumbs.length > 0 ? generateBreadcrumbStructuredData(breadcrumbs) : null;
      case 'faq':
        return faqs.length > 0 ? generateFAQStructuredData(faqs) : null;
      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredDataSEO;
