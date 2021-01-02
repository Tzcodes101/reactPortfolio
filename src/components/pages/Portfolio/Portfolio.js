import React from "react";
import "../pages.css";

function Portfolio () {
    return (
        
    // <!--Activate grid system-->
    <div className="container">
        
        <div className="row">
            {/* <!--Set responsive layout--> */}
            <div className="col-lg-12 col-md-12 col-xs-12">

                    {/* <!--Heading--> */}
                    <section className="card-body">
                        <h4 className="card-title" id="port-title">My Portfolio</h4>
                    </section>

                    {/* <!--Images, responsive to web browser via bootsrap classes--> */}
                    <div className="row">


                            <div className="card port-card">
                                <img src={"/assets/eatDaBurger.jpg"}  className="card-img-top" alt="app"></img>
                                <div className="card-body">
                                  <h5 className="card-title">Eat Da Burger</h5>
                                  <p className="card-text">An application enabling a user to add and devour certain burgers. Type in a custom-burger, have it appear on one side, choose to devour it, and watch it move! <br></br>
                                    <a href="https://github.com/Tzcodes101/burger" target="_blank" rel="noreferror">Visit GitHub Repo.</a>
                                  </p>
                                  <a href="https://evening-harbor-99452.herokuapp.com/burgers" target="_blank" rel="noreferror" className="btn btn-dark">View App</a>
                                </div>
                              </div>

                              <div className="card port-card">
                                <img src={"/assets/a_welcome.png"} className="card-img-top" alt="app"></img>
                                <div className="card-body">
                                  <h5 className="card-title">Safe Space</h5>
                                  <p className="card-text">Cycle through inspirational quotes, choose sounds from a dropdown playlist, and search for soothing images, all with the goal of making a comfotable safe to process thoughts.<br></br>
                                    <a href="https://github.com/Tzcodes101/Safe-Space" target="_blank" rel="noreferror">Visit GitHub Repo.</a>
                                  </p>
                                  <a href="https://tzcodes101.github.io/Safe-Space/" target="_blank" rel="noreferror" className="btn btn-dark">View App</a>
                                </div>
                              </div>

                              <div className="card port-card">
                                <img src={"/assets/employeeTracker.jpg"} className="card-img-top" alt="app"></img>
                                <div className="card-body">
                                  <h5 className="card-title">Employee Tracker</h5>
                                  <p className="card-text">A CLI application to manage employees. A user can add, veiw, or remove departments, roles, and employees, as well as update employee managers..<br></br>
                                    <a href="https://github.com/Tzcodes101/employeeTracker" target="_blank" rel="noreferror">Visit GitHub Repo.</a></p>
                                    <a href="https://drive.google.com/file/d/1Vy--kRTFCeRb2ODrGDQcH5TCDpO4ByTc/view" target="_blank" rel="noreferror" className="btn btn-dark">View App</a>
                                </div>
                              </div>
                    </div>

            </div>

        </div>
    </div>
    )
}

export default Portfolio;