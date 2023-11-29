import "../../styles/block.css";

export const Block = (props) => {
  return (
    <div
      className="block"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.number}
    </div>
  );
};
