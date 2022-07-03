const username = document.getElementById("username");
const form = document.getElementById("login-form");
const password = document.getElementById("password");
const TOAST = "#toast";

class ToastModal {
  constructor() {
    this.element = document.querySelector(TOAST);
  }
  show() {
    this.element.classList.add("active");
    setTimeout(() => {
      this.element.classList.remove("active");
    }, 2000);
  }
}
const myModal = new ToastModal();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  if (!username.value) {
    username.className = "invalid";
  } else {
    username.className = "valid";
  }
  if (!password.value) {
    password.className = "invalid";
  } else {
    password.className = "valid";
  }
  if (username.value && password.value) {
    myModal.show();
  }
}
