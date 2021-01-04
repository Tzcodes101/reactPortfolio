import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card port-card" key={props.key}>
            <img src={props.img} alt={props.title}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description} <br></br>
                    <a href={props.gitHub} target="_blank" rel="noopener noreferror">Visit GitHub Repo.</a>
                </p>
                <a href={props.liveUrl} target="_blank" rel="noopener noreferror" className="btn btn-dark">View App</a>
            </div>
        </div>
    )
}

export default ProjectCard;