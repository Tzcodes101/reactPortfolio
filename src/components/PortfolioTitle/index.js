import React from "react";
import "./style.css";
import { Section } from "../Grid";

function PortfolioTitle(props) {
    return (
    <Section>
        <h4 className="card-title" id="port-title">{props.children}</h4>
    </Section>
    );
}

export default PortfolioTitle;