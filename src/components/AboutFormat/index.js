import React from "react";
import Photo from "./photoOfMe.JPG";
import { Row, Col, Section } from "../Grid";
import "./style.css";

function AboutCard(props) {

    return (
        <div className="card" key={props.key}>
        <Section>

            <Row>
                <Col>
                    {/* <!-- Image of Me --> */}
                    <img id="photo-of-me" src={Photo} alt="Photo of me"></img>
                </Col>
            </Row>


            <Row>
                <Col>
                    {/* <!--Heading--> */}
                    <h4 className="card-title">
                        About Me
                     </h4>

                    {/* <!--Card paragraphs--> */}
                    <AboutCard 
                    text={props.text}
                    email={props.email}
                    phone={props.phone}
                    resume={props.resume}
                    gitHub={props.gitHub}
                    linkedIn={props.linkedIn}/>
                </Col>
            </Row>
        </Section>
        </div>
    
    )

}

export default AboutCard;