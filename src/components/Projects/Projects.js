import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath="/projects/attendance.png"
              isBlog={false}
              title="Attendee"
              description="QR-based attendance system for campus placements: Generates session-specific QR codes, students scan via mobile to mark presence, with time, location, and device checks to prevent proxy. Real-time dashboard, CSV exports, and alerts for low attendance streamline coordination for recruiters and departments while reducing errors and paperwork"
              ghLink="https://github.com/SachinC2003/TPD-Attendance"
              demoLink="https://tpkit.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/zoom.png"
              isBlog={false}
              title="HealthCare"
              description="Developed a full-stack web application that allows patients to easily book, manage, and track doctor appointments online. The system enables users to register, view doctor profiles, check availability, and schedule appointments in real-time. Doctors can manage their slots and patient records through a secure dashboard."
              ghLink="https://github.com/SachinC2003/HealthCare"
              //demoLink="https://nextzoom.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/vitamom.webp"
              isBlog={false}
              title="Mediguard"
              description="Built a privacy-preserving healthcare prediction system using Federated Learning and NLP. The model analyzes multi-language symptom inputs, translates them into English, and predicts probable diseases locally. Each client model shares only parameters (not data) to improve a global federated model, ensuring security and continuous learning."
              ghLink="https://github.com/SachinC2003/MediGuard"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/senti.jpg"
              isBlog={false}
              title="Campus Comfort"
              description="Developed a web platform to help college students find and manage hostel accommodations with ease. The system allows hostel owners to upload details such as pricing, room sharing options, and facilities (Wi-Fi, hot water, etc.), while students can search, compare, and book hostels online. Integrated Cloudinary for image uploads and Recoil for state management to ensure a smooth user experience."
              ghLink="https://github.com/SachinC2003/Campus_Comfort"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/promanage.png"
              isBlog={false}
              title="Promanage"
              description="An integrated project management platform inspired by Kanban boards. It features visual task cards that move across customizable columns for workflow tracking. The platform includes built-in video and text chat for real-time team collaboration, enabling seamless communication while managing tasks. Notifications, deadlines, and file sharing streamline project execution."
              ghLink="https://github.com/SachinC2003/Hackera"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath="/projects/gesturevoice.png"
              isBlog={false}
              title="GestureVoice"
              description="An ISL (Indian Sign Language) recognition platform can be created using Convolutional Neural Networks (CNN), Tkinter for the GUI, and MediaPipe for real-time hand landmark detection. MediaPipe detects hand keypoints from live video input, CNN processes these keypoints/images to classify ISL signs, and Tkinter provides a user-friendly interface to display the recognized signs in real-time."
              ghLink="https://github.com/abhishekujale/GestureVoice"
              demoLink="https://youtu.be/c94HecXZK9E"
            //  <--------Please include a demo link here 
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
