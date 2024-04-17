import { useState, useEffect } from "react";

async function getUserRepos(username, token) {
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  });

  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  let repos = data.map((repo) => ({
    name: repo.name.replace(/-/g, " "), // Replace dashes with spaces
    description: repo.description,
    language: repo.language || "Not Specified",
    createdAt: repo.created_at,
    forksCount: repo.forks_count,
    url: repo.html_url,
    stars: repo.stargazers_count,
  }));
  console.log(repos);
  return repos;
}

export default function useGitHubRepos(username, token) {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setRepos(await getUserRepos(username, token));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [username, token]); // Dependency array includes both username and token

  return { loading, repos, error };
}
