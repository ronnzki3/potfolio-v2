import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Platforms from "./Components/Platforms";
import Skills from "./Components/Skills";
import Works from "./Components/Works";

function App() {
  return (
    <div>   
     <Navbar />
      <About />
      <Skills />      
      <Works />     
      <Contact />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;
