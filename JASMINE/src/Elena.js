function startApp() {
    'use strict';

    const toLeftButton = document.getElementById("toLeft");
    const toRightButton = document.getElementById("toRight");
    var leftInput = document.getElementById("leftInput");
    var rightInput = document.getElementById("rightInput");

    function moveToRight() {
        if (leftInput.value !== "") {
            rightInput.value = leftInput.value;
            leftInput.value = "";
        }
    }

    function moveToLeft() {
        if (rightInput.value !== "") {
            leftInput.value = rightInput.value;
            rightInput.value = "";
        }

    }

    toRightButton.addEventListener('click', moveToRight);
    toLeftButton.addEventListener('click', moveToLeft);


}

