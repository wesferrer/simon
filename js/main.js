
//define variables
var buttonR, buttonG, buttonB, buttonY, colorSwitch, playerChoice, computerChoice, random, score, highScore, startButton;
buttonR = document.getElementById('red');
buttonG = document.getElementById('green');
buttonB = document.getElementById('blue');
buttonY = document.getElementById('yellow');
startButton = document.getElementById('start');
playerChoice = [];
computerChoice = [];
random = Math.floor((Math.random() * 4) + 1);
random = random;
score = 0;
highScore = 0;

function score(){
  document.getElementById('score').innerHTML = computerChoice.length;
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
function compTurn(){
  console.log('Match!');
  playerChoice = [];
  nextNum()
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
}
function gameOver(){
  console.log('Game Over!');
  disablePlayButtons(document.getElementsByClassName('colors'));
  /*setTimeout(function(){
    alert('Press Start to try again!');
  }, 1000);*/
}

disablePlayButtons(document.getElementsByClassName('colors'));


//await player to press start

startButton.addEventListener('click', function(){
  return init();
})

function init(){
  playerChoice = [];
  computerChoice = [];
  nextNum();
  enablePlayButtons(document.getElementsByClassName('colors'));
  document.getElementById('score').innerHTML = 'Score: ';
}

//initialize board state, wait 3 seconds, then add random number to sequence
function nextNum(){
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
    if(computerChoice[i] !== playerChoice[i]) {
      console.log('Game Over!');
      disablePlayButtons(document.getElementsByClassName('colors'));
      playerChoice = [];
      setTimeout(function(){
        alert("Press Start to try again!");
      }, 1000);
    }
   }
  if(computerChoice.length === playerChoice.length) {
      compTurn ();
    };
}
