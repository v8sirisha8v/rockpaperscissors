function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    switch(x){
        case 0:
            return ("Rock");
            break;
        case 1:
            return ("Paper");
            break;
        case 2:
            return ("Scissors")
            break;
    }
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if ((playerSelection == "ROCK" && computerSelection=="PAPER") || (playerSelection == "PAPER" && computerSelection=="SCISSORS" ) || (playerSelection=="SCISSORS" && computerSelection=="ROCK")){
        return("You Lose! " + computerSelection + " beats " + playerSelection );
    }

    else if (playerSelection==computerSelection){
        return "It's a tie!";
        
    }

    else{
        return("You Win! " + playerSelection + " beats " + computerSelection );
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Enter your choice");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.startsWith("You W")){
            playerScore++;
        }
        else if (result.startsWith("You L")){
            computerScore++;
        }

    }
    if (playerScore > computerScore) {
        console.log("YOU WIN LETS GOOOOOOOOOOOOOOO");
    } else if (playerScore < computerScore) {
        console.log("LLLLLLLLL (you lost the round)");
    } else {
        console.log("ITS A TIE!");
    }
}

game();



