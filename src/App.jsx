import Nav from './components/layout/nav';
import Intro from './sections/intro';
import Education from './sections/education';
import Stack from './sections/stack';
import Project from './sections/project';
import './style/index.css';

function App() {

  return (
    <div className='container py-3'>
      <main>
        <div className='sticky-top '>
          <Nav />
        </div>
        <div className='row py-5 px-5 gap-5'>
          <div className='col-12'>
            <Intro />
          </div><hr className='text-white'/>
          <div className='col-12'>
            <Education />
          </div><hr className='text-white'/>
          <div className='col-12'>
            <Stack />
          </div><hr className='text-white'/>
          <div className='col-12'>
            <Project />
          </div><hr className='text-white'/>
        </div>
      </main>
    </div>
  );
}

export default App;