const slider = document.querySelector(".slider");
const dots = document.querySelector(".dots");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

let images = [];
let counter = 0;

async function fetchImages() {
  try {
    const response = await fetch("https://picsum.photos/v2/list?limit=5");

    const data = await response.json();

    if (data) {
      images = data;
      displayImages();
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchImages();

function displayImages() {
  slider.innerHTML = images
    .map((image) => {
      return `<img src=${image.download_url} alt=${image.id}"/>
    `;
    })
    .join("");

  dots.innerHTML = images
    .map((dot, index) => {
      return `<div class="dot h-2 bg-white/50 w-10 rounded-full cursor-pointer ${index === 0 && "!bg-white"}" data-dot=${index}></div>`;
    })
    .join("");
}

function slide() {
  slider.style.transform = `translateX(-${counter * 100}%)`;
}

function activeDot(currentSlideindex) {
  counter = currentSlideindex;

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("!bg-white");
  });

  document
    .querySelector(`.dot[data-dot="${currentSlideindex}"]`)
    .classList.add("!bg-white");
}

function right() {
  counter++;

  if (counter === images.length) {
    counter = 0;
  }
  slide();
  activeDot(counter);
}
function left() {
  counter--;

  if (counter < 0) {
    counter = images.length - 1;
  }
  slide();
  activeDot(counter);
}

dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    const currentSlideIndex = e.target.dataset.dot;
    activeDot(currentSlideIndex);
    counter = currentSlideIndex;
    slide();
  }
});

leftBtn.addEventListener("click", left);
rightBtn.addEventListener("click", right);
