//define variables
var buttonR, buttonG, buttonB, buttonY, colorSwitch;
buttonR = document.getElementById('red');
buttonG = document.getElementById('green');
buttonB = document.getElementById('blue');
buttonY = document.getElementById('yellow');


document.getElementsByClassName('colors');

//await player to press start
buttonR.addEventListener('mousedown', function(){
  document.getElementById('red').style.backgroundColor = 'red';
})
buttonR.addEventListener('mouseup', function(){
  document.getElementById('red').style.backgroundColor = '#990000'
})

//initialize board state, wait 3 seconds, then add random number to sequence


//animate sequence tied to random number to user

//listen for user input

//register click to array

//var greenClick = $('#green').css('background-color', '#004d00');
//var blueClick = $('#blue').css('background-color', '#000099');
//var yellowClick = $('#yellow').css('background-color', #cccc00)
//$('#red').on('click', function(evt){
//  redClick;
//})

//function redClick (){
  //this.style.background-color = red;
//}
  //if click != sequence array {
    //display game over
      //if game score !> high score { do nothing}
      //if game score > high score {
        //update high score, alert('Your new high score is ' + highScore!')
      //}
  //}
