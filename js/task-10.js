const controlsEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesConrainerEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

controlsEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const amount = Number(event.currentTarget.firstElementChild.value);
  if (event.target === btnCreateEl) {
    createBoxes(amount);
  }
  if (event.target === btnDestroyEl) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  boxesConrainerEl.innerHTML = '';
  const boxesArray = [];
  let boxeSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxeSize += 10;
    boxesArray.push(
      `<div style="background-color:${getRandomHexColor()};width:${boxeSize}px;height:${boxeSize}px;"></div>`
    );
  }
  console.log(boxesArray);
  const boxesArrayToInsert = boxesArray.join('');
  boxesConrainerEl.insertAdjacentHTML('beforeend', `${boxesArrayToInsert}`);
}

function destroyBoxes() {
  boxesConrainerEl.innerHTML = '';
}
