import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, 
  FaJava 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiSupabase, SiMysql, SiPostgresql,
  SiGit, SiGithub
} from 'react-icons/si';

import cIcon from '../assets/images/icon/C.PNG';
import vscodeIcon from '../assets/images/icon/VScode.PNG';
import vstudioIcon from '../assets/images/icon/VisualStudioCode.PNG';
import xamppIcon from '../assets/images/icon/Xampp.PNG';
import chatgptIcon from '../assets/images/icon/GPT.PNG';
import geminiIcon from '../assets/images/icon/Gemini.PNG';
import vercelIcon from '../assets/images/icon/Vercel.PNG';
import netlifyIcon from '../assets/images/icon/Netlify.PNG';
import renderIcon from '../assets/images/icon/Render.PNG';
import railwayIcon from '../assets/images/icon/Railway.PNG';
import canvaIcon from '../assets/images/icon/Canva.PNG';
import figmaIcon from '../assets/images/icon/Figma.PNG';

export const rawStackData = [
  { id: 'html', name: 'HTML5', icon: FaHtml5, color: '#e34f26', category: 'Front End', desc: 'Standard markup language for creating responsive web pages and structuring web content.' },
  { id: 'css', name: 'CSS3', icon: FaCss3Alt, color: '#1572b6', category: 'Front End', desc: 'Style sheet language used for designing, laying out, and formatting user interfaces.' },
  { id: 'js', name: 'JavaScript', icon: FaJs, color: '#f7df1e', category: 'Front End', desc: 'Core programming language of the web used for building dynamic, interactive client-side logic.' },
  { id: 'bootstrap', name: 'Bootstrap', icon: FaBootstrap, color: '#a855f7', category: 'Front End', desc: 'Responsive mobile-first CSS framework for rapidly prototyping responsive layouts and grid structures.' },
  { id: 'react', name: 'React (Vite)', icon: FaReact, color: '#61dafb', category: 'Front End', desc: 'A popular JavaScript library for building fast, component-based user interfaces with modern React hooks and Vite optimization.' },
  { id: 'next', name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Full Stack', desc: 'The React framework for production with server-side rendering, static site generation, and optimized API routing.' },
  { id: 'php', name: 'PHP', icon: FaPhp, color: '#777bb4', category: 'Back End', desc: 'Server-side scripting language widely used for building web services and connecting backend data engines.' },
  { id: 'laravel', name: 'Laravel', icon: FaLaravel, color: '#ff2d20', category: 'Full Stack', desc: 'A robust PHP web framework with elegant syntax, ORM database routing, and built-in authentication systems.' },
  { id: 'supabase', name: 'Supabase', icon: SiSupabase, color: '#3ecf8e', category: 'Back End', desc: 'An open-source Firebase alternative providing instant backend infrastructure, Realtime Postgres, and Auth.' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, color: '#00758f', category: 'Database', desc: 'Relational database management system engineered for high-performance structured SQL query handling.' },
  { id: 'postgres', name: 'Postgresql', icon: SiPostgresql, color: '#336791', category: 'Database', desc: 'Advanced enterprise-grade open-source relational database emphasizing extensibility and SQL compliance.' },
  { id: 'java', name: 'Java', icon: FaJava, color: '#f89820', category: 'Languages', desc: 'High-level, class-based, object-oriented programming language engineered for cross-platform applications.' },
  { id: 'c', name: 'C', icon: cIcon, isCustomImg: true, color: '#a8b9cc', category: 'Languages', desc: 'General-purpose computer programming language supporting structured programming and low-level memory access.' },
  { id: 'git', name: 'Git', icon: SiGit, color: '#f05032', category: 'Tools', desc: 'Distributed version control system for tracking source code revisions and facilitating team workflows.' },
  { id: 'github', name: 'Github', icon: SiGithub, color: '#ffffff', category: 'Tools', desc: 'Cloud platform for Git version control hosting, code review workflows, and automated CI/CD deployment.' },
  { id: 'vscode', name: 'VS Code', icon: vscodeIcon, isCustomImg: true, color: '#007acc', category: 'Tools', desc: 'Lightweight and powerful source code editor built for modern development workflows.' },
  { id: 'vstudio', name: 'Visual Studio', icon: vstudioIcon, isCustomImg: true, color: '#cb99c9', category: 'Tools', desc: 'Comprehensive integrated development environment (IDE) for .NET and C++ software creation.' },
  { id: 'xampp', name: 'XAMPP', icon: xamppIcon, isCustomImg: true, color: '#fb7a24', category: 'Tools', desc: 'Free open-source cross-platform web server solution package containing Apache, MariaDB, and PHP.' },
  { id: 'chatgpt', name: 'ChatGPT', icon: chatgptIcon, isCustomImg: true, color: '#10a37f', category: 'AI Tools', desc: 'Advanced conversational AI model utilized for code generation, debugging, and rapid problem solving.' },
  { id: 'gemini', name: 'Gemini', icon: geminiIcon, isCustomImg: true, color: '#8e75ff', category: 'AI Tools', desc: 'Multimodal AI assistant leveraged for intelligent automation, research, and developer productivity.' },
  { id: 'vercel', name: 'Vercel', icon: vercelIcon, isCustomImg: true, color: '#ffffff', category: 'Deployment', desc: 'Frontend cloud platform designed for modern web applications with automatic CI/CD and edge delivery.' },
  { id: 'netlify', name: 'Netlify', icon: netlifyIcon, isCustomImg: true, color: '#00c7b7', category: 'Deployment', desc: 'Web developer platform for deploying continuous serverless frontend applications and microservices.' },
  { id: 'render', name: 'Render', icon: renderIcon, isCustomImg: true, color: '#46e3b7', category: 'Deployment', desc: 'Unified cloud host for building, running, and scaling web apps, static sites, and databases.' },
  { id: 'railway', name: 'Railway', icon: railwayIcon, isCustomImg: true, color: '#ffffff', category: 'Deployment', desc: 'Infrastructure platform for provisioning databases, deploying backends, and managing containerized services.' },
  { id: 'figma', name: 'Figma', icon: figmaIcon, isCustomImg: true, color: '#f24e1e', category: 'Design', desc: 'Industry-standard collaborative interface design tool used for vector prototyping and UI/UX wireframing.' },
  { id: 'canva', name: 'Canva', icon: canvaIcon, isCustomImg: true, color: '#00c4cc', category: 'Design', desc: 'Graphic design platform for creating visual assets, brand marketing materials, and presentations.' },
];