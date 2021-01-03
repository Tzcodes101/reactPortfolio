import React, { useState } from "react";
import "../pages.css";

function Portfolio() {
  const [header] = useState({
    header: "My Portfolio"
  });
  const [projects] = useState([
    {
      id: 1,
      title: "Eat Da Burger",
      image: "/assets/eatDaBurger.jpg",
      gitHub: "https://github.com/Tzcodes101/burger",
      liveUrl: "https://evening-harbor-99452.herokuapp.com/burgers",
      description: "An application enabling a user to add and devour certain burgers. Type in a custom-burger, have it appear on one side, choose to devour it, and watch it move!"
    },
    {
      id: 2,
      title: "Safe Space",
      image: "/assets/a_welcome.png",
      gitHub: "https://github.com/Tzcodes101/Safe-Space",
      liveUrl: "https://tzcodes101.github.io/Safe-Space/",
      description: "Cycle through inspirational quotes, choose sounds from a dropdown playlist, and search for soothing images, all with the goal of making a comfotable safe to process thoughts."
    },
    {
      id: 3,
      title: "Employee Tracker",
      image: "/assets/employeeTracker.jpg",
      gitHub: "https://github.com/Tzcodes101/employeeTracker",
      liveUrl: "https://drive.google.com/file/d/1Vy--kRTFCeRb2ODrGDQcH5TCDpO4ByTc/view",
      description: "A CLI application to manage employees. A user can add, veiw, or remove departments, roles, and employees, as well as update employee managers."
    },
    {
      id: 4,
      title: "Workout Tracker",
      image: "/assets/workoutTracker.jpg",
      gitHub: "https://github.com/Tzcodes101/workoutTracker",
      liveUrl: "https://tz-workout-tracker.herokuapp.com/",
      description: "An application to reach fitness goals by tracking workouts. A user can view, create, and log multiple exercises on a given day. The user can input the type, weight, name, sets, reps, duration, and distance (for cardio) of an exercise."
    },
    {
      id: 5,
      title: "Employee Directory",
      image: "/assets/emplpoyeeDirectory.jpg",
      gitHub: "https://github.com/Tzcodes101/employeeDirectory",
      liveUrl: "https://powerful-savannah-79743.herokuapp.com/",
      description: "An application to view the entire employee directory at once, enabling quick access to their information. A user can search by typing in a name or sorting alphabetically."
    },
    {
      id: 6,
      title: "Weather App",
      image: "/assets/weatherDash.jpg",
      gitHub: "https://github.com/Tzcodes101/weatherApp",
      liveUrl: "https://tzcodes101.github.io/weatherApp/",
      description: "An application to view the weather in any city. A user can obtain the current and five-day forecasr with color coded UV indices, as well as select cities from a history."
    }
  ])

  return (

    // <!--Activate grid system-->
    <div className="container">

      <div className="row">
        {/* <!--Set responsive layout--> */}
        <div className="col-lg-12 col-md-12 col-xs-12">

          {/* Heading */}
          <section className="card-body">
            <h4 className="card-title" id="port-title">{header.header}</h4>
          </section>



          {/* Project card */}
          <div className="row">
            {projects.map(project => (
              <div className="card port-card" key={project.id}>
                <img src={project.img} alt="app"></img>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description} <br></br>
                    <a href={project.gitHub} target="_blank" rel="noopener noreferror">Visit GitHub Repo.</a>
                  </p>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferror" className="btn btn-dark">View App</a>
                </div>
              </div>
            ))}


          </div>

        </div>

      </div>
    </div>
  )
}

export default Portfolio;