//global variables that can be called anywhere
var ballX = 75; //position of where ball starts
var ballY = 75;  //position of where ball starts
var ballSpeedX = 5;
var ballSpeedY = 7;


function ballReset() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}


//ball movement business
function ballMove() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX < 0 && ballSpeedX < 0.0) { //left
        ballSpeedX *= -1;
    }
    if (ballX > canvas.width && ballSpeedX > 0.0) { // right
        ballSpeedX *= -1;
    }
    if (ballY < 0 && ballSpeedY < 0.0) { // top
        ballSpeedY *= -1;
    }
    if (ballY > canvas.height) { // bottom
        ballReset();
        brickReset();
    }
}
