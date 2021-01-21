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
            <Row>

                <div className="main-col">

                    <div className="pic-col">
                        <img className="profile-pic" src={Photo} alt="Talia Zisman Profile Pic" />
                    </div>
                    <div className="info-col">
                        <h2>About Me</h2>


                        <AboutContext.Provider value={aboutState}>
                            <AboutCard />
                        </AboutContext.Provider>
                    </div>
                </div>
            </Row>

        </section>
        // <div className="card">
        //     <Section>

        //         <Row>
        //             <Col>
        //                 {/* <!-- Image of Me --> */}
        //                 <img id="photo-of-me" src={Photo} alt="me smiling"></img>
        //             </Col>

        //             <Col>
        //                 {/* <!--Heading--> */}
        //                 <h4 className="card-title">
        //                     About Me
        //                 </h4>

        //                 {/* <!--Card paragraphs--> */}
        //                 <AboutContext.Provider value={aboutState}>
        //                     <AboutCard />
        //                 </AboutContext.Provider>

        //             </Col>
        //         </Row>
        //     </Section>
        // </div>

    )

}

export default AboutData;