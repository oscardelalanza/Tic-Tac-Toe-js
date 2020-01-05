const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const setToken = (actualPlayer, index) => {
        if (actualPlayer === 1) {
            board[index] = 'X';
        } else {
            board[index] = 'O';
        }
    };

    const displayBoard = () => {
        const container = document.getElementById('board-container');
        container.innerHTML = '';

        for (let i = 0; i < 9; i++) {
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

    return {
        setToken,
        displayBoard,
        checkIndex,
        board
    };
})();

const playerFactory = (id, name, token) => {
    return {
        id,
        name,
        token
    };
};

const gameControl = (() => {
    const player1 = playerFactory(1,'player 1', 'X');
    const player2 = playerFactory(2,'player 2', 'O');
    let actualPlayer = player1;
    let board = document.getElementById('board-container');

    const checkDraw = () => {
        return gameBoard.board.every(el => {
            return el !== '';
        });
    };

    const play = () => {
        gameBoard.displayBoard();
        board.addEventListener('click', (e) => {
            if (e.target.name === 'btn') {
                let index = e.target.id;

                if (gameBoard.checkIndex(index)) {
                    gameBoard.setToken(actualPlayer.id, index);
                    actualPlayer = (actualPlayer === player1) ? player2 : player1;
                    gameBoard.displayBoard();
                } else {
                    alert('not available');
                }
            }
        });
    };

    return {
        checkDraw,
        play,
    }
})();

if (!gameControl.checkDraw()) {
    gameControl.play();
} else {
    alert('draw');
}