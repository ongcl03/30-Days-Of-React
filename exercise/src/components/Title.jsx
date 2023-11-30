import "../styles/title.css";

export const Title = (props) => {
  const {
    themeColor: { backgroundColor, textColor, borderBottom },
  } = props;

  return (
    <div
      className="title-container"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderBottom: borderBottom,
      }}
    >
      <p className="title">Welcome to 30 Days of React</p>
      <p className="getting-started">Getting Started React</p>
      <p className="js-library">JavaScript Library</p>
      <p className="name">Asabeneh Yetayeh</p>
      <p className="date">Oct 7, 2020</p>
    </div>
  );
};
