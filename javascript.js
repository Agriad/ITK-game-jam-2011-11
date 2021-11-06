var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var xMousePosition = 0;
var yMousePosition = 0;
var clickAction = false;

var playerBullet = [];

canvas.addEventListener("mousemove", findCursor, false);
canvas.addEventListener("click", clickHandler, false);

function addPlayerBullet() {
    playerBullet.unshift([xMousePosition, yMousePosition, "#ffffff"]);
}

function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.fillStyle = "#b1b1b1";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawBullet(x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, 8, 16);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawPlayer(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function handleBullet() {
    // handle player bullet
    console.log(yMousePosition);

    for (let index = 0; index < playerBullet.length; index++) {
        drawBullet(
            playerBullet[index][0],
            playerBullet[index][1],
            playerBullet[index][2]
        );

        if (playerBullet[index][1] - 15 <= 0) {
            playerBullet.pop();
        } else {
            playerBullet[index] = [
                playerBullet[index][0],
                playerBullet[index][1] - 15,
                playerBullet[index][2],
            ];
        }
    }
}

function findCursor(event) {
    xMousePosition = event.pageX;
    yMousePosition = event.pageY;
}

function clickHandler(event) {
    clickAction = true;
}

function renderScreen() {
    drawBackground();
    drawPlayer(xMousePosition, yMousePosition);
    handleBullet();
}

setInterval(renderScreen, 100);
setInterval(addPlayerBullet, 250);
