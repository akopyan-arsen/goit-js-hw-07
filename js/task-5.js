function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  spanColor.textContent = randomHexColor;
}
