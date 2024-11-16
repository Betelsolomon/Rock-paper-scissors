
function playGame(){

    const finalResult = document.querySelector(".finalResult");
    const roundResult = document.querySelector(".roundResult");
    const rock= document.querySelector("#rock");
    const paper= document.querySelector("#paper");
    const scissors= document.querySelector("#scissors");
    let computerScore = 0;
    let humanScore = 0;
    let roundPlayed = 0;
    
    function getComputerChoice(){
      const randNum = Math.floor(Math.random() * 3) ;
      if (randNum == 0) {
          return "rock" ;
      }
      else if (randNum == 1) {
          return "paper";
      }
      else{
          return "scissors";
      }
    }
    
   function playround( humanChoice , computerChoice){
    
    
      if (humanChoice===computerChoice) {
        roundResult.textContent="it's a tie";
          

      }
      else if ((humanChoice==="rock" && computerChoice ==="scissors" )||(humanChoice==="paper" && computerChoice ==="rock")||(humanChoice==="scissors" && computerChoice ==="paper") )
      { 
        roundResult.textContent=`Human won this round ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        
      }
      else{
        roundResult.textContent=`Computer won this round ${computerChoice} beats ${humanChoice}`;
        computerScore++;
          
      }
  }
  function handleClick(humanChoice){

    if (roundPlayed < 5) 
      {
      const computerChoice= getComputerChoice();
      playround(humanChoice,computerChoice);
      roundPlayed++;

      if (roundPlayed===5) {
        if (humanScore=== computerScore) {
          finalResult.textContent =`It's a tie human score is -${humanScore} and computer score is - ${computerScore}` ;
        }
        else if (humanScore > computerScore) {
          finalResult.textContent= `Human won human score is -${humanScore} and computer score is - ${computerScore}`;
        }
        else{
          finalResult.textContent= `Computer won computer score is ${computerScore} and human score is ${humanScore} `;
        }
        rock.disabled= true;
        paper.disabled=true;
        scissors.disabled=true;

      }
    }
  }
  rock.addEventListener("click",() => handleClick("rock"));
  paper.addEventListener("click", () => handleClick("paper"));
  scissors.addEventListener("click", () => handleClick("scissors"));
  
  
}
playGame();
