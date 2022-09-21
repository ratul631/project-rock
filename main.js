 let compScore=0;
 let playerscore=0;

 const moves= ["Rock", "Paper", "Scissors"];
  
 const getComputerchoice = (moves) =>{
    return moves[Math.floor (Math.random ()* moves.length)].toLowerCase();
  }

  const computerSelection = getComputerchoice();
  const playRound = (playerSelection, computerSelection)=>{
      if (playerSelection===computerSelection){
        return ("Tie!");
      }
      else if (playerSelection=="rock" && computerSelection=="scissors"){
        return("You win Rock Crushes Scissors");
      }
      else if (playerSelection=="rock" && computerSelection=="paper"){
        return("You lose Paper cover Rock");
      }
      else if (playerSelection=="scissors" && computerSelection=="rock"){
        return("You lose Rock crushes Scissors");
      }
      else if (playerSelection=="scissors" && computerSelection=="paper"){
        return("You win Scissors cut Paper");
      }
      else if (playerSelection=="paper" && computerSelection=="scissors"){
        return("You lose Scissors cut paper");
      }
      else if (playerSelection=="paper" && computerSelection=="rock"){
        return("You win Paper covers Rock");
      }
    }
    const playerSelection="rock"
    
    console.log(playRound(playerSelection, computerSelection));
