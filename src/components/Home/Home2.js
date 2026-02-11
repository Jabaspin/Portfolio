import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a motivated Software Developer and Information Technology 
              undergraduate with a strong foundation in Java and Front-End Web Development. 
              I enjoy building practical, user-focused applications with clean frontend design. 
              Through academic projects and internships, I’ve developed hands-on experience in
              creating scalable web solutions using modern technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, HTML, CSS, React.js, SQL, and MongoDB.{" "}
                </b>
              </i>
              <br />
              <br />
              During my Web Development Internship at Altruisty, I developed an aptitude practice platform, strengthening my ability to design interactive and structured web applications. I also contributed as a 
              <i>
                <b className="purple">
                  {" "}
                  Frontend Developer{" "}
                </b>
              </i>
                   in a team project to build a fully functional website for Global India Corporation.
              <br />
              <br />
              Certified in 
              <i>
                <b className="purple">
                  {" "}
                  Java Full Stack Development{" "}
                </b>
              </i>
               and 
               <i>
                <b className="purple">
                  {" "}
                  UIPath Automation
                </b>
              </i>
              , I am passionate about growing as a 
              <i>
                <b className="purple">
                  {" "}
                  Java Developer, Frontend Engineer, or Full Stack Developer.{" "}
                </b>
              </i>
               I continuously focus on improving my problem-solving skills, writing efficient code, and collaborating effectively within teams to deliver high-quality software solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
