const productsContainer = document.querySelector(".products");
const scrollToBottom = document.querySelector(".scrollToBottom");
const scrollToTop = document.querySelector(".scrollToTop");
const loading = document.querySelector(".loading");
const body = document.body;

window.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

function showLoading() {
  loading.classList.remove("hidden");
  productsContainer.classList.add("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
  productsContainer.classList.remove("hidden");
}

function fetchProducts() {
  showLoading();

  setTimeout(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=50");
      const data = await response.json();

      displayProducts(data.products);
      hideLoading();
    } catch (error) {
      console.log(error.message);
      hideLoading();
    }
  }, 1000);
}

function displayProducts(products) {
  productsContainer.innerHTML = products
    .map((item) => {
      return `<div>${item.title}</div>`;
    })
    .join("");
}

scrollToBottom.addEventListener("click", () => {
  window.scrollTo({
    top: body.scrollHeight,
    behavior: "smooth",
  });
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: body.offsetTop,
    behavior: "smooth",
  });
});
