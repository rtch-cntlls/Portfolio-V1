import Nav from './components/layout/nav';
import Intro from './sections/intro';
import Education from './sections/education';
import Stack from './sections/stack';
import Project from './sections/project';
import Footer from './sections/footer';
import Ferrofluid from './components/ui/Ferrofluid';
import './style/index.css';
import './style/intro.css';

function App() {
  return (
    <div 
      className='app-wrapper' 
      style={{ 
        position: 'relative', 
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff'
      }}
    >
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 0, 
          pointerEvents: 'none'
        }}
      >
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>

      <div className='container p-0' style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <div className='sticky-top m-0 p-0'>
            <Nav />
          </div>
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
        </main>
      </div>
    </div>
  );
}

export default App;