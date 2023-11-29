import "../../styles/blocks.css";
import { isPrimeNumber } from "../../util/primeNumberChecker";

export const Blocks = () => {
  const numbers = Array.from(Array(32).keys());
  let color = "";

  return (
    <div className="blocks-container">
      {numbers.map((number) => {
        // Check for colors
        if (isPrimeNumber(number)) {
          color = "rgba(252,94,83,255)";
        } else {
          color =
            number % 2 === 0 ? "rgba(33,191,115,255)" : "rgba(253,219,59,255)";
        }

        return (
          <div
            className="block"
            style={{
              backgroundColor: color,
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};
