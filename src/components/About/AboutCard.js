import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ula Nosirov</span>, 
            from <span className="purple">Birmingham, Alabama.</span>
            <br />
            I am a full-stack developer currently working at Velocity LLC.
            <br />
            I graduated from the <span className="purple">University of Alabama in Huntsville</span> with a degree in Computer Science.
            <br />
            I specialize in creating modern web applications using tools like 
            <span className="purple"> React.js, Node.js, and Firebase,</span> 
            along with my expertise in <span className="purple">FlutterFlow</span> for frontend development.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              ⚽ Playing soccer
            </li>
            <li className="about-activity">
              📺 Watching sports
            </li>
            <li className="about-activity">
              ✈️ Traveling
            </li>
            <li className="about-activity">
              💻 Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is not just a tool; it's how I bring ideas to life!"{" "}
          </p>
          <footer className="blockquote-footer">Ula Nosirov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
