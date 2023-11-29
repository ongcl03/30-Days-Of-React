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

export const generateHexaColorList = (numOfColor) => {
  let colorList = [];

  for (let i = 0; i < numOfColor; i++) {
    colorList.push(hexaColor());
  }

  return colorList;
};
