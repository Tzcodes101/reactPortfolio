import React, { useContext } from "react";
import AboutContext from "../../utils/AboutContext";

function AboutCard() {
    const { id, text, email, phone, resume, github, linkedin } = useContext(AboutContext); 
    return (

        <div className="card-text" key={id}>
            <p>{text}</p>

            <p>
               Email: {email}<br></br>
               Phone: {phone}<br></br>
               View my resume here: <a
                    href={resume}
                    target="_blank" rel="noopener noreferrer">Resume</a>.<br></br>
               View my GitHub profile here: <a href={github}
                    target="_blank" rel="noopener noreferrer">My GitHub Profile</a>.<br></br>
               View my LinkedIn profile here: <a
                    href={linkedin}
                    target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>.
           </p>
        </div>
    )
}

export default AboutCard;