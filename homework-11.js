const emailForm = document.querySelector("#email-form");

const registerButton = document.querySelector("#js-register-btn");

const modalWindow = document.querySelector("#js-modal");

const closeButton = document.querySelector("#js-modal-close");

const overlay = document.querySelector("#js-overlay");

const registerForm = document.querySelector("#register-form");

let user = null;

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

registerButton.addEventListener("click", () => {
  modalWindow.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

closeButton.addEventListener("click", () => {
  modalWindow.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!registerForm.checkValidity()) {
    alert("Заполните все поля правильно");
    return;
  }
  const password = registerForm.elements.password.value;
  const passwordConfirm = registerForm.elements.passwordConfirm.value;
  if ( password !== passwordConfirm) {
    alert("Пароли не совпадают!");
    return;
  }
  const formData = new FormData(registerForm);
  const userData = Object.fromEntries(formData.entries());
  userData.createdOn = new Date();
  user = userData;
  console.log(userData);
  modalWindow.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
  registerForm.reset();
});