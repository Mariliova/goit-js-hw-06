const inputEl = document.querySelector('#name-input');
const spanNameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanNameOutputEl.innerText = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    spanNameOutputEl.innerText = 'Anonymous';
  }
}
