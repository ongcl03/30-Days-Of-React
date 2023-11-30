import "../styles/footer.css";

export const Footer = (props) => {
  const {
    themeColor: { backgroundColor, textColor, borderBottom },
  } = props;

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderTop: borderBottom,
      }}
    >
      <p>@Copyright 2023</p>
    </footer>
  );
};
