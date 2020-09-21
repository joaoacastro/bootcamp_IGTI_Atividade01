window.addEventListener('load',start);

var red = null;
var green = null;
var blue = null;
var rValue = null;
var gValue = null;
var bValue = null;
var divColor = null;

function start(){
  red = document.querySelector('#inputRangeRed');
  green = document.querySelector('#inputRangeGreen');
  blue = document.querySelector('#inputRangeBlue');
  rValue = document.querySelector('#spanRed');
  gValue = document.querySelector('#spanGreen');
  bValue = document.querySelector('#spanBlue')
  addEvents();
}

function addEvents(){
  red.addEventListener('change', changeRed);
  green.addEventListener('change', changeGreen);
  blue.addEventListener('change', changeBlue)
}

function changeRed(event){
  rValue.value = event.target.value;
  changeColor();
}

function changeGreen(event){
  gValue.value = event.target.value;
  changeColor();
}

function changeBlue(event){
  bValue.value = event.target.value;
  changeColor();
}
function changeColor(){
  r = rValue.value;
  g = gValue.value;
  b = bValue.value;
  divColor = document.querySelector('#color');
  divColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
}