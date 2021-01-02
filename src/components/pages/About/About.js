import React from "react";
import "../pages.css";

function About() {
    return (
        // < !--Activate grid system-- >
        <div className="container">
        
            <div className="row">

                {/* <!--Set responsive layout--> */}
                <div className="col-lg-10 col-md-10 col-xs-12">

                    <div className="row">


                        <div className="col">
                            {/* <!--Card edited from bootstrap--> */}
                            <div className="card">
                                <section className="card-body">

                                    <div className="row">
                                        <div className="col">
                                            {/* <!-- Image of Me --> */}
                                            <img id="photo-of-me" src={"/assets/photoOfMe.JPG"}  alt="Photo of me"></img>
                                        </div>
                                    </div>


                                        <div className="row">
                                            <div className="col">
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
                                                        View my resume here: <a
                                                            href="https://drive.google.com/file/d/10m9lv4HtVC2qcNfRYYMJRT0eyHYZNTCU/view?usp=sharing"
                                                            target="_blank">Resume</a>.
                                                        <br></br>
                                                            View my GitHub profile here: <a href="https://github.com/Tzcodes101"
                                                                target="_blank">My
                                                        GitHub Profile</a>.<br></br>
                                                                View my LinkedIn profile here: <a
                                                                    href="https://www.linkedin.com/in/talia-zisman-4b758a140/"
                                                                    target="_blank">My
                                                        LinkedIn Profile</a>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
                                               
    )
}

export default About;