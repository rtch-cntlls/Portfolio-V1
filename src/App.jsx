import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/layout/nav';
import Intro from './sections/intro';
import Education from './sections/education';
import Stack from './sections/stack';
import Project from './sections/project';
import Footer from './sections/footer';
import AllProjects from './pages/AllProjects';
import './style/index.css';
import './style/intro.css';

function Home() {
  return (
    <div className='row pb-5 pt-4 px-3 px-md-5 gap-5 m-0'>
      <div className='col-12'>
        <Intro />
      </div>
      <hr className='text-white'/>
      <div className='col-12'>
        <Education />
      </div>
      <hr className='text-white'/>
      <div className='col-12'>
        <Stack />
      </div>
      <hr className='text-white'/>
      <div className='col-12'>
        <Project />
      </div>
      <div className='col-12'>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    bgRef.current.style.setProperty('--mouse-x', `${x}px`);
    bgRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <div ref={bgRef} className="bg-grid-wrapper">
        <div className="bg-grid" />
        <div className="bg-grid-hover" />
        <div className="bg-radial-glow" />
      </div>

      <div className='container p-0' style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <div className='sticky-top m-0 p-0'>
            <Nav />
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;