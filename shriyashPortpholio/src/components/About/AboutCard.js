import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shriyash Jadhav </span>
            from <span className="purple"> Satara, Maharashtra.</span>
            <br />
            I am currently working as a Freelancer.
            <br />
            I have completed B.Tech. (Mechanical) at Arvind Gavali College of Engineering ,Satara.
            <br />
            My journey into the world of technology started with a deep fascination for how things work. From tinkering with gadgets to building my first website, I discovered the power of turning ideas into reality through the language of code. This curiosity has been my driving force ever since.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring distant lands
            </li>
            <li className="about-activity">
              <ImPointRight /> Living moments
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Feeling the music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shriyash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
