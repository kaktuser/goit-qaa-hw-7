// Znajduje element ul#categories w dokumencie HTML
const categoriesList = document.getElementById("categories");

// Znajduje wszystkie elementy li.item (reprezentujące kategorie) w ul#categories
const categoriesItems = categoriesList.querySelectorAll("li.item");

// Liczy i wyświetli liczbę kategorii (elementów li.item)
const numberOfCategories = categoriesItems.length;
console.log(`Liczba kategorii: ${numberOfCategories}`);

// Dla każdego elementu li.item znajdz tytuł (tekst h2) oraz liczbę elementów w kategorii
categoriesItems.forEach((categoryItem) => {
  // Znajduje tytuł kategorii (element h2) wewnątrz elementu li.item
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Znajduje wszystkie elementy li wewnątrz bieżącej kategorii (elementu li.item)
  const categoryElements = categoryItem.querySelectorAll("ul > li");

  // Liczy liczbę elementów w kategorii
  const numberOfElementsInCategory = categoryElements.length;

  // Wyświetla tytuł kategorii i liczbę elementów w konsoli
  console.log(`Kategoria: ${categoryTitle}`);
  console.log(`Liczba elementów: ${numberOfElementsInCategory}`);
});
