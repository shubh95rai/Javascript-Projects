const color = document.querySelector(".color");
const button = document.querySelector(".btn");
const body = document.querySelector("body");
const bgColor = document.querySelector(".bg-color");
const copied = document.querySelector(".copied");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hex.length);
    hexCode += hex[index];
  }

  color.textContent = hexCode;
  body.style.backgroundColor = hexCode;
});

bgColor.addEventListener("click", () => {
  navigator.clipboard.writeText(color.textContent);

  copied.classList.toggle("invisible");

  setTimeout(() => {
    copied.classList.toggle("invisible");
  }, 2000);
});
