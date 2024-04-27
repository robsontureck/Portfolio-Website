import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons text-center">
        <a
          href="https://www.linkedin.com/in/robson-tureck-zargiski-438644142"
          className="social-icon"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/robsontureck"
          className="social-icon"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/robsontureck"
          className="social-icon"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://github.com/robsontureck"
          className="social-icon"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="footer-text text-center">© 2024 - Robson Tureck</div>
    </footer>
  );
};

export default Footer;
