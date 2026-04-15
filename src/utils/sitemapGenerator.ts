import { courses, AVAILABLE_CITIES } from '../data';

// Generate XML sitemap
export const generateSitemapXML = () => {
  const baseUrl = 'https://sbritsolution.in';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/courses</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/training-centers</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

  // Add city-specific course pages
  AVAILABLE_CITIES.forEach(city => {
    sitemap += `
  <url>
    <loc>${baseUrl}/courses/${city.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add individual course pages
  courses.forEach(course => {
    sitemap += `
  <url>
    <loc>${baseUrl}/course/${course.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add training location pages
  AVAILABLE_CITIES.forEach(city => {
    courses.forEach(course => {
      sitemap += `
  <url>
    <loc>${baseUrl}/training/${course.id}/${city.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sbritsolution.in/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /courses/
Allow: /training-centers/
Allow: /course/
Allow: /training/
Allow: /about/
Allow: /contact/
Allow: /blog/

# Crawl delay
Crawl-delay: 1`;
};

// Generate structured data for courses
export const generateCourseStructuredData = (course: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.content,
    "provider": {
      "@type": "Organization",
      "name": "SBRIT Solution",
      "url": "https://sbritsolution.in"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": course.mode,
    "timeRequired": course.duration,
    "educationalLevel": "Beginner to Advanced",
    "inLanguage": "English",
    "teaches": course.topics.join(", "),
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": course.mode,
      "maximumAttendeeCapacity": course.batchSize,
      "startDate": course.date
    }
  };
};

// Generate structured data for organization
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SBRIT Solution",
    "url": "https://sbritsolution.in",
    "logo": "https://sbritsolution.in/mean%20stack%20sbr%20it%20solution.png",
    "description": "Professional IT Training Institute offering comprehensive courses in programming, web development, data science, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91-XXXXXXXXXX",
      "email": "info@sbritsolution.in"
    },
    "sameAs": [
      "https://www.facebook.com/sbritsolution",
      "https://twitter.com/sbritsolution",
      "https://www.linkedin.com/company/sbritsolution"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Training Courses",
      "itemListElement": courses.map(course => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": course.title,
          "description": course.content
        }
      }))
    }
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
