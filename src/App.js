import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
//add resume

function App() {

  //set resume state

  //get resume data function

  //useEffect (when page mounts call getResumeData)


  return (
    <Router>
      {/* <NavBar /> */}

      <About />
      <Portfolio />
      <Contact />
      
      {/* <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />  */}
     
      <Footer />
    </Router>
  );
}

//create cloud to store images, and in project json, instead of giving path, give it a link to the cloud for the image 
//check out photobucket and googlephotos 

export default App;
