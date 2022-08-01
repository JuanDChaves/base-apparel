const sendButton = document.getElementById("send-button");
const inputField = document.getElementById("input-field");
const email = document.getElementById("email");

function sendEmail() {
  let input = email.value;
  if (input !== "") {
    email.value = "";
  } else if (input === "") {
    inputField.classList.add("error");
    email.classList.add("error");
  }
}

sendButton.addEventListener("click", sendEmail);
