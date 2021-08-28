const BRICK_W = 80;
const BRICK_H = 20;
const BRICK_GAP = 2;
const BRICK_COLS = 10;
const BRICK_ROWS = 14;
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;


function brickReset() {
    bricksLeft = 0;
    var i;
    for (i = 0; i < 3 * BRICK_COLS; i++) {
        brickGrid[i] = false;
    }
    for (; i < BRICK_COLS * BRICK_ROWS; i++) {
        brickGrid[i] = true;
        bricksLeft++;
    } // end of for each brick
} // end of brickReset function


function isBrickAtColRow(col, row) {
    if (col >= 0 && col < BRICK_COLS &&
        row >= 0 && row < BRICK_ROWS) {
        var brickIndexUnderCoord = rowColToArrayIndex(col, row);
        return brickGrid[brickIndexUnderCoord];
    } else {
        return false;
    }
}


function ballBrickHandling() {
    var ballBrickCol = Math.floor(ballX / BRICK_W);
    var ballBrickRow = Math.floor(ballY / BRICK_H);
    var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);


    //this makes brick disappear when ball makes contact
    if (ballBrickCol >= 0 && ballBrickCol < BRICK_COLS &&
        ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS) {

        if (isBrickAtColRow(ballBrickCol, ballBrickRow)) {
            brickGrid[brickIndexUnderBall] = false;
            bricksLeft--;
           
            var prevBallX = ballX - ballSpeedX;
            var prevBallY = ballY - ballSpeedY;
            var prevBrickCol = Math.floor(prevBallX / BRICK_W);
            var prevBrickRow = Math.floor(prevBallY / BRICK_H);

            var bothTestsFailed = true;

            if (prevBrickCol != ballBrickCol) {
                if (isBrickAtColRow(prevBrickCol, ballBrickRow) == false) {
                    ballSpeedX *= -1;
                    bothTestsFailed = false;
                }
            }
            if (prevBrickRow != ballBrickRow) {
                if (isBrickAtColRow(ballBrickCol, prevBrickRow) == false) {
                    ballSpeedY *= -1;
                    bothTestsFailed = false;
                }
            }

            if (bothTestsFailed) { // armpit case, prevents ball from going through
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }

        } // end of brick found
    } // end of valid col and row
} // end of ballBrickHandling function