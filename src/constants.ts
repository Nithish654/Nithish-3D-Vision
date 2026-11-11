import { Project, Experience, Education, Certificate, SkillGroup, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', path: '#home' },
  { label: 'Journey', path: '#about' },
  { label: 'Arsenal', path: '#skills' },
  { label: 'Experience', path: '#experience' },
  { label: 'Showcase', path: '#projects' },
  { label: 'Credentials', path: '#certificates' },
  { label: 'Resume', path: '#resume' },
  { label: 'Connect', path: '#contact' },
];

export const HERO_DATA = {
  name: "NITHISH",
  title: "Creative Developer | AI & Data Enthusiast | Digital Experience Builder",
  headline: "I BUILD DIGITAL EXPERIENCES AT THE INTERSECTION OF CODE, AI & DESIGN.",
  subtext: "Electronics & Communication Engineering graduate specializing in real-time WebGL experiences, full-stack systems, generative AI integrations, and advanced data analytics.",
  location: "Tamil Nadu, India",
  coordinates: "13.0827° N, 80.2707° E",
  availability: "Available for high-impact roles & technical collaborations",
  email: "nithishjoshwa6@gmail.com",
  github: "https://github.com/nithish654",
  linkedin: "https://www.linkedin.com/in/nithish-v-j-551741250/",
  metrics: [
    { label: "Core Domains", value: "Full-Stack · AI · BI" },
    { label: "Verified Credentials", value: "22 Badges" },
    { label: "Engineering Degree", value: "B.E. ECE (7.6)" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'crm-analytics-dashboard',
    number: '01',
    title: 'CRM & Campaign Performance Analytics Dashboard',
    tagline: 'Enterprise Business Intelligence & Campaign Conversion Command Center',
    category: 'Data Analytics',
    description: 'Comprehensive business intelligence platform analyzing multi-channel webinar and CRM datasets. Engineered end-to-end data transformation pipelines, duplicate handling, missing-value imputation, lead distribution tracking, and dynamic KPI trend forecasting.',
    architectureDetails: [
      'Multi-channel webinar & CRM dataset cleansing and normalization',
      'Advanced duplicate identification and categorical variance reconciliation',
      'Calculated DAX measures and custom KPI metrics in Power BI',
      'Geographical conversion clustering and pipeline velocity analysis',
      'Automated executive reporting views for marketing ROI attribution'
    ],
    techStack: ['Power BI', 'Microsoft Excel', 'DAX', 'Data Modeling', 'Data Cleaning', 'Statistical Analysis'],
    image: '/src/assets/images/crm_analytics_dashboard_1794385166634.jpg',
    featured: true,
    metrics: [
      { label: 'Analysis Accuracy', value: '99.8%' },
      { label: 'Lead Funnel Stages', value: '5 Stages' },
      { label: 'Dashboard Views', value: 'Multi-Tab' }
    ]
  },
  {
    id: 'triptribe-ai',
    number: '02',
    title: 'TripTribe AI',
    tagline: 'AI-Powered Group Travel Intelligence & Collaborative Itinerary Platform',
    category: 'Generative AI',
    description: 'Next-generation group travel coordination platform powered by Generative AI. Features real-time AI destination descriptions, personalized multi-traveler preference synthesis, route intelligence, and collaborative travel group workspaces.',
    architectureDetails: [
      'Generative AI agent synthesizing individual preference vectors into cohesive itineraries',
      'Dynamic destination intelligence with local pricing and weather synthesis',
      'Real-time collaborative group travel planning workspaces',
      'Integrated geographic map routing and interactive destination previews'
    ],
    techStack: ['Generative AI', 'React.js', 'Node.js', 'AI APIs', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://triptribe-ai-india-s-group-travel-platform.ai.studio/',
    githubLink: 'https://github.com/nithish654',
    image: '/src/assets/images/triptribe_travel_ai_1794385168999.jpg',
    featured: true,
    metrics: [
      { label: 'Group Synergy', value: 'Adaptive' },
      { label: 'Intelligence Engine', value: 'Gemini AI' },
      { label: 'Deployment', value: 'Live' }
    ]
  },
  {
    id: 'gitguard-ai',
    number: '03',
    title: 'GitGuard AI',
    tagline: 'Automated GitHub Repository Health & Security Telemetry Console',
    category: 'Full Stack',
    description: 'DevSecOps telemetry dashboard engineered to monitor GitHub repository health, automate security risk analysis, visualize dependency vulnerabilities, and track team commit activity in real time.',
    architectureDetails: [
      'GitHub REST API integration for multi-repository telemetry aggregation',
      'Automated code smell and vulnerability pattern heuristics',
      'Branch hygiene and PR merge latency tracking metrics',
      'Interactive risk level heatmaps with security advisory feeds'
    ],
    techStack: ['React.js', 'Node.js', 'GitHub API', 'Express', 'Tailwind CSS', 'Chart.js'],
    githubLink: 'https://github.com/nithish654',
    image: '/src/assets/images/gitguard_security_ai_1794385167925.jpg',
    featured: true,
    metrics: [
      { label: 'Audit Scope', value: 'Repo Health' },
      { label: 'API Integration', value: 'GitHub v3' },
      { label: 'Security Feed', value: 'Real-time' }
    ]
  },
  {
    id: 'bugnexus-ai',
    number: '04',
    title: 'BugNexus AI',
    tagline: 'Intelligent Automated QA Testing & Functional Defect Detection Engine',
    category: 'Generative AI',
    description: 'Full-stack automated QA platform that inspects web endpoints, executes headless automated functional sweeps, identifies UI defects using AI vision heuristics, and compiles structured testing reports.',
    architectureDetails: [
      'Dynamic URL inspection and headless browser crawling orchestrator',
      'AI-based anomaly and layout displacement detection logic',
      'Instant test result compilation with visual defect capture',
      'Structured regression test exports with severity classification'
    ],
    techStack: ['React.js', 'Node.js', 'AI APIs', 'Puppeteer', 'Automated QA', 'REST APIs'],
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/BugNexus/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    featured: true,
    metrics: [
      { label: 'Inspection Speed', value: '< 45s' },
      { label: 'Defect Accuracy', value: 'High' },
      { label: 'Report Format', value: 'Executive' }
    ]
  },
  {
    id: 'campuscorex',
    number: '05',
    title: 'CampusCoreX',
    tagline: 'Enterprise Academic Operations & Institutional Management CRM',
    category: 'Full Stack',
    description: 'Unified institutional operations platform managing student lifecycle records, parental communication, faculty course allocation, biometric attendance aggregation, fee management, and examination analytics.',
    architectureDetails: [
      'Role-based access control (Student, Parent, Faculty, Admin roles)',
      'Automated attendance tracking and scholastic grading calculation',
      'Modular fee invoicing and milestone receipt tracking',
      'Timetable scheduling algorithm with classroom conflict resolution'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Node.js', 'Supabase', 'TypeScript'],
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/CampusCoreX/',
    image: 'https://media.istockphoto.com/id/1159030397/vector/vector-of-a-child-a-boy-looking-at-the-stairs-leading-to-the-door-of-modern-digital-world.jpg?s=612x612&w=0&k=20&c=cPMvHwuxLy3rWZaHzhiXY_TFZXkl0KGp-wHGFA8vak4=',
    featured: true,
    metrics: [
      { label: 'Stakeholder Roles', value: '4 Tiers' },
      { label: 'Core Modules', value: '12 Systems' },
      { label: 'Interface', value: 'SPA' }
    ]
  },
  {
    id: 'fitencyclo',
    number: '06',
    title: 'FitEncyclo / Fitbuddy',
    tagline: 'Holistic Biometric Fitness & Nutrition Optimization Dashboard',
    category: 'Applications',
    description: 'Interactive health telemetry web application providing adaptive workout planning, macronutrient meal engineering, hydration calculation, and dynamic fitness progression tracking.',
    architectureDetails: [
      'Interactive metabolic rate & BMI calibration calculator',
      'Segmented workout routine database with muscle group targeting',
      'Dynamic hydration goal tracker with visual intake metrics',
      'Persistent local biometric tracking and responsive UI'
    ],
    techStack: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/FitEncyclo/',
    image: 'https://t4.ftcdn.net/jpg/01/14/80/25/360_F_114802596_jo16wrf2ByFzfHQOMmU2Edgc0IlYhSuH.jpg',
    metrics: [
      { label: 'Nutrition Calculators', value: '4 Engines' },
      { label: 'Workout Guides', value: 'Full Body' }
    ]
  },
  {
    id: 'indikart',
    number: '07',
    title: 'IndiKart E-Commerce Platform',
    tagline: 'Modern High-Performance Digital Retail & Cart Management System',
    category: 'Full Stack',
    description: 'High-performance e-commerce frontend architecture with real-time product filtering, multi-category catalogs, persistent shopping cart management, and fluid checkout interaction flows.',
    architectureDetails: [
      'Centralized Redux state management for global cart inventory',
      'Multi-facet filter controls by price, rating, and category',
      'Optimized product showcase with responsive image layouts',
      'Cart summary calculation with discount logic and checkout validation'
    ],
    techStack: ['React.js', 'Redux', 'Bootstrap', 'JavaScript', 'REST APIs'],
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/IndiKart/',
    image: 'https://media.istockphoto.com/id/1471521270/photo/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping-increasing.jpg?s=612x612&w=0&k=20&c=cxRKLCrn4mNrZlnsc7m5ANBB0pRfB3YaBsfHkuj8HAg=',
    metrics: [
      { label: 'State Management', value: 'Redux' },
      { label: 'Cart Latency', value: '< 10ms' }
    ]
  },
  {
    id: 'jukebox-database-app',
    number: '08',
    title: 'Jukebox Application & Music Database',
    tagline: 'Relational Database Architecture & Media Catalog System',
    category: 'Applications',
    description: 'Comprehensive music library and playlist engineering application backed by structured relational SQL schemas, media indexing, and playlist queue management.',
    architectureDetails: [
      'Relational schema design with normalized tables for artists, albums, tracks, and playlists',
      'Complex SQL query optimizations for fast sorting, search, and aggregations',
      'CRUD capabilities for personalized playlist curation',
      'Audio player controls with playback state synchronization'
    ],
    techStack: ['Java', 'SQL', 'Relational DB', 'Database Design', 'JavaScript'],
    githubLink: 'https://github.com/nithish654',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Database Schema', value: '3NF Relational' },
      { label: 'Query Latency', value: 'Optimized' }
    ]
  },
  {
    id: 'photonic-spr-sensor',
    number: '09',
    title: 'Dual-Core D-Shaped Photonic Crystal Fiber SPR Sensor',
    tagline: 'Nanoscale Optical Physics Simulation & Refractive Index Sensing Research',
    category: 'Research & Hardware',
    description: 'Engineering research investigation into Surface Plasmon Resonance (SPR) sensing utilizing a dual-core D-shaped photonic crystal fiber (PCF). Analyzed refractive index variation of biological and chemical analytes via Finite Element Method (FEM) simulations.',
    architectureDetails: [
      'Finite Element Method (FEM) boundary condition modeling',
      'Surface Plasmon Polariton (SPP) resonance mode coupling analysis',
      'Gold thin-film plasmonic layer optimization for maximum refractive sensitivity',
      'Birefringence and propagation loss calculation across near-infrared wavelengths'
    ],
    techStack: ['Surface Plasmon Resonance', 'Photonic Crystal Fiber', 'Optical Physics', 'Finite Element Method', 'Simulation'],
    image: '/src/assets/images/photonic_spr_sensor_1794385167432.jpg',
    featured: true,
    metrics: [
      { label: 'Sensing Principle', value: 'SPR Optical' },
      { label: 'Sensitivity', value: 'High-Precision' },
      { label: 'Design Structure', value: 'Dual-Core D-Shape' }
    ]
  },
  {
    id: 'lora-communication',
    number: '10',
    title: 'LoRa-Based Long-Range Agricultural Telemetry',
    tagline: 'Low-Power IoT Telemetry Network for Precision Environmental Monitoring',
    category: 'Research & Hardware',
    description: 'Engineered a long-range wireless sensor node system using LoRa radio frequency protocol to transmit environmental soil moisture, humidity, and temperature data across agricultural fields without cellular dependencies.',
    architectureDetails: [
      'Low-power microcontroller firmware with deep sleep cycles',
      'LoRa RF modulation for 5km+ line-of-sight packet transmission',
      'Sensor calibration for capacitive soil moisture and ambient humidity',
      'Base station receiver logging data packets for agricultural analysis'
    ],
    techStack: ['LoRa RF', 'IoT Hardware', 'Microcontrollers', 'Embedded C', 'Sensors'],
    image: 'https://www.vhv.rs/dpng/d/544-5447876_riot-weblogos-03-lora-logo-hd-png-download.png',
    metrics: [
      { label: 'Transmission Range', value: '5+ km' },
      { label: 'Power Profile', value: 'Ultra-Low' }
    ]
  },
  {
    id: 'sos-safety-helmet',
    number: '11',
    title: 'Intelligent Crash Detection SOS Helmet',
    tagline: 'Embedded IoT Emergency Response & Accident Alerting System',
    category: 'Research & Hardware',
    description: 'Smart rider safety helmet incorporating impact accelerometers, microcontrollers, and GSM/GPS telemetry to detect high-G impacts and instantly broadcast emergency coordinates to first responders.',
    architectureDetails: [
      'High-G threshold impact detection via multi-axis accelerometer sensors',
      'GPS satellite triangulation for accurate emergency coordinate retrieval',
      'GSM cellular automated SMS dispatch with Google Maps emergency links',
      'Manual cancellation buffer period to prevent false positive triggers'
    ],
    techStack: ['Arduino', 'GSM Module', 'GPS Telemetry', 'Embedded C', 'Sensors'],
    image: 'https://justtotaltech.com/wp-content/uploads/2021/03/images-42.jpeg',
    metrics: [
      { label: 'Alert Trigger', value: 'Instant (< 5s)' },
      { label: 'Telemetry', value: 'GPS + GSM' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'analytics-avenue',
    role: 'Data Analytics Trainee & Intern',
    company: 'Analytics Avenue',
    location: 'Chennai, India',
    duration: 'July 2026 – Present',
    type: 'Internship',
    period: 'Current Experience',
    description: [
      'Undergoing comprehensive, practical training in Python, SQL, Statistics, Microsoft Excel, and Power BI.',
      'Performing end-to-end data cleaning, structural transformations, outlier detection, and missing-data imputation on complex business datasets.',
      'Conducting Exploratory Data Analysis (EDA) to uncover operational bottlenecks, seasonal conversion cycles, and customer churn drivers.',
      'Architecting interactive Power BI executive dashboards featuring calculated DAX measures, dynamic drill-through filters, and KPI cards.',
      'Translating multi-source raw business data into actionable strategic recommendations for executive stakeholders.'
    ],
    techStack: ['Python', 'SQL', 'Power BI', 'Microsoft Excel', 'Statistics', 'Exploratory Data Analysis', 'Data Cleaning', 'DAX'],
    impactPoints: [
      'Cleaned and transformed enterprise CRM & webinar datasets with zero integrity loss',
      'Engineered automated Power BI KPI dashboards reducing manual reporting hours',
      'Developed statistical models for lead distribution and campaign trend identification'
    ]
  },
  {
    id: 'zaalima',
    role: 'Full Stack Developer Intern',
    company: 'Zaalima Pvt. Ltd.',
    location: 'Remote / Hybrid',
    duration: 'April 2026 – July 2026 (4 Months)',
    type: 'Internship',
    period: '2026',
    description: [
      'Developed production full-stack web applications utilizing React.js, Node.js, and Express.',
      'Integrated AI-powered APIs to automate user workflows, intelligent recommendation feeds, and dynamic content generation.',
      'Collaborated closely across frontend implementation and backend API routes to minimize serialization overhead and improve TTFB.',
      'Enhanced UI/UX responsiveness with Tailwind CSS, ensuring smooth rendering across mobile and desktop viewports.',
      'Participated actively in agile sprints, daily scrums, code reviews, and Git-based collaborative workflows.'
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'AI APIs', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'Git'],
    impactPoints: [
      'Integrated intelligent AI API workflows increasing user feature adoption',
      'Refactored legacy UI components into reusable, modular component libraries',
      'Optimized backend REST endpoints for faster data retrieval'
    ]
  },
  {
    id: 'retech',
    role: 'Java Full Stack Developer Intern',
    company: 'Retech Pvt. Ltd.',
    location: 'West Tambaram, Chennai',
    duration: 'March 2025 – May 2025 (3 Months)',
    type: 'Internship',
    period: '2025',
    description: [
      'Completed rigorous hands-on Java Full Stack Development training covering OOP principles, collections, and multi-threading.',
      'Developed and engineered a responsive Digital Clock Application with precision interval timing and custom styling.',
      'Executed core application development, comprehensive unit testing, debugging, and cross-browser defect resolution.',
      'Gained deep exposure to real-world corporate development lifecycles, structured repository branching, and agile delivery.'
    ],
    techStack: ['Java', 'Object-Oriented Programming', 'Frontend Development', 'Application Debugging', 'Unit Testing'],
    impactPoints: [
      'Constructed standalone Java & Frontend utilities with robust error handling',
      'Improved application stability through systematic debugging and regression testing'
    ]
  },
  {
    id: 'nsic',
    role: 'App Developer Intern',
    company: 'National Small Industries Corporation (NSIC)',
    location: 'Chennai, India',
    duration: 'June 2024 – July 2024 (1 Month)',
    type: 'Internship',
    period: '2024',
    description: [
      'Acquired practical experience in enterprise software development and relational database management.',
      'Worked with core Java, SQL queries, and frontend interfaces to build, debug, and enhance business application modules.',
      'Sharpened debugging, query optimization, and problem-solving skills while ensuring a seamless user experience.'
    ],
    techStack: ['Java', 'SQL', 'Database Management', 'Frontend Technologies', 'Debugging'],
    impactPoints: [
      'Executed database queries and table schema optimizations for management modules',
      'Strengthened foundational enterprise application development practices'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'be-ece',
    institution: "St. Joseph's Institute of Technology",
    year: '2021 – 2025',
    degree: 'B.E. Electronics and Communication Engineering',
    grade: 'CGPA: 7.6 / 10',
    description: [
      'Comprehensive engineering foundation covering embedded systems, microprocessors, digital signal processing, optical communication, and computing architecture.',
      'Conducted undergraduate research in Surface Plasmon Resonance (SPR) sensing with photonic crystal fibers.',
      'Actively bridged hardware-software convergence through IoT sensor networks and full-stack software development.'
    ],
    achievements: [
      'Published research work on Dual-Core D-Shaped PCF SPR Sensors',
      'Built IoT LoRa agricultural telemetry and smart helmet emergency systems'
    ]
  },
  {
    id: 'hsc',
    institution: "St. Joseph’s Hr. Sec. School, Chengalpattu",
    year: '2020 – 2021',
    degree: 'Higher Secondary Certificate (HSC)',
    grade: 'Score: 81%',
    description: [
      'Specialized in Mathematics, Physics, Chemistry, and Computer Science.',
      'Developed early passion for algorithms, computational logic, and electronic devices.'
    ]
  },
  {
    id: 'sslc',
    institution: "St. Joseph’s Hr. Sec. School, Chengalpattu",
    year: '2018 – 2019',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    grade: 'Score: 77%',
    description: [
      'Strong academic foundation across mathematics, science, and foundational technology education.'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming & Logic',
    description: 'Core languages utilized for system logic, algorithms, scripting, and data manipulation.',
    skills: [
      { name: 'Python', highlight: true, note: 'Data analysis, AI scripting, EDA' },
      { name: 'Java', highlight: true, note: 'OOP, backend systems, enterprise patterns' },
      { name: 'JavaScript (ES6+)', highlight: true, note: 'Async DOM, Web APIs, modern syntax' },
      { name: 'TypeScript', highlight: true, note: 'Type safety, scalable client architectures' },
      { name: 'SQL', highlight: true, note: 'Relational querying, schema design, joins' },
    ]
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern component architectures, design systems, and responsive user interfaces.',
    skills: [
      { name: 'React.js', highlight: true, note: 'Hooks, context, state orchestration' },
      { name: 'Tailwind CSS', highlight: true, note: 'Utility-first modern responsive styling' },
      { name: 'HTML5 Semantic', highlight: false, note: 'Accessible structure & DOM standards' },
      { name: 'CSS3 / Modern Layouts', highlight: false, note: 'Flexbox, CSS Grid, custom properties' },
      { name: 'Three.js / WebGL Basics', highlight: true, note: 'Interactive 3D viewports & shaders' },
      { name: 'Framer Motion', highlight: false, note: 'Fluid physics-based UI transitions' },
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Server runtime environments, RESTful communication protocols, and cloud backends.',
    skills: [
      { name: 'Node.js', highlight: true, note: 'Asynchronous event-driven server runtime' },
      { name: 'Express', highlight: true, note: 'RESTful API routing and middleware' },
      { name: 'REST APIs', highlight: true, note: 'Endpoint design, JSON serialization, auth' },
      { name: 'Supabase', highlight: true, note: 'PostgreSQL BaaS, auth, real-time tables' },
      { name: 'Firebase', highlight: false, note: 'Firestore, hosting, serverless functions' },
    ]
  },
  {
    category: 'AI & Data Analytics',
    description: 'Generative AI integrations, statistical data exploration, and business intelligence.',
    skills: [
      { name: 'Power BI', highlight: true, note: 'Executive dashboards, DAX calculations, KPIs' },
      { name: 'Microsoft Excel', highlight: true, note: 'Pivot tables, VLOOKUP, data sanitization' },
      { name: 'Generative AI & LLM APIs', highlight: true, note: 'Gemini API, prompt architecture, agents' },
      { name: 'Exploratory Data Analysis (EDA)', highlight: true, note: 'Distribution analysis, correlation' },
      { name: 'Data Cleaning & Transformation', highlight: true, note: 'Missing values, duplicate resolution' },
      { name: 'Statistical Analysis', highlight: false, note: 'Hypothesis testing, variance analysis' },
      { name: 'Machine Learning Concepts', highlight: false, note: 'Classification, regression foundations' },
    ]
  },
  {
    category: 'Tools & Platforms',
    description: 'Industry-standard developer tooling, version control, and development environments.',
    skills: [
      { name: 'Git & GitHub', highlight: true, note: 'Version control, PRs, CI/CD automation' },
      { name: 'VS Code', highlight: true, note: 'Primary development workspace & debugging' },
      { name: 'Postman', highlight: false, note: 'API testing, request collection assertions' },
      { name: 'IntelliJ IDEA', highlight: false, note: 'Java enterprise development' },
      { name: 'Docker Fundamentals', highlight: false, note: 'Containerization, reproducible runtimes' },
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  // IBM / Coursera — 16 entries (ALL RETAINED WITH VERIFIED IDS)
  {
    id: 'ibm-fullstack-prof',
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'Coursera | IBM',
    date: '2026',
    credentialId: 'MQ8P5F0K0TTT',
    link: 'https://coursera.org/verify/professional-cert/MQ8P5F0K0TTT',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-career-guide',
    title: 'Software Developer Career Guide & Interview Preparation',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'HR0MXS7WXH2L',
    link: 'https://coursera.org/verify/HR0MXS7WXH2L',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-gen-ai',
    title: 'Generative AI – Elevate Your Software Development Career',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'NLV98D4AIQEI',
    link: 'https://coursera.org/verify/NLV98D4AIQEI',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-assessment',
    title: 'Full Stack Software Developer Assessment',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'E9G0C85EODJF',
    link: 'https://coursera.org/verify/E9G0C85EODJF',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-capstone',
    title: 'Full Stack Application Development Capstone Project',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'O3WBNJ670S0B',
    link: 'https://coursera.org/verify/O3WBNJ670S0B',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-microservices',
    title: 'Application Development using Microservices and Serverless',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'GPQQBJMQK1JG',
    link: 'https://coursera.org/verify/GPQQBJMQK1JG',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-containers',
    title: 'Introduction to Containers (Docker, Kubernetes & OpenShift)',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'XAAAE77L2141',
    link: 'https://coursera.org/verify/XAAAE77L2141',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-django',
    title: 'Django Application Development with SQL and Databases',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'IA9E5MMR7O8S',
    link: 'https://coursera.org/verify/IA9E5MMR7O8S',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-ai-flask',
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'W68H95MUC74R',
    link: 'https://coursera.org/verify/W68H95MUC74R',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: '3KNK25J2OCO6',
    link: 'https://coursera.org/verify/3KNK25J2OCO6',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-node-backend',
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'A5R8P1QAJLZV',
    link: 'https://coursera.org/verify/A5R8P1QAJLZV',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-react-frontend',
    title: 'Developing Front-End Apps with React',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: '6GKGW052QLD1',
    link: 'https://coursera.org/verify/6GKGW052QLD1',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-git-github',
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: '3TL8XHGMD89E',
    link: 'https://coursera.org/verify/3TL8XHGMD89E',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-html-css-js',
    title: 'Introduction to HTML, CSS & JavaScript',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'YD9BOD93E191',
    link: 'https://coursera.org/verify/YD9BOD93E191',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-cloud-intro',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: '1S9OCYMGBFR2',
    link: 'https://coursera.org/verify/1S9OCYMGBFR2',
    category: 'IBM / Coursera'
  },
  {
    id: 'ibm-se-intro',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM | Coursera',
    date: '2026',
    credentialId: 'MMBS7EUTG9ER',
    link: 'https://coursera.org/verify/MMBS7EUTG9ER',
    category: 'IBM / Coursera'
  },

  // Other Certifications — 6 entries
  {
    id: 'azure-ai-agent',
    title: 'AI Agent Fundamentals with Azure AI Foundry',
    issuer: 'Microsoft',
    date: '2026',
    credentialId: '63WB0DTJKAUQ',
    link: 'https://coursera.org/verify/63WB0DTJKAUQ',
    category: 'Microsoft'
  },
  {
    id: 'java-dev-niit',
    title: 'Java Developer Certificate',
    issuer: 'NIIT',
    date: '2023',
    credentialId: 'NIIT-JAVA-2023',
    category: 'Other'
  },
  {
    id: 'graphql-apollo',
    title: 'GraphQL Developer Certificate',
    issuer: 'Apollo GraphQL',
    date: '2024',
    credentialId: 'APOLLO-GQL-2024',
    category: 'Other'
  },
  {
    id: 'api-security-architect',
    title: 'API Security Architect Certificate',
    issuer: 'API Academy',
    date: '2024',
    credentialId: 'API-SEC-ARCH-2024',
    category: 'Specialized Architecture'
  },
  {
    id: 'api-designer',
    title: 'API Designer Certificate',
    issuer: 'API Academy',
    date: '2025',
    credentialId: 'API-DES-2025',
    category: 'Specialized Architecture'
  },
  {
    id: 'web-dev-infosys',
    title: 'Web Development Certificate',
    issuer: 'Infosys Springboard',
    date: '2025',
    credentialId: 'INFOSYS-WEB-2025',
    category: 'Other'
  }
];

export const TIMELINE_MILESTONES = [
  {
    phase: 'Phase 01',
    period: '2021 – 2023',
    title: 'Electronics & Engineering Foundation',
    institution: "St. Joseph's Institute of Technology",
    summary: 'Mastered circuit theory, microcontrollers, digital logic, and foundational programming in C and Java.',
    skills: ['C Programming', 'Java', 'Digital Logic', 'Microcontrollers']
  },
  {
    phase: 'Phase 02',
    period: '2023 – 2024',
    title: 'Full Stack & Enterprise Software',
    institution: 'NSIC Internship & Academic Projects',
    summary: 'Built database-backed applications, learned relational SQL design, and adopted modern web development stacks with React.',
    skills: ['Java OOP', 'SQL Queries', 'React.js', 'REST APIs']
  },
  {
    phase: 'Phase 03',
    period: '2024 – 2025',
    title: 'Hardware Research & IoT Innovation',
    institution: 'Research & Retech Internship',
    summary: 'Authored research on D-Shaped Photonic Crystal Fiber SPR sensors and built long-range LoRa IoT systems and Java utilities.',
    skills: ['Optical Sensors', 'Finite Element Method', 'LoRa IoT', 'Springboard']
  },
  {
    phase: 'Phase 04',
    period: 'Early 2026',
    title: 'AI Integrations & Full-Stack Systems',
    institution: 'Zaalima Pvt. Ltd. & AI Projects',
    summary: 'Architected automated QA engines (BugNexus), GitHub health platforms (GitGuard), and AI group travel platforms (TripTribe).',
    skills: ['Generative AI', 'Node.js', 'Automation', 'TypeScript']
  },
  {
    phase: 'Phase 05',
    period: 'July 2026 – Present',
    title: 'Data Analytics & Business Intelligence',
    institution: 'Analytics Avenue',
    summary: 'Conducting statistical analytics, data cleaning, pipeline normalization, and executive Power BI KPI dashboard engineering on real enterprise datasets.',
    skills: ['Python EDA', 'Power BI DAX', 'Advanced Excel', 'Statistics']
  }
];
