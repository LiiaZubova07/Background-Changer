const button = document.getElementById('btn');

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
document.body.style.backgroundColor = colors[getRandomColor()];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

