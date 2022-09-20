const moves= [ "Rock", "Paper", "Scissors"];
        function getComputerchoice (moves) {
          return moves[Math.floor (Math.random ()* moves.length)];
        }
    let playerSelection= prompt("Choose Rock, Paper or Scissors", "Rock").toLowerCase();
     console.log(playerSelection);