import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import bookSearch from "./images/reactGoogleBookresize.jpg";
import safeSpace from "./images/a_welcome.png";
import employeeDirectory from "./images/employeeDirectory2resize.jpg";
import employeeTracker from "./images/employeeTracker.jpg";
import weatherDash from "./images/weatherDash.jpg";
import workoutTracker from "./images/workoutTracker.jpg";


const PortfolioData = () => {
    const [state] = useState([
        {
            id: 1,
            title: "React Google Book Search",
            image: bookSearch,
            gitHub: "https://github.com/Tzcodes101/gooleBooks",
            liveUrl: "https://powerful-beach-19496.herokuapp.com/",
            description: "An application to search for and save books from Google's API. A user can view and save books for later purchase."
        },
        {
            id: 2,
            title: "Safe Space",
            image: safeSpace,
            gitHub: "https://github.com/Tzcodes101/Safe-Space",
            liveUrl: "https://tzcodes101.github.io/Safe-Space/",
            description: "Cycle through inspirational quotes, choose sounds from a menu, and search for images, all with the goal of making a comfotable safe to process thoughts."
        },
        {
            id: 3,
            title: "Employee Tracker",
            image: employeeTracker,
            gitHub: "https://github.com/Tzcodes101/employeeTracker",
            liveUrl: "https://drive.google.com/file/d/1Vy--kRTFCeRb2ODrGDQcH5TCDpO4ByTc/view",
            description: "A CLI application to manage employees. A user can add, veiw, or remove departments, roles, and employees, as well as update employee managers."
        },
        {
            id: 4,
            title: "Workout Tracker",
            image: workoutTracker,
            gitHub: "https://github.com/Tzcodes101/workoutTracker",
            liveUrl: "https://tz-workout-tracker.herokuapp.com/",
            description: "An application to reach fitness goals. A user can view, create, and log multiple exercises on a given day. The user can input details for weightlifting or cardio."
        },
        {
            id: 5,
            title: "Employee Directory",
            image: employeeDirectory,
            gitHub: "https://github.com/Tzcodes101/employeeDirectory",
            liveUrl: "https://powerful-savannah-79743.herokuapp.com/",
            description: "An application to view the entire employee directory at once, enabling quick access to their information. A user can search by typing in a name or sorting alphabetically."
        },
        {
            id: 6,
            title: "Weather App",
            image: weatherDash,
            gitHub: "https://github.com/Tzcodes101/weatherApp",
            liveUrl: "https://tzcodes101.github.io/weatherApp/",
            description: "An application to view the weather in any city. A user can obtain the current and five-day forecast with color coded UV indices, as well as select cities from that are saved to history."
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