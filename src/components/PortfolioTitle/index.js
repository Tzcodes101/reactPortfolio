import React from "react";
import "./style.css";
import { Section } from "../Grid";

function PortfolioTitle(props) {
    return (
    <Section>
        <h2 className="card-title" id="port-title">{props.children}</h2>
    </Section>
    );
}

export default PortfolioTitle;