import "../../styles/usercard.css";
import ghaLogo from "../../images/channel-logo.jpg";
import { SkillTag } from "./SkillTag";
import clock from "../../images/clock.svg";

export const UserCard = () => {
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "MYSQL",
    "GraphQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
  ];

  return (
    <div className="usercard-container">
      <img src={ghaLogo} className="profile-logo" />
      <p className="name">CHANG LE ONG</p>
      <p className="job-title">Senior Game Hacker</p>
      <p className="skills-text">SKILLS</p>
      <div className="skills-container">
        {skills.map((skill) => {
          return <SkillTag skill={skill} />;
        })}
      </div>
      <div className="time-container">
        <img className="clock" src={clock} />
        <p className="time">Joined on June 27, 2020</p>
      </div>
    </div>
  );
};
