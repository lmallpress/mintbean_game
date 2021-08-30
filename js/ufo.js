//global variables that can be called anywhere

var ufoPic = document.createElement("img");
var ufoPicLoaded = false;


var ufoX = 75; //position of where ufo starts
var ufoY = 75;  //position of where ufo starts
var ufoSpeedX = 5;
var ufoSpeedY = 7;


function ufoReset() {
    ufoX = canvas.width / 2;
    ufoY = canvas.height / 2;
}


//ufo movement business
function ufoMove() {
    ufoX += ufoSpeedX;
    ufoY += ufoSpeedY;

    if (ufoX < 0 && ufoSpeedX < 0.0) { //left
        ufoSpeedX *= -1;
    }
    if (ufoX > canvas.width && ufoSpeedX > 0.0) { // right
        ufoSpeedX *= -1;
    }
    if (ufoY < 0 && ufoSpeedY < 0.0) { // top
        ufoSpeedY *= -1;
    }
    if (ufoY > canvas.height) { // bottom
        ufoReset();
        brickReset();
    }
}