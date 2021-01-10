import React from "react";

const AboutContext = React.createContext({
    id: 0,
    text: "",
    email: "",
    phone: "",
    resume: "",
    github: "",
    linkedin: ""

});

export default AboutContext;