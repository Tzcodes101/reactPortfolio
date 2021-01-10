import React, { useEffect } from "react";
import "../pages.css";
import { Wrapper, Row, Col } from "../../components/Grid";
import AboutFormat from "../../components/AboutFormat";

function About() {

    return(
        
        <Wrapper>
            <Row>
                <Col>
                
                    <AboutFormat />
                
                </Col>
            </Row>
        </Wrapper>
    )

}

export default About;
