const form = document.querySelector('#search-form');
const queryInput = document.querySelector('#search-query');
const categorySelect = document.querySelector('#category');
const locationSelect = document.querySelector('#location');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = queryInput.value;
  const category = categorySelect.value;
  const location = locationSelect.value;
  
  // Realizati cautarea pe baza valorilor introduse
  
  // Afișați rezultatele în consecință
});
