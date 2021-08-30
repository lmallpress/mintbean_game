
var playerXScore = 0;
const WINNING_SCORE = 5;

var showingWinScreen = false;


const BRICK_W = 80;
const BRICK_H = 20;
const BRICK_GAP = 2;
const BRICK_COLS = 10;
const BRICK_ROWS = 14;

var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;


function brickReset() {
    if (playerXScore = WINNING_SCORE) {
        playerXScore = 0;
        showingWinScreen = true;
    }

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


function ufoBrickHandling() {
    var ufoBrickCol = Math.floor(ufoX / BRICK_W);
    var ufoBrickRow = Math.floor(ufoY / BRICK_H);
    var brickIndexUnderUfo = rowColToArrayIndex(ufoBrickCol, ufoBrickRow);


    //this makes brick disappear when ufo makes contact
    if (ufoBrickCol >= 0 && ufoBrickCol < BRICK_COLS &&
        ufoBrickRow >= 0 && ufoBrickRow < BRICK_ROWS) {

        if (isBrickAtColRow(ufoBrickCol, ufoBrickRow)) {
            brickGrid[brickIndexUnderUfo] = false;
            bricksLeft--;

            var prevUfoX = ufoX - ufoSpeedX;
            var prevUfoY = ufoY - ufoSpeedY;
            var prevBrickCol = Math.floor(prevUfoX / BRICK_W);
            var prevBrickRow = Math.floor(prevUfoY / BRICK_H);

            var bothTestsFailed = true;

            if (prevBrickCol != ufoBrickCol) {
                if (isBrickAtColRow(prevBrickCol, ufoBrickRow) == false) {
                    ufoSpeedX *= -1;
                    bothTestsFailed = false;
                    playerXScore++;
                    //ufoReset();

                }
            }
            if (prevBrickRow != ufoBrickRow) {
                if (isBrickAtColRow(ufoBrickCol, prevBrickRow) == false) {
                    ufoSpeedY *= -1;
                    bothTestsFailed = false;
                    playerXScore++; //must be before reset
                    ufoReset();
                }
            }

            if (bothTestsFailed) { // armpit case, prevents ufo from going through
                ufoSpeedX *= -1;
                ufoSpeedY *= -1;
            }// end of brick found
        } // end of valid col and row

    }
} // end of ufoBrickHandling function