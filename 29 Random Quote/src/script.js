const quote = document.querySelector(".quote");
const button = document.querySelector(".button");
const loading = document.querySelector(".loading");

function showLoading() {
  loading.classList.remove("hidden");
  quote.classList.add("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
  quote.classList.remove("hidden");
}

function disableButton() {
  button.disabled = true;
}

function enableButton() {
  button.disabled = false;
}

async function fetchQuote() {
  try {
    showLoading();
    disableButton();

    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    console.log(data);
    if (data) {
      displayQuote(data);
      hideLoading();
      enableButton();
    }
  } catch (error) {
    console.log(error.message);
    hideLoading();
    enableButton();
  }
}

fetchQuote();

function displayQuote(data) {
  quote.innerHTML = `<i class="ri-double-quotes-l align-text-bottom"></i> ${data.quote} <i class="ri-double-quotes-r align-text-bottom"></i>`;
}

button.addEventListener("click", () => {
  fetchQuote();
});
