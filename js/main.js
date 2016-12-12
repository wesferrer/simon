
//define variables
var buttonR, buttonG, buttonB, buttonY, colorSwitch, playerChoice, computerChoice, random;
buttonR = document.getElementById('red');
buttonG = document.getElementById('green');
buttonB = document.getElementById('blue');
buttonY = document.getElementById('yellow');
playerChoice = [];
computerChoice = [];
random = Math.floor((Math.random() * 4) + 1);
random = random;



//await player to press start
function init(){
  playerChoice = [];
  computerChoice = [];
  nextNum();
}

//initialize board state, wait 3 seconds, then add random number to sequence
function nextNum(){
  random = random
  console.log(random);
  if (random === 1) {
    return computerChoice.push(buttonR);
  } else if (random === 2){
    return computerChoice.push(buttonG);
  } else if (random === 3){
    return computerChoice.push(buttonB);
  } else if (random === 4){
    return computerChoice.push(buttonY);
  } else {
    alert('try again!');
  }
};

//setTimeOut(nextNum, 3000);

//animate sequence tied to random number to user

$('#red').on('click', function(){
  playerChoice.push(buttonR);
  compare();
})
$('#green').on('click', function(){
  playerChoice.push(buttonG);
  compare();
})
$('#blue').on('click', function(){
  playerChoice.push(buttonB);
  compare();
})
$('#yellow').on('click', function(){
  playerChoice.push(buttonY);
  compare();
})


function compare() {
  random = Math.floor((Math.random() * 4) + 1);
  for(var i = 0; i < playerChoice.length; i++) {
    if(computerChoice[i] !=playerChoice[i]) {
      console.log('Game Over!');
      init();
     }
   } if(computerChoice.length == playerChoice.length) {
     console.log('Match!');
      playerChoice = [];
      nextNum()
      }
    }
    //display game over
      //if game score !> high score { do nothing}
      //if game score > high score {
        //update high score, alert('Your new high score is ' + highScore!')
      //}
  //}

// function compare() {
//   for (var i = 0; i < playerChoice.length; i++) {
//     if (computerChoice[i] !== playerChoice[i]) {
//       alert('Game Over!');
//     }
//     if (computerChoice.length === playerChoice.length) {
//       alert('Match!');
//       playerChoice = [];
//       nextNum();
//     }
//   }
// }

init();
