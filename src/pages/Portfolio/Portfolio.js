import React from "react";
import "../pages.css";
import projects from "../../projects.json";
import { Wrapper, Row } from "../../components/Grid";
import PortfolioData from "../../components/PortfolioData";
import PortfolioTitle from "../../components/PortfolioTitle/index";
// import ProjectCard from "../../components/ProjectCard/index";

class Portfolio extends React.Component {

  state = {
    projects
  };
 
  render() {
    return (

      
      <Wrapper>
        <PortfolioTitle>My Portfolio</PortfolioTitle>
       
        <Row>
          
          <PortfolioData />

        </Row>

      </Wrapper>
    );
  }
}

export default Portfolio;