'use strict';

const toLeftButton = document.querySelector(".toLeft");
const toRightButton = document.querySelector(".toRight");
var leftInput = document.getElementById("leftInput");
var rightInput = document.getElementById("rightInput");

function moveToRight (){
  if (leftInput.value !== ""){
    rightInput.value = leftInput.value;
    leftInput.value = "";
  }
}

function moveToLeft () {

  if (rightInput.value !== ""){
    
    leftInput.value = rightInput.value;
    rightInput.value ="";
  }
    
}

// añado los eventos 
toRightButton.addEventListener('click', moveToRight);
toLeftButton.addEventListener('click', moveToLeft);


