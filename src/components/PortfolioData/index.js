import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import bookSearch from "./images/reactGoogleBookresize.jpg";
import safeSpace from "./images/a_welcome.png";
import employeeDirectory from "./images/employeeDirectory2resize.jpg";
import employeeTracker from "./images/employeeTracker.jpg";
import perchReview from "./images/Perch.png";
import investor from "./images/shrewedInSHResized.jpg";


const PortfolioData = () => {
    const [state] = useState([
        {
            id: 1,
            title: "Perch Review",
            image: perchReview,
            gitHub: "https://github.com/ktinj/Final-Project",
            liveUrl: "https://perch-review.herokuapp.com",
            description: "An unbiased product recommendation application. A user can upload, search, and save a recommendation to reference later."
        },
        {
            id: 2,
            title: "Safe Space",
            image: safeSpace,
            gitHub: "https://github.com/Tzcodes101/Safe-Space",
            liveUrl: "https://tzcodes101.github.io/Safe-Space/",
            description: "Cycle through inspirational quotes, choose sounds from a menu, and search for images, all with the goal of making a comfortable space to process thoughts."
        },
        {
            id: 3,
            title: "Book Search",
            image: bookSearch,
            gitHub: "https://github.com/Tzcodes101/gooleBooks",
            liveUrl: "https://powerful-beach-19496.herokuapp.com/",
            description: "An application to search for and save books from Google's API. A user can view and save books for later purchase."
        },
        {
            id: 4,
            title: "Shrewd Investor",
            image: investor,
            gitHub: "https://github.com/SarahMyriam/Shrewd-Investor",
            liveUrl: "https://shrewd-investor.herokuapp.com/",
            description: "An application for new investors to learn about buying stocks. A user can see stock data and add a company to their portfolio."
        },
        {
            id: 5,
            title: "Employee Tracker",
            image: employeeTracker,
            gitHub: "https://github.com/Tzcodes101/employeeTracker",
            liveUrl: "https://drive.google.com/file/d/1Vy--kRTFCeRb2ODrGDQcH5TCDpO4ByTc/view",
            description: "A command-line-interface application to manage employees. A user can add, view, or remove departments, roles, and employees, as well as update employee managers."
        },
        {
            id: 6,
            title: "Employee Directory",
            image: employeeDirectory,
            gitHub: "https://github.com/Tzcodes101/employeeDirectory",
            liveUrl: "https://powerful-savannah-79743.herokuapp.com/",
            description: "An application to view the entire employee directory at once, enabling quick access to their information. A user can search by typing in a name or sorting alphabetically."
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