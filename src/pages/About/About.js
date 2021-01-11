import React from "react";
import "../pages.css";
import { Wrapper, Row, Col } from "../../components/Grid";
import AboutData from "../../components/AboutData";

function About() {

    return(
        
        <Wrapper>
            <Row>
                <Col>
                
                    <AboutData />
                
                </Col>
            </Row>
        </Wrapper>
    )

}

export default About;
