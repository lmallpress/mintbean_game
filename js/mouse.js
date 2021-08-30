var mouseX = 0;
var mouseY = 0;


//create functions and call them in the window.onload function section
function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();  //position of canvas on page
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

    paddleX = mouseX - PADDLE_WIDTH / 2; //subtracting half of the paddle with centers the paddle on the mouse
}

