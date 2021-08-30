const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10; //paddle is horizontal and at bottom (10,100)
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;


function ufoPaddleHandling() {
    var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;
    if (ufoY > paddleTopEdgeY && // below the top of paddle
        ufoY < paddleBottomEdgeY && // above bottom of paddle
        ufoX > paddleLeftEdgeX && // right of the left side of paddle
        ufoX < paddleRightEdgeX) { // left of the left side of paddle

        ufoSpeedY *= -1; //sends ufo back to where it came from

        var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2; //how far the ufo is from the center of the paddle
        var ufoDistFromPaddleCenterX = ufoX - centerOfPaddleX;
        ufoSpeedX = ufoDistFromPaddleCenterX * 0.35;  //value b/n 0 - 1 to decrease the severity of ufo speed

        if (bricksLeft == 0) {
            brickReset();
        } // out of bricks
    } // ufo center inside paddle
} // end of ufoPaddleHandling


function moveAll() {
    ufoMove();

    ufoBrickHandling();

    ufoPaddleHandling();
}

function rowColToArrayIndex(col, row) {
    return col + BRICK_COLS * row;
}