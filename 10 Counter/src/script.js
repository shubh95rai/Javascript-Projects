const count = document.querySelector(".count");
const btn = document.querySelectorAll(".btn");

let counter = 0

btn.forEach((item) => {
  item.addEventListener("click", (e) => {

    let style = e.target.classList
    if (style.contains("increment")) {
      counter++;
    } else if (style.contains("decrement")) {
      counter--;
    } else {
      counter = 0;
    }

    if (counter < 0) {
      count.style.color = "red";
    } else if (counter === 0) {
      count.style.color = "black";
    } else if (counter > 0) {
      count.style.color = "green";
    }

    count.textContent = counter
  });
});
