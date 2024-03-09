const boxesContainer = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(amount) {
  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    boxesContainer.appendChild(box);
  }
}

createButton.addEventListener('click', event => {
  const inputValue = parseInt(input.value);
  if (inputValue >= 1 && inputValue <= 100) {
    createBox(inputValue);
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
