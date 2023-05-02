const formEl = document.querySelector(".login-form");
const inputEls = formEl.elements;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }

  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`);

  event.currentTarget.reset;
});
