const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Znajduje listę ul#ingredients w dokumencie HTML
const ingredientsList = document.getElementById("ingredients");

// Tworzy elementy <li> dla każdego składnika i doda do listy
ingredients.forEach((ingredient) => {
  // Tworzy nowy element <li>
  const listItem = document.createElement("li");

  // Ustawia zawartość tekstową elementu <li> na nazwę składnika
  listItem.textContent = ingredient;

  // Dodaje klasę "item" do elementu <li>
  listItem.classList.add("item");

  // Dodaje element <li> do listy ul#ingredients
  ingredientsList.appendChild(listItem);
});
