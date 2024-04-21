import useGitHubRepos from "../hooks/GitHubAPI";
import { useState } from "react";
import RepositoryCard from "../components/RepositoryCard";
import "./Portfolio.css";

const token = process.env.REACT_APP_GITHUB_TOKEN;
console.log(token);

const Portfolio = ({ username }) => {
  const { loading, repos, error } = useGitHubRepos(username, token);
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
      <div className="repos-container">
        {filteredRepos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
