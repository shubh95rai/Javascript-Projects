const stars = document.querySelectorAll(".ri-star-line");

let selecteStarIndex = -1;

stars.forEach((star, i) => {
  star.dataset.rating = i;
  star.addEventListener("mouseenter", (e) => {
    hoverIndex = e.target.dataset.rating;
    starRating(hoverIndex);
  });

  star.addEventListener("mouseleave", () => {
    starRating(selecteStarIndex);
  });

  star.addEventListener("click", (e) => {
    selecteStarIndex = e.target.dataset.rating;
    starRating(selecteStarIndex);
  });
});

function starRating(index) {
  for (let i = 0; i <= 4; i++) {
    if (i <= index) {
      stars[i].classList.replace("ri-star-line", "ri-star-fill");
    } else {
      stars[i].classList.replace("ri-star-fill", "ri-star-line");
    }
  }
}
