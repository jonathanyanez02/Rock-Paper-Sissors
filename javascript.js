function getComputerChoice(choice1){

    let randomint = Math.random();
    let choice ;
    
    
    if(randomint<=0.33){
        choice = 'rock';
        
    }
    if(randomint>0.33 && randomint<0.66){
        choice = 'paper';
       
        
    }
     if(randomint>=0.66){
        choice = 'scizzors';
        }
        
        
    
    return choice;
    }
    
    function player(choice1){
    
    let p = prompt("type either: \n'1'[rock]\n'2'[paper]\n'3'[scizzors] \n");
    
    //let promptkeylog;
    let choice ;
    
    
    if(p == '1'){
        choice = 'rock';
        
    }
    if(p == '2'){
        choice = 'paper';
       
        
    }
    if(p == '3'){
        choice = 'scizzors';
        }
        
        
    
    return choice;
    }
    
    function game(player, computer){
        let result;
        if(player == 'rock' && computer == 'scizzors'){
            alert("player wins!")
        }
        else if(player == 'scizzors' && computer == 'paper'){
            alert("player wins!")
        }
        else if(player == 'paper' && computer == 'rock'){
            alert("player wins!")
        }
        else if(player == computer){
            alert("draw")
        }
        else{
            alert("computer wins!");
        }
        console.log("player answer: " + player)
        console.log("computer answer: " + computer)
        
        }
    
    
    
   // game(player(),getComputerChoice());

   //
   var box = document.getElementById("box");