import React , {useEffect} from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Experience from "./Components/Experience.jsx"

import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contacts from "./Components/Contact.jsx";
import Aos from "aos"
import "aos/dist/aos.css"
import aos from "aos";


const App = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <>
        <Navbar />
        <Home/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </>
    </div>
  );
};

export default App;
