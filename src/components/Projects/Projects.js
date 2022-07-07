import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodrecipe from "../../Assets/Projects/foodrecipe.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import todo from "../../Assets/Projects/todo.png";
import crypto from "../../Assets/Projects/crypto.png";
import calculator from "../../Assets/Projects/calculator.JPG";
import normalPortfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Tracker"
              description="Crypto Tracker App, which helps people to analyze about crypto currencies. Project build with react.js and Material-UI. in this Project we Fetched all crypto currencies data using concept of API"
              link="https://ashish-crypto-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={normalPortfolio}
              isBlog={false}
              title="My Portfolio without React"
              description="My personal portfolio Website build with Pure HTML, CSS and JavaScript with little bit of Bootstrap used for designing. This project is hosted on Github. May updated by latest technology with time"
              link="https://ashish-ko.github.io/PortfolioWebsite/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo's List"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://ashish-ko.github.io/ToDosList/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="Food Recipe App"
              description="Food recipe search WebApp created by me using ReactJS and Bootstrap. where you can search for any recipe. our app fetched data according to your search, from an API and provide you the best matched result."
              link="https://ashish-ko.github.io/react-recipe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="JavaScript Calculator"
              description="Created a calculator using HTML, CSS and JavaScript. And also added dark mode in this project "
              link="ashish-ko.github.io/calculator/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
