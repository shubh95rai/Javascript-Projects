const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  letter.addEventListener("mouseover", () => {
    letter.classList.add("name");
  });

  letter.addEventListener("mouseleave", () => {
    letter.classList.remove("name");
  });


});
