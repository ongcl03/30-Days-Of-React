import "../styles/profile.css";

export const Profile = (props) => {
  const {
    themeColor: { profileColor, textColor },
    toggleTheme,
  } = props;

  return (
    <div className="profile" style={{ backgroundColor: profileColor }}>
      <div className="profile-container" style={{ color: textColor }}>
        <dl
          className="prerequisite"
          style={{
            textColor: textColor,
          }}
        >
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
    </div>
  );
};
