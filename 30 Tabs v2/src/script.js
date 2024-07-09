const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("activeBtn")) {
      const alreadyActiveBtn = document.querySelector(".activeBtn");

      alreadyActiveBtn.classList.remove("activeBtn");

      const alreadyActiveContent = document.querySelector(".activeContent");

      alreadyActiveContent.classList.remove("activeContent");

      btn.classList.add("activeBtn");

      const id = btn.dataset.id;
      const selectedContent = document.getElementById(id);
      selectedContent.classList.add("activeContent");
    }
  });
});
