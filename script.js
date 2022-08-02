const sendButton = document.getElementById("send-button");
const inputField = document.getElementById("input-field");
const email = document.getElementById("email");

const re =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function sendEmail() {
  if (email.value === "" || email.value.match(re) === null) {
    inputField.classList.add("error");
    email.classList.add("error");
  } else if (email.value !== "") {
    email.value = "";
    inputField.classList.remove("error");
    email.classList.remove("error");
  }
}

sendButton.addEventListener("click", sendEmail);
