import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cleanode from "../../Assets/Projects/clean-node-vss.png";
import brainDesease from "../../Assets/Projects/Skin-Desease-Finder-Project.png";
import hitchhike from "../../Assets/Projects/hitchhike-vss.png";
import uinvest from "../../Assets/Projects/u-invest-vss.jpeg";
import authentication from "../../Assets/Projects/authentication-vss.png";
import psycheck from "../../Assets/Projects/psycheck-vsss.png";

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
              imgPath={hitchhike}
              isBlog={false}
              title="HitchHike"
              description="Crowned as the most innovative idea, a Web App for carpooling was developed, in partnership with Stellantis. A Fullstack platform was developed, utilizing JavaScript, HTML CSS, Java, and Oracle as the database."
              ghLink="https://github.com/Smart-Mobility-Technology-Solutions"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uinvest}
              isBlog={false}
              title="U Invest"
              description="Web App to demystify IPOs, developed in partnership with B3. A chatbot was created using Python with Flask, Java as the backend, and React, with Oracle serving as the database."
              ghLink="https://github.com/Challenge-B3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psycheck}
              isBlog={false}
              title="PsyCheck"
              description="Mental health app, in partnership with Notredame Intermédica, aimed at facilitating the relationship between the doctor and the patient. Developed with React Native, Java, Azure and Oracle as database"
              ghLink="https://github.com/gs-notridame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanode}
              isBlog={false}
              title="Clean Node API"
              description="The goal is to demonstrate how to create an API with a well-defined and decoupled architecture, using TDD (Test-Driven Development) as a working methodology, Clean Architecture to distribute responsibilities across layers, always adhering to SOLID principles, and applying Design Patterns whenever possible to solve common problems."
              ghLink="https://github.com/shimarrudz/CleanNodeAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authentication}
              isBlog={false}
              title="Authentication JWT"
              description=  "This is an authentication system developed in Node.js using the Nest.js framework. It provides basic authentication features such as account creation, login, token generation, and token renewal."
              ghLink="https://github.com/shimarrudz/AuthenticationSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainDesease}
              isBlog={false}
              title="Brain Desease Finder AI"
              description="AI trained with Roboflow (a tool that trains through images) aimed at identifying brain diseases through imaging analysis."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
