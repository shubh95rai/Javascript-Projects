const squares = document.querySelectorAll(".square");
const restartBtn = document.querySelector(".restart");
const message = document.querySelector(".message");

let currentPlayer = "X";
message.textContent = `${currentPlayer}'s turn`;

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

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }

    square.textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `Player ${currentPlayer} wins! 🎉`;
      return;
    }

    if (checkDraw()) {
      message.textContent = "Match drawn!";
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    message.textContent = `${currentPlayer}'s turn`;
  });
});

function checkWinner(currentPlayer) {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];

    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
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
  message.textContent = `${currentPlayer}'s turn`;
}

restartBtn.addEventListener("click", restartGame);
