import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import ResumeNew from "../Resume/ResumeNew";
import pdf from "../../Assets/Imriaz's Resume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Home2 from "./Home2";
import Type from "./Type";
import ContactMe from "../ContactMe";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div data-aos="fade-up-right">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Amirul Islam</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div data-aos="fade-up-left">
                <Tilt>
                  <img src={homeLogo} className="img-fluid " alt="home" />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResumeNew />

      <Home2 />
      <ContactMe />
    </section>
  );
}

export default Home;
