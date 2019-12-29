const gameBoard = (() => {
    let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const setToken = (actualPlayer, index) => {
        if (actualPlayer === 1) {
            board[index] = 'X';
        } else {
            board[index] = 'O';
        }
    };

    const displayBoard = (actualPlayer) => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.innerText = String(board[i]);
            container.appendChild(button);

            button.addEventListener('click', () => {
               setToken(actualPlayer, button.id);
               button.disabled = true;
            });
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

const gameControl = (() => {})();

gameBoard.displayBoard(1);

// TODO: toggle actual player for switch between movements
// TODO: create game control module to handle game functionality
// TODO: create board validations for winner combinations