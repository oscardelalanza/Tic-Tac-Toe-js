// player factory for create player objects
const playerFactory = (id, name, token) => ({
  id,
  name,
  token,
});

// gameBoard module, for interactions with the board (set tokens, validate combinations)
const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];
  let counter = 0;

  const setToken = (actualPlayer, index) => {
    if (actualPlayer === 1) {
      board[index] = 'X';
    } else {
      board[index] = 'O';
    }
    counter += 1;
  };

  const getCounter = () => {
    return counter;
  };

  const displayBoard = () => {
    const container = document.getElementById('board-container');
    container.innerHTML = '';

    for (let i = 0; i < 9; i += 1) {
      const button = document.createElement('button');
      button.id = String(i);
      button.name = 'btn';
      button.innerText = String(board[i]);
      container.appendChild(button);
    }
  };

  const checkIndex = index => {
    return board[index] === '';
  };

  const checkBoard = () => {
    // Horizontal
    let winner = false;
    for (let i = 0; i < 9; i += 3) {
      if (board[i] !== '' && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
        winner = board[i];
      }
    }

    // Vertical
    for (let i = 0; i < 3; i += 1) {
      if (board[i] !== '' && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
        winner = board[i];
      }
    }

    // Diagonal 1
    if (((board[0] === board[4] && board[4] === board[8]) || (board[2] === board[4] && board[4] === board[6])) && board[4] !== '') {
      winner = board[4];
    }

    return winner;
  };

  return {
    setToken,
    displayBoard,
    checkIndex,
    board,
    getCounter,
    checkBoard,
  };
})();

// gameControl module
const gameControl = (() => {
  const player1 = playerFactory(
    1,
    window.prompt('Enter name for player 1') || 'player 1', 'X',
  );
  const player2 = playerFactory(
    2,
    window.prompt('Enter name for player 2') || 'player 2', 'O',
  );
  let status = true;
  let actualPlayer = player1;
  const board = document.getElementById('board-container');

  const checkDraw = () => {
    if (gameBoard.getCounter() === 9) {
      alert('draw');
      status = false;
    }
  };

  const event_logic = e => {
    if (e.target.name === 'btn' && status) {
      const index = e.target.id;

      if (gameBoard.checkIndex(index)) {
        gameBoard.setToken(actualPlayer.id, index);
        gameBoard.displayBoard();

        if (gameBoard.checkBoard()) {
          alert(`${actualPlayer.name} has won`);
          board.removeEventListener('click', event_logic);
        }

        checkDraw();
        actualPlayer = actualPlayer === player1 ? player2 : player1;
      } else if (!status) {
        alert('the game has ended');
      } else {
        alert('not available');
      }
    }
  };

  const play = () => {
    gameBoard.displayBoard();
    board.addEventListener('click', event_logic);
  };

  return {
    checkDraw,
    play,
    player1,
  };
})();

// calls
document.querySelector('#start').addEventListener('click', () => {
  gameControl.play();
});

document.querySelector('#reset').addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});