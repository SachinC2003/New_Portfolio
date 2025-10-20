import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Experiances() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Internships </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the internships I have completed during my learning journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/attendance.png"
              isBlog={false}
              title="Biofield Power"
              description="Worked as a software development intern focusing on building internal tools and dashboards. Gained hands-on experience with full-stack development, automation scripts, and cloud integration. Collaborated with the team to optimize workflows and improve system performance."
              // demoLink can be added if any demo exists
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/zoom.png"
              isBlog={false}
              title="Zeldatech"
              description="Interned at Zeldatech working on web development and backend optimization projects. Implemented features for internal applications, fixed bugs, and assisted in deploying new modules. Gained experience in team collaboration, version control, and practical software engineering workflows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/attendance.png"
              isBlog={false}
              title="Attendee Website (College Project)"
              description="Worked as an intern to develop 'Attendee,' a QR-based attendance management system for our college. Built features to generate session-specific QR codes, validate student presence, prevent proxy attendance, and provide real-time dashboards for faculty. Gained experience in front-end and back-end web development, database management, and deployment."
              ghLink="https://github.com/SachinC2003/TPD-Attendance"
              demoLink="https://tpkit.vercel.app"
            />
          </Col>
          {/* You can add more internships here in the same format */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Experiances;
