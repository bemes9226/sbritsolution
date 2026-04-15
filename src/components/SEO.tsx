import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "SBRIT Solution - Professional IT Training Institute",
  description = "Learn web development, programming, and IT skills with our expert-led courses. Get certified in MEAN Stack, MERN Stack, Angular, React, Node.js, and more.",
  keywords = "IT training, web development course, programming course, MEAN stack training, MERN stack training, Angular training, React training, Node.js training, JavaScript course, TypeScript course, IT certification, software development training, coding bootcamp, IT institute, professional training, Java training, Python training, data science training, cyber security training, AWS training, DevOps training, software testing training, placement assistance, job oriented courses, corporate training, weekend classes, online training, classroom training, hands on training, project based training, industrial training, certification courses, professional training, skill development, career training, IT institute, best IT training, top IT institute, IT courses with placement, job guarantee courses, industry training, practical training, expert training, quality training, Hyderabad IT training, Bangalore IT training, Mumbai IT training, Delhi IT training, Chennai IT training, Pune IT training, Noida IT training, Gurgaon IT training",
  image = "/logo.png",
  url = "https://sbritsolution.in",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SBRIT Solution",
    "url": url,
    "logo": `${url}${image}`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91-XXXXXXXXXX",
      "email": "info@sbritsolution.in",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": [
      "https://www.facebook.com/sbritsolution",
      "https://twitter.com/sbritsolution",
      "https://www.linkedin.com/company/sbritsolution"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "2000",
      "highPrice": "20000",
      "offerCount": "14"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SBRIT Solution" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Security Headers for XSS Protection */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Viewport is already set in index.html */}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SBRIT Solution" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content="@sbritsolution" />
      <meta name="twitter:creator" content="@sbritsolution" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#EF4444" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SBRIT Solution" />
      <meta name="application-name" content="SBRIT Solution" />
      <meta name="msapplication-TileColor" content="#EF4444" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 