import React, { useContext } from "react";
import "./style.css";

function ProjectCard({ key, title, image, gitHub, liveUrl, description }) {
   
    return (
        
        <div className="card port-card" key={key}>
            <img src={image} alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description} <br></br>
                    <a href={gitHub} target="_blank" rel="noopener noreferror">Visit GitHub Repo.</a>
                </p>
                <a href={liveUrl} target="_blank" rel="noopener noreferror" className="btn btn-dark">View App</a>
            </div>
        </div>
    )
}

export default ProjectCard;