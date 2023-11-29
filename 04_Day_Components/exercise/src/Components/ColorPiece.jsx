export const ColorPiece = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        padding: "1rem",
        color: "white",
      }}
    >
      {props.color}
    </div>
  );
};
