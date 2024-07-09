const input = document.querySelector(".input");
const form = document.querySelector(".form");
const todosList = document.querySelector(".todo-list");
const submitBtn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const clearBtn = document.querySelector(".clearBtn");

let todos = [];
let editFlag = false;
let editElement;
let timeoutId;

let lastColor;

window.addEventListener("DOMContentLoaded", () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos.length > 0) {
    todos = [...savedTodos];
    displayTodos();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;

  if (inputValue && !editFlag) {
    todos.push(inputValue);
    displayTodos();
    input.value = "";
    displayAlert("Item Added", "green");
  } else if (inputValue && editFlag) {
    const todoId = editElement.id;
    todos[todoId] = inputValue;
    displayTodos();
    setToDefault();
    displayAlert("Value Changed", "blue");
  } else {
    displayAlert("Enter a value", "yellow");
  }
});

function setToDefault() {
  submitBtn.textContent = "Submit";
  input.value = "";
  editFlag = false;
}

function displayAlert(text, color) {
  if (timeoutId) {
    clearTimeout(timeoutId);
    alert.classList.remove(lastColor);
  }

  alert.textContent = text;
  alert.classList.add(color);
  lastColor = color;

  timeoutId = setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(color);
  }, 2000);
}

function deleteTodo(e) {
  const todoId = e.target.parentElement.parentElement.id;

  const newTodos = todos.filter((todo, index) => {
    return index != todoId;
  });
  todos = [...newTodos];
  displayTodos();
  displayAlert("Item Removed", "red");
}

function editTodo(e) {
  editFlag = true;
  submitBtn.textContent = "Edit";
  input.focus();

  editElement = e.target.parentElement.parentElement;

  input.value = editElement.firstElementChild.textContent;
}

function clearAllTodos() {
  todos = [];
  setToDefault();
  displayAlert("All Todos Cleared", "red");
  displayTodos();
}

function displayTodos() {
  todosList.innerHTML = todos
    .map((todo, index) => {
      return `<li id=${index} class="flex justify-between">
            <p>${todo}</p>
            <div class="flex gap-3 text-xl">
              <i class="edit ri-edit-fill"></i>
              <i class="delete ri-delete-bin-6-fill"></i>
            </div>
          </li>`;
    })
    .join("");

  input.focus();

  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", deleteTodo);
  });

  const editButtons = document.querySelectorAll(".edit");

  editButtons.forEach((btn) => {
    btn.addEventListener("click", editTodo);
  });

  if (todos.length) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }

  localStorage.setItem("todos", JSON.stringify(todos));
}

clearBtn.addEventListener("click", clearAllTodos);
