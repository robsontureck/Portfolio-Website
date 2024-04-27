import "../styles/Resume.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
  CardSubtitle,
} from "reactstrap";
import resumeImage from "../Images/resume.png";
import qutLogo from "../Images/qut-logo.jpg";
import ufscLogo from "../Images/ufsc-logo.png";

import Skills from "../components/Skills.js";
import { useRepos } from "../context/ReposContext";

const Resume = () => {
  const { loading, repos, error } = useRepos();
  const cvFile = "resume.pdf";
  return (
    <div className="resume-container">
      <Container fluid className="mt-4 mb-4">
        <Row>
          <Col md={{ size: 2, offset: 1 }} xs="12" className="resume-image">
            <img src={resumeImage} alt="resume" className="img-fluid" />
          </Col>
          <Col md="6" className="summary">
            <p>
              My name is Robson Tureck Zargiski, a passionate and
              detail-oriented Master of Information Technology graduate from
              Queensland University of Technology, specializing in software
              development. With a foundational background as a Naval Engineer
              from the Federal University of Santa Catarina, I blend rigorous
              engineering principles with advanced programming skills. My
              academic journey is marked by key courses in Advanced Programming,
              Software Engineering Principles, and Cyber Security Fundamentals,
              preparing me to tackle complex problems in today’s dynamic tech
              environment. Driven by a commitment to innovation and continuous
              learning, I am eager to apply my skills in a professional setting
              where I can contribute to impactful projects. My background in
              application development, which spans from e-commerce platforms to
              interactive online services, highlights my capacity to employ
              technology to improve user experiences and operational
              efficiencies.
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
            Projects
          </Col>
        </Row>
      </Container>
      <Container>
        {error ? (
          <Row>
            <Col>
              <div className="error-message-resume">
                Failed to load repositories. Please try again later.
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="repos-container-resume">
            {repos.map((repo) => (
              <Col key={repo.id} xs="12" sm="12" md="12" lg="3">
                <Card className="card-custom-resume" color="danger" outline>
                  <CardBody>
                    <CardTitle tag="h5">{repo.name}</CardTitle>
                    <CardSubtitle>
                      Main Technology Used: {repo.language}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        )}
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
          <Col md="6">
            <Card className="flex-row" color="danger" outline>
              <div className="card-img-left">
                <img src={ufscLogo} alt="Naval Engineering" />
              </div>
              <CardBody>
                <CardTitle tag="h5">Bachelor of Naval Engineering</CardTitle>
                <CardText>Federal University of Santa Catarina</CardText>
                <CardText>March 2013 - August 2018</CardText>
                <CardText>GPA 6.2/7</CardText>
                <CardText></CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card className="flex-row" color="danger" outline>
              <div className="card-img-left">
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
