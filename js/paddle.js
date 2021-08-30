const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10; //paddle is horizontal and at bottom (10,100)
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;


function ballPaddleHandling() {
    var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;
    if (ballY > paddleTopEdgeY && // below the top of paddle
        ballY < paddleBottomEdgeY && // above bottom of paddle
        ballX > paddleLeftEdgeX && // right of the left side of paddle
        ballX < paddleRightEdgeX) { // left of the left side of paddle

        ballSpeedY *= -1; //sends ball back to where it came from

        var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2; //how far the ball is from the center of the paddle
        var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
        ballSpeedX = ballDistFromPaddleCenterX * 0.35;  //value b/n 0 - 1 to decrease the severity of ball speed

        if (bricksLeft == 0) {
            brickReset();
        } // out of bricks
    } // ball center inside paddle
} // end of ballPaddleHandling


function moveAll() {
    ballMove();

    ballBrickHandling();

    ballPaddleHandling();
}

function rowColToArrayIndex(col, row) {
    return col + BRICK_COLS * row;
}