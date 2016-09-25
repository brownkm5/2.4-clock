(function(){
"use strict";

function logCurrentTime(){
var day = new Date();
var hours = day.getHours ();
if (hours>12) {
  hours=hours-12
}
var minutes = day.getMinutes ();
var seconds = day.getSeconds ();

var body = document.getElementById(body);

var h = document.getElementById("hours").textContent = ("0" + hours).slice(-2);
var m = document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
var s = document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);

var secondbar = (seconds/60)*45;
document.querySelector('.secondbar').style.width = secondbar.toString() + '%';

var newHex = '#' + h + m + s;
previousHex = newHex
// i looked up how to add a radial-gradient but i couldnt get it to work, i think the syntax is wrong
// var radialValue = 'radial-gradient(' circle' + ',farthest-corner,' + 'previousHex,' + 'newHex ')';
// body.style.background = radialValue;
}
window.setInterval(logCurrentTime, 1000);
var previousHex = ' ';

// i tried to make the hover work with this but i think my syntax is wrong with this also. im looking on mdn and stackoverflow but i couldnt find anything to fix it
// function initHide(){
//   var clock= document.getElementById('clock');
//   clock.addEventListener('mouseover', function(event)){
//     event.target.style.display = 'none';
//   }
// }





}());
