const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const image = document.querySelector(".image");

button.addEventListener("click", () => {
  const inputValue = input.value;
  image.src = "";

  if (!inputValue) {
    alert("Please enetr a valid value.");
    return;
  }

  let src = inputValue;
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${src}`;
});
