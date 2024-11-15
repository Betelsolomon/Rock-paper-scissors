
function playGame(){

    const result = document.querySelector(".result");
    const rock= document.querySelector("#rock");
    const paper= document.querySelector("#paper");
    const scissors= document.querySelector("#scissors");
    let computerScore = 0;
    let humanScore = 0;
    
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
    
    function getHumanChoice(){
       let humanChoice

      rock.addEventListener("click",() =>{
        humanChoice = "rock";
      })

 
      paper.addEventListener("click",() =>{
        humanChoice = "paper";
      })

      
      scissors.addEventListener("click",() =>{
        humanChoice = "scissors";
      })

      return humanChoice;
    }
   
   function playround( humanChoice , computerChoice){
    
    
      if (humanChoice===computerChoice) {
        result.textContent="it's a tie";
          

      }
      else if ((humanChoice==="rock" && computerChoice ==="scissors" )||(humanChoice==="paper" && computerChoice ==="rock")||(humanChoice==="scissors" && computerChoice ==="paper") )
      { 
        result.textContent="human won";
        
      }
      else{
        result.textContent="computer won";
          
      }
  }

 
  for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playround(humanSelection,computerSelection);
      
  }
  if(humanScore === computerScore){
      result.textContent=  "it's a tie";
      
  }
  else if (humanScore > computerScore) {
          result.textContent="human won human score is" + humanScore+ "computer score is" + computerScore;
      }
      else{
          result.textContent = "computer won computer score is " + computerScore+ "human score is " + humanScore;
      }
         
  
}
playGame();
