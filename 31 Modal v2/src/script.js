const openBtn = document.querySelector(".open-btn");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  modalBackground.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", (e) => {
  if (e.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});
