import "../styles/NoPage.css";
import { useEffect } from "react";

const NoPage = () => {
  // Set the page title using useEffect
  useEffect(() => {
    document.title = "Git Portfolio - Page Not Found";
  }, []);
  return (
    <div class="container-404">
      <h1>
        Oops! The page was not found!
        <br />
      </h1>
    </div>
  );
};

export default NoPage;
