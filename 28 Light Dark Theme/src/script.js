const background = document.querySelector(".background");
const button = document.querySelector(".button");
const icon = document.querySelector(".icon");

button.addEventListener("click", () => {
  background.classList.toggle("dark");
  icon.classList.toggle("ri-sun-fill")
});
