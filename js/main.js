'use strict';

// Defino variables generales, áreas y botones
const leftArea = document.querySelector(".leftArea");
const rightArea = document.querySelector(".rightArea");
const toLeftButton = document.querySelector(".toLeft");
const toRightButton = document.querySelector(".toRight");

// defino la variable del valor

const leftValue = leftArea.value;
const rightValue = rightArea.value;

// defino funciones

function moveToRight (){
    leftValue = rightValue;
}

function moveToLeft () {
    rightValue = leftValue; 
}

// añado los eventos 
toRightButton.addEventListener('click', moveToRight);
toLeftButton.addEventListener('click', moveToLeft);


