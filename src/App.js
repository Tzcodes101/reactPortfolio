import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"; 
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";

function App() {

  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} /> 
      <Footer />
    </Router>
  );
}

export default App;
