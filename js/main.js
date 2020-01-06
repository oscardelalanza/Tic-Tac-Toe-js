// player factory for create player objects
const playerFactory = (id, name, token) => {
  return {
    id,
    name,
    token
  };
};

let counter = 0;

// gameBoard module, for interactions with the board (set tokens, validate combinations)
const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const setToken = (actualPlayer, index) => {
    if (actualPlayer === 1) {
      board[index] = "X";
    } else {
      board[index] = "O";
    }
    counter++;
  };

  const getCounter = () => {
    return counter;
  };

  const displayBoard = () => {
    const container = document.getElementById("board-container");
    container.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.id = String(i);
      button.name = "btn";
      button.innerText = String(board[i]);
      container.appendChild(button);
    }
  };

  const checkIndex = index => {
    return board[index] === "";
  };

  const checkBoard = () => {
    let b = gameBoard.board;
    // Horiztonal
    for (let i = 0; i < 9; i += 3) {
      if (b[i] === b[i + 1] && b[i + 1] === b[i + 2]) {
        return b[i];
      }
    }
    // Vertical
    for (let i = 0; i < 3; i++) {
      if (b[i] === b[i + 3] && b[i + 3] === b[i + 6]) {
        return b[i];
      }
    }
    // Diagonal 1
    if ((b[0] === b[4] && b[4] === b[8]) || (b[2] === b[4] && b[4] === b[6]))
      return b[4];
    return null;
  };

  return {
    setToken,
    displayBoard,
    checkIndex,
    board,
    getCounter,
    checkBoard
  };
})();

// gameControl module
const gameControl = (() => {
  const player1 = playerFactory(
    1,
    prompt("Enter name for player 1") || "player 1",
    "X"
  );
  const player2 = playerFactory(
    2,
    prompt("Enter name for player 2") || "player 2",
    "O"
  );
  let status = true;
  let actualPlayer = player1;
  let board = document.getElementById("board-container");

  const checkDraw = () => {
    if (gameBoard.getCounter() === 9) {
      alert("draw");
      status = false;
    }
  };

  const play = () => {
    gameBoard.displayBoard();
    board.addEventListener("click", e => {
      if (e.target.name === "btn" && status) {
        let index = e.target.id;

        if (gameBoard.checkIndex(index)) {
          gameBoard.setToken(actualPlayer.id, index);
          gameBoard.displayBoard();
          let checkStatus = gameBoard.checkBoard();
          console.log(checkStatus);
          if (checkStatus) {
            alert(`${actualPlayer.name} has won`);
          }
          checkDraw();
          actualPlayer = actualPlayer === player1 ? player2 : player1;
        } else if (!status) {
          alert("the game has ended");
        } else {
          alert("not available");
        }
      }
    });
  };

  return {
    checkDraw,
    play,
    player1
  };
})();

// calls
document.querySelector("#start").addEventListener("click", () => {
  gameControl.play();
});

document.querySelector("#reset").addEventListener("click", () => {
  location.reload();
});

// gameControl.play();
