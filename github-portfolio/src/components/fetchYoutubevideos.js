// Assuming this is in a file called fetchYouTubeVideos.js
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

export default fetchYouTubeVideos;
