import "./Resume.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import resumeImage from "../Images/resume.png";
import qutLogo from "../Images/qut-logo.jpg";
import ufscLogo from "../Images/ufsc-logo.png";

import Skills from "../components/Skills.js";

const Resume = () => {
  const cvFile = "resume.pdf";
  return (
    <div>
      <Container fluid className="mt-4 mb-4">
        <Row>
          <Col md={{ size: 2, offset: 1 }} xs="12" className="resume-image">
            <img src={resumeImage} alt="resume" className="img-fluid" />
          </Col>
          <Col md="6" className="summary">
            <p>
              I am Robson Tureck Zargiski, a passionate and detail-oriented
              Master of Information Technology graduate from Queensland
              University of Technology, specializing in software development.
              With a foundational background as a Naval Engineer from the
              Federal University of Santa Catarina, I blend rigorous engineering
              principles with advanced programming skills. My academic journey
              is marked by key courses in Advanced Programming, Software
              Engineering Principles, and Cyber Security Fundamentals, preparing
              me to tackle complex problems in today’s dynamic tech environment.
              Driven by a commitment to innovation and continuous learning, I am
              eager to apply my skills in a professional setting where I can
              contribute to impactful projects and push the boundaries of
              technology. My experience includes developing a variety of
              applications ranging from e-commerce platforms to interactive web
              services, underscoring my ability to enhance user experiences and
              improve operational efficiencies through technological solutions.
            </p>
            <Button
              className="button-center"
              color="danger"
              href={`/${cvFile}`}
              target="_blank"
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="center-content">
        <Row>
          <Col
            className="resume-title"
            md={{
              offset: 1,
              size: 12,
            }}
            sm="12"
          >
            Skills
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col
            className="skillsss"
            md={{
              offset: 1,
              size: 10,
            }}
            sm="12"
          >
            <div className="skills-container">
              <Skills />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="center-content">
        <Row>
          <Col
            className="resume-title"
            md={{
              offset: 1,
              size: 12,
            }}
            sm="12"
          >
            Education
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {/* First Card for Naval Engineering Degree */}
          <Col md="6">
            <Card className="flex-row">
              <div className="card-img-left">
                {/* Replace 'navalEngineeringImage' with the actual path to your image */}
                <img src={ufscLogo} alt="Naval Engineering" />
              </div>
              <CardBody>
                <CardTitle tag="h5">Bachelor of Naval Engineering</CardTitle>
                <CardText>Federal University of Santa Catarina</CardText>
                <CardText>March 2013 - August 2018</CardText>
                <CardText>GPA 6.2/7</CardText>
                <CardText></CardText>
                {/* Add more details as needed */}
              </CardBody>
            </Card>
          </Col>

          {/* Second Card for Masters of IT */}
          <Col md="6">
            <Card className="flex-row">
              <div className="card-img-left">
                {/* Replace 'navalEngineeringImage' with the actual path to your image */}
                <img src={qutLogo} alt="Naval Engineering" />
              </div>
              <CardBody>
                <CardTitle tag="h5">Master of Information Technology</CardTitle>
                <CardText>Queensland University of Technology</CardText>
                <CardText>July 2022 - July 2024</CardText>
                <CardText>GPA 6.45/7</CardText>
                <CardText>
                  <li>Major in Software Development</li>
                </CardText>
                {/* Add more details as needed */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
