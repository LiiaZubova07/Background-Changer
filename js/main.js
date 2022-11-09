const button = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = [
  '#ff5733',
  '#f9ff33',
  '#3371ff',
  'green',
  'red',
  'rgb(85, 255, 51, 0.7',
];

button.addEventListener('click', () => {
//   console.log('click');
//   console.log (getRandomColor());
let hexColor = colors[getRandomColor()];
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

