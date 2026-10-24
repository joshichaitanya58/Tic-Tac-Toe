const boxes = Array.from(document.querySelectorAll('.cell'));
const board = document.getElementById('box-btn');
const setupCard = document.getElementById('setup-card');
const gameArea = document.getElementById('game-area');

const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const p1Label = document.getElementById('p1');
const p2Label = document.getElementById('p2');
const p1Card = document.getElementById('p1-card');
const p2Card = document.getElementById('p2-card');

const scoreXEl = document.getElementById('score-x');
const scoreOEl = document.getElementById('score-o');
const scoreDrawEl = document.getElementById('score-draw');

const popup = document.getElementById('status-popup');
const turnText = document.getElementById('turn-text');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const changeNamesBtn = document.getElementById('change-names-btn');

let turn = 'X';
let gameActive = false;
let scores = { X: 0, O: 0, draw: 0 };

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getPlayerName(symbol) {
    if (symbol === 'X') {
        return player1Input.value.trim() || 'Player 1';
    }
    return player2Input.value.trim() || 'Player 2';
}

function updateTurnUI() {
    board.setAttribute('data-turn', turn);
    turnText.innerText = `${getPlayerName(turn)} (${turn})'s Turn`;

    if (turn === 'X') {
        p1Card.classList.add('active-turn');
        p2Card.classList.remove('active-turn');
    } else {
        p2Card.classList.add('active-turn');
        p1Card.classList.remove('active-turn');
    }
}

function checkWin() {
    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (
            boxes[a].innerText !== '' &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText
        ) {
            return { symbol: boxes[a].innerText, combo };
        }
    }
    return null;
}

function initGameLogic() {
    boxes.forEach(box => {
        box.addEventListener('click', function () {
            if (!gameActive || box.innerText !== '') return;

            box.innerText = turn;
            box.classList.add('taken', turn === 'X' ? 'x-mark' : 'o-mark');

            const winResult = checkWin();
            if (winResult) {
                gameActive = false;
                board.classList.add('locked');

                winResult.combo.forEach(index => {
                    boxes[index].classList.add('winner-cell');
                });

                scores[winResult.symbol]++;
                scoreXEl.innerText = scores.X;
                scoreOEl.innerText = scores.O;

                const winnerName = getPlayerName(winResult.symbol);
                popup.classList.add('win-banner');
                turnText.innerText = `🎉 ${winnerName} (${winResult.symbol}) Wins!`;
                return;
            }

            const isDraw = boxes.every(b => b.innerText !== '');
            if (isDraw) {
                gameActive = false;
                board.classList.add('locked');
                scores.draw++;
                scoreDrawEl.innerText = scores.draw;

                popup.classList.add('draw-banner');
                turnText.innerText = `🤝 It's a Draw!`;
                return;
            }

            turn = turn === 'X' ? 'O' : 'X';
            updateTurnUI();
        });
    });
}

function resetBoard() {
    boxes.forEach(box => {
        box.innerText = '';
        box.classList.remove('taken', 'x-mark', 'o-mark', 'winner-cell');
    });
    turn = 'X';
    gameActive = true;
    board.classList.remove('locked');
    popup.classList.remove('win-banner', 'draw-banner');
    updateTurnUI();
}

startBtn.addEventListener('click', function (event) {
    event.preventDefault();

    p1Label.innerText = getPlayerName('X');
    p2Label.innerText = getPlayerName('O');

    setupCard.style.display = 'none';
    gameArea.style.display = 'flex';

    resetBoard();
});

restartBtn.addEventListener('click', resetBoard);

changeNamesBtn.addEventListener('click', function () {
    scores = { X: 0, O: 0, draw: 0 };
    scoreXEl.innerText = '0';
    scoreOEl.innerText = '0';
    scoreDrawEl.innerText = '0';

    gameArea.style.display = 'none';
    setupCard.style.display = 'block';
});

initGameLogic();