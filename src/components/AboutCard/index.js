import React from "react";
import { Row, Col, Section } from "../Grid";
import "./style.css";

function AboutCard(props) {
    return (

        <div className="card-text">
            <p>{props.text}</p>

            <p>
                Email: {props.email}<br></br>
               Phone: {props.phone}<br></br>
               View my resume here: <a
                    href={props.resume}
                    target="_blank" rel="noopener noreferror">Resume</a>.<br></br>
               View my GitHub profile here: <a href={props.gitHub}
                    target="_blank" rel="noopener noreferror">My GitHub Profile</a>.<br></br>
               View my LinkedIn profile here: <a
                    href={props.linkedIn}
                    target="_blank" rel="noopener noreferror">My LinkedIn Profile</a>.
           </p>
        </div>
    )
}

export default AboutCard;