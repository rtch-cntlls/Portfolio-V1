import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Sparkles, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { rawStackData } from '../data/stackData';

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
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState(rawStackData[0]);

  const requestRef = useRef();
  const lastTimeRef = useRef();
  const rotYRef = useRef(0);
  const techNodesRef = useRef([]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(rawStackData.map((item) => item.category)));
    return ['All', ...cats];
  }, []);

  const filteredStackData = useMemo(() => {
    if (activeCategory === 'All') return rawStackData;
    return rawStackData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newFiltered = cat === 'All' ? rawStackData : rawStackData.filter((item) => item.category === cat);
    if (newFiltered.length > 0) {
      setSelectedTech(newFiltered[0]);
    }
  };

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
        <motion.div 
          className="d-flex flex-column align-items-center mb-5 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
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
                    transition: 'all 1.5s ease-in-out'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="row align-items-center g-5">

          <motion.div 
            className="col-12 col-lg-7 order-2 order-lg-1 d-flex justify-content-center position-relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
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
          </motion.div>

          <motion.div 
            className="col-12 col-lg-5 order-1 order-lg-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {selectedTech ? (
                <motion.div 
                  key={selectedTech.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
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
                </motion.div>
              ) : (
                <motion.div 
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-4 border border-dashed text-center"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    color: '#a1a1aa' 
                  }}
                >
                  <MousePointerClick size={24} className="mb-2 text-white-50" />
                  <p className="mb-0 small">Click any floating tech icon on the sphere to inspect details.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}