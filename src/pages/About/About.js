import React from "react";
import "../pages.css";
// import Photo from "./photoOfMe.JPG";
import { Wrapper, Row, Col, Section } from "../../components/Grid";
import Data from "../../aboutMe.json";
import AboutFormat from "../../components/AboutFormat";

class About extends React.Component {
    state = {
        Data
    };

    render() {
    return (
        
        <Wrapper>
            <Row>
                <Col>
                
                {this.state.Data.map(display => {
                     <AboutFormat 
                     key={display.id}
                     text={display.text}
                     email={display.email}
                     phone={display.phone}
                     resume={display.resume}
                     gitHub={display.gitHub}
                     linkedIn={display.linkedIn}
                     />
                })}
                
                </Col>
            </Row>
        </Wrapper>

    )}
}

export default About;