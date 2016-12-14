//define variables
var buttonR, buttonB, buttonG, buttonY, startButton, playerChoice, computerChoice, random;

//button grabbers
buttonR = document.getElementById('red');
buttonB = document.getElementById('blue');
buttonG = document.getElementById('green');
buttonY = document.getElementById('yellow');
startButton = document.getElementById('start');

//arrays
playerChoice = [];
computerChoice = [];

//necessary functions
random = Math.floor((Math.random() * 4) + 1);
function score(){
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
}
function disablePlayButtons(inputs){
  for(var i = 0; i < inputs.length; i++){
    var button = inputs[i];
    button.disabled = true;
  }
}
function enablePlayButtons(inputs){
  for(var i = 0; i < inputs.length; i++){
    var button = inputs[i];
    button.disabled = false;
  }
}
function init(){
  playerChoice = [];
  computerChoice = [];
  nextNum();
  enablePlayButtons(document.getElementsByClassName('colors'));
}

function gameOver(){
  console.log('Game Over');
  disablePlayButtons(document.getElementsByClassName('colors'));
  setTimeout(function(){
    alert('Press Start to try again!');
  }, 1000);
}
function nextTurn(){
  console.log('match!');
  playerChoice = [];
  nextNum();
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
}


//await player to press start
startButton.addEventListener('click', function(){
  return init();
})
//new sequence
function nextNum(){
  random = Math.floor((Math.random() * 4) + 1);
  console.log(random);
  if (random === 1){
    return computerChoice.push(buttonR);
  } else if (random === 2) {
    return computerChoice.push(buttonG);
  } else if (random === 3) {
    return computerChoice.push(buttonB);
  } else {
    return computerChoice.push(buttonY);
  }
}
//register and animate player choice
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

//compare arrays

function compare(){
  console.log(computerChoice, playerChoice);
  random = Math.floor((Math.random  * $) + 1);
  for (var i = 0; i < playerChoice.length; i++) {
    if (computerChoice[i] !== playerChoice[i]){
      return gameOver();
    } else if (computerChoice === playerChoice[i]){
      return nextTurn();
    } else {
      return ('Whoops!')
    }
  }
}
