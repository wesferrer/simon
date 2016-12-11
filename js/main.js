/*-- variables --*/

var genSequence, level, guessedSequence;
var colors = ['R', 'G', 'B', 'Y']
var lightRed = function(){

}

/*-- elements --*/
// for example
var $msg = $('#msg');

/*-- event listeners --*/

$('.colors').on('click', function(evt) {
  console.log(this.id)
});

$('#start').on('click', function(evt) {
  guessedSequence = [];
  level++;
  // generate new code based on current level
  generateSequence();
  // play the sequence

});

/*-- helper functions --*/

function initialize() {
  level = 0;
}

function generateSequence() {
  genSequence = [];
  for (var i = 1; i <= level; i++){
    //randomly generate color
    var idx = Math.floor(Math.random() * 4);
    genSequence.push(colors[idx]);
  }
}



initialize();
