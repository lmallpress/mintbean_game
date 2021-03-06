
var canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);
    canvas.addEventListener('mousemove', updateMousePos);

    ufoPic.onload = function () {
        ufoPicLoaded = true;
    }
    ufoPic.src = "images/ufo.png";

    brickReset();
    ufoReset(); //enabling this starts the ufo at the bottom of the bricks. Disabling starts ufo inside the bricks at 75
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

            } // end brick here
        } // end of for each brick
    } // end of for each row

} // end of drawBricks function



//background, ufo, brick colors, sizes
function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, '#7CFC00'); // clear screen

    if (showingWinScreen) {
        canvasContext.font = "30px Lato";
        canvasContext.fillStyle = '#800000';
        canvasContext.fillText("Click to Anywhere Continue", 250, 300);
        return;
    }


    //colorCircle(ufoX, ufoY, 10, '#800000'); // draw ufo
    if (ufoPicLoaded) {
        // canvasContext.drawImage(ufoPic,
        //   ufoX - ufoPic.width / 2, ufoY - ufoPic.height / 2);
        drawBitmapCenteredWithRotation(ufoPic, ufoX, ufoY, ufoAng);
    }

    colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE,
        PADDLE_WIDTH, PADDLE_THICKNESS, '#800000');

    drawBricks();

    canvasContext.font = "30px Lato";
    canvasContext.fillStyle = '#800000';
    canvasContext.fillText("Score: " + playerXScore, 300, 50);
}