import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import NavSec2 from './Components/NavSec2';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import Body3 from './Components/Body3';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavSec2/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Footer/>
    </div>
  );
}

export default App;
