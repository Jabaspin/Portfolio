import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jabaspin J</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I’m currently pursuing a bachelor's degree in{" "}
            <span className="purple">Information Technology</span> at{" "}
            <span className="purple">Panimalar Engineering College</span>.
            <br />I had completed my SSLC and HSC at{" "}
            <span className="purple">A.P.J.M Matriculation Higher Secondary School</span> with the percentage of{" "}
            <span className="purple">80%</span>{" "}and{" "}<span className="purple">74.5%</span>{" "}respectively.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎧
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
