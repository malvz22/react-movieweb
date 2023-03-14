import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/landingpage.css';
import { useRef } from 'react';
import NavigationBar from './components/Navbar';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Highlight from './components/Highlight';

function App() {

  return (
    <div>
      {/* Intro Section */}
      <div className="bg-color">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro Section */}

      {/* Highlight Section */}
      <div className='highlight'>
        <Highlight />
      </div>
      {/* End of Highlight Section */}

      {/* Trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End of Trending section */}
    </div>
  );
}

export default App;
