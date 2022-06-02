import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ImriazAuto from "../../Assets/Projects/ImriazAuto.jpg";
import TourWithImriaz from "../../Assets/Projects/TourWithImriaz.jpg";
import VaccinationCare from "../../Assets/Projects/VaccinationCare.jpg";
import PlasmaHealthcare from "../../Assets/Projects/PlasmaHealthcare.jpg";
import CapstonGroup from "../../Assets/Projects/CapstoneGroup.jpg";
import OnlineCourse from "../../Assets/Projects/OnlineCourse.png";

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
              imgPath={ImriazAuto}
              isBlog={false}
              title="Imriaz Auto"
              description="1. This is a Bike selling website where users can Login/registration by google authentication & User name, Email, Password, User & Admin Role separated Dashboard.  
              2. Add products, manage all orders & Manage all Products & delete orders, products by Admin 
              3. Users can order products, add a review, View My orders and also delete them.
              Technology Used: HTML, CSS, Bootstrap, Material UI, React js, Node js, 
Express js, MongoDB, Firebase 
"
              link="https://imriaz-auto.web.app/"
              linkGitClient="https://github.com/Imriaz/Imriaz-Auto-Client"
              linkGitServer="https://github.com/Imriaz/Imriaz-Auto-Server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TourWithImriaz}
              isBlog={false}
              title="Tour With Imriaz Website"
              description="1. This is a Tourism Booking website where users can 
              Login/registration by google authentication.
              2. Add package, manage all orders & Manage my orders & delete orders by User.
              3.  Users can order products, add reviews, View My orders and also delete them.
              Technology Used: Html, CSS, Bootstrap, React js, Node js, Express js, 
MongoDB, Firebase"
              link="https://tour-with-imriaz.web.app/"
              linkGitClient="https://github.com/Imriaz/Tour-With-Imriaz-Client"
              linkGitServer="https://github.com/Imriaz/Tour-With-Imriaz-Server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VaccinationCare}
              isBlog={false}
              title="Vaccination Care"
              description="1. This is a Vaccination Reminder website where users can Login/registration by Email, Password and get information, SMS reminders for an upcoming vaccine for their children.
              2. User & Admin Role separated Dashboard. An Admin can add vaccines, send a reminder to the guardian’s mobile.
              3. Technology Used: HTML, CSS, Bootstrap, PHP, MySQL"
              link="https://vaccinationcare.000webhostapp.com/"
              linkGitClient="https://github.com/Imriaz/VaccinationCare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlasmaHealthcare}
              isBlog={false}
              title="Plasma Health Care"
              description=" • This project is about a healthcare clinic with possible all details. • There is an private portion which is access by only logged user. • In this app the user can login or register by two way. One is using email, Password & another is using google account. • After login, user can book the department for their desire details. • There also a part of Doctor's name & details, which is helpful to find the doctor."
              link="https://plasma-healthcare.web.app/"
              linkGitClient="https://github.com/Imriaz/Plasma-Healthcare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CapstonGroup}
              isBlog={false}
              title="Capston Group Select."
              description="This is for Capstone group select • Know total waiver of the team member • Select as your own choice"
              link="https://group-select-imriaz.netlify.app/"
              linkGitClient="https://github.com/Imriaz/capston-group-select"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
