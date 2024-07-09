const navbar = document.querySelector(".navbar");

const navbarTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navbarTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
