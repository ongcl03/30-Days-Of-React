import "./App.css";
import { Blocks } from "./components/blocks/Blocks";

function App() {
  return (
    <div className="App">
      <div>
        <p className="title">30 Days of React</p>
        <p className="subtitle">Number Generator</p>
        <Blocks content={"number"} />
      </div>
      <div className="hex">
        <p className="title">30 Days of React</p>
        <p className="subtitle">Hexadecimal Colors</p>
        <Blocks content={"color"} />
      </div>
    </div>
  );
}

export default App;
