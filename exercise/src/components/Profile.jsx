import { useState } from "react";
import "../styles/profile.css";

export const Profile = () => {
  const [theme, setTheme] = useState(true); // true = light, false = dark
  let profileColor = "rgba(124, 172, 248, 0.8)";
  let backgroundColor = "white";

  const toggleTheme = () => {
    setTheme(!theme);

    if (theme) {
      profileColor = "rgba(124, 172, 248, 0.8)";
      backgroundColor = "white";
    } else {
      profileColor = "rgba(15,36,58,255)";
      backgroundColor = "rgba(15,36,58,255)";
    }
  };

  return (
    <div className="profile-container">
      <dl className="prerequisite">
        <dt>Prerequisite to get started react.js:</dt>
        <dd>HTML</dd>
        <dd>CSS</dd>
        <dd>JavaScript</dd>
      </dl>
      <img
        className="profile-photo"
        src="https://raw.githubusercontent.com/ongcl03/30-Days-Of-React/03_Setting_Up_React/03_Setting_Up_React/exercise/src/images/channel-logo.jpg"
      ></img>
      <p class="profile-name">GHA HACKER</p>
      <div className="button-container">
        <button className="greet-button">Greet People</button>
        <button className="show-time-button">Show Time</button>
        <button className="change-bg-button" onClick={toggleTheme}>
          Change Background
        </button>
      </div>
    </div>
  );
};
