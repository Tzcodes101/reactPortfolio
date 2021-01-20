import React from "react";
import { Section } from "../Grid";
import "./style.css";

function ProjectCard({ key, title, image, gitHub, liveUrl, description }) {

    return (
        <Section>
        <div className="card port-card" key={key}>
            
            <div className="row port-img-row">
                
                    <img src={image} alt={title} className="port-img"></img>
             
            </div>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description} <br></br>
                    <a href={gitHub} target="_blank" rel="noopener noreferrer">Visit GitHub Repo.</a>
                </p>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">View App</a>
            </div>
        </div>
        </Section>
    )
}

export default ProjectCard;