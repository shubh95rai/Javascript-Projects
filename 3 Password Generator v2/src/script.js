const display = document.getElementById("display");
const copy = document.getElementById("copy");
const charLength = document.getElementById("length");
const range = document.getElementById("range");
const button = document.getElementById("btn");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerStr = "abcdefghijklmnopqrstuvwxyz";
const numStr = "1234567890";
const symStr = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

let clipboard = false;

range.addEventListener("input", () => {
  charLength.textContent = range.value;
});

button.addEventListener("click", () => {

  let str = "";

  if (uppercase.checked) {
    str += upperStr;
  }
  if (lowercase.checked) {
    str += lowerStr;
  }
  if (number.checked) {
    str += numStr;
  }
  if (symbol.checked) {
    str += symStr;
  }
  if (!str) {
    alert("Enetr a valid value");
    location.reload();
  }

  let password = "";
  for (let i = 0; i < range.value; i++) {
    let index = Math.floor(Math.random() * str.length);
    password += str[index];
  }

  display.textContent = password;
  clipboard = true;
});

copy.addEventListener("click", () => {
  if (clipboard) {
    console.log(clipboard);
    navigator.clipboard.writeText(display.textContent);
    alert("Password is copied!");
  } else {
    alert("Please generate password");
  }
});
