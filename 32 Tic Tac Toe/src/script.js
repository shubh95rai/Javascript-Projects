const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart");

let currentPlayer = "X";
message.textContent = `${currentPlayer}'s Turn`;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }

    squares[i].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `Player ${currentPlayer} wins!`;
      return;
    }

    if (checkTie()) {
      message.textContent = "Match tied!";
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    message.textContent = `${currentPlayer}'s Turn`;
  });
}

function checkWinner(currentPlayer) {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];

    if (
      squares[a].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  currentPlayer = "X";
  message.textContent = `${currentPlayer}'s Turn`;
}

restart.addEventListener("click", restartGame);
