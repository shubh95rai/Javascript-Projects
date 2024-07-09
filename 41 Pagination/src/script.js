const paginationList = document.querySelector(".pagination-list");
const paginationNumbers = document.querySelector(".pagination-numbers");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// function createDummyData() {
//   for (let i = 1; i <= 100; i++) {
//     const element = document.createElement("div");
//     element.textContent = `Item ${i}`;
//     paginationList.append(element);
//   }
// }

// createDummyData();

let allProducts = [];

let currentPage = 1;
let itemsPerPage = 10;

let paginationButtons;

window.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=100");
  const data = await response.json();
  allProducts = [...data.products];
  displayProducts(allProducts);
  displayButtons();
}

function displayButtons() {
  paginationButtons = Math.ceil(allProducts.length / itemsPerPage);
  // console.log(paginationButtons);

  for (let i = 1; i <= paginationButtons; i++) {
    const element = document.createElement("div");
    if (i === 1) {
      element.classList.add("activeBtn");
    }
    element.classList.add("buttons");
    element.setAttribute("data-id", i);
    element.textContent = i;
    paginationNumbers.append(element);

    handleActiveButton();
  }
}

function displayProducts() {
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;

  paginationList.innerHTML = "";

  const products = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(products);

  for (let i = 0; i < products.length; i++) {
    const element = document.createElement("div");
    element.textContent = products[i]?.title;
    paginationList.append(element);
  }
}

function handlePrev() {
  if (currentPage > 1) {
    currentPage--;
    displayProducts();
    activeButton();
    enableButton(next);
  }

  if (currentPage === 1) {
    disableButton(prev);
  }
}

function handleNext() {
  if (currentPage < paginationButtons) {
    currentPage++;
    displayProducts();
    activeButton();
    enableButton(prev);
  }

  if (currentPage === paginationButtons) {
    disableButton(next);
  }
}
function disableButton(btn) {
  btn.setAttribute("disabled", true);
}

function enableButton(btn) {
  btn.removeAttribute("disabled");
}

function activeButton() {
  const alreadyActiveBtn = document.querySelector(".activeBtn");
  alreadyActiveBtn.classList.remove("activeBtn");
  const btn = document.querySelector(`.buttons[data-id="${currentPage}"]`);
  btn.classList.add("activeBtn");
}

function handleActiveButton() {
  const buttons = document.querySelectorAll(".buttons");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("activeBtn")) {
        const alreadyActiveBtn = document.querySelector(".activeBtn");
        alreadyActiveBtn.classList.remove("activeBtn");

        btn.classList.add("activeBtn");
      }

      currentPage = btn.dataset.id;
      // console.log(currentPage);
      displayProducts();

      if (currentPage == 1) {
        disableButton(prev);
      } else {
        enableButton(prev);
      }

      if (currentPage == paginationButtons) {
        disableButton(next);
      } else {
        enableButton(next);
      }
    });
  });
}

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
