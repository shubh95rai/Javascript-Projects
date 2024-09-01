const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(formObj),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
