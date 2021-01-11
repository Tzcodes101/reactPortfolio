import React from "react";
import "../pages.css";
import { Wrapper, Row, Col } from "../../components/Grid";
import PortfolioData from "../../components/PortfolioData";
import PortfolioTitle from "../../components/PortfolioTitle/index";

class Portfolio extends React.Component {


  render() {
    return (


      <Wrapper>
        <PortfolioTitle>My Portfolio</PortfolioTitle>
        
          <Col className="mx-auto">
            <Row>

              <PortfolioData />

            </Row>
          </Col>
       

      </Wrapper>
    );
  }
}

export default Portfolio;