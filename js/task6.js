const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  let inputValueEl = event.currentTarget.value;

  if (inputValueEl.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.replace("valid", "invalid");
  }
});
