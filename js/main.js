
//define variables
var buttonR, buttonG, buttonB, buttonY, colorSwitch, playerChoice, computerChoice, random;
buttonR = document.getElementById('red');
buttonG = document.getElementById('green');
buttonB = document.getElementById('blue');
buttonY = document.getElementById('yellow');
playerChoice = [];
computerChoice = [];
random = Math.random();


//await player to press start


//initialize board state, wait 3 seconds, then add random number to sequence
function nextNum(){
  if (random <= 0.24) {
    computerChoice.push(buttonR);
  } else if (random >0.24 || random <=0.49 ){
    computerChoice.push(buttonG);
  } else if (random >0.5 || random <=0.74){
    computerChoice.push(buttonB);
  } else {
    computerChoice.push(buttonY);
  }
  console.log('computerChoice[]')
};


//animate sequence tied to random number to user


//listen for user input

//register click to array
$('#red').on('click', function(){
  playerChoice.push(buttonR);
  checkNum;
})
$('#green').on('click', function(){
  playerChoice.push(buttonG);
  checkNum;
})
$('#blue').on('click', function(){
  playerChoice.push(buttonB);
  checkNum;
})
$('#yellow').on('click', function(){
  playerChoice.push(buttonY);
  checkNum;
})
//
  //if click != sequence array {
    function checkNum(){
      if (playerChoice != computerChoice){
        alert('Game Over!');
      }
    }
    //display game over
      //if game score !> high score { do nothing}
      //if game score > high score {
        //update high score, alert('Your new high score is ' + highScore!')
      //}
  //}

