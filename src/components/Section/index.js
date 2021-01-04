import React from "react";
import "./style.css";

function Section(props) {
  return (
  <section className="card-body">{props.children}</section>
  );
}

export default Section;