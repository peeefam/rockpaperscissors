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

function playRound(playerSel, compSel) {
    playerSel = playerSel.toLowerCase();

    if (playerSel == compSel) {
        return 2;
    } 
        switch(playerSel) {
            case 'rock':
                if (compSel == 'scissors') {
                    return 1;
                }
                else {
                    return 0;
                }
                break;
            case 'paper':
                if (compSel == 'rock') {
                    return 1;
                }
                else {
                    return 0;
                }
                break;
            case 'scissors':
                if (compSel == 'paper') {
                    return 1;
                }
                else {
                    return 0;
                }
                break;
            default:
                return "Invalid entry.";
    }
        
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) { 
        let player = prompt("Rock, paper, or scissors?");
        let computer = getComputerChoice();
        let result = playRound(player, computer);
        if (result == 1) {
            alert(player + " beats " + computer + ", player wins!");
            playerScore++;
        }
        else if (result == 0){
            alert(computer + " beats " + player + ", computer wins!");
            compScore++;
        }
        else {
            alert("Tie Game! Replay round.");
            i--;
        }
    }
    alert("Game Over. Player: " + playerScore + ", Computer: " + compScore);
}
 
game();