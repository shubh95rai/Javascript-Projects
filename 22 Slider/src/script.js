const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");

let counter = 0;

function slide() {
  slider.style.transform = `translateX(-${counter * 100}%)`;
}

next.addEventListener("click", () => {
  counter++;
  if (counter > 6) {
    counter = 0;
  }
  slide();
});
prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 6;
  }

  console.log(counter);
  slide();
});


