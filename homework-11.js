import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const registerModal = new Modal("js-modal");
const emailForm = new Form("email-form");
const registerForm = new Form("register-form");

const registerButton = document.querySelector("#js-register-btn");
const closeButton = document.querySelector("#js-modal-close");
const overlay = document.querySelector("#js-overlay");

let user = null;

emailForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = emailForm.getValues();
  console.log(data);
});

registerButton.addEventListener("click", () => {
  registerModal.open();
  overlay.classList.add("overlay-showed");
});

closeButton.addEventListener("click", () => {
  overlay.classList.remove("overlay-showed");
});

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    alert("Заполните все поля правильно");
    return;
  }

  const userData = registerForm.getValues();

  if (userData.password !== userData.passwordConfirm) {
    alert("Пароли не совпадают!");
    return;
  }

  userData.createdOn = new Date();
  user = userData;
  console.log(userData);

  registerModal.close();
  overlay.classList.remove("overlay-showed");
  registerForm.reset();
});