document.addEventListener("DOMContentLoaded", function() {

    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
  
    function getComputerChoice() {
      let randomint = Math.random();
      let choice;
      
      if (randomint <= 0.33) {
        choice = 'rock';
      } else if (randomint <= 0.66) {
        choice = 'paper';
      } else {
        choice = 'scissors';
      }
      
      return choice;
    }
  
    function player() {
      return new Promise(function(resolve, reject) {
        let choice = null;
  
        box1.addEventListener("click", function() {
          choice = 'rock';
          resolve(choice);
        });
  
        box2.addEventListener("click", function() {
          choice = 'paper';
          resolve(choice);
        });
  
        box3.addEventListener("click", function() {
          choice = 'scissors';
          resolve(choice);
        });
      });
    }
  
    async function playGame() {
      const playerChoice = await player();
      const computerChoice = getComputerChoice();
      game(playerChoice, computerChoice);
    }
  
    function game(player, computer) {
      if (player === computer) {
        alert("draw");
      } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
      ) {
        alert("player wins!");
      } else {
        alert("computer wins!");
      }
  
      console.log("player answer: " + player);
      console.log("computer answer: " + computer);
    }
  
    box1.addEventListener("click", playGame);
    box2.addEventListener("click", playGame);
    box3.addEventListener("click", playGame);
  
  });