const listEl = document.querySelector("#categories");

const itemsEls = listEl.children;
// const itemsEls = listEl.querySelectorAll(".item");

console.log("Number of categories: ", itemsEls.length);

[...itemsEls].forEach((item) => {
  const titleOfItem = item.querySelector("h2").textContent;
  const valueOfElements = item.querySelectorAll("li").length;

  console.log("Category:", titleOfItem);
  console.log("Elements:", valueOfElements);
});
