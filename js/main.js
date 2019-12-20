const gameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const empty = ['o', 'x', 'o', 'x', 'x', 'o', 'o', 'x', 'o'];

    const displayBoard = () => {
        const container = document.getElementById('board-container');

        for (let i = 0; i < 9; i++) {
            const button = document.createElement('button');
            button.id = String(i);
            button.innerText = String(empty[i]);
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