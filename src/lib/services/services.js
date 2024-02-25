export const generateUniqueId = async () => {
  let lastNumber = localStorage.getItem("lastNumber");
  let number;
  if (lastNumber) {
    lastNumber = parseInt(lastNumber) + 1;
    number = lastNumber;
  } else {
    number = 1;
  }
  localStorage.setItem("lastNumber", number);
  return number;
};

export const getRandomColor = async () => {
  let randomColor = "";
  do {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = "0" + randomColor;
    }
  } while (isTooLight(randomColor));
  return "#" + randomColor;
};

function isTooLight(color) {
  // Convert the hexadecimal color code to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Calculate the luminance of the color
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Check if the luminance is too high (i.e., the color is too light)
  return luminance > 0.5;
}
