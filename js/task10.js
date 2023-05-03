function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlBoxEl = document.querySelector("#controls");
const allBoxesEls = document.querySelector("#boxes");
allBoxesEls.style.display = "flex";
allBoxesEls.style.flexWrap = "wrap";
allBoxesEls.style.padding = "5px";
allBoxesEls.style.alignItems = "center";

const btnToCreateEl = document.querySelector("[data-create]");
const btnToDestroyEl = document.querySelector("[data-destroy]");

const inputEl = document.querySelector("[type=number]");

inputEl.addEventListener("blur", pushBtn);
let amount;

function pushBtn(event) {
  amount = event.currentTarget.value;
  return amount;
}

btnToCreateEl.addEventListener("click", createBoxes);

function createBoxes(event) {
  const createBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const arrayOfAllBoxes = [...allBoxesEls.children]; // []

    let sizeOfNextBox;

    if (createBoxes === [] && arrayOfAllBoxes === []) {
      sizeOfNextBox = 30;
    } else if (createBoxes !== [] && arrayOfAllBoxes === []) {
      sizeOfNextBox += 10;
    } else if (createBoxes !== [] && arrayOfAllBoxes !== []) {
      sizeOfNextBox =
        arrayOfAllBoxes.length * 10 + 20 + createBoxes.length * 10 + 10;
    }

    let newBox = `<div style="background-color: ${getRandomHexColor()}; width: ${sizeOfNextBox}px; height:${sizeOfNextBox}px; margin: 5px "></div>`;

    createBoxes.push(newBox);
  }

  allBoxesEls.insertAdjacentHTML("beforeend", createBoxes.join(""));
}

btnToDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  allBoxesEls.innerHTML = "";
}
