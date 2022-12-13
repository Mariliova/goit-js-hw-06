const categoriesListEl = document.querySelector('#categories');
const itemsCollection = categoriesListEl.querySelectorAll('.item');

const numberOfCategories = categoriesListEl.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

itemsCollection.forEach(itemEl => {
  const categoryTitleText = itemEl.querySelector('h2').textContent;
  const numberOfLiElements = itemEl.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitleText} Elements: ${numberOfLiElements}`);
});
