import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, 
  FaJava, FaNetworkWired, FaKeyboard, FaFolder 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiSupabase, SiMysql, SiPostgresql, SiDotnet, 
  SiGit, SiGithub, SiTask 
} from 'react-icons/si';
import { Sparkles, MousePointerClick } from 'lucide-react';

import cIcon from '../assets/images/icon/C.PNG';
import cableIcon from '../assets/images/icon/Cable.PNG';
import msOfficeIcon from '../assets/images/icon/MSoffice.PNG';
import vscodeIcon from '../assets/images/icon/VScode.PNG';
import vstudioIcon from '../assets/images/icon/VisualStudioCode.PNG';
import xamppIcon from '../assets/images/icon/Xampp.PNG';

const ImageIcon = ({ src, alt, size = 32 }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      width: `${size}px`, 
      height: `${size}px`, 
      objectFit: 'contain', 
      pointerEvents: 'none' 
    }} 
  />
);

export default function Stack() {
  const rawStackData = [
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

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState(rawStackData[0]);

  const requestRef = useRef();
  const lastTimeRef = useRef();
  const rotYRef = useRef(0);
  const techNodesRef = useRef([]);

  // Extract unique categories for navigation
  const categories = useMemo(() => {
    const cats = Array.from(new Set(rawStackData.map((item) => item.category)));
    return ['All', ...cats];
  }, [rawStackData]);

  // Filter items based on selected category
  const filteredStackData = useMemo(() => {
    if (activeCategory === 'All') return rawStackData;
    return rawStackData.filter((item) => item.category === activeCategory);
  }, [activeCategory, rawStackData]);

  // Handle category tab changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newFiltered = cat === 'All' ? rawStackData : rawStackData.filter((item) => item.category === cat);
    if (newFiltered.length > 0) {
      setSelectedTech(newFiltered[0]);
    }
  };

  // Recalculate 3D sphere positions based on filtered items
  const sphereTech = useMemo(() => {
    const numItems = filteredStackData.length;
    const radius = 175;

    return filteredStackData.map((tech, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numItems);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      return {
        ...tech,
        x0: radius * Math.sin(phi) * Math.cos(theta),
        y0: radius * Math.cos(phi),
        z0: radius * Math.sin(phi) * Math.sin(theta),
      };
    });
  }, [filteredStackData]);

  useEffect(() => {
    const radius = 175;
    const radX = (15 * Math.PI) / 180;

    const animate = (time) => {
      if (lastTimeRef.current !== undefined) {
        const delta = Math.min(time - lastTimeRef.current, 64);
        rotYRef.current = (rotYRef.current + delta * 0.012) % 360;
        const radY = (rotYRef.current * Math.PI) / 180;

        sphereTech.forEach((tech, i) => {
          const el = techNodesRef.current[i];
          if (!el) return;

          const x1 = tech.x0 * Math.cos(radY) + tech.z0 * Math.sin(radY);
          const z1 = -tech.x0 * Math.sin(radY) + tech.z0 * Math.cos(radY);

          const y2 = tech.y0 * Math.cos(radX) - z1 * Math.sin(radX);
          const z2 = tech.y0 * Math.sin(radX) + z1 * Math.cos(radX);
          const x2 = x1;

          const scale = ((z2 + radius) / (2 * radius)) * 0.45 + 0.65;
          const opacity = ((z2 + radius) / (2 * radius)) * 0.6 + 0.4;
          const zIndex = Math.round(z2 + 300);

          const isSelected = selectedTech && selectedTech.id === tech.id;
          const finalScale = isSelected ? scale * 1.3 : scale;

          el.style.transform = `translate3d(${x2}px, ${y2}px, 0px) scale(${finalScale})`;
          el.style.opacity = isSelected ? 1 : opacity;
          el.style.zIndex = isSelected ? 999 : zIndex;
        });
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [sphereTech, selectedTech]);

  const renderIcon = (tech, size) => {
    if (tech.isCustomImg) {
      return <ImageIcon src={tech.icon} alt={tech.name} size={size} />;
    }
    const IconComponent = tech.icon;
    return <IconComponent size={size} style={{ color: tech.color, pointerEvents: 'none' }} />;
  };

  return (
    <section 
      className="py-5 px-3 px-md-4 position-relative overflow-hidden rounded-5 my-5" 
      id="stack"
      style={{
        backgroundColor: 'rgba(15, 17, 23, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
      }}
    >
      <div 
        className="position-absolute rounded-circle pe-none"
        style={{
          width: '350px',
          height: '350px',
          top: '-100px',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />
      <div 
        className="position-absolute rounded-circle pe-none"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-150px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(50px)',
          zIndex: 0
        }}
      />

      <div className="container py-2 position-relative z-2">
        {/* Header & Category Navigation */}
        <div className="d-flex flex-column align-items-center mb-5 text-center">
          <h2 className="display-5 fw-bold mb-3 text-white" style={{ lineHeight: '1.2' }}>
            Tech Stack & Skills
          </h2>

          <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="btn btn-sm rounded-pill px-3 py-2 fw-medium transition-all"
                  style={{
                    backgroundColor: isActive ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#6366f1' : '#a1a1aa',
                    border: isActive ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '13px',
                    letterSpacing: '0.3px',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Details Card */}
          <div className="col-12 col-lg-5">
            {selectedTech ? (
              <div 
                className="p-4 rounded-4 position-relative shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${selectedTech.color}40`,
                  boxShadow: `0 12px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${selectedTech.color}50`,
                      width: '52px',
                      height: '52px'
                    }}
                  >
                    {renderIcon(selectedTech, 32)}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-white">
                      {selectedTech.name}
                    </h5>
                    <span 
                      className="badge rounded-pill fw-medium px-2 py-1 mt-1 border"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#a1a1aa', 
                        fontSize: '11px' 
                      }}
                    >
                      {selectedTech.category}
                    </span>
                  </div>
                </div>

                <p className="mb-3 text-white-50 small" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  {selectedTech.desc}
                </p>

                <div 
                  className="pt-3 border-top d-flex align-items-center gap-2"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Sparkles size={14} style={{ color: selectedTech.color }} />
                  <span className="fw-semibold text-uppercase" style={{ fontSize: '11px', color: '#d4d4d8', letterSpacing: '0.5px' }}>
                    Technology used for {selectedTech.category.toLowerCase()}
                  </span>
                </div>
              </div>
            ) : (
              <div 
                className="p-4 rounded-4 border border-dashed text-center"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  borderColor: 'rgba(255, 255, 255, 0.15)', 
                  color: '#a1a1aa' 
                }}
              >
                <MousePointerClick size={24} className="mb-2 text-white-50" />
                <p className="mb-0 small">Click any floating tech icon on the sphere to inspect details.</p>
              </div>
            )}
          </div>

          {/* Interactive 3D Sphere */}
          <div className="col-12 col-lg-7 d-flex justify-content-center position-relative">
            <div 
              className="position-absolute top-50 start-50 translate-middle rounded-circle pe-none"
              style={{
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0
              }}
            />

            <div 
              className="position-relative d-flex align-items-center justify-content-center"
              style={{ width: '380px', height: '380px', zIndex: 1 }}
            >
              {sphereTech.map((tech, i) => {
                const isSelected = selectedTech && selectedTech.id === tech.id;
                return (
                  <button
                    key={tech.id}
                    ref={(el) => (techNodesRef.current[i] = el)}
                    onClick={() => setSelectedTech(tech)}
                    className="position-absolute btn p-0 border-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: 'rgba(20, 24, 33, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: isSelected ? `2px solid ${tech.color}` : '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: isSelected 
                        ? `0 0 20px ${tech.color}80, inset 0 0 10px ${tech.color}40` 
                        : '0 4px 12px rgba(0, 0, 0, 0.5)',
                      cursor: 'pointer',
                      willChange: 'transform, opacity',
                      touchAction: 'manipulation'
                    }}
                    title={tech.name}
                  >
                    {renderIcon(tech, 35)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}