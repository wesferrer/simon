//define variables
var buttonR, buttonG, buttonB, buttonY, colorSwitch, playerChoice, computerChoice;
buttonR = document.getElementById('red');
buttonG = document.getElementById('green');
buttonB = document.getElementById('blue');
buttonY = document.getElementById('yellow');
playerChoice = [];
computerChoice = [];


//await player to press start


//initialize board state, wait 3 seconds, then add random number to sequence


//animate sequence tied to random number to user

//listen for user input

//register click to array
$('#red').on('click', function(){
  playerChoice.push(buttonR);
})
$('#green').on('click', function(){
  playerChoice.push(buttonG);
})

//
  //if click != sequence array {
    //display game over
      //if game score !> high score { do nothing}
      //if game score > high score {
        //update high score, alert('Your new high score is ' + highScore!')
      //}
  //}
