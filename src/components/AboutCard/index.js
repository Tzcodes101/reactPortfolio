import React, { useContext } from "react";
import AboutContext from "../../utils/AboutContext";
import { Row, Col, Section } from "../Grid";
import "./style.css";

function AboutCard() {
    const { id, text, email, phone, resume, github, linkedin } = useContext(AboutContext);
    return (
        <Section>
        <div className="about-data" key={id}>


            <div className="row">
                <div className="contact-details">
                    <h2>About Me</h2>
                    <p>{text} </p>
                    <h2>Contact Details</h2>
                    <p>
                        <Row>

                            <Col>
                                <span>{phone}</span><br />
                                <span>{email}</span><br />
                                <ul className="social">
                                    <li>
                                        <a href={github} className="button" target="_blank noopener norefferer"><i className="fab fa-github" />  </a>
                                    </li>
                                    <li>
                                        <a href={linkedin} className="button" target="_blank noopener norefferer"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href={resume} className="button" target="_blank noopener norefferer"><i class="far fa-file"></i></a>
                                    </li>
                                </ul>
                            </Col>


                        </Row>
                    </p>
                </div>
             
                {/* add scrolldown to portfolio here */}
                
            </div>

        </div>
        </Section>
    )
}

export default AboutCard;