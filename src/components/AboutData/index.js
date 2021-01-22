import React, { useState, useEffect } from "react";
import Photo from "./photoOfMe.JPG";
import { Row, Col, Section } from "../Grid";
import * as API from "../../utils/API";
import AboutContext from "../../utils/AboutContext";
import AboutCard from "../AboutCard/index";
import "./style.css";

function AboutData() {
    const [aboutState, setAboutState] = useState({
        id: 0,
        text: "",
        email: "",
        phone: "",
        resume: "",
        github: "",
        linkedin: ""
    })


    useEffect(() => {
        API.getAboutInfo.then((res) => {
            setAboutState(res);
        });
    }, []);


    return (
        <section id="about">
            <div className="row hi">
                <h1 id="hi">Hi, I'm Talia</h1>
            </div>
            <div className="row sub-hi">
                <h1 id="sub-hi">A Software Engineer.</h1>
            </div>
            <Row>

                <div className="main-col">

                    <div className="pic-col">
                        <img className="profile-pic" src={Photo} alt="Talia Zisman Profile Pic" />
                    </div>

                    <AboutContext.Provider value={aboutState}>
                        <AboutCard />
                    </AboutContext.Provider>
                    
                </div>
            </Row>

        </section>


    )

}

export default AboutData;