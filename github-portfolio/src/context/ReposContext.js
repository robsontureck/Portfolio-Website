import React, { createContext, useContext, useState, useEffect } from "react";
import useGitHubRepos from "../hooks/GitHubAPI";

const ReposContext = createContext();
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const useRepos = () => useContext(ReposContext);

export const ReposProvider = ({ children }) => {
  const userName = "robsontureck";
  const { loading, repos, error } = useGitHubRepos(userName, token);

  return (
    <ReposContext.Provider value={{ loading, repos, error }}>
      {children}
    </ReposContext.Provider>
  );
};
