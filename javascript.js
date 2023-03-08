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
    
    let p = prompt("type either '1' , '2', '3' ");
    
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
        if(player == 'rock' && computer == 'sizzors'){
            alert("player wins!")
        }
        if(player == 'scizzors' && computer == 'paper'){
            alert("player wins!")
        }
        if(player == 'paper' && computer == 'rock'){
            alert("player wins!")
        }
        if(player == computer){
            alert("draw")
        }
        else{
            alert("computer wins!");
        }
        
        }
    
    
    
    game(player(),getComputerChoice());
    