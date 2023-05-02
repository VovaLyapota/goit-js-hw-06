const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeEl.addEventListener("change", (event) => {
  const inputValue = event.currentTarget.value;

  textEl.style.fontSize = `${inputValue}px`;
});
