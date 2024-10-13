
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const num = Math.floor(Math.random() * 3);
        if (num === 0) {
            return "rock";
        } else if (num === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getHumanChoice() {
        const choice = prompt("Enter your choice (Rock, Paper, or Scissors)");
        return choice.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        const result1 = document.querySelector("#result1");
        if (humanChoice === computerChoice) {
            result1.innerHTML = "It's a tie!";
            
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            result1.innerHTML = "You win! " + humanChoice + " beats " + computerChoice;
           
        } else {
            computerScore++;
            result1.innerHTML="You lose! " + computerChoice + " beats " + humanChoice;
        }
        

        const rock = document.querySelector("#rock");
        rock.addEventListener("click", function() {
                 const computerValue = getComputerChoice();
                 playRound("rock", computerValue);
                }
            );
       
        const paper = document.querySelector("#paper");
        paper.addEventListener("click", function() {
            const computerValue = getComputerChoice();
            playRound("paper", computerValue);
           }
       );
        
        const scissors = document.querySelector("#scissors");
        scissors.addEventListener("click", function() {
            const computerValue = getComputerChoice();
            playRound("scissors", computerValue);
           }
       );

   
    }

    for( i = 0; i< 5; i++)
        {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }

    
        
    const result2 = document.querySelector("#result2");

    result2.innerHTML = "It's a tie!";

    result2.innerHTML= "Your score: " + humanScore;
    result2.innerHTML="Computer score: " + computerScore;

    const result3 = document.querySelector("#result3");

    if (humanScore > computerScore) {
        result3.innerHTML="You won the game!";
    } else if (humanScore < computerScore) {
        result3.innerHTML="You lost the game!";
    } else {
        result3.innerHTML="It's a tie!";
    }
}

playGame();







