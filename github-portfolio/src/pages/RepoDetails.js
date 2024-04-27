import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import FetchYoutubeAPI from "../api/fetchYoutubevideos";
import { useRepos } from "../context/ReposContext"; // Ensure context is set up correctly
import "../styles/RepoDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const RepoDetails = () => {
  const { repos } = useRepos();
  const { id } = useParams();
  const repo = repos?.find((repo) => repo.id.toString() === id);

  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false); // Manage video visibility
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetchVideo = async () => {
    // Check if video is not already displayed
    if (!showVideo) {
      const { url, error } = await FetchYoutubeAPI(repo.language);
      if (error) {
        setErrorMessage("Failed to fetch video. Please try again later."); // Set the returned error message from the API function
      } else {
        setVideoUrl(url);
        setShowVideo(true);
        setErrorMessage(""); // Clear any existing error messages when successful
      }
    } else {
      setShowVideo(false); // Hide the video
      setVideoUrl(""); // Optionally clear the video URL
    }
  };

  if (!repo) return <div>Repository not found!</div>;

  return (
    <Container>
      <Row className="align-items-center">
        <Col md="6">
          <img
            src={repo.image || "https://picsum.photos/id/1/500/400"}
            alt={repo.name}
            className="img-fluid repo-image"
          />
        </Col>
        <Col md="6">
          <div className="repo-details">
            <h5 className="text-center">{repo.name}</h5>
            <p className="text-center">
              <strong>Language:</strong> {repo.language}
            </p>
            <p className="text-center">{repo.description}</p>
            <div className="text-center repo-buttons">
              <Button color="secondary" href={repo.url} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> Source Code
              </Button>
              <Button
                color="primary"
                onClick={handleFetchVideo}
                className="ms-2"
              >
                {showVideo
                  ? "Close Video"
                  : "Load a video about the language used"}
              </Button>
            </div>
            {errorMessage && (
              <p className="error-message-details text-center">
                {errorMessage}
              </p>
            )}{" "}
            {/* Display error message if it exists */}
            {videoUrl && (
              <div className="text-center mt-3 repo-video">
                <iframe
                  src={videoUrl}
                  width="100%"
                  height="315"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RepoDetails;
