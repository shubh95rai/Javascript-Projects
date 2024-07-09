const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const progress = document.querySelector(".progress");
const icons = document.querySelectorAll(".icon");

let currentStep = 0;

next.addEventListener("click", () => {
  if (currentStep < icons.length - 1) {
    currentStep++;
  }
  progressWidth();
});

prev.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
  }
  progressWidth();
});

function progressWidth() {
  const width = `${(currentStep / (icons.length - 1)) * 100}%`;

  const calc = `calc(${width} - 2px)`;

  progress.style.width = calc;

  if (currentStep === icons.length - 1) {
    next.disabled = true;
  } else if (currentStep === 0) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
