
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

//SOUNDS
var myMap = new Map();

myMap.set(buttons[0], "http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav")
myMap.set(buttons[1], 'http://themushroomkingdom.net/sounds/wav/smw/smw_yoshi_tongue.wav')
myMap.set(buttons[2], 'http://themushroomkingdom.net/sounds/wav/smw/smw_stomp_koopa_kid.wav')
myMap.set(buttons[3], 'http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav')
myMap.set(startButton, 'http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav')
myMap.set('last', 'http://themushroomkingdom.net/sounds/wav/smw/smw_lost_a_life.wav')

function clickSound(button){
  var elem = new Audio(myMap.get(button));
  elem.play();
}

// event handlers
$('.colors').on('click', handleColorClick);

//await player to press start
startButton.addEventListener('click', handleStartClick);

// FUNCTIONS

function handleStartClick() {
  clickSound(this);
  removeOver();
  init();
  setTimeout(compTurn, 1000);
}

function handleColorClick() {
  playerChoice.push(this);
  compare();
  document.getElementById('score').innerHTML = 'Score: ' + (computerChoice.length - 1);
  clickSound(this);
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
function removeOver() {
  $('#over').css('opacity', 0)
  $('#over').removeClass('animate');
}

function enableColors() {
  $('.colors').removeAttr('disabled');
}

function animateColors() {
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
  clickSound(btn);
}

function unflashButton(btn) {
  $(btn).removeClass('flash')
}
function overFlash() {
  $('h2').addClass('animate');
  clickSound('last');
}

function compTurn(){
  disableColors();
  playerChoice = [];
  nextNum();
  animateColors();
}

function gameOver(){
  disableColors();
  playerChoice = [];
  setTimeout(overFlash, 800);
}

//animate sequence tied to random number to user
function compare() {
  random = Math.floor((Math.random() * 4) + 1);
  for(var i = 0; i < playerChoice.length; i++) {
    if(computerChoice[i] !== playerChoice[i]) {
      gameOver()
    }
   }
  if(computerChoice.length === playerChoice.length){
      setTimeout(function(){
        compTurn(); }, 1000);
  }
};

disableColors();
removeOver();
