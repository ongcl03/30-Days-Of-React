import reactLogo from "./logo.svg";
import htmlLogo from "./images/Html.svg";
import cssLogo from "./images/CSS.svg";
import jsLogo from "./images/Javascript.svg";
import { Subscribe } from "./Components/Subscribe";
import { UserCard } from "./Components/UserCard/UserCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Front End Technologies</p>
      <div className="image-container">
        <img className="logo" src={htmlLogo} />
        <img className="logo" src={cssLogo} />
        <img className="logo" src={jsLogo} />
        <img className="logo" src={reactLogo} />
      </div>

      <Subscribe />
      <UserCard />
    </div>
  );
}

export default App;
