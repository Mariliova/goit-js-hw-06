const colorChangeBtnEl = document.querySelector('.change-color');
const colorValueSpanEl = document.querySelector('.color');

colorChangeBtnEl.addEventListener('click', onBtnClickColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClickColorChange() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorValueSpanEl.innerText = randomHexColor;
}
