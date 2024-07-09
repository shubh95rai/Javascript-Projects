const productsContainer = document.querySelector(".products");
const btn = document.querySelector(".button");

let skipCount = 0;
let products = [];

async function fetchProducts() {
  const response = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skipCount * 10}`,
  );
  const data = await response.json();
  console.log(data);
  products = [...products, ...data.products];
  displayProducts(products);
}

fetchProducts();

function displayProducts(products) {
  productsContainer.innerHTML = products
    .map((item) => {
      return `<div class="bg-black p-5 rounded flex flex-col gap-2 font-medium">
      <img src="${item.thumbnail}"/>
      <h2 class="font-medium">${item.title}</h2>
      <p>${item.price} $</p>
    </div>`;
    })
    .join("");

  console.log(productsContainer.children.length);
  if (productsContainer.children.length === 50) {
    btn.setAttribute("disabled", "true");
  }
}

btn.addEventListener("click", () => {
  skipCount++;
  fetchProducts();
});
