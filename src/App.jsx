import Nav from './components/layout/nav';
import Intro from './sections/intro';
import './style/index.css';

function App() {

  return (
    <div className='container py-3'>
      <main>
        <div className='sticky-top '>
          <Nav />
        </div>
        <div className='row py-5 px-5'>
          <div className='col-12'>
            <Intro />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;