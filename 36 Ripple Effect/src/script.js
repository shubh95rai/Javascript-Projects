const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const x = e.clientX - btn.offsetLeft;
  const y = e.clientY - btn.offsetTop;

  const rippleElement = document.createElement("span");

  rippleElement.style.top = `${y}px`;
  rippleElement.style.left = `${x}px`;

  btn.append(rippleElement);

  setTimeout(() => {
    rippleElement.remove();
  }, 1000);
});
