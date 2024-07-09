const hex = document.querySelector(".hex");
const rgb = document.querySelector(".rgb");
const button = document.querySelector(".button");
const bgColor = document.querySelector(".bgColor");
const text = document.querySelector(".text");
const copy = document.querySelector(".copy");

let typeOfColor = "hex";
let hexValue;
let rbgValue;

window.addEventListener("DOMContentLoaded", () => {
  hex.classList.add("clicked");
});

function handletypeOfColor(e) {
  if (e.target.textContent === "hex") {
    typeOfColor = "hex";
    hex.classList.add("clicked");
    rgb.classList.remove("clicked");
    text.classList.add("hidden");
  } else {
    typeOfColor = "rgb";
    rgb.classList.add("clicked");
    hex.classList.remove("clicked");
    text.classList.add("hidden");
  }
}

function generateHexColor() {
  const hexCode = "0123456789ABCDEF";

  hexValue = "#";

  for (let i = 0; i <= 5; i++) {
    let index = Math.floor(Math.random() * hexCode.length);
    hexValue += hexCode[index];
  }

  bgColor.style.backgroundColor = hexValue;

  text.textContent = `HEX Code : ${hexValue}`;
}

function generateRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  rbgValue = `rgb(${r},${g},${b})`;

  bgColor.style.backgroundColor = rbgValue;

  text.textContent = `RGB Code : ${rbgValue}`;
}

function handleClick() {
  if (typeOfColor == "hex") {
    generateHexColor();
    text.classList.remove("hidden");
  } else {
    generateRgbColor();
    text.classList.remove("hidden");
  }
}
function handleCopy() {
  if (typeOfColor === "hex" && hexValue) {
    console.log("hi");
    navigator.clipboard.writeText(hexValue);
  }

  if (typeOfColor === "rgb" && rbgValue) {
    navigator.clipboard.writeText(rbgValue);
    console.log("hi");
  }
}

button.addEventListener("click", handleClick);
hex.addEventListener("click", handletypeOfColor);
rgb.addEventListener("click", handletypeOfColor);
copy.addEventListener("click", handleCopy);
