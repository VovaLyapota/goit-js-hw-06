const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const btnDecrEl = document.querySelector('[data-action="decrement"]');
const btnIncrEl = document.querySelector('[data-action="increment"]');

btnDecrEl.addEventListener("click", (event) => (counterValue.textContent -= 1));

btnIncrEl.addEventListener(
  "click",
  (event) => (counterValue.textContent = Number(counterValue.textContent) + 1)
);
