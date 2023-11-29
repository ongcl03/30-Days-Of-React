import "./App.css";
import { Blocks } from "./components/Blocks";
import { Population } from "./components/Population";

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
      <div className="population">
        <p className="title">30 Days of React</p>
        <p className="subtitle">World Population</p>
        <p className="small-title">Ten Most Populated Countries</p>
        <Population />
      </div>
    </div>
  );
}

export default App;
