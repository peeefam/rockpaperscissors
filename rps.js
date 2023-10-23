let round = 1;
let pScore = 0;
let cScore = 0;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const player = document.querySelector('#player');
const comp = document.querySelector('#comp');
const reset = document.querySelector('.reset');
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
const roundNum = document.querySelector('.round');
const result = document.querySelector('#result');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('#close');
const playerIMG = document.querySelector('#playerIMG');
const compIMG = document.querySelector('#compIMG');



// Event Listeners
rock.addEventListener('click', () => {
    playRound('rock');
    roundNum.textContent = "Round " + round;
});
paper.addEventListener('click', () => {
    playRound('paper');
    roundNum.textContent = "Round " + round;
});
scissors.addEventListener('click', () => {
    playRound('scissors');
    roundNum.textContent = "Round " + round;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});
reset.addEventListener('click', () => {
    resetGame();
})
function resetGame() {
    pScore = 0;
    cScore = 0;
    round = 1;
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
    result.textContent = "Choose Your Weapon!"; 
    compIMG.src = "images/question.png";
    playerIMG.src = "images/question.png";
}

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3: 
            return 'scissors';
            break
        default: 
            return null;
    }
}

function playRound(playerSel) {
    compSel = getComputerChoice();

    compIMG.src = "images/" + compSel + ".png";
    playerIMG.src = "images/" + playerSel + ".png";


    if (playerSel === compSel) {
        result.textContent = "Tie Game!"
    }
    else {
        switch(playerSel) {
            case 'rock':
                if (compSel == 'scissors') {

                    win('player');
                }
                else {
                    win('computer');
                }
                break;
            case 'paper':
                if (compSel == 'rock') {
                    win('player');
                }
                else {
                    win('computer');
                }
                break;
            default:
                if (compSel == 'paper') {
                    win('player');
                }
                else {
                    win('computer');
                }
        }
    }

    round++;
    if (pScore == 5 || cScore == 5) {
        modal.style.display = "block";
        document.querySelector('#modalMsg').textContent = "Game Over! Player: " + pScore + " Computer: " + cScore;
        resetGame();
    }
}

function win(winner) {
    if (winner == 'player') {
        pScore++;
        playerScore.textContent = pScore;
        result.textContent = "Player Wins!"
    }
    else {
        cScore++;
        compScore.textContent = cScore;
        result.textContent = "Computer Wins!"
    }
}

