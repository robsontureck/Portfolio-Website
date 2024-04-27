import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPython,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGitAlt,
  faAws,
  faReact,
  faNodeJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const SkillIcon = ({ icon, label }) => {
  const [hover, setHover] = useState(false);
  const iconStyle = {
    transform: hover ? "scale(1.3)" : "scale(1)", // Enlarges the icon by 30% on hover
    transition: "transform 0.3s ease", // Smooth transition for the transform property
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      <FontAwesomeIcon icon={icon} size="7x" style={iconStyle} />
      {hover && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "5px 10px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "6px",
            fontSize: "14px",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <SkillIcon icon={faJsSquare} label="JavaScript" />
      <SkillIcon icon={faPython} label="Python" />
      <SkillIcon icon={faHtml5} label="HTML" />
      <SkillIcon icon={faCss3Alt} label="CSS" />
      <SkillIcon icon={faBootstrap} label="Bootstrap" />
      <SkillIcon icon={faGitAlt} label="Git" />
      <SkillIcon icon={faAws} label="AWS" />
      <SkillIcon icon={faDatabase} label="SQL" />
      <SkillIcon icon={faReact} label="React" />
      <SkillIcon icon={faNodeJs} label="Node.js" />
      <SkillIcon icon={faDocker} label="Docker" />
    </div>
  );
};

export default Skills;
