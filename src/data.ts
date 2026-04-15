import angularLogo from './assets/angular.png';
import expressLogo from './assets/express.svg';
import nodejsLogo from './assets/nodejs.svg';
import meanStackLogoSBRITsolution from './assets/mean stack sbr it solution.png';
import reactLogo from './assets/react.svg';
import mongodbLogo from './assets/mongodb.svg';

// Get next week's date
const getNextWeekDate = () => {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  return nextWeek.toISOString().split('T')[0];
};

// Available cities for training
export const AVAILABLE_CITIES = [
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', address: 'Hitech City, Madhapur' },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', address: 'Electronic City, Phase 1' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', address: 'Andheri West, MIDC' },
  { id: 'delhi', name: 'Delhi', state: 'Delhi NCR', address: 'Cyber City, Gurgaon' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', address: 'Tidel Park, Taramani' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', address: 'Hinjewadi, Phase 1' },
  { id: 'noida', name: 'Noida', state: 'Uttar Pradesh', address: 'Sector 62, Noida' },
  { id: 'gurgaon', name: 'Gurgaon', state: 'Haryana', address: 'Cyber City, Gurgaon' }
];

// Generate SEO keywords for a course
const generateSEOKeywords = (courseTitle: string, courseId: string) => {
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

export const courses = [
  {
    id: 'core-java',
    title: 'Java',
    image: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
    content: 'Master Java programming fundamentals with OOP concepts, collections, multithreading, and exception handling.',
    price: 12999,
    date: getNextWeekDate(),
    agenda: 'Complete beginner-friendly Java course with hands-on projects and placement support.',
    topics: [
      'Java Fundamentals & OOP',
      'Collections Framework',
      'Exception Handling',
      'Multithreading',
      'File I/O Operations',
      'Generics & Annotations',
      'Lambda Expressions',
      'Streams API'
    ],
    testimonial: '"Core Java course gave me a solid foundation for my programming career!" – Ankit R.',
    availableCities: ['hyderabad', 'bangalore', 'mumbai', 'delhi', 'chennai', 'pune', 'noida', 'gurgaon'],
    seoKeywords: generateSEOKeywords('Core Java', 'core-java'),
    seoDescription: 'Master Core Java programming with comprehensive training in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon. Learn Java fundamentals, OOP concepts, and get placement assistance.',
    duration: '3 months',
    mode: 'Classroom & Online',
    batchSize: '15-20 students',
    certification: 'SBRIT Solution + Industry Certificate'
  },
  {
    id: 'full-stack-java',
    title: 'Full Stack Java',
    image: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
    content: 'Complete full-stack development with Java, Spring Boot, and modern frontend technologies.',
    price: 24999,
    date: getNextWeekDate(),
    agenda: 'Build enterprise-grade applications with Java backend and modern frontend.',
    topics: [
      'Core Java & Advanced Java',
      'Spring Framework & Spring Boot',
      'JPA & Hibernate',
      'RESTful APIs',
      'Frontend Technologies',
      'Database Design',
      'Microservices',
      'DevOps & Deployment'
    ],
    testimonial: '"Full Stack Java course helped me become a complete developer!" – Priya S.',
    availableCities: ['hyderabad', 'bangalore', 'mumbai', 'delhi', 'chennai', 'pune', 'noida', 'gurgaon'],
    seoKeywords: generateSEOKeywords('Full Stack Java', 'full-stack-java'),
    seoDescription: 'Complete Full Stack Java development training in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon. Learn Spring Boot, microservices, and modern frontend technologies.',
    duration: '6 months',
    mode: 'Classroom & Online',
    batchSize: '12-15 students',
    certification: 'SBRIT Solution + Spring Boot Certification'
  },
  {
    id: 'c-language',
    title: 'C Language',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    content: 'Learn C programming from basics to advanced concepts with hands-on coding practice.',
    price: 8999,
    date: getNextWeekDate(),
    agenda: 'Master C programming fundamentals for system programming and embedded development.',
    topics: [
      'C Basics & Syntax',
      'Data Types & Variables',
      'Control Structures',
      'Functions & Pointers',
      'Arrays & Strings',
      'Structures & Unions',
      'File Handling',
      'Memory Management'
    ],
    testimonial: '"C Language course made me understand programming at the core level!" – Ravi K.',
    availableCities: ['hyderabad', 'bangalore', 'mumbai', 'delhi', 'chennai', 'pune', 'noida', 'gurgaon'],
    seoKeywords: generateSEOKeywords('C Language', 'c-language'),
    seoDescription: 'Learn C programming fundamentals in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon. Master system programming and embedded development with hands-on practice.',
    duration: '2 months',
    mode: 'Classroom & Online',
    batchSize: '15-20 students',
    certification: 'SBRIT Solution + C Programming Certificate'
  },
  {
    id: 'html-css-javascript',
    title: 'HTML CSS JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    content: 'Complete web development foundation with HTML, CSS, and JavaScript.',
    price: 15999,
    date: getNextWeekDate(),
    agenda: 'Build responsive websites with modern HTML5, CSS3, and JavaScript ES6+.',
    topics: [
      'HTML5 Semantic Elements',
      'CSS3 Flexbox & Grid',
      'JavaScript ES6+',
      'DOM Manipulation',
      'Responsive Design',
      'Web APIs',
      'Modern JavaScript',
      'Project Development'
    ],
    testimonial: '"HTML CSS JavaScript course was the perfect start for my web development journey!" – Meena S.',
    availableCities: ['hyderabad', 'bangalore', 'mumbai', 'delhi', 'chennai', 'pune', 'noida', 'gurgaon'],
    seoKeywords: generateSEOKeywords('HTML CSS JavaScript', 'html-css-javascript'),
    seoDescription: 'Complete web development training with HTML, CSS, and JavaScript in Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Noida, and Gurgaon. Build responsive websites with modern technologies.',
    duration: '3 months',
    mode: 'Classroom & Online',
    batchSize: '15-20 students',
    certification: 'SBRIT Solution + Web Development Certificate'
  },
  {
    id: 'data-analytics-business-analytics',
    title: 'Data Analytics & Business Analytics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
    content: 'Transform data into actionable business insights with advanced analytics techniques.',
    price: 18999,
    date: getNextWeekDate(),
    agenda: 'Master data analysis, visualization, and business intelligence tools.',
    topics: [
      'Data Analysis Fundamentals',
      'Statistical Analysis',
      'Data Visualization',
      'Business Intelligence',
      'Predictive Analytics',
      'SQL & Database',
      'Excel Advanced',
      'Tableau & Power BI'
    ],
    testimonial: '"Data Analytics course helped me make data-driven decisions!" – Sara M.'
  },
  {
    id: 'full-stack-data-science-ai',
    title: 'Full Stack Data Science & AI',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    content: 'Complete data science and AI journey from data collection to model deployment.',
    price: 34999,
    date: getNextWeekDate(),
    agenda: 'Master the entire data science pipeline with machine learning and AI.',
    topics: [
      'Python for Data Science',
      'Statistics & Mathematics',
      'Machine Learning',
      'Deep Learning',
      'Data Engineering',
      'Model Deployment',
      'Big Data Technologies',
      'AI Applications'
    ],
    testimonial: '"Full Stack Data Science course opened doors to AI career!" – John D.'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    image: 'https://www.python.org/static/community_logos/python-logo.png',
    content: 'Learn Python programming for web development, data science, and automation.',
    price: 11999,
    date: getNextWeekDate(),
    agenda: 'Master Python from basics to advanced applications in various domains.',
    topics: [
      'Python Fundamentals',
      'OOP in Python',
      'Data Structures',
      'File Handling',
      'Web Development',
      'Data Science Libraries',
      'Automation & Scripting',
      'Project Development'
    ],
    testimonial: '"Python Programming course was comprehensive and practical!" – Alex T.'
  },
  {
    id: 'full-stack-python',
    title: 'Full Stack Python',
    image: 'https://www.python.org/static/community_logos/python-logo.png',
    content: 'Build complete web applications with Python backend and modern frontend.',
    price: 22999,
    date: getNextWeekDate(),
    agenda: 'Develop full-stack applications using Python frameworks and frontend technologies.',
    topics: [
      'Python Advanced',
      'Django Framework',
      'Flask Framework',
      'Database Integration',
      'RESTful APIs',
      'Frontend Integration',
      'Authentication & Security',
      'Deployment & DevOps'
    ],
    testimonial: '"Full Stack Python course made me a complete developer!" – Nisha P.'
  },
  {
    id: 'campus-recruitment-training',
    title: 'Campus Recruitment Training (CRT)',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    content: 'Prepare for campus placements with technical skills and interview preparation.',
    price: 15999,
    date: getNextWeekDate(),
    agenda: 'Comprehensive training for campus recruitment with technical and soft skills.',
    topics: [
      'Programming Fundamentals',
      'Data Structures & Algorithms',
      'Technical Interview Prep',
      'Soft Skills Development',
      'Resume Building',
      'Mock Interviews',
      'Aptitude Training',
      'Placement Support'
    ],
    testimonial: '"CRT program helped me crack my dream company placement!" – Rahul M.'
  },
  {
    id: 'cyber-security-ethical-hacking',
    title: 'Cyber Security & Ethical Hacking',
    image: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
    content: 'Learn cybersecurity fundamentals and ethical hacking techniques.',
    price: 27999,
    date: getNextWeekDate(),
    agenda: 'Master cybersecurity concepts and ethical hacking methodologies.',
    topics: [
      'Cybersecurity Fundamentals',
      'Network Security',
      'Web Application Security',
      'Penetration Testing',
      'Cryptography',
      'Security Tools',
      'Incident Response',
      'Security Certifications'
    ],
    testimonial: '"Cybersecurity course gave me skills to protect digital assets!" – Sneha G.'
  },
  {
    id: 'terraform-associate-certification',
    title: 'Terraform Associate Certification Training (003)',
    image: 'https://www.terraform.io/assets/images/logo-hashicorp.svg',
    content: 'Master Infrastructure as Code with Terraform and prepare for HashiCorp certification.',
    price: 18999,
    date: getNextWeekDate(),
    agenda: 'Learn Terraform for infrastructure automation and cloud management.',
    topics: [
      'Infrastructure as Code',
      'Terraform Basics',
      'Resource Management',
      'State Management',
      'Modules & Functions',
      'Cloud Providers',
      'Best Practices',
      'Certification Prep'
    ],
    testimonial: '"Terraform course helped me automate infrastructure deployment!" – Amit S.'
  },
  {
    id: 'full-stack-software-testing',
    title: 'Full Stack Software Testing',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995515.png',
    content: 'Comprehensive software testing covering manual and automation testing.',
    price: 19999,
    date: getNextWeekDate(),
    agenda: 'Master software testing methodologies and automation tools.',
    topics: [
      'Testing Fundamentals',
      'Manual Testing',
      'Automation Testing',
      'Selenium WebDriver',
      'API Testing',
      'Performance Testing',
      'Mobile Testing',
      'Test Management'
    ],
    testimonial: '"Software Testing course made me a quality assurance expert!" – Kavya S.'
  },
  {
    id: 'amazon-web-services-aws',
    title: 'Amazon Web Services (AWS)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    content: 'Master AWS cloud services and prepare for AWS certifications.',
    price: 24999,
    date: getNextWeekDate(),
    agenda: 'Learn AWS cloud computing and prepare for professional certifications.',
    topics: [
      'AWS Fundamentals',
      'Compute Services (EC2)',
      'Storage Services (S3)',
      'Database Services',
      'Networking & Security',
      'Serverless Computing',
      'DevOps on AWS',
      'Certification Prep'
    ],
    testimonial: '"AWS course helped me become a cloud expert!" – Sunil D.'
  },
  {
    id: 'asp-net-mvc',
    title: 'Asp. Net MVC 5 + MVC core 9.0',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
    content: 'Build modern web applications with ASP.NET MVC and .NET Core.',
    price: 21999,
    date: getNextWeekDate(),
    agenda: 'Master ASP.NET MVC for enterprise web development.',
    topics: [
      '.NET Framework & Core',
      'MVC Architecture',
      'Entity Framework',
      'Razor Views',
      'Authentication & Authorization',
      'Web APIs',
      'Performance Optimization',
      'Deployment'
    ],
    testimonial: '".NET MVC course helped me build scalable web applications!" – Priyanka L.'
  },
  {
    id: 'devops-with-aws',
    title: 'DevOps with AWS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    content: 'Learn DevOps practices and tools with AWS cloud integration.',
    price: 27999,
    date: getNextWeekDate(),
    agenda: 'Master DevOps methodologies and AWS cloud services.',
    topics: [
      'DevOps Fundamentals',
      'CI/CD Pipelines',
      'AWS DevOps Tools',
      'Infrastructure as Code',
      'Containerization',
      'Monitoring & Logging',
      'Security & Compliance',
      'Best Practices'
    ],
    testimonial: '"DevOps with AWS course transformed my deployment process!" – Ramesh V.'
  },
  {
    id: 'csharp-dotnet',
    title: 'C#.NET',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
    content: 'Master C# programming language and .NET framework development.',
    price: 16999,
    date: getNextWeekDate(),
    agenda: 'Learn C# for desktop, web, and mobile application development.',
    topics: [
      'C# Fundamentals',
      'Object-Oriented Programming',
      '.NET Framework',
      'Windows Forms',
      'WPF Applications',
      'LINQ & Collections',
      'Exception Handling',
      'Advanced C# Features'
    ],
    testimonial: '"C#.NET course helped me build powerful applications!" – Meena S.'
  },
  {
    id: 'full-stack-dotnet-core',
    title: 'Full Stack .NET Core',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
    content: 'Build modern full-stack applications with .NET Core and modern frontend.',
    price: 28999,
    date: getNextWeekDate(),
    agenda: 'Develop cross-platform applications with .NET Core and modern technologies.',
    topics: [
      '.NET Core Fundamentals',
      'ASP.NET Core',
      'Entity Framework Core',
      'Web APIs',
      'Frontend Integration',
      'Microservices',
      'Docker & Kubernetes',
      'Cloud Deployment'
    ],
    testimonial: '".NET Core course helped me build modern applications!" – Ankit R.'
  },
  {
    id: 'spring-boot-microservices',
    title: 'Spring Boot and Microservices',
    image: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
    content: 'Build scalable microservices applications with Spring Boot framework.',
    price: 22999,
    date: getNextWeekDate(),
    agenda: 'Master Spring Boot for microservices architecture and cloud-native applications.',
    topics: [
      'Spring Framework',
      'Spring Boot Basics',
      'Microservices Architecture',
      'RESTful APIs',
      'Database Integration',
      'Service Discovery',
      'API Gateway',
      'Containerization'
    ],
    testimonial: '"Spring Boot course helped me build scalable applications!" – Priya S.'
  },
  {
    id: 'full-stack-dotnet-placement',
    title: 'Full Stack .Net Placement Assistance Program',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
    content: 'Complete .NET full-stack development with guaranteed placement assistance.',
    price: 39999,
    date: getNextWeekDate(),
    agenda: 'Master .NET technologies with dedicated placement support and career guidance.',
    topics: [
      'C# Programming',
      'ASP.NET Core',
      'Frontend Technologies',
      'Database Design',
      'Cloud Services',
      'DevOps Practices',
      'Interview Preparation',
      'Placement Support'
    ],
    testimonial: '"Full Stack .NET program helped me secure a great job!" – Rahul M.'
  },
  {
    id: 'full-stack-java-placement',
    title: 'Full Stack Java Placement Assistance Program',
    image: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
    content: 'Complete Java full-stack development with guaranteed placement assistance.',
    price: 39999,
    date: getNextWeekDate(),
    agenda: 'Master Java technologies with dedicated placement support and career guidance.',
    topics: [
      'Core Java & Advanced Java',
      'Spring Framework',
      'Frontend Technologies',
      'Database Management',
      'Cloud Deployment',
      'DevOps Integration',
      'Interview Preparation',
      'Placement Support'
    ],
    testimonial: '"Full Stack Java program helped me land my dream job!" – Kavya S.'
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    image: 'https://seeklogo.com/images/P/power-bi-logo-0B8B6D42D8-seeklogo.com.png',
    content: 'Master Power BI for business intelligence and data visualization.',
    price: 14999,
    date: getNextWeekDate(),
    agenda: 'Learn to create interactive dashboards and reports with Power BI.',
    topics: [
      'Power BI Desktop',
      'Data Modeling',
      'DAX Language',
      'Visualizations',
      'Power BI Service',
      'Report Publishing',
      'Advanced Analytics',
      'Best Practices'
    ],
    testimonial: '"Power BI course helped me create amazing dashboards!" – Sara M.'
  },
  {
    id: 'ms-azure-azure-devops',
    title: 'MS Azure + Azure DevOps',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    content: 'Master Microsoft Azure cloud services and Azure DevOps for CI/CD.',
    price: 25999,
    date: getNextWeekDate(),
    agenda: 'Learn Azure cloud computing and DevOps practices with Microsoft tools.',
    topics: [
      'Azure Fundamentals',
      'Azure Compute Services',
      'Azure Storage & Database',
      'Azure DevOps',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Security',
      'Certification Prep'
    ],
    testimonial: '"Azure course helped me become a cloud professional!" – John D.'
  },
  {
    id: 'ui-full-stack-react',
    title: 'UI Full Stack Web Development with React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    content: 'Complete full-stack web development with React frontend and modern backend.',
    price: 29999,
    date: getNextWeekDate(),
    agenda: 'Build modern web applications with React and full-stack technologies.',
    topics: [
      'React Fundamentals',
      'Advanced React',
      'State Management',
      'Backend Development',
      'Database Integration',
      'API Development',
      'Deployment',
      'Performance Optimization'
    ],
    testimonial: '"UI Full Stack React course made me a complete web developer!" – Alex T.'
  },
  {
    id: 'angular',
    title: 'Angular Training',
    image: 'https://angular.io/assets/images/logos/angular/angular.png',
    content: 'Comprehensive Angular course covering fundamentals to advanced topics.',
    price: 12000,
    date: getNextWeekDate(),
    agenda: 'Learn Angular from basics to advanced concepts with hands-on projects.',
    topics: [
      'Components & Templates',
      'Data Binding',
      'Directives',
      'Services & Dependency Injection',
      'Routing',
      'Forms',
      'HTTP & Observables',
      'Testing'
    ],
    testimonial: '"This Angular course helped me land my first frontend job!" – Priya S.'
  },
  {
    id: 'react',
    title: 'React Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    content: 'Learn React from scratch, including hooks, context, and advanced patterns.',
    price: 11000,
    date: getNextWeekDate(),
    agenda: 'Master React for modern web development with real-world projects.',
    topics: [
      'JSX & Components',
      'Props & State',
      'Hooks',
      'Context API',
      'React Router',
      'Redux',
      'Testing'
    ],
    testimonial: '"The React training was clear and practical. Highly recommended!" – John D.'
  },
  {
    id: 'python',
    title: 'Python Training',
    image: 'https://www.python.org/static/community_logos/python-logo.png',
    content: 'Python essentials for data science, web, and automation.',
    price: 9000,
    date: getNextWeekDate(),
    agenda: 'Kickstart your Python journey for data, web, and automation.',
    topics: [
      'Syntax & Data Types',
      'Functions',
      'OOP in Python',
      'File Handling',
      'Libraries (NumPy, Pandas)',
      'Web with Flask',
      'Testing'
    ],
    testimonial: '"The best Python course for beginners!" – Sara M.'
  },
  {
    id: 'html',
    title: 'HTML Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    content: 'Start your web journey with HTML basics and best practices.',
    price: 3000,
    date: getNextWeekDate(),
    agenda: 'Build strong HTML foundations for web development.',
    topics: [
      'HTML Elements',
      'Forms',
      'Tables',
      'Semantic HTML',
      'Accessibility',
      'SEO Basics'
    ],
    testimonial: '"HTML training was beginner-friendly and clear." – Meena S.'
  },
  {
    id: 'css',
    title: 'CSS Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    content: 'Style your web pages with modern CSS techniques.',
    price: 4000,
    date: getNextWeekDate(),
    agenda: 'Learn CSS for beautiful, responsive web design.',
    topics: [
      'Selectors & Properties',
      'Box Model',
      'Flexbox',
      'Grid',
      'Animations',
      'Responsive Design'
    ],
    testimonial: '"Now I can make my sites look great!" – Alex T.'
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap Training',
    image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png',
    content: 'Rapidly build responsive sites with Bootstrap.',
    price: 5000,
    date: getNextWeekDate(),
    agenda: 'Use Bootstrap for fast, mobile-first web development.',
    topics: [
      'Bootstrap Grid',
      'Components',
      'Utilities',
      'Custom Themes',
      'Responsive Design',
      'Best Practices'
    ],
    testimonial: '"Bootstrap made layouts so much easier!" – Nisha P.'
  },
  {
    id: 'jquery',
    title: 'jQuery Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/JQuery_logo_text.svg',
    content: 'Simplify JavaScript with jQuery for dynamic web apps.',
    price: 6000,
    date: getNextWeekDate(),
    agenda: 'Master jQuery for DOM manipulation and effects.',
    topics: [
      'Selectors',
      'Events',
      'Animations',
      'AJAX',
      'Plugins',
      'Best Practices'
    ],
    testimonial: '"jQuery helped me add interactivity fast!" – Sunil D.'
  },
  {
    id: 'javascript',
    title: 'JavaScript Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    content: 'Core JavaScript for modern web development.',
    price: 7000,
    date: getNextWeekDate(),
    agenda: 'Learn JavaScript from basics to advanced ES6+ features.',
    topics: [
      'Variables & Data Types',
      'Functions',
      'DOM Manipulation',
      'ES6 Features',
      'Async JS',
      'APIs & Fetch',
      'Testing'
    ],
    testimonial: '"I finally understand JavaScript!" – Priyanka L.'
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    content: 'Utility-first CSS with Tailwind for rapid UI development.',
    price: 6000,
    date: getNextWeekDate(),
    agenda: 'Build beautiful UIs quickly with Tailwind CSS.',
    topics: [
      'Utility Classes',
      'Responsive Design',
      'Custom Themes',
      'Best Practices',
      'Integration with React',
      'Animations'
    ],
    testimonial: '"Tailwind made my workflow so much faster!" – Ramesh V.'
  },
  {
    id: 'typescript',
    title: 'TypeScript Training',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    content: 'Type-safe JavaScript with TypeScript for scalable apps.',
    price: 7000,
    date: getNextWeekDate(),
    agenda: 'Use TypeScript for robust, maintainable codebases.',
    topics: [
      'Types & Interfaces',
      'Generics',
      'Type Inference',
      'Classes & OOP',
      'TypeScript with React',
      'Tooling'
    ],
    testimonial: '"TypeScript improved my code quality!" – Sneha G.'
  },
  {
    id: 'nodejs',
    title: 'Node.js Training',
    image: 'https://nodejs.org/static/images/logo.svg',
    content: 'Backend development with Node.js and Express.',
    price: 8000,
    date: getNextWeekDate(),
    agenda: 'Build scalable backend apps with Node.js.',
    topics: [
      'Node.js Basics',
      'Modules',
      'Express.js',
      'REST APIs',
      'Middleware',
      'Database Integration',
      'Testing'
    ],
    testimonial: '"Node.js course was hands-on and practical!" – Amit S.'
  },
  {
    id: 'mean',
    title: 'MEAN Stack Training',
    image: meanStackLogoSBRITsolution,
    techLogos: [
      angularLogo,
      nodejsLogo,
      mongodbLogo,
      expressLogo
    ],
    content: 'Full-stack web development with MongoDB, Express, Angular, and Node.js.',
    price: 20000,
    date: getNextWeekDate(),
    agenda: 'Build scalable web apps using the complete MEAN stack.',
    topics: [
      'MongoDB Basics',
      'Express.js Fundamentals',
      'Angular Integration',
      'Node.js Backend',
      'RESTful APIs',
      'Authentication',
      'Deployment'
    ],
    testimonial: '"MEAN stack course gave me the confidence to build real projects!" – Kavya S.'
  },
  {
    id: 'mern',
    title: 'MERN Stack Training',
    image: meanStackLogoSBRITsolution,
    techLogos: [
      mongodbLogo,
      expressLogo,
      reactLogo,
      nodejsLogo
    ],
    content: 'Master MongoDB, Express, React, and Node.js for full-stack development.',
    price: 20000,
    date: getNextWeekDate(),
    agenda: 'Develop modern web apps with the MERN stack from scratch.',
    topics: [
      'MongoDB & Mongoose',
      'Express.js',
      'React Frontend',
      'Node.js Backend',
      'JWT Authentication',
      'API Integration',
      'Deployment'
    ],
    testimonial: '"MERN stack training was hands-on and industry-focused!" – Rahul M.'
  },
]; 