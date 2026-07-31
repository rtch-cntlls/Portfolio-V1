import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, 
    FaJava, FaNetworkWired, FaKeyboard, FaFolder 
  } from 'react-icons/fa';
  import { 
    SiNextdotjs, SiSupabase, SiMysql, SiPostgresql, SiDotnet, 
    SiGit, SiGithub, SiTask 
  } from 'react-icons/si';
  
  import cIcon from '../assets/images/icon/C.PNG';
  import cableIcon from '../assets/images/icon/Cable.PNG';
  import msOfficeIcon from '../assets/images/icon/MSoffice.PNG';
  import vscodeIcon from '../assets/images/icon/VScode.PNG';
  import vstudioIcon from '../assets/images/icon/VisualStudioCode.PNG';
  import xamppIcon from '../assets/images/icon/Xampp.PNG';
  
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
    { id: 'dotnet', name: 'ASP.NET', icon: SiDotnet, color: '#512bd4', category: 'Back End', desc: 'Cross-platform backend framework developed by Microsoft for creating high-speed, enterprise web APIs.' },
    { id: 'java', name: 'Java', icon: FaJava, color: '#f89820', category: 'Languages', desc: 'High-level, class-based, object-oriented programming language engineered for cross-platform applications.' },
  
    { id: 'c', name: 'C', icon: cIcon, isCustomImg: true, color: '#a8b9cc', category: 'Languages', desc: 'General-purpose computer programming language supporting structured programming and low-level memory access.' },
    { id: 'git', name: 'Git', icon: SiGit, color: '#f05032', category: 'Tools', desc: 'Distributed version control system for tracking source code revisions and facilitating team workflows.' },
    { id: 'github', name: 'Github', icon: SiGithub, color: '#ffffff', category: 'Tools', desc: 'Cloud platform for Git version control hosting, code review workflows, and automated CI/CD deployment.' },
    { id: 'vscode', name: 'VS Code', icon: vscodeIcon, isCustomImg: true, color: '#007acc', category: 'Tools', desc: 'Lightweight and powerful source code editor built for modern development workflows.' },
    { id: 'vstudio', name: 'Visual Studio', icon: vstudioIcon, isCustomImg: true, color: '#cb99c9', category: 'Tools', desc: 'Comprehensive integrated development environment (IDE) for .NET and C++ software creation.' },
    { id: 'xampp', name: 'XAMPP', icon: xamppIcon, isCustomImg: true, color: '#fb7a24', category: 'Tools', desc: 'Free open-source cross-platform web server solution package containing Apache, MariaDB, and PHP.' },
    { id: 'waterfall', name: 'Waterfall Model', icon: SiTask, color: '#00b4d8', category: 'Methodologies', desc: 'Sequential software development process model divided into distinct linear phases.' },
    { id: 'cable', name: 'Cable Management', icon: cableIcon, isCustomImg: true, color: '#a0a0a0', category: 'Hardware', desc: 'Installation and organization of electrical and optical cables for network infrastructure cleanliness and safety.' },
    { id: 'network', name: 'Network Configuration', icon: FaNetworkWired, color: '#00d2ff', category: 'Networking', desc: 'Setting up routers, IP routing, switches, and firewalls for operational network communications.' },
    { id: 'dataentry', name: 'Data Entry', icon: FaKeyboard, color: '#ffb703', category: 'Admin', desc: 'Efficiently entering, updating, and verifying data records within enterprise databases.' },
    { id: 'filemgmt', name: 'File Management', icon: FaFolder, color: '#00b4d8', category: 'Admin', desc: 'Organizing, storing, and securing electronic documents and directory hierarchies.' },
    { id: 'msoffice', name: 'MS Office', icon: msOfficeIcon, isCustomImg: true, color: '#d83b01', category: 'Tools', desc: 'Productivity suite including Word, Excel, and PowerPoint for operational documentation and reporting.' }
  ];