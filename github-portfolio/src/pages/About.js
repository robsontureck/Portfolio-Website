import { useEffect } from "react";
import "../styles/About.css";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  // Set the page title using useEffect
  useEffect(() => {
    document.title = "Git Portfolio- About";
  }, []);
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col
            className="intro-message"
            sm={{
              offset: 1,
              size: 10,
            }}
          >
            <h1>
              Get to <span style={{ color: "red" }}>Know</span> me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="about" md={{ size: 8, offset: 2 }}>
            <p>
              I'm a motivated and detail-oriented technology professional with a
              diverse background in engineering and software development. I hold
              a Bachelor's degree in Naval Engineering from the Federal
              University of Santa Catarina in Brazil and currently studying my
              Master's in Information Technology, with a major in Software
              Development, at Queensland University of Technology (QUT).
            </p>{" "}
            <p>
              Throughout my academic journey, I've developed a robust skill set
              that I am eager to apply in a dynamic tech environment. My
              engineering background has endowed me with a unique perspective on
              problem-solving and innovation. With this skillset, I’d like to
              dive into softwares projects that push the boundaries of my
              knowledge.
            </p>
            <p>
              As I move into the technology industry, I'm excited to work on
              initiatives that support creative thinking and ongoing education.
              My objective is to use my broad skill set to contribute to
              projects that not only solve difficult issues but also enhance the
              lives of people, thereby having a major impact on the tech
              industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
