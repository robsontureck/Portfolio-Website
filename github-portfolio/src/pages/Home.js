import "./Home.css";
import Typewriter from "../components/Typewriter";
import heroImage from "../Images/hero.jpeg";

const Home = () => {
  const messages = [
    "I'm a masters student of Information Technology majoring in Software Development.",
    "Explore my portfolio and projects.",
  ];
  return (
    <div className="home-container">
      <img src={heroImage} alt="Robson" className="hero-image" />
      <div className="home-message">
        <h1>Hi, I'm Robson.</h1>

        <div className="typewriter-container">
          <h2>
            <Typewriter
              messages={messages}
              typingSpeed={100}
              deletingSpeed={25}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
