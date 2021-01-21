import React, { useContext } from "react";
import AboutContext from "../../utils/AboutContext";
import { Row, Col } from "../Grid";

function AboutCard() {
    const { id, text, email, phone, resume, github, linkedin } = useContext(AboutContext);
    return (
        <div className="about-data" key={id}>
            <p>{text} </p>
            <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <Row>

                            <Col>
                                <span>{phone}</span><br />
                                <span>{email}</span><br />
                            </Col>


                        </Row>
                    </p>
                </div>
                <div className="links">
                    <Col>
                        <span><a href={github} className="button">Visit GitHub</a></span><br />
                        <span><a href={linkedin} className="button">Visit LinkedIn</a></span><br />
                        <span><a href={resume} className="button"><i className="fa fa-download"></i>Download Resume</a></span>
                    </Col>
                </div>
            </div>

        </div>


        // <div className="card-text" key={id}>
        //     <p>{text}</p>

        //     <p>
        //        Email: {email}<br></br>
        //        Phone: {phone}<br></br>
        //        View my resume here: <a
        //             href={resume}
        //             target="_blank" rel="noopener noreferrer">Resume</a>.<br></br>
        //        View my GitHub profile here: <a href={github}
        //             target="_blank" rel="noopener noreferrer">My GitHub Profile</a>.<br></br>
        //        View my LinkedIn profile here: <a
        //             href={linkedin}
        //             target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>.
        //    </p>
        // </div>
    )
}

export default AboutCard;