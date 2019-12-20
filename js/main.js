const gameBoard = (() => {
    const board = ['o', 'x', 'o', 'x', 'x', 'o', 'o', 'x', 'o'];

    const displayBoard = () => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.innerText = String(board[i]);
            button.disabled = true;
            container.appendChild(button);
        }
    };

    return {
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