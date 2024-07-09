const input = document.querySelector(".input");
const list = document.querySelector(".list");
const form = document.querySelector(".form");
const edit = document.querySelector(".edit");
const remove = document.querySelector(".remove");
const clearBtn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".submit");

let editElement;
let editFlag = false;
let items = [];
let timeoutID;
let lastColor;

function setBackToDefault() {
  submit.textContent = "Submit";
  editFlag = false;
}

function removeItem(e) {
  const elementId = e.currentTarget.parentElement.parentElement.id;
  const newItems = items.filter((item, index) => {
    return elementId != index;
  });

  items = newItems;
  displayList();
  setBackToDefault();
  displayAlert("item removed", "red");
}

function editItem(e) {
  editElement = e.target.parentElement.parentElement;

  // console.log(editElement);
  input.value = editElement.firstElementChild.textContent;
  input.focus();

  editFlag = true;
  submit.textContent = "Edit";
}

function displayList() {
  list.innerHTML = items
    .map((item, index) => {
      return `<li id=${index} class="flex justify-between">
      <h1>${item}</h1>
      <div class="hover:cursor-pointer">
        <i class="edit ri-pencil-fill"></i>
        <i class="remove ri-delete-bin-7-fill"></i>
      </div>
    </li>`;
    })
    .join("");
  if (items.length !== 0) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }

  const edit = document.querySelectorAll(".edit");
  edit.forEach((item) => {
    item.addEventListener("click", editItem);
  });

  const remove = document.querySelectorAll(".remove");
  remove.forEach((item) => {
    item.addEventListener("click", removeItem);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (value !== "" && !editFlag) {
    items.push(value);
    console.log(items);
    displayList();
    displayAlert("Item is added", "green");
  } else if (value !== "" && editFlag) {
    // editElement.innerHTML = input.value;
    items[editElement.id] = input.value;
    displayList();
    setBackToDefault();
    displayAlert("Value changed", "blue");
  } else {
    displayAlert("Please enter value!", "red");
  }
  input.value = "";
});

function displayAlert(text, color) {
  if (timeoutID) {
    clearTimeout(timeoutID);
    alert.classList.remove(lastColor);
  }

  alert.textContent = text;
  alert.classList.add(color);
  lastColor = color;

  timeoutID = setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(color);
  }, 1500);
}

function clearItems() {
  items = [];
  displayList();
  displayAlert("empty list", "red");
  setBackToDefault();
}

clearBtn.addEventListener("click", clearItems);
