function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(98));
}

function getRandomColor() {
  return `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, 0.85)`;
}

export default getRandomColor;
