const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const nameOfColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  nameOfColor.textContent = `${bodyEl.style.backgroundColor}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
