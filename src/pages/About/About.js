import React from "react";
import "../pages.css";
import Photo from "./photoOfMe.JPG";
import { Wrapper, Row, Col, Section } from "../../components/Grid";


function About() {
    return (
        // < !--Activate grid system-- >
        <Wrapper>

            <Row>


                <Col>
                    {/* <!--Card edited from bootstrap--> */}
                    <div className="card">
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
                                    <div className="card-text">
                                        <p>
                                            My name is Talia Zisman, and I currently enrolled in Columbia
                                            Univerity's
                                            Full-Stack Web Development
                                            Bootcamp. I am skilled in HTML, CSS, JavaScript, MySQL, MongoDB, Mongoose, and Node.js.
                                            Through group-work, I have learned git workflow and
                                            team
                                            collaboration. Examples of my assignments and projects can
                                            be
                                            found
                                            on my porfolio page as well as on my GitHub page as pinned repositories.
                                            In
                                            my
                                            work, I strive to be concise and clean for a beautiful user interface
                                            and
                                            effective application.
                                                    </p>

                                        <p>
                                            Email: tzcodes101@gmail.com <br></br>
                                                        Phone: (518) - 817 - 7206 <br></br>
                                                        View my resume here: <a
                                                href="https://drive.google.com/file/d/10m9lv4HtVC2qcNfRYYMJRT0eyHYZNTCU/view?usp=sharing"
                                                target="_blank" rel="noopener noreferror">Resume</a>.
                                                        <br></br>
                                                            View my GitHub profile here: <a href="https://github.com/Tzcodes101"
                                                target="_blank" rel="noopener noreferror">My
                                                        GitHub Profile</a>.<br></br>
                                                                View my LinkedIn profile here: <a
                                                href="https://www.linkedin.com/in/talia-zisman-4b758a140/"
                                                target="_blank" rel="noopener noreferror">My
                                                        LinkedIn Profile</a>.
                                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Section>
                    </div>
                </Col>
            </Row>
        </Wrapper>

    )
}

export default About;