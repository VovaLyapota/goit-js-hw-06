const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let items = ingredients.map((name) => {
  const item = document.createElement("li");
  item.classList.add("item");

  item.textContent = name;

  return item;
});

const list = document.querySelector("#ingredients");

list.append(...items);
