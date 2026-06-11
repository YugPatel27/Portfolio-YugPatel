export const siteConfig = {
  name: 'Yug Patel',
  initials: 'YP',
  profession: 'Full Stack Developer',
  roleLine: 'Building scalable web applications with clean code, intuitive interfaces, and a focus on performance and user experience.',
  intro: 'I build modern web applications with clear interfaces, fast data flow, and scalable backends. My work focuses on balancing polished user experiences with robust, maintainable architecture.',
  location: 'Gujarat, India',
  availability: 'Open to freelance and internship opportunities',
  phone: '+91 8980606446',
  email: 'yugpatel0274@gmail.com',
  resumeUrl: '/Resume-Yug Patel.pdf',
  hostUrl: '/',
  education: {
    college: 'Indus University',
    state: 'Gujarat',
    program: 'B.Tech CSE',
    batch: '2023 - 2027',
    minor: 'Internet of Things (IoT)',
    cgpa: '9.02',
  },
  careerSummary: 'I combine frontend and backend development to create responsive applications, efficient APIs, and data-driven experiences. My work is grounded in clean code, strong collaboration, and building practical tools that users enjoy. With experience across MERN stack, Django, and diverse database solutions, I deliver production-ready systems that scale.',
  languages: ['C', 'C++', 'DSA', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Python', 'Django', 'MongoDB'],
  softSkills: ['Communication', 'Problem Solving', 'Collaboration'],
  stack: ['React', 'Node.js', 'TypeScript', 'Django', 'MongoDB', 'AJAX', 'Tailwind CSS', 'Bootstrap', 'PHP', 'Git/GitHub', 'Figma', 'UI/UX', 'Power BI'],
};

export const valueCards = [
  {
    title: 'Fast Execution',
    text: 'Moves from concept to polished delivery without bloating the workflow.',
  },
  {
    title: 'Problem Solving',
    text: 'Breaks down messy UI and product issues into small, shippable parts.',
  },
  {
    title: 'Creative Direction',
    text: 'Shapes spacing, motion, and hierarchy so the interface feels premium.',
  },
  {
    title: 'Patient Leadership',
    text: 'Keeps teams calm, clear, and aligned when the project gets complex.',
  },
];

export const milestoneCards = [
  { label: 'Focus', value: 'Production-ready React UI systems' },
  { label: 'Quality', value: 'Security-minded, accessible delivery' },
  { label: 'Speed', value: 'Fast launch with lean assets' },
  { label: 'Learning', value: 'CSE 2023-2027 with IoT + ECE minor' },
];

export const navLinks = [
  { label: 'Home', path: '/', sectionId: 'hero' },
  { label: 'About', path: '/about', sectionId: 'about' },
  { label: 'Projects', path: '/projects', sectionId: 'projects' },
  { label: 'Skills', path: '/skills', sectionId: 'skills' },
  { label: 'Experience', path: '/experience', sectionId: 'experience' },
  { label: 'Contact', path: '/contact', sectionId: 'contact' },
];

export const stats = [
  { value: 'Web, mobile, ML', label: 'Projects explored' },
  { value: '6+', label: 'Languages learned' },
  { value: '2023 - Present', label: 'Hands-on journey' },
];

export const heroBadges = ['React', 'Node.js', 'Full Stack', 'Performance', 'UI/UX Design'];

export const aboutTimeline = [
  {
    year: '2021',
    title: 'First steps into coding',
    text: 'Started with C and C++, built small console programs and fell in love with problem solving.',
  },
  {
    year: '2023',
    title: 'Joined B.Tech CSE',
    text: 'Started at Lighthouse Institute of Technology. Picked up web development, databases, and UI design.',
  },
  {
    year: '2024',
    title: 'Building real projects',
    text: 'Shipped CRMs, booking systems, IoT projects, and smart tools. Started focusing on React and clean UI.',
  },
];

export const skills = [
  {
    category: 'Technical Skills',
    summary: 'Core programming languages and development foundations used to build reliable web applications.',
    items: [
      { name: 'C', value: 94 },
      { name: 'C++', value: 92 },
      { name: 'DSA', value: 90 },
      { name: 'JavaScript', value: 93 },
      { name: 'TypeScript', value: 92 },
      { name: 'SQL', value: 91 },
      { name: 'Java', value: 89 },
      { name: 'Python', value: 90 },
    ],
  },
  {
    category: 'Soft Skills',
    summary: 'The interpersonal strengths that help create reliable products and strong team outcomes.',
    items: [
      { name: 'Communication', value: 95 },
      { name: 'Problem Solving', value: 94 },
      { name: 'Collaboration', value: 93 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    summary: 'Modern tools and frameworks used to ship frontend interfaces, backend services, and database-backed solutions.',
    items: [
      { name: 'React', value: 93 },
      { name: 'Node.js', value: 92 },
      { name: 'Django', value: 91 },
      { name: 'MongoDB', value: 90 },
      { name: 'AJAX', value: 89 },
      { name: 'Tailwind CSS', value: 90 },
      { name: 'Bootstrap', value: 91 },
      { name: 'Git/GitHub', value: 92 },
      { name: 'Figma', value: 89 },
      { name: 'UI/UX', value: 90 },
      { name: 'Power BI', value: 86 },
    ],
  },
];

export const hackathons = [
  'Smart India Hackathon',
  'Indus University Hackathon',
  'Bhartiya Antriksh Hackathon 2025',
  'Odoo Hackathon 2026',
];

export const projects = [
  {
    id: 'yummyeats',
    title: 'YummyEats',
    category: 'Web',
    filterTag: 'web',
    featured: false,
    tieLine: 'Responsive food ordering website with a modern UI and smooth navigation.',
    summary: 'A responsive food ordering website designed with modern UI components and user-friendly navigation.',
    description:
      'Designed a responsive food ordering website with modern UI components and user-friendly navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive layout', 'Modern food cards', 'Smooth navigation', 'Mobile-friendly UI'],
    challenges: ['Kept the design clean on small screens', 'Balanced visual appeal with easy ordering flow'],
    stats: [
      { label: 'Scope', value: 'Website' },
      { label: 'Focus', value: 'Food ordering' },
      { label: 'Stack', value: 'HTML + CSS + JS' },
    ],
    image: '/YummyEats.png',
    gallery: ['home section', 'menu grid', 'order flow'],
    accent: 'linear-gradient(135deg, rgba(220,159,116,0.34), rgba(120,77,47,0.16))',
    detail:
      'The project focuses on a polished customer experience with clear CTAs, attractive sections, and straightforward browsing.',
  },
  {
    id: 'creditcrm',
    title: 'CreditCRM',
    category: 'Dashboard',
    filterTag: 'dashboard',
    featured: false,
    tieLine: 'Secure CRM for customer management, sales tracking, and reporting.',
    summary: 'A CRM system with secure database integration and a responsive analytics dashboard.',
    description:
      'Developed a CRM system for customer management, sales tracking, and reporting with secure database integration and responsive dashboard features.',
    tech: ['PHP', 'JavaScript', 'MySQL'],
    features: ['Customer management', 'Sales tracking', 'Reporting dashboard', 'Secure database integration'],
    challenges: ['Kept reporting responsive across screens', 'Structured CRUD and analytics cleanly'],
    stats: [
      { label: 'Scope', value: 'CRM' },
      { label: 'Focus', value: 'Sales and reporting' },
      { label: 'Stack', value: 'PHP + JS + MySQL' },
    ],
    image: '/CreditCRM.png',
    gallery: ['dashboard view', 'customer table', 'report page'],
    accent: 'linear-gradient(135deg, rgba(126,171,157,0.32), rgba(57,94,78,0.16))',
    detail:
      'The project combines customer handling, analytics, and secure integration for a practical CRM workflow.',
  },
  {
    id: 'coreinventory',
    title: 'CoreInventory',
    category: 'Dashboard',
    filterTag: 'dashboard',
    featured: true,
    tieLine: 'Inventory dashboard for stock tracking, product updates, and streamlined operations.',
    summary: 'A clean inventory management project for tracking products, stock movement, and admin updates.',
    description:
      'Built an inventory management dashboard for product tracking, stock updates, and streamlined admin operations.',
    tech: ['PHP', 'MySQL', 'Inventory Management'],
    features: ['Stock tracking', 'Product updates', 'Admin control', 'Database-backed workflow'],
    challenges: ['Kept inventory data consistent across updates', 'Maintained a fast admin flow for stock changes'],
    stats: [
      { label: 'Scope', value: 'Inventory' },
      { label: 'Focus', value: 'Stock control' },
      { label: 'Stack', value: 'PHP + MySQL' },
    ],
    repoUrl: 'https://github.com/YugPatel27/CoreInventory',
    image: '/CoreInventory.png',
    gallery: ['inventory table', 'product update', 'stock summary'],
    accent: 'linear-gradient(135deg, rgba(163,146,101,0.32), rgba(89,77,43,0.16))',
    detail:
      'The project focuses on reliable product tracking and an efficient workflow for managing stock in one place.',
  },
  {
    id: 'crudecrm',
    title: 'CrudeCRM',
    category: 'Dashboard',
    filterTag: 'dashboard',
    featured: true,
    tieLine: 'Oil and petroleum CRM with product tracking, sales management, and AJAX actions.',
    summary: 'A CRM system for crude oil and petroleum product management with secure MySQL integration.',
    description:
      'Developed a CRM system for crude oil and petroleum product management with product tracking, sales management, AJAX-based dynamic operations, and secure MySQL database integration using XAMPP.',
    tech: ['PHP', 'Bootstrap', 'AJAX', 'jQuery', 'MySQL'],
    features: ['Product tracking', 'Sales management', 'AJAX-driven actions', 'Secure MySQL backend'],
    challenges: ['Kept data updates dynamic without page reloads', 'Handled product and sales records in one workflow'],
    stats: [
      { label: 'Scope', value: 'CRM' },
      { label: 'Focus', value: 'Petroleum products' },
      { label: 'Stack', value: 'PHP + AJAX + MySQL' },
    ],
    repoUrl: 'https://github.com/YugPatel27/CrudeCRM',
    reportUrl: '/Reports/CrudeCRM-Intern-Report.pdf',
    image: '/CrudeCRM.png',
    gallery: ['product table', 'sales screen', 'AJAX update'],
    accent: 'linear-gradient(135deg, rgba(168,133,94,0.32), rgba(95,68,42,0.16))',
    detail:
      'The system blends CRUD, asynchronous UI updates, and structured product management for a specialized business flow.',
  },
  {
    id: 'lost-and-found-system',
    title: 'Lost and Found System',
    category: 'Desktop / CLI',
    filterTag: 'desktop',
    featured: false,
    tieLine: 'Java app for item records, search, and efficient lost-and-found tracking.',
    summary: 'An application that manages lost and found item records with efficient tracking and search functionality.',
    description:
      'Designed an application to manage lost and found item records with efficient tracking and search functionality.',
    tech: ['Java', 'SQLite', 'CRUD'],
    features: ['Item registration', 'Search and tracking', 'Record management', 'Database persistence'],
    challenges: ['Kept item lookup fast and reliable', 'Stored records cleanly in SQLite'],
    stats: [
      { label: 'Scope', value: 'Desktop app' },
      { label: 'Focus', value: 'Item tracking' },
      { label: 'Stack', value: 'Java + SQLite' },
    ],
    reportUrl: '/Reports/Lost%20and%20Found%20System-Java.pdf',
    image: '/Lost%20and%20Found.png',
    gallery: ['item list', 'search panel', 'SQLite storage'],
    accent: 'linear-gradient(135deg, rgba(154,162,187,0.32), rgba(73,83,112,0.18))',
    detail:
      'The project focuses on organized item data, fast search, and a simple data model for recovery workflows.',
  },
  {
    id: 'neurotext-summarizer',
    title: 'NeuroText Summarizer',
    category: 'Desktop',
    filterTag: 'desktop',
    featured: false,
    tieLine: 'Python desktop app that generates meaningful text summaries.',
    summary: 'A Tkinter application that uses frequency-based NLP sentence extraction for summarization.',
    description:
      'Developed a desktop application that generates meaningful text summaries using frequency-based NLP sentence extraction.',
    tech: ['Python', 'Tkinter', 'NLP'],
    features: ['Text input and preview', 'Frequency-based sentence scoring', 'Summary generation', 'Desktop UI with Tkinter'],
    challenges: ['Balanced summary length with readability', 'Kept the desktop experience lightweight'],
    stats: [
      { label: 'Scope', value: 'Desktop app' },
      { label: 'Focus', value: 'Text summarization' },
      { label: 'Stack', value: 'Python + Tkinter + NLP' },
    ],
    image: '/NeuroText%20Summarizer.png',
    gallery: ['input panel', 'scoring logic', 'summary output'],
    accent: 'linear-gradient(135deg, rgba(111,147,171,0.32), rgba(55,74,95,0.18))',
    detail:
      'The project applies simple NLP techniques in a desktop workflow to make long text easier to review.',
  },
  {
    id: 'blood-donor-finder',
    title: 'Blood Donor Finder',
    category: 'Mobile',
    filterTag: 'mobile',
    featured: false,
    tieLine: 'Java XML app for donor search, registration, and record management.',
    summary: 'A mobile app for finding blood donors with registration, search, and admin features.',
    description:
      'Built a Java and XML mobile application for donor registration, blood search, and record management with an admin panel.',
    tech: ['Java', 'XML', 'Android'],
    features: ['Donor registration', 'Blood search', 'Record management', 'Admin panel'],
    challenges: ['Kept donor search simple on mobile screens', 'Separated admin and user workflows clearly'],
    stats: [
      { label: 'Scope', value: 'Mobile' },
      { label: 'Focus', value: 'Blood donor search' },
      { label: 'Stack', value: 'Java + XML' },
    ],
    image: '/BloodDonorFinder.png',
    gallery: ['registration', 'blood search', 'admin panel'],
    accent: 'linear-gradient(135deg, rgba(188,97,110,0.32), rgba(106,44,55,0.18))',
    detail:
      'The app is designed for practical donor discovery and straightforward record handling on Android.',
  },
  {
    id: 'noise-monitoring-system',
    title: 'Noise Monitoring System',
    category: 'IoT',
    filterTag: 'iot',
    featured: false,
    tieLine: 'ESP32-based environmental noise monitoring with real-time sensing.',
    summary: 'An IoT system that measures noise levels in real time for environmental sound analysis.',
    description:
      'Implemented a real-time noise monitoring system using sensors and IoT technology for environmental sound analysis.',
    tech: ['IoT', 'ESP32', 'Sensors'],
    features: ['Real-time noise sensing', 'Environmental analysis', 'Embedded monitoring', 'Sensor-based data flow'],
    challenges: ['Handled continuous sensor input reliably', 'Kept the monitoring logic responsive'],
    stats: [
      { label: 'Scope', value: 'IoT' },
      { label: 'Focus', value: 'Noise analysis' },
      { label: 'Stack', value: 'ESP32 + Sensors' },
    ],
    reportUrl: '/Reports/Noise%20Monitoring%20System.pdf',
    image: '/Noise%20Monitoring%20System.png',
    gallery: ['sensor reading', 'live monitor', 'analysis screen'],
    accent: 'linear-gradient(135deg, rgba(122,178,172,0.32), rgba(48,93,88,0.18))',
    detail:
      'The project focuses on measuring sound levels in real time and converting sensor data into actionable insights.',
  },
  {
    id: 'smart-garage-door-system',
    title: 'Smart Garage Door System',
    category: 'IoT',
    filterTag: 'iot',
    featured: false,
    tieLine: 'Automated garage door system with sensor access and remote monitoring.',
    summary: 'An automation project that improves garage security using sensors and remote monitoring.',
    description:
      'Built an automated garage door system with sensor-based access and remote monitoring features for enhanced security.',
    tech: ['IoT', 'Arduino', 'Sensors'],
    features: ['Sensor-based entry', 'Automated opening and closing', 'Remote monitoring', 'Security-focused control'],
    challenges: ['Maintained reliable sensor-triggered actions', 'Kept access logic safe and predictable'],
    stats: [
      { label: 'Scope', value: 'IoT' },
      { label: 'Focus', value: 'Automation' },
      { label: 'Stack', value: 'Sensors + Control' },
    ],
    reportUrl: '/Reports/Smart%20Garage%20Door%20System.pdf',
    image: '/Smart%20Garage%20Door%20System.png',
    gallery: ['sensor trigger', 'door action', 'remote monitor'],
    accent: 'linear-gradient(135deg, rgba(142,167,121,0.32), rgba(64,88,44,0.18))',
    detail:
      'The system combines automation and monitoring to make a common access point safer and easier to control.',
  },
  {
    id: 'bms-booking-management-system',
    title: 'BMS - Booking Management System',
    category: 'Web App',
    filterTag: 'fullstack',
    featured: true,
    tieLine: 'BookMyShow-style movie booking platform with seats, auth, and shows.',
    summary: 'A movie ticket booking platform with seat selection, booking, and real-time show management.',
    description:
      'Developed a movie ticket booking platform similar to BookMyShow with seat selection, ticket booking, user authentication, and real-time show management features.',
    tech: ['Django', 'MongoDB', 'Authentication', 'Seat Selection'],
    features: ['Seat selection', 'Ticket booking', 'User authentication', 'Show management'],
    challenges: ['Handled seat availability cleanly', 'Kept booking and show data synchronized'],
    stats: [
      { label: 'Scope', value: 'Full stack' },
      { label: 'Focus', value: 'Movie booking' },
      { label: 'Stack', value: 'Django + MongoDB' },
    ],
    repoUrl: 'https://github.com/YugPatel27/BookingManagementSystem',
    image: '/BMS.png',
    gallery: ['seat map', 'booking flow', 'show manager'],
    accent: 'linear-gradient(135deg, rgba(172,125,147,0.32), rgba(88,53,72,0.18))',
    detail:
      'The system mirrors a modern ticketing workflow with authentication, seat selection, and show-level control.',
  },
  {
    id: 'diabetes-classification-prediction',
    title: 'Diabetes Classification and Prediction',
    category: 'Machine Learning',
    filterTag: 'ml',
    featured: false,
    tieLine: 'Python machine learning model for healthcare risk prediction.',
    summary: 'A Scikit-learn model that predicts diabetes risk from healthcare datasets.',
    description:
      'Developed a machine learning model using Scikit-learn to predict diabetes risk based on healthcare datasets.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
    features: ['Risk prediction model', 'Healthcare dataset analysis', 'Scikit-learn pipeline', 'Classification output'],
    challenges: ['Balanced accuracy with interpretability', 'Prepared the dataset for reliable predictions'],
    stats: [
      { label: 'Scope', value: 'ML' },
      { label: 'Focus', value: 'Health prediction' },
      { label: 'Stack', value: 'Python + ML' },
    ],
    reportUrl: '/Reports/Diabetes%20Classification%20and%20Predictions%20(DSC).pdf',
    image: '/Diabetes%20Classification.png',
    gallery: ['dataset prep', 'model run', 'prediction output'],
    accent: 'linear-gradient(135deg, rgba(120,152,182,0.32), rgba(54,73,95,0.18))',
    detail:
      'The model demonstrates practical classification on healthcare data with a simple and reusable ML workflow.',
  },
  {
    id: 'diamond-ecommerce-platform',
    title: 'Diamond E-Commerce Platform',
    category: 'Web App',
    filterTag: 'fullstack',
    featured: true,
    tieLine: 'MERN e-commerce platform for buying and selling diamond products.',
    summary: 'A full-stack e-commerce platform with secure authentication and product management.',
    description:
      'Developed a full-stack e-commerce platform for buying and selling diamond products with secure authentication and product management.',
    tech: ['MERN', 'Authentication', 'Product Management'],
    features: ['Product listing', 'Buyer and seller flows', 'Secure authentication', 'Admin product management'],
    challenges: ['Kept product data consistent across roles', 'Built secure session and catalog flows'],
    stats: [
      { label: 'Scope', value: 'E-commerce' },
      { label: 'Focus', value: 'Diamond trading' },
      { label: 'Stack', value: 'MERN' },
    ],
    liveUrl: 'https://diamondjewellery-woad.vercel.app/',
    demoUrl: 'https://diamondjewellery-woad.vercel.app/',
    image: '/Diamond%20E-Commerce%20Platform.png',
    gallery: ['product catalog', 'auth flow', 'seller dashboard'],
    accent: 'linear-gradient(135deg, rgba(183,168,108,0.32), rgba(102,90,48,0.18))',
    detail:
      'The platform is built for product discovery, secure access, and structured buying and selling workflows.',
  },
  {
    id: 'mips-medicine-intelligence-platform',
    title: 'MIPS - Medicine Intelligence Platform',
    category: 'Web App',
    filterTag: 'fullstack',
    featured: true,
    tieLine: 'MERN analytics platform for medicine tracking and forecasting.',
    summary: 'A healthcare inventory platform for medicine tracking, expiry monitoring, and demand forecasting.',
    description:
      'Built a healthcare inventory management platform for medicine tracking, expiry monitoring, and demand forecasting.',
    tech: ['MERN', 'Analytics', 'Inventory Management'],
    features: ['Medicine tracking', 'Expiry monitoring', 'Demand forecasting', 'Healthcare inventory dashboards'],
    challenges: ['Kept inventory data reliable across updates', 'Balanced operational tracking with forecasting'],
    stats: [
      { label: 'Scope', value: 'Healthcare' },
      { label: 'Focus', value: 'Medicine intelligence' },
      { label: 'Stack', value: 'MERN + Analytics' },
    ],
    repoUrl: 'https://github.com/YugPatel27/MedicineInventory-Prediction-',
    image: '/MIPS.png',
    gallery: ['inventory view', 'expiry alerts', 'forecast chart'],
    accent: 'linear-gradient(135deg, rgba(110,157,142,0.32), rgba(49,80,67,0.18))',
    detail:
      'The project combines inventory operations with predictive analytics to support more proactive medicine management.',
  },
];

export const experiences = [
  {
    company: 'X\'pert Infotech',
    position: 'Jr. Web Developer (Intern)',
    duration: 'June 2024 - June 2024',
    achievements: [
      'Developed responsive user interfaces using HTML, CSS, and Bootstrap.',
      'Integrated frontend with backend using JavaScript, PHP, AJAX, and JSON.',
      'Assisted in database interaction using MySQL and optimized query structures.',
      'Learned industry-standard development practices and team collaboration.',
    ],
  },
  {
    company: 'X\'pert Infotech',
    position: 'Web Development Intern',
    duration: 'June 2025 - June 2025',
    achievements: [
      'Built dynamic web pages using HTML, CSS, and JavaScript.',
      'Assisted in backend development using PHP and database integration.',
      'Collaborated with senior developers to debug and improve application performance.',
      'Implemented UI improvements based on user feedback.',
    ],
  },
  {
    company: 'Personal Projects',
    position: 'Full Stack Developer',
    duration: '2023 - Present',
    achievements: [
      'Worked on different projects over time while exploring JavaScript, PHP, Java, Python, XML, and Django.',
      'Built web, mobile, IoT, and machine learning apps to understand how different stacks solve different problems.',
      'Kept refining each project with better UI, cleaner structure, and stronger performance.',
      'Participated in 4 major hackathons including Smart India Hackathon.',
    ],
  },
];
