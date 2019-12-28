const gameBoard = (() => {
    const board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const setToken = (player, position) => {
        if (player === 1) {
            board[position] = 'X';
        } else {
            board[position] = 'O';
        }
    };

    const displayBoard = () => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.innerText = String(board[i]);
            container.appendChild(button);
        }
    };

    return {
        setToken,
        displayBoard
    };
})();

const playerFactory = (name, token) => {
    return {
      name,
      token
    };
};

const gameControl = (() => {})();

gameBoard.displayBoard();