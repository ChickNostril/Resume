import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./styles/ResumePage.css"; // 커스텀 CSS 파일

const ResumePage = () => {
  return (
    <Container className="resume-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="title">
                <h1 className="text-center">신정엽</h1>
                <p className="text-center text-muted">Frontend Developer</p>
              </div>
              <hr />
              <Row className="mt-4">
                <Col>
                  <h4>About Me</h4>
                  <p>
                    A passionate frontend developer with experience in creating
                    responsive and interactive web applications. Skilled in
                    React, JavaScript, and modern web development tools.
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h4>Contact Information</h4>
                  <p>Email: strik241@gmail.com</p>
                  <p>Phone: 010-7127-1089</p>
                  <p>Github: https://github.com/ChickNostril</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <h4>Skills</h4>
                <Col>
                  <h5>자주 사용</h5>
                  <ul className="skills-list">
                    <li>HTML & CSS</li>
                    <li>JS & TS</li>
                    <li>React</li>
                    <li>Git & GitHub</li>
                  </ul>
                </Col>
                <Col>
                  <h5>사용 경험</h5>
                  <ul className="skills-list">
                    <li>Java</li>
                    <li>Express</li>
                    <li>SpringBoot</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumePage;
