import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"; 
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

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
