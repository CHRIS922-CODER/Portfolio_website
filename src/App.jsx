import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
     <About/>
     <Skills/>
     <Work/>
     <Contact/>
    </>
  );
}

export default App;
