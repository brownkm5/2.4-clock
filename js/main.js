(function(){
"use strict";
var clock = document.getElementById('clock');
var background = document.getElementById('background');
var hoursContainer = document.getElementById("hours")
var minutesContainer = document.getElementById("minutes")
var secondsContainer = document.getElementById("seconds")

var isHovering=false;

function logCurrentTime(){
var day = new Date();
var hours = day.getHours ();
// if (hours>12) {
//   hours=hours-12
// }
var minutes = day.getMinutes ();
var seconds = day.getSeconds ();

var currentRed = ('0' + hours.toString(16)).slice(-2);
var currentGreen = ('0' + minutes.toString(16)).slice(-2);
var currentBlue = ('0' + seconds.toString(16)).slice(-2);
var colorCode= '#' + currentRed + currentGreen + currentBlue;
// var newHex = '#' + h + m + s;
// previousHex = newHex
// console.log(newHex);

//set the background based on hours minutes seconds
background.style.backgroundColor = colorCode;
//update the clock display
if (isHovering){
  hoursContainer.textContent = currentRed;
  minutesContainer.textContent =currentGreen;
  secondsContainer.textContent =currentBlue;
}
else {
hoursContainer.textContent = ('0' + hours).slice(-2);
minutesContainer.textContent = ('0' + minutes).slice(-2);
secondsContainer.textContent = ('0' + seconds).slice(-2);
}


var secondbar = (seconds/60)*45;
document.querySelector('.secondbar').style.width = secondbar.toString() + '%';


}
window.setInterval(logCurrentTime, 100);
// var previousHex = ' ';

function mouseOverHandler(){
  isHovering = true;
}
function mouseOutHandler(){
  isHovering = false;
}
clock.addEventListener('mouseover', mouseOverHandler);
clock.addEventListener('mouseout', mouseOutHandler);


}());
