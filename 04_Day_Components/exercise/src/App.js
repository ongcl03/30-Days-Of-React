import logo from "./logo.svg";
import "./App.css";
import { ColorPiece } from "./Components/ColorPiece";
import { useEffect, useState } from "react";

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
  // const colorList = generateHexaColorList(6);

  const [colorList, setColorList] = useState(generateHexaColorList(6));

  // useEffect runs every re-render
  // React's useEffect hook allows you to perform side effects in function components. Side effects could be anything that interacts with the world outside of the component, like data fetching, subscriptions, timers, manually changing the DOM, and so on.
  useEffect(() => {
    const interval = setInterval(() => {
      setColorList(generateHexaColorList(6));
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);

    // We can use the empty dependencies (an empty array) to let the useEffect runs only for the initial render
    // If we add anything to the array, it means that when this state value changed, it will trigger the run of useEffect
    // If you pass an empty array ([]) as the second argument to useEffect, it behaves similarly to componentDidMount in class components, meaning the effect function will run once after the initial render.
    // If you pass an array with some variables, the effect function will run every time any of those variables change. This is similar to componentDidUpdate.
    // If you don't pass the second argument, the effect function will run after every render, not just the first one. This is similar to both componentDidMount and componentDidUpdate.
  }, []);

  // changeColor();

  return (
    <div className="App">
      {colorList.map((color) => {
        return <ColorPiece color={color} />;
      })}
    </div>
  );
}

export default App;
