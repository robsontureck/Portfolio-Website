import { useState } from "react";
import { Link } from "react-router-dom";
import { useRepos } from "../context/ReposContext";
import "../styles/Portfolio.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
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
  if (error)
    return (
      <div className="error-message-portfolio">
        <h1>Failed to load repositories. Please try again later.</h1>
        Error:{error}
      </div>
    );

  return (
    <div>
      <div className="centered-container">
        <h1 className="portfolio-title">My Projects</h1>
      </div>
      <div className="input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Filter by language..."
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
                  <img alt="Sample" src="https://picsum.photos/id/1/500/400" />
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
