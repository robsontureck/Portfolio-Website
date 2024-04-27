import React, { createContext, useContext, useState, useEffect } from "react";
import useGitHubRepos from "../hooks/GitHubAPI";

const ReposContext = createContext(); // Create a Context object to enable global state management across components.
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const useRepos = () => useContext(ReposContext); // Custom hook to consume ReposContext easily from any component.

// Provider component that manages the GitHub repository data.
export const ReposProvider = ({ children }) => {
  const userName = "robsontureck";
  const { loading, repos, error } = useGitHubRepos(userName, token);
  console.log(repos);

  // Provide the loading state, fetched repositories, and any errors to child components.

  return (
    <ReposContext.Provider value={{ loading, repos, error }}>
      {children}
    </ReposContext.Provider>
  );
};
