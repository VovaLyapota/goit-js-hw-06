// Напиши скрипт створення і очищення колекції елементів.

// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.

// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controlBoxEl = document.querySelector("#controls");
const allBoxesEls = document.querySelector("#boxes");

const btnToCreateEl = document.querySelector("[data-create]");
const btnToDestroyEl = document.querySelector("[data-destroy]");

const inputEl = document.querySelector("[type=number]");
let amount;
inputEl.addEventListener("change", (event) => {
  amount = event.currentTarget.value;
});

btnToCreateEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const createBox = document.createElement("div");
  createBox.textContent = `${amount}`;
  createBox.style.width = "30px";
  createBox.style.height = "30px";
  createBox.style.backgroundColor = `${getRandomHexColor()}`;

  allBoxesEls.append(createBox);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(amount);
