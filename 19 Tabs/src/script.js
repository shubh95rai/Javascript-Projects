const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".article");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("activeBtn")) {
      const alreadyActiveBtn = document.querySelector(".activeBtn");

      alreadyActiveBtn.classList.remove("activeBtn");

      const alreadyActiveArticle = document.querySelector(".activeArticle");

      alreadyActiveArticle.classList.remove("activeArticle");

      const id = btn.dataset.id;

      const element = document.getElementById(id);
      element.classList.add("activeArticle");

      btn.classList.add("activeBtn");
    }
  });
});
