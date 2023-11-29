import "../../styles/blocks.css";
import { isPrimeNumber } from "../../util/primeNumberChecker";
import { generateHexaColorList } from "../../util/generateHexColor";

export const Blocks = (props) => {
  let contentList = [];

  if (props.content === "number") {
    contentList = Array.from(Array(32).keys());
  } else {
    contentList = generateHexaColorList(32);
  }

  // Check for return content
  const returnContent = (content, propsContent) => {
    // if content is number
    if (propsContent === "number") {
      const number = content;
      let color = "";
      // Check for colors
      if (isPrimeNumber(number)) {
        color = "rgba(252,94,83,255)";
      } else {
        color =
          number % 2 === 0 ? "rgba(33,191,115,255)" : "rgba(253,219,59,255)";
      }

      return <Block content={number} color={color} />;
    }

    // if content is hex color
    else {
      const hexCode = content;
      return <Block content={hexCode} color={hexCode} />;
    }
  };

  return (
    <div className="blocks-container">
      {contentList.map((content) => {
        return returnContent(content, props.content);
      })}
    </div>
  );
};

// Block Component
const Block = (props) => {
  return (
    <div
      className="block"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.content}
    </div>
  );
};
