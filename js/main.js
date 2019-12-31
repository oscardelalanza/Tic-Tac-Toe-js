const gameBoard = (() => {
    let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const setToken = (actualPlayer, index) => {
        if (actualPlayer === 1) {
            board[index] = 'X';
        } else {
            board[index] = 'O';
        }
    };

    const displayBoard = () => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.name = 'btn';
            button.innerText = String(board[i]);
            container.appendChild(button);
        }
    };

    return {
        setToken,
        displayBoard,
        board
    };
})();

const playerFactory = (name, token) => {
    return {
      name,
      token
    };
};

const gameControl = (() => {
    const player1 = playerFactory('player 1', 'X');
    const player2 = playerFactory('player 2', 'O');
    let actualPlayer = player1;
    let board = document.getElementById('board-container');

    const play = () => {
        gameBoard.displayBoard();
        board.addEventListener('click', (e) => {
            if (e.target.name === 'btn') {
                // TODO: working on setting token
            }
        })
    };

    return {
        play
    }
})();

gameControl.play();

// TODO: toggle actual player for switch between movements
// TODO: create game control module to handle game functionality
// TODO: create board validations for winner combinations