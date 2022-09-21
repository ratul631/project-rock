 let compScore=0;
 let playerscore=0;

 const moves= ["Rock", "Paper", "Scissors"];
  
function computerChoice (moves){
return  moves[Math.floor(Math.random()*moves.length)].toLowerCase();
}
let computerSelection=computerChoice(moves);
 const playerSelection="rock";
  const playRound = (playerSelection, computerSelection)=>{
    console.log ("1", playerSelection, "2", computerSelection)
      if (playerSelection===computerSelection){
        return ("Tie!");
      }
      else if (playerSelection=="rock" , computerSelection=="scissors"){
        return("You win Rock Crushes Scissors");
      }
      else if (playerSelection=="rock" , computerSelection=="paper"){
        return("You lose Paper cover Rock");
      }
      else if (playerSelection=="scissors" , computerSelection=="rock"){
        return("You lose Rock crushes Scissors");
      }
      else if (playerSelection=="scissors" , computerSelection=="paper"){
        return("You win Scissors cut Paper");
      }
      else if (playerSelection=="paper" , computerSelection=="scissors"){
        return("You lose Scissors cut paper");
      }
      else if (playerSelection=="paper" , computerSelection=="rock"){
        return("You win Paper covers Rock");
      }
  }
  for (let i=0; i<5;i++)
    console.log(playRound(playerSelection, computerSelection));
