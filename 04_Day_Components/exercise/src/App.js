import logo from "./logo.svg";
import "./App.css";
import { ColorPiece } from "./Components/ColorPiece";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const generateHexaColorList = (numOfColor) => {
  let colorList = [];

  for (let i = 0; i < numOfColor; i++) {
    colorList.push(hexaColor());
  }

  return colorList;
};

function App() {
  const colorList = generateHexaColorList(6);

  return (
    <div className="App">
      {colorList.map((color) => {
        return <ColorPiece color={color} />;
      })}
    </div>
  );
}

export default App;
