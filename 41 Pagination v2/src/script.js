const paginationButtons = document.querySelector(".pagination-buttons");
const paginationList = document.querySelector(".pagination-list");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const allItems = [];

function createAllItems() {
  for (let i = 1; i <= 100; i++) {
    allItems.push(`Item ${i}`);
  }
}

createAllItems();

let currentPage = 1;
const itemsPerPage = 10;
const noOfButtons = Math.ceil(allItems.length / itemsPerPage);

function displayItems() {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const itemsToShow = allItems.slice(indexOfFirstItem, indexOfLastItem);

  paginationList.innerHTML = itemsToShow
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
}

displayItems();

function displayButtons() {
  for (let i = 1; i <= noOfButtons; i++) {
    const element = document.createElement("div");
    element.textContent = i;
    element.classList.add("buttons");
    element.setAttribute("data-id", i);
    paginationButtons.append(element);

    if (i === 1) {
      element.classList.add("activeBtn");
    }
  }
}

displayButtons();


function handlePrev() {
  if (currentPage > 1) {
    currentPage--;

    handleActiveButton();
    displayItems();
    enableButton(nextBtn);
  }

  if (currentPage === 1) {
    disableButton(prevBtn);
  }
}
function handleNext() {
  if (currentPage < noOfButtons) {
    currentPage++;

    handleActiveButton();
    displayItems();
    enableButton(prevBtn);
  }

  if (currentPage === noOfButtons) {
    disableButton(nextBtn);
  }
}

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("activeBtn")) {
      const alreadyActiveBtn = document.querySelector(".activeBtn");

      alreadyActiveBtn.classList.remove("activeBtn");

      btn.classList.add("activeBtn");
      currentPage = btn.dataset.id;
      displayItems();

      if (currentPage == 1) {
        disableButton(prevBtn);
        enableButton(nextBtn);
      } else if (currentPage == noOfButtons) {
        disableButton(nextBtn);
        enableButton(prevBtn);
      } else {
        enableButton(prevBtn);
        enableButton(nextBtn);
      }
    }
  });
});

function handleActiveButton() {
  const alreadyActiveBtn = document.querySelector(".activeBtn");

  alreadyActiveBtn.classList.remove("activeBtn");

  const btn = document.querySelector(`.buttons[data-id="${currentPage}"]`);

  btn.classList.add("activeBtn");
}

function disableButton(btn) {
  btn.setAttribute("disabled", true);
}
function enableButton(btn) {
  btn.removeAttribute("disabled");
}

prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);
