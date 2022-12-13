const controlsEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesConrainerEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

controlsEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const amount = Number(event.currentTarget.firstElementChild.value);

  if (event.target === btnCreateEl) {
    createBoxes(amount);
  }

  if (event.target === btnDestroyEl) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  const boxesArray = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    boxesArray.push(
      `<div style="background-color:${getRandomHexColor()};width:${boxSize}px;height:${boxSize}px;"></div>`
    );
  }
  boxesConrainerEl.innerHTML = boxesArray.join('');
}

function destroyBoxes() {
  boxesConrainerEl.innerHTML = '';
}
