const input = document.querySelector(".input");
const message = document.querySelector(".message");

input.addEventListener("input", () => {
  let value = input.value;

  if (value.length < 8) {
    message.textContent = "Password is too short";
    message.style.color = "orange";
  } else {
    if (value.search(/[a-z]/) === -1) {
      message.textContent = "Lowercase letter is missing";
      message.style.color = "red";
    } else if (value.search(/[A-Z]/) === -1) {
      message.textContent = "Uppercase letter is missing";
      message.style.color = "red";
    } else if (value.search(/[0-9]/) === -1) {
      message.textContent = "Number is missing";
      message.style.color = "red";
    } else if (
      value.search(
        /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/,
      ) === -1
    ) {
      message.textContent = "Special character is missing";
      message.style.color = "red";
    } else {
      message.textContent = "Password is strong";
      message.style.color = "green";
    }
  }
});
