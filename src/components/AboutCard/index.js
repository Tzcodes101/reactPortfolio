import React, { useContext } from "react";
import AboutContext from "../../utils/AboutContext";
import { Row, Col } from "../Grid";

function AboutCard() {
    const { id, text, email, phone, resume, github, linkedin } = useContext(AboutContext);
    return (
        <div className="about-data" key={id}>

            <div className="row">
                <div className="contact-details">
                    <h2>About Me</h2>
                    <p>{text} </p>
                    <h2>Contact Details</h2>
                    <p className="address">
                        <Row>

                            <Col>
                                <span>{phone}</span><br />
                                <span>{email}</span><br />
                                {/* <span><a href={resume} className="button"><i className="fa fa-download"></i> Download Resume</a></span> */}
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
                <div className="links">
                    <Col>
                        {/* <ul className="social"> */}
                        {/* <li>
                                    <a href={github} className="button"><i className="fab fa-github" />  </a>
                                </li>
                                <li>
                                    <a href={linkedin} className="button"><i class="fab fa-linkedin-in"></i></a>
                                </li> */}
                        {/* <li>
                            <a href={resume} className="button" target="_blank noopener norefferer"><i class="fas fa-file"></i> View Resume</a>
                        </li> */}



                        {/* </ul> */}


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