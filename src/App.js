import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/landingpage.css';
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Highlight from './components/Highlight';
import Action from './components/Action';

function App() {

  // const clicked = () => {
  //   return alert("Ceritanya direct ke movie list...☺️");
  // }

  return (
    <>
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

      {/* Action section */}
      <div className='action'>
        <Action />
      </div>
      {/* End of Action section */}
    </>
  );
}

export default App;
