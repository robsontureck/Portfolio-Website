import "./About.css";
import { Container, Row, Col } from "reactstrap";

const About = () => {
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
              Hello! I'm a motivated and detail-oriented technology professional
              with a diverse background in engineering and software development.
              I hold a Bachelor's degree in Naval Engineering from the
              prestigious Federal University of Santa Catarina in Brazil and
              recently completed my Master's in Information Technology, with a
              major in Software Development, at Queensland University of
              Technology (QUT).
            </p>{" "}
            <p>
              Throughout my academic and professional journey, I've developed a
              robust skill set that I am eager to apply in a dynamic tech
              environment. My engineering background has endowed me with a
              unique perspective on problem-solving and innovation, making me
              particularly passionate about diving into software projects that
              challenge the status quo and push the boundaries of what
              technology can achieve.{" "}
            </p>
            <p>
              As I transition into the technology sector, I am keen to
              contribute to projects that embrace innovative ideas and foster
              continuous learning. My goal is to leverage my diverse skills to
              make a significant impact in the tech world, participating in
              projects that not only solve complex problems but also improve
              people's lives.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
