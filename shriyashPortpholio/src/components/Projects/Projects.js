import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/yummytummy.png";
import school from "../../Assets/Projects/school.png";
import todo from "../../Assets/Projects/todo.png";
import bitsOfCode from "../../Assets/Projects/trendhub.png";

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
              imgPath={todo}
              isBlog={false}
              title="scheduliadaily"
              description="Introducing my sleek and intuitive To-Do App – a productivity powerhouse at your fingertips. Seamlessly organize tasks, set priorities, and track progress. With a minimalist design and user-friendly interface, this app transforms your daily chaos into streamlined productivity. Say goodbye to forgotten tasks and hello to a more organized, efficient you."
              ghLink="https://github.com/shreejadhav007/todos"
              demoLink="https://scheduliadaily.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TrendHub E-Commerce Website"
              description="Discover a world of seamless online shopping with my E-commerce Website. Explore a curated collection, effortless navigation, and secure checkout. Elevate your shopping experience with user-friendly design, quick searches, and personalized recommendations. Your go-to destination for a hassle-free, stylish, and secure online shopping journey."
              ghLink="https://github.com/shreejadhav007/trendhub"
              demoLink="https://trendii.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cafeteria Website"
              description="Developed a responsive website using HTML, CSS, and JavaScript to ensure optimal performance across various
              devices and browsers.
              Implemented a user-friendly navigation system and intuitive
              interface to enhance the overall user experience"
              ghLink="https://github.com/shreejadhav007/YummyTummyCafe.github.io"
              demoLink="https://shreejadhav007.github.io/YummyTummyCafe.github.io/"              
            />
          </Col>
      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management system"
              description="This is the software based on python language, which
              includes CRUD operations connected with database.
              It stores data of students and performs required operations
              as per need.
              This is my personal project done using python and various"
              ghLink="https://github.com/shreejadhav007/Python_SchoolManagement"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
