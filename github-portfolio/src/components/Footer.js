import { Container, Row, Col } from "reactstrap";
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
        <a href="https://www.linkedin.com" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com" className="social-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="footer-text text-center">© 2024 - Robson Tureck</div>
    </footer>
  );
};

export default Footer;
