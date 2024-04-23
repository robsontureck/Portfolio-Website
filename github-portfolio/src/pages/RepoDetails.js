import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import FetchYoutubeAPI from "../components/fetchYoutubevideos"; // Your YouTube fetching component
import { useRepos } from "../context/ReposContext";

const RepoDetails = () => {
  const { repos } = useRepos();
  const { id } = useParams();
  const repo = repos.find((repo) => repo.id.toString() === id);

  const [videoUrl, setVideoUrl] = useState("");

  const handleFetchVideo = async () => {
    const url = await FetchYoutubeAPI(repo.language);
    setVideoUrl(url);
  };

  if (!repo) return <div>Repository not found!</div>;

  return (
    <Container>
      <Row>
        <Col md="6">
          <img
            src={repo.image || "https://picsum.photos/300/200"}
            alt={repo.name}
            className="img-fluid"
          />
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{repo.name}</CardTitle>
              <CardText>{repo.description}</CardText>
              <CardText>
                <strong>Language:</strong> {repo.language}
              </CardText>
              <Button onClick={handleFetchVideo}>Load Tutorial</Button>
              {videoUrl && <iframe src={videoUrl} allowFullScreen></iframe>}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RepoDetails;
