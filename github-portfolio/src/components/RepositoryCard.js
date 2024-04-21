import React, { useState } from "react";

const fetchYouTubeVideos = async (language) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const searchQuery = `${language} programming tutorial`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
    searchQuery
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok)
      throw new Error(`YouTube API responded with ${response.status}`);
    const videoId = data.items[0]?.id.videoId;
    return `https://www.youtube.com/embed/${videoId}`; // Ensure the URL is in the embed format
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return "";
  }
};

const RepositoryCard = ({ repo }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleFetchVideo = async () => {
    // Assuming `fetchYouTubeVideos` returns the full URL for the video
    const url = await fetchYouTubeVideos(repo.language);
    setVideoUrl(url);
  };

  return (
    <div
      style={{
        background: "black",
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        flexBasis: "calc(50% - 20px)", // Adjusting width for two cards per row minus margin
        boxSizing: "border-box",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderRadius: "20px",
      }}
    >
      <img
        src="/code.jpg"
        alt={repo.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>
        <strong>Language(s):</strong> {repo.language}
      </p>
      <p>
        <strong>Created On:</strong>{" "}
        {new Date(repo.createdAt).toLocaleDateString()}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forksCount}
      </p>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <button onClick={handleFetchVideo}>Learn More</button>
      {videoUrl && (
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default RepositoryCard;
