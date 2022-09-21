const moves= [ "Rock", "Paper", "Scissors"];
        function getComputerchoice (moves) {
          return moves[Math.floor (Math.random ()* moves.length)].toLowerCase();
        }
    let playerSelection= prompt("Choose Rock, Paper or Scissors", "Rock").toLowerCase();
    
    alert (playerSelection);
    function playRound (playerSelection, getComputerchoice){
      if (playerSelection==getComputerchoice){
        alert ("TIe!")
      }
    }