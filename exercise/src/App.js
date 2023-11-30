import "./styles/App.css";
import { Title } from "./components/Title";
import { Profile } from "./components/Profile";
import { useState } from "react";
import { Footer } from "./components/Footer";

function App() {
  // see https://react.dev/learn/sharing-state-between-components
  const [theme, setTheme] = useState(true); // true = light, false = dark
  const [themeColor, setThemeColor] = useState({
    backgroundColor: "rgba(124, 172, 248, 0.8)",
    profileColor: "white",
    textColor: "black",
    borderLineColor: "white",
  });

  const toggleTheme = () => {
    setTheme(!theme);
    changeColor();
    console.log(themeColor);
  };

  const changeColor = () => {
    if (theme) {
      setThemeColor({
        backgroundColor: "rgba(124, 172, 248, 0.8)",
        profileColor: "white",
        textColor: "black",
        borderBottom: "none",
      });
    } else {
      setThemeColor({
        backgroundColor: "rgba(3, 19, 43)",
        profileColor: "rgba(3, 19, 43)",
        textColor: "white",
        borderBottom: "2px solid rgb(162, 162, 162)",
      });
    }
  };

  return (
    <div className="App">
      <Title themeColor={themeColor} toggleTheme={toggleTheme} />
      <Profile themeColor={themeColor} toggleTheme={toggleTheme} />
      <Footer themeColor={themeColor} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
