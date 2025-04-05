
import './App.css';
import About from './Components/About/About';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Poster from './Components/Poster/Poster';
import Project from './Components/Projects/Project';
import Services from './Components/Services/Services';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Poster/>
      <About/>
      <Project/>
      <Services/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
