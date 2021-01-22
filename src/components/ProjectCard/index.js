import React from "react";
import { Section, Row, Col } from "../Grid";
import "./style.css";

function ProjectCard({ key, title, image, gitHub, liveUrl, description }) {

    return (
        <section id="portfolio" key={key}>

            <div className="row project-row">

                <div className="main-col">


                    <Row>
                        <Col>
                            <div className="port-text">
                                <h3>{title}</h3>
                                <p className="description">{description} <span>&bull;</span></p>
                            </div>
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">View App</a>
                            <a href={gitHub} target="_blank" rel="noopener noreferrer">Visit GitHub Repo.</a>
                        </Col>


                        <div className="port-img-col">

                            <img src={image} alt={title} className="port-img"></img>

                        </div>
                    </Row>


                </div>
            </div>


        </section >

        // <Section>
        // <div className="card port-card" key={key}>

        //     <div className="row port-img-row">

        //             <img src={image} alt={title} className="port-img"></img>

        //     </div>

        //     <div className="card-body">
        //         <h5 className="card-title">{title}</h5>
        //         <p className="card-text">{description} <br></br>
        //             <a href={gitHub} target="_blank" rel="noopener noreferrer">Visit GitHub Repo.</a>
        //         </p>
        //         <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">View App</a>
        //     </div>
        // </div>
        // </Section>
    )
}

export default ProjectCard;