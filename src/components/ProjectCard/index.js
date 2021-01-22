import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

function ProjectCard({ key, title, image, gitHub, liveUrl, description }) {

    return (
        <section id="portfolio" key={key}>

            <div className="row project-row">

                <div className="main-col">


                    <Row>
                        <Col>
                            <div id="title">
                                <h3><span>{title}</span></h3>
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer"><i class="fas fa-link" /> Live Site</a><br />
                                <a href={gitHub} target="_blank" rel="noopener noreferrer"><i class="fas fa-link" /> GitHub</a>
                            </div>
                            <div id="port-text">

                                <p className="description">{description} </p>

                            </div>
                        </Col>

                        <Col>

                            <div className="port-img-col">

                                <img src={image} alt={title} className="port-img"></img>

                            </div>
                        </Col>



                    </Row>


                </div>
            </div>


        </section >
    )
}

export default ProjectCard;