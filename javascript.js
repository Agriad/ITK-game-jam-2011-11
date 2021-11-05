var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var xMousePosition = 0;
var yMousePosition = 0;
var clickAction = false;

canvas.addEventListener("mousemove", findCursor, false);
canvas.addEventListener("click", clickHandler, false);

function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.fillStyle = "#b1b1b1";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawSquare(x, y) {
    ctx.beginPath();
    ctx.rect(x, y, 0, 50, 50);
    ctx.fillStyle = "#1F85DE";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawSquareAnimation() {
    if (clickAction) {
        for (let index = 0; index < 10; index++) {
            drawBackground();
            // drawCircle();
            drawSquare(xMousePosition, yMousePosition + index);
        }
    
        for (let index = 10; index > 0; index++) {
            drawBackground();
            // drawCircle();
            drawSquare(xMousePosition, yMousePosition + index);
        }
        
        clickAction = false;
    }
}

function findCursor(event) {
    xMousePosition = event.pageX;
    yMousePosition = event.pageY;
}

function clickHandler(event) {
    clickAction = true;
}

function test() {
    drawBackground();
    drawCircle(xMousePosition, yMousePosition);
    drawSquareAnimation();
}

setInterval(test, 100);
