const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const comp = document.createElement("div");
comp.id="comp";
const playAgain=document.createElement("button");
playAgain.id="play";

document.body.appendChild(comp);
document.body.appendChild(playAgain);

let playerScore = 0;
let computerScore = 0;

playAgain.textContent = "Play Again";
playAgain.style.display = "none";

rock.addEventListener("click", function(){ 
    playRound("rock");
});

paper.addEventListener("click", function(){ 
    playRound("paper");
});

scissors.addEventListener("click", function(){ 
    playRound("scissors");
});

playAgain.addEventListener("click", function(){
    resetGame();
})

function resetGame(){
    playAgain.style.display="none";
    comp.textContent="";
    playerScore = 0;
    computerScore = 0;
    player.textContent=playerScore;
    computer.textContent = computerScore;
    rounds.textContent = "";
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection){
    if (playerScore >= 5 || computerScore >= 5) return;

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    if ((playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        computer.textContent = computerScore;
        comp.textContent = `Computer played ${computerSelection}, and you played ${playerSelection}! You lost!`;
        
    } else if (!(playerSelection==computerSelection)){
        playerScore++;
        player.textContent = playerScore;
        comp.textContent = `Computer played ${computerSelection}, and you played ${playerSelection}! You won!`;
    }

    else{
        comp.textContent = `Computer played ${computerSelection}, and you played ${playerSelection}! It's a tie!`;
    }

    if ((playerScore == 5 || computerScore == 5) && playerScore != computerScore) {
        if (playerScore > computerScore) {
            comp.textContent = ("You won the round!");
        } else {
            comp.textContent = ("You lost the round!");
        }
        playAgain.style.display = "block";
    }
}
