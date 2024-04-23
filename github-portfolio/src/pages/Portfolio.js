import useGitHubRepos from "../hooks/GitHubAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRepos } from "../context/ReposContext";
import "./Portfolio.css";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

const token = process.env.REACT_APP_GITHUB_TOKEN;

const Portfolio = ({ username }) => {
  //const { loading, repos, error } = useGitHubRepos(username, token);
  const { loading, repos, error } = useRepos();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepos = repos.filter((repo) =>
    repo.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="centered-container">
        <h1>
          My <span style={{ color: "red" }}>Portfolio</span>
        </h1>
      </div>
      <div className="input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by language..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Container>
        <Row className="repos-container">
          {filteredRepos.map((repo) => (
            <Col key={repo.id} xs="12" sm="12" md="12" lg="3">
              <Link to={`/repo/${repo.id}`}>
                <Card className="card-custom" color="danger" outline>
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">{repo.name}</CardTitle>
                    <CardSubtitle>
                      Main Technology Used: {repo.language}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
