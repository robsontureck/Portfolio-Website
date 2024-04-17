import React, { useState } from "react";

const fetchYouTubeVideos = async (language) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Ensure this is set in your .env file
  const searchQuery = `${language} programming`; // Customize the query as needed
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
    searchQuery
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API responded with ${response.status}`);
    }
    const data = await response.json();
    const videos = data.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });
    return videos[0]; // Return the first video, assuming there is at least one result
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null; // Return null or handle error appropriately
  }
};

const RepositoryCard = ({ repo }) => {
  const [video, setVideo] = useState(null);

  const handleFetchVideo = async () => {
    const fetchedVideo = await fetchYouTubeVideos(repo.language);
    setVideo(fetchedVideo);
  };

  return (
    <div>
      <h2>{repo.name}</h2>
      <button onClick={handleFetchVideo}>Load Tutorial</button>
      {video && (
        <div>
          <h3>{video.title}</h3>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.description}</p>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Video
          </a>
        </div>
      )}
    </div>
  );
};

export default RepositoryCard;
