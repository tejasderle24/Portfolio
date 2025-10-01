// Icons
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { 
  FaCode, 
  FaGraduationCap, 
  FaBriefcase, 
  FaRocket, 
  FaHeart, 
  FaCoffee, 
  FaBookOpen, 
  FaDatabase, 
  FaServer, 
  FaCloud 
} from 'react-icons/fa';

// Project Images
import PROJECT_IMG_1 from '../assets/141.png';
import PROJECT_IMG_2 from '../assets/144.png';
import PROJECT_IMG_3 from '../assets/141.png';
import PROJECT_IMG_4 from '../assets/144.png';
import { FaXTwitter } from 'react-icons/fa6';

// Skills
export const SKILLS_CATEGORY = [
  {
    title: 'Frontend',
    icon: FaCode,
    description: 'Crafting beautiful, responsive user interfaces',
    skills: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 90, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    description: 'Building robust server-side solutions',
    skills: [
      { name: 'Node.js', level: 90, color: 'bg-green-500' },
      { name: 'Express.js', level: 88, color: 'bg-gray-700' },
      { name: 'REST APIs', level: 92, color: 'bg-orange-500' },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    description: 'Managing and optimizing data storage',
    skills: [
      { name: 'MongoDB', level: 85, color: 'bg-green-700' },
      { name: 'MySql', level: 80, color: 'bg-red-500' },
    ],
  },
  {
    title: 'DevOps',
    icon: FaCloud,
    description: 'Deploying and scaling applications',
    skills: [
      { name: 'Docker', level: 62, color: 'bg-blue-600' },
      { name: 'Vercel', level: 90, color: 'bg-gray-900' },
      { name: 'Git', level: 70, color: 'bg-orange-700' },
    ],
  },
];

// Tech Stack
export const TECH_STACK = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'Prettier',
  'npm',
  'Vite',
  'Axios',
  'React Query',
  'Redux',
  'React Hook Form',
  'React Router',
  'Passport.js',
  'JWT',
  'Bcrypt',
  'NodeMailer',
  'Socket.io',
  'MySQL',
  'REST APIs',
  'GraphQL APIs',
];

// Stats
export const STATS = [
  { number: '5+', label: 'Projects Completed' },
  { number: '1', label: 'Years Experience' },
  { number: '10+', label: 'Technologies' },
  { number: '100%', label: 'Client Satisfaction' },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: 'Green Cart - Grocery Delivery',
    description:
      'Developed a user-friendly e-commerce website for grocery delivery with advanced filtering, search, and admin panel for inventory and order management.',
    image: PROJECT_IMG_1,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Urban Nest - AI-Powered Real Estate Platform',
    description:
      'A scalable real estate solution with AI-powered insights for market analysis, property recommendations, and investment forecasting.',
    image: PROJECT_IMG_3,
    tags: ['Node.js', 'React', 'Express', 'MySQL', 'OpenAI API','firecrawl API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'AI',
  },
  {
    id: 3,
    title: 'Wonderlust - Modern Real Estate Platform',
    image: PROJECT_IMG_2,
    description:
      'An Airbnb-like platform with Hotel listing, filtering, and user recommendations. Built with EJS and MySQL backend.',
    tags: ['Ejs', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 4,
    title: 'StyleScape - Clothing E-Commerce',
    description:
      'Built a stylish clothing e-commerce platform with dynamic product pages, filters, cart functionality, and responsive UI.',
    image: PROJECT_IMG_4,
    tags: ['React', 'Tailwind', 'Context API', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Full Stack',
  },
];

// Journey
export const JOURNEY_STEPS = [
  {
    year: '2021',
    title: 'Started Coding Journey',
    company: 'Self-taught',
    description:
      'Began learning HTML, CSS, JavaScript, and C++. Built simple websites and Java console projects.',
    icon: FaCode,
    color: 'bg-blue-500',
  },
  {
    year: '2022',
    title: "Bachelor's Degree",
    company: 'SPPU, Maharashtra',
    description:
      "Completed my Bachelor's degree in Computer Science. Focused on software development and algorithms.",
    icon: FaGraduationCap,
    color: 'bg-purple-500',
  },
  {
    year: '2023',
    title: 'MCA Enrollment',
    company: 'R. H. Sapat COE, Nashik',
    description:
      'Started MCA to deepen my knowledge in full-stack development, databases, and software engineering.',
    icon: FaBookOpen,
    color: 'bg-teal-500',
  },
  {
    year: '2024',
    title: 'Built Major Projects',
    company: 'Independent',
    description:
      'Created multiple real-world full-stack projects including Urban Nest, Green Cart, and BuildEstate.',
    icon: FaRocket,
    color: 'bg-orange-500',
  },
  {
    year: '2025',
    title: 'Backend Developer Intern',
    company: 'TechMET IT Solutions',
    description:
      'Worked on real projects using Node.js and MySQL, built scalable APIs and contributed to production-ready systems.',
    icon: FaBriefcase,
    color: 'bg-green-500',
  },
  {
    year: '2025',
    title: 'Freelance & Open Source',
    company: 'Freelance',
    description:
      'Currently working on freelance projects, contributing to open-source, and exploring new technologies like Appwrite and AI integration.',
    icon: FaHeart,
    color: 'bg-red-500',
  },
];

// Passions
export const PASSIONS = [
  {
    icon: FaHeart,
    title: 'User Experience',
    description: 'Crafting intuitive interfaces that users love',
  },
  {
    icon: FaCoffee,
    title: 'Problem Solving',
    description: 'Turning complex challenges into elegant solutions',
  },
  {
    icon: FaBookOpen,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices',
  },
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/tejasderle24',
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/tejas-derle',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
  },
  {
    name: 'Twitter',
    icon: FaXTwitter,
    url: 'https://x.com/tejasderle',
    color: 'hover:text-sky-400',
    bgColor: 'hover:bg-sky-500/10',
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:tejasderle24@gmail.com',
    color: 'hover:text-green-400',
    bgColor: 'hover:bg-green-500/10',
  },
];

// Contact Info
export const CONTACT_INFO = [
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Nashik, Maharashtra, India',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'tejasderle24@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9011765581',
  },
];