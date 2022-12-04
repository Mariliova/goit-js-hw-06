const counterEl = document.querySelector('#counter');
const counterValueEl = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

counterEl.addEventListener('click', onChangeValue);

function onChangeValue(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target === decrement) {
    counterValue -= 1;
  }
  if (event.target === increment) {
    counterValue += 1;
  }
  counterValueEl.innerText = counterValue;
}
