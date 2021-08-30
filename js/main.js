
var canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);

    canvas.addEventListener('mousemove', updateMousePos);

    brickReset();
    ballReset(); //enabling this starts the ball at the bottom of the bricks. Disabling starts ball inside the bricks at 75
}

function updateAll() {
    moveAll();
    drawAll();
}


function drawBricks() {

    for (var eachRow = 0; eachRow < BRICK_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < BRICK_COLS; eachCol++) {

            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            if (brickGrid[arrayIndex]) {
                colorRect(BRICK_W * eachCol, BRICK_H * eachRow,
                    BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP, '#e67e00');
            } // end of is this brick here
        } // end of for each brick
    } // end of for each row

} // end of drawBricks function



//background, ball, brick colors, sizes
function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, '#7CFC00'); // clear screen

    colorCircle(ballX, ballY, 10, '#800000'); // draw ball

    colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE,
        PADDLE_WIDTH, PADDLE_THICKNESS, '#4B0082');

    drawBricks();
}