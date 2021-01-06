import React from "react";
import "../pages.css";
import projects from "../../projects.json";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Row/index";
import PortfolioTitle from "../../components/PortfolioTitle/index";
import ProjectCard from "../../components/ProjectCard/index";

class Portfolio extends React.Component {

  state = {
    projects
  };
 
  render() {
    return (

      
      <Wrapper>
        <PortfolioTitle>My Portfolio</PortfolioTitle>
       
        <Row>
          {this.state.projects.map( project => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              gitHub={project.gitHub}
              liveUrl={project.liveUrl}
            />
          ))}

        </Row>

      </Wrapper>
    );
  }
}

export default Portfolio;