const progress = document.querySelector(".progress");
const body = document.body;

window.addEventListener("scroll", () => {
  let width = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = `${width}%`;
});
