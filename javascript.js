const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const rounds = document.createElement("p");
document.body.appendChild(rounds);
let playerScore = 0;
let computerScore = 0;
const playAgain=document.createElement("button");
playAgain.textContent = "Play Again!";
document.body.appendChild(playAgain);
playAgain.style.display = "none";


rock.addEventListener("click", function(){
    if (playerScore < 5 && computerScore < 5) { 
        playRound("rock", getComputerChoice());
    }
});

paper.addEventListener("click", function(){
    if (playerScore < 5 && computerScore < 5) { 
        playRound("paper", getComputerChoice());
    }
});

scissors.addEventListener("click", function(){
    if (playerScore < 5 && computerScore < 5) { 
        playRound("scissors", getComputerChoice());
    }
});

playAgain.addEventListener("click", function(){
    playerScore = 0;
    computerScore = 0;
    player.textContent=playerScore;
    computer.textContent = computerScore;
    rounds.textContent = "";
})




function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    switch(x){
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper");
            break;
        case 2:
            return ("scissors")
            break;
    }
}


function playRound(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection=="paper") || (playerSelection == "paper" && computerSelection=="scissors" ) || (playerSelection=="scissors" && computerSelection=="rock")){
        computerScore++;
        computer.textContent = computerScore;
    }

    else{
        playerScore++;
        player.textContent = playerScore;
    }

    if ((playerScore==5 || computerScore ==5)&& playerScore!=computerScore){
        if (playerScore > computerScore) {
            rounds.textContent=("ugh. you won");
        } 
        else{
            rounds.textContent=("LLLLLLLLL (you lost)");
        }   
        playAgain.style.display="block";
    }
}

