var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var xMousePosition = 0;
var yMousePosition = 0;

canvas.addEventListener("mousemove", findCursor, false);

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

function findCursor(event) {
    xMousePosition = event.pageX;
    yMousePosition = event.pageY;
}

function test() {
    drawBackground();
    drawCircle(xMousePosition, yMousePosition);
}

setInterval(test, 100);
