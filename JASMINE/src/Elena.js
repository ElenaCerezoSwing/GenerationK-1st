function startApp() {
    'use strict';

    const toLeftButton = document.getElementById("toLeft");
    if (toLeftButton) {
        toLeftButton.addEventListener('click', moveToLeft, false);
    }
    console.log(document.getElementById("toLeft"));
    const toRightButton = document.getElementById("toRight");
    if (toRightButton) {
        toRightButton.addEventListener('click', moveToRight, false);
    }

    if (document.getElementById("leftInput") !== null) {
        var leftInput = document.getElementById("leftInput");
    }
    console.log(leftInput)

    if (document.getElementById("rightInput") !== null) {
        var rightInput = document.getElementById("rightInput");
    }


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

    // toRightButton.addEventListener('click', moveToRight);
    // toLeftButton.addEventListener('click', moveToLeft);


}

