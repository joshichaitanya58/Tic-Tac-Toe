let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

let plyerNames = document.querySelector('.playersName');

const popup = document.querySelector('.popup');
const restartBtn = document.getElementById('restart-btn');


let turn = 'X';
let gameActive = false;

function gamelogic() {
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            if (!gameActive || box.innerText !== '') return;

            if (turn === 'X') {
                box.innerText = 'X';
            } else {
                box.innerText = 'O';
            }

            let winner = checkWin();
            if (winner) {
                gameActive = false;
                let winnerName = winner === 'X' ? (player1.value || 'Player 1') : (player2.value || 'Player 2');
                popup.innerHTML = `<h4 class="turn">🎉 ${winnerName} (${winner}) Wins! 🎉</h4>`;
                restartBtn.style.display = 'block';
                return;
            }

            let isDraw = boxes.every(b => b.innerText !== '');
            if (isDraw) {
                gameActive = false;
                popup.innerHTML = `<h4 class="turn">🤝 It's a Draw! 🤝</h4>`;
                restartBtn.style.display = 'block';
                return;
            }

            turn = turn === 'X' ? 'O' : 'X';
            let nextPlayer = turn === 'X' ? (player1.value || 'Player 1') : (player2.value || 'Player 2');
            popup.innerHTML = `<h4 class="turn">${nextPlayer} (${turn}) Turn</h4>`;
        });
    });
};

function checkWin() {
    const winCombination = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9],
        [box1, box4, box7],
        [box2, box5, box8],
        [box3, box6, box9],
        [box1, box5, box9],
        [box3, box5, box7]
    ];

    for (const combination of winCombination) {
        const [a, b, c] = combination;
        if (a.innerText === b.innerText && b.innerText === c.innerText && a.innerText !== '') {
            return a.innerText;
        }
    }
    return null;
}

gamelogic();


let submitBtn = document.getElementById('start-btn');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); 

    document.getElementById('box-btn').style.display = 'grid';
    document.querySelector('.container').style.marginTop = '5vh'; 
    document.querySelector('.names').style.display = 'none';
    plyerNames.style.display = 'none'; 

    popup.style.display = 'flex';
    

    if (player1.value == '') {
        player1.value = 'Player 1';
    }

    if (player2.value == '') {
        player2.value = 'Player 2';
    }

    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    p1.innerText = `Player 1: ${player1.value} (X)`;
    p2.innerText = `Player 2: ${player2.value} (O)`;

    
    popup.innerHTML = `<h4 class="turn">${player1.value} (X) Turn</h4>`;
    gameActive = true;
});

restartBtn.addEventListener('click', function () {
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    boxes.forEach(box => box.innerText = ''); 
    turn = 'X'; 
    gameActive = true; 
    popup.innerHTML = `<h4 class="turn">${player1.value || 'Player 1'} (X) Turn</h4>`;
    restartBtn.style.display = 'none'; 
});
