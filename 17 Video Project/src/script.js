const video = document.querySelector(".video");
const toggle = document.querySelector(".active");
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("off");
});

toggle.addEventListener("click", () => {
  if (toggle.checked) {
    video.pause();
  } else {
    video.play();
  }
});
