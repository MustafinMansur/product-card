import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const registerModal = new Modal("js-modal", "js-register-btn", true);
const authModal = new Modal("js-auth-modal", "js-auth-btn", false)
const emailForm = new Form("email-form");
const registerForm = new Form("register-form");

let user = null;

emailForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = emailForm.getValues();
  console.log(data);
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
  registerForm.reset();
});