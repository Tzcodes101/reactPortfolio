// import React from "react";
// import {
//   Link,
//   useLocation
// } from "react-router-dom";
// import "./style.css";

// //router with links to diff pages depending on click
// function NavBar() {

//   //set name, occupation, description, city and networks as props from resume data
//   //add in social icons with href to link
//   //map over data.social
//   const location = useLocation();

//   return (
    // show vs hid navigation

    //make list component...?
    //unordered list for home, about, resume, works, testimonials, and contact

    //banner row with self-introduction and social networks

    //smooth scrolldown
    // <div className="jumbotron">
    //   <h1 className="display-4">Hi, I'm Talia.</h1>
    // </div>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <h1 className="navbar-brand">Talia Zisman</h1>
    //   <ul className="navbar-nav">
    //   <li className="nav-item">
    //     <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
    //       About Me
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
    //       Contact
    //     </Link>
    //   </li>
    //   </ul>
    // </nav>
  // )

// }

// export default NavBar;
// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menu: false
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   toggleMenu() {
//     this.setState({ menu: !this.state.menu });
//   }

//   render() {
//     const show = (this.state.menu) ? "show" : "";

//     return (
//       <Router>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">

//           {/* <!--Heading--> */}
//           <h1 className="navbar-brand">Talia Zisman</h1>

//           {/* <!--Hamburger menu on xs screen--> */}
//           <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
//             {/* <!--border around hamburger menu--> */}
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           {/* <!--nav links--> */}
//           <div className="collapse navbar-collapse" id="my-nav">
//             <ul className="navbar-nav">
//               {/* <li className="nav-item"><a href="index.html" className="nav-link">About Me</a></li> */}
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">About Me</Link>
//               </li>
//               {/* <li className="nav-item"><a href="contact.html" className="nav-link">Contact Me</a></li> */}
//             </ul>
//           </div>

//         </nav>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/portfolio">
//             <Portfolio />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//         </Switch>

//       </Router>
//     )
//   }

// }

// export default NavBar; 