const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsUlEl = document.querySelector('#ingredients');

const ingredientsCollection = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.innerText = ingredient;
  liEl.classList.add('item');
  return liEl;
});

ingredientsUlEl.append(...ingredientsCollection);
