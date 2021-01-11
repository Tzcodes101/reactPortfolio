import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
// import "./style.css";
import bookSearchPhoto from "./images/reactGoogleBookresize.jpg";

const PortfolioData = () => {
    const [state] = useState([
        {
            id: 1,
            title: "React Google Book Search",
            image: bookSearchPhoto,
            gitHub: "https://github.com/Tzcodes101/gooleBooks",
            liveUrl: "https://powerful-beach-19496.herokuapp.com/",
            description: "An application to search for and save books from Google's API. A user can view and save books for later purchase."
        },
        {
            id: 2,
            title: "Safe Space",
            image: "https://photos.app.goo.gl/4YKDt3iQ59s4iTZv5",
            gitHub: "https://github.com/Tzcodes101/Safe-Space",
            liveUrl: "https://tzcodes101.github.io/Safe-Space/",
            description: "Cycle through inspirational quotes, choose sounds from a dropdown playlist, and search for soothing images, all with the goal of making a comfotable safe to process thoughts."
        },
        {
            id: 3,
            title: "Employee Tracker",
            image: "https://photos.app.goo.gl/TT7BBvgRHfAPjDzE6",
            gitHub: "https://github.com/Tzcodes101/employeeTracker",
            liveUrl: "https://drive.google.com/file/d/1Vy--kRTFCeRb2ODrGDQcH5TCDpO4ByTc/view",
            description: "A CLI application to manage employees. A user can add, veiw, or remove departments, roles, and employees, as well as update employee managers."
        },
        {
            id: 4,
            title: "Workout Tracker",
            image: "https://photos.app.goo.gl/uQ5pDXgXcBj4c71v9",
            gitHub: "https://github.com/Tzcodes101/workoutTracker",
            liveUrl: "https://tz-workout-tracker.herokuapp.com/",
            description: "An application to reach fitness goals by tracking workouts. A user can view, create, and log multiple exercises on a given day. The user can input the type, weight, name, sets, reps, duration, and distance (for cardio) of an exercise."
        },
        {
            id: 5,
            title: "Employee Directory",
            image: "https://photos.app.goo.gl/CQ8D6Hg8JscRZi8QA",
            gitHub: "https://github.com/Tzcodes101/employeeDirectory",
            liveUrl: "https://powerful-savannah-79743.herokuapp.com/",
            description: "An application to view the entire employee directory at once, enabling quick access to their information. A user can search by typing in a name or sorting alphabetically."
        },
        {
            id: 6,
            title: "Weather App",
            image: "https://photos.app.goo.gl/tEc8y9xsBwBQV8x5A",
            gitHub: "https://github.com/Tzcodes101/weatherApp",
            liveUrl: "https://tzcodes101.github.io/weatherApp/",
            description: "An application to view the weather in any city. A user can obtain the current and five-day forecast with color coded UV indices, as well as select cities from a history."
        }

    ]);
    

    return (
        <>
            {state.map( project => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              gitHub={project.gitHub}
              liveUrl={project.liveUrl}
            />
          ))}
        </>

    )
}

export default PortfolioData;