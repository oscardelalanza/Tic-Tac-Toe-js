const gameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // todo: set token function to be called from event listener

    const displayBoard = () => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.innerText = String(board[i]);
            container.appendChild(button);

            button.addEventListener('click', () => {

            });
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