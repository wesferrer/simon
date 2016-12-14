
//define variables
var playerChoice, computerChoice, score, highScore, startButton;

var buttons = [
  document.getElementById('red'),
  document.getElementById('green'),
  document.getElementById('blue'),
  document.getElementById('yellow')
];

startButton = document.getElementById('start');
playerChoice = [];
computerChoice = [];
score = 0;
highScore = 0;

// event handlers
$('.colors').on('click', handleColorClick);

//await player to press start
startButton.addEventListener('click', handleStartClick);



// FUNCTIONS

function handleStartClick() {
  init();
  compTurn();
}

function handleColorClick() {
  playerChoice.push(this);
  compare();
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
}

function init(){
  computerChoice = [];
  document.getElementById('score').innerHTML = 'Score: 0';
}

//initialize board state, wait 3 seconds, then add random number to sequence
function nextNum(){
  var rnd = Math.floor(Math.random() * 4);
  computerChoice.push(buttons[rnd]);
};

function score(){
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
}

function disableColors() {
  $('.colors').attr('disabled', true);
}

function enableColors() {
  $('.colors').removeAttr('disabled');
}

function animateColors() {

console.log(computerChoice);

  var tickResolution = 300;
  var ticksPerColor = 3;
  var ticksBetween = 1;
  var colorIdx = 0;
  var tickCount = 0;
  var timerId = setInterval(handleTick, tickResolution);
  function handleTick() {
    var showTick = colorIdx * (ticksBetween + ticksPerColor);
    var hideTick = ticksPerColor + colorIdx * (ticksBetween + ticksPerColor);
    if (tickCount ===  showTick) flashButton(computerChoice[colorIdx]);
    if (tickCount ===  hideTick) {
      unflashButton(computerChoice[colorIdx]);
      colorIdx++;
      if (colorIdx === computerChoice.length) {
        clearInterval(timerId);
        enableColors();
      }
    }
    tickCount++;
  }
}

function flashButton(btn) {
  $(btn).addClass('flash');
  console.log('flashing btn: ', btn);
}

function unflashButton(btn) {
  $(btn).removeClass('flash')
  console.log('unflash btn: ', btn);
}

function compTurn(){
  disableColors();
  playerChoice = [];
  nextNum();
  animateColors();
}

function gameOver(){
  console.log('Game Over!');
  disablePlayButtons(document.getElementsByClassName('colors'));
  /*setTimeout(function(){
    alert('Press Start to try again!');
  }, 1000);*/
}




//animate sequence tied to random number to user



function compare() {
  random = Math.floor((Math.random() * 4) + 1);
  for(var i = 0; i < playerChoice.length; i++) {
    if(computerChoice[i] !== playerChoice[i]) {
      console.log('Game Over!');
      setTimeout(function(){
        alert("Press Start to try again!");
      }, 1000);
    }
   }
  if(computerChoice.length === playerChoice.length) {
      compTurn ();
    };
}

disableColors();
