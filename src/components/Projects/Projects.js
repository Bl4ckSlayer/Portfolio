import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Ano from "../../Assets/Projects/ano.png";
import Code from "../../Assets/Projects/code.png";
import Land from "../../Assets/Projects/land.png";
import Obs from "../../Assets/Projects/obs.png";
import Space from "../../Assets/Projects/space.png";
import Tool from "../../Assets/Projects/tools.png";
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
          {" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Code}
              isBlog={false}
              title="Code Academia"
              description="Technologies Used: React JS, React Bootstrap, React Icons, Firebase, JWT Web Token"
              link="https://code-academia-1f5c3.web.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/code-academia-client"
              linkGitServer="https://github.com/Bl4ckSlayer/code-academia-server"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Land}
              isBlog={false}
              title="Bike Land"
              description="1.This is an online bike warehouse website. Contains some Brand articles and tools.
              2. Per user authentication by Firebase. Some word of company.
              3. Delivering or stocking items system. Can add new products, delete products, update products.
              Technologies Used: React JS, React Bootstrap, React Icons, React From Hook, Framer Motion, Firebase, JWT
              Web Token, , Heroku , MongoDB
"
              link="https://bike-land-91c71.web.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/Bike-land-client"
              linkGitServer="https://github.com/Bl4ckSlayer/Bike-land-server"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tool}
              isBlog={false}
              title="Bike Tools Inventory"
              description="1. Firebase user authentication is used for user signup/login. Once a user signup their information is stored on the
              database. Sign In with Google is implemented.
              2. A user (not admin) can purchase items and will see their ordered items on the My Orders section. Users can pay
              using a credit card. Once the transaction is complete they will see their purchase transaction id on their ordered
              Products. They can choose to delete any product if remains unpaid.also user can add review
              3. Order shipping ,admin route ,managing products by admin.
              Technologies Used: React JS, Tailwind, React Icons, React From Hook, Framer Motion, Firebase, JWT Web
              Token, Heroku , MongoDB"
              link="https://bike-tools-a8d5c.web.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/Bike-Tools"
              linkGitServer="https://github.com/Bl4ckSlayer/Bike-tools-server"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ano}
              isBlog={false}
              title="
              Annotation web service "
              description=" "
              link="https://precious-salmiakki-51cbcb.netlify.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/Annotation-web-service"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnlineCourse}
              isBlog={false}
              title="Tutor On The Go"
              description="1. This is an individual service provider website where the users can login and see the available courses stored in it.
              Technologies Used: React JS, React Bootstrap, React Icons, Firebase, JWT Web Token"
              link="https://tutor-one-the-go.web.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/tutor-on-the-go"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Obs}
              isBlog={false}
              title="Observer Co."
              description="Technologies Used: React JS, React tailwind, React Icons"
              link="https://bejewelled-daffodil-c93c2d.netlify.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/tutor-on-the-go"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Space}
              isBlog={false}
              title="Space X"
              description="
              Technologies Used:  Technologies Used: React JS, React tailwind, React Icons"
              link="https://vocal-maamoul-239075.netlify.app/"
              linkGitClient="https://github.com/Bl4ckSlayer/tutor-on-the-go"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
