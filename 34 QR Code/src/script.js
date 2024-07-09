const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const qrCode = document.querySelector(".qrCode");
const form = document.querySelector(".form");

let value;

input.addEventListener("input", (e) => {
  value = input.value;
  if (value === "") {
    qrCode.src = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  value = input.value;

  if (value !== "") {
    console.log("hi");
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}&bgcolor=ccc`;
  }
});
