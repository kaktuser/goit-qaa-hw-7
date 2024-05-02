const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Znajduje element <ul> z klasą 'gallery'
const gallery = document.querySelector("ul.gallery");

// Twórzy łańcuch HTML zawierający elementy <li> z <img> na podstawie tablicy images
const galleryItemsHTML = images
  .map(
    (image) => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`
  )
  .join("");

// Wstawia łańcuch HTML do <ul> galerii za pomocą insertAdjacentHTML() (pozycja 'beforeend' dodaje elementy na końcu <ul>)
gallery.insertAdjacentHTML("beforeend", galleryItemsHTML);

// Dodaje klasę CSS do <ul> galerii
gallery.classList.add("flex-container"); // dodaje klasę 'flex-container' dla flexbox
