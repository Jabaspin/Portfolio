import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Eclipse from "../../Assets/TechIcons/Eclipse.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Windows from "../../Assets/TechIcons/Windows 11.svg";
import netbeans from "../../Assets/TechIcons/netbeans-original.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows OS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

        <Col xs={4} md={2} className="tech-icons ">
          <img src={Eclipse} alt="Eclipse" className="tech-icon-images" />
          <div className="tech-icons-text">Eclipse</div>
        </Col>
        
        <Col xs={4} md={2} className="tech-icons ">
          <img src={netbeans} alt="NetBeans" className="tech-icon-images" />
          <div className="tech-icons-text">NetBeans</div>
        </Col>
    </Row>
  );
}

export default Toolstack;
