// Define an asynchronous function to fetch YouTube videos based on a given programming language.
const fetchYouTubeVideos = async (language) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const searchQuery = `${language} what to know in 5min`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
    searchQuery
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // If the HTTP response is not successful, throw an error with the response status.
    if (!response.ok)
      throw new Error(
        `Youtube request failed and responded with ${response.status}`
      );
    const videoId = data.items[0]?.id.videoId;
    return { url: `https://www.youtube.com/embed/${videoId}`, error: null };
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return { url: "", error: error.message }; // Return an error message directly
  }
};

export default fetchYouTubeVideos;
