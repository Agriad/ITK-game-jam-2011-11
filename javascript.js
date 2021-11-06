var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var xMousePosition = 0;
var yMousePosition = 0;
var running = true;
var gameOver = false;
var start = false;

var playerBullet = [];
var enemyBullet = [];
var enemies = [[100, 0]];

canvas.addEventListener("mousemove", findCursor, false);
canvas.addEventListener("click", startGame, false);

function addEnemyBullet() {
    for (let index = 0; index < enemies.length; index++) {
        enemyBullet.unshift([enemies[0], enemies[1], "#eb341e"]);
    }
}

function addPlayerBullet() {
    playerBullet.unshift([xMousePosition, yMousePosition, "#313edd"]);
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

function drawEnemy(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#eb8c1e";
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

function findCursor(event) {
    xMousePosition = event.pageX;
    yMousePosition = event.pageY;
}

function handleBullet() {
    // handle enemies bullet

    // if (playerBullet[index][1] + 15 <= canvas.clientHeight) {
    //     playerBullet.pop();
    // } else {
    //     playerBullet[index] = [
    //         playerBullet[index][0],
    //         playerBullet[index][1] + 15,
    //         playerBullet[index][2],
    //     ];
    // }

    // handle player bullet
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

function handleEnemies() {
    for (let index = 0; index < enemies.length; index++) {
        drawEnemy(enemies[index][0], enemies[index][1]);

        if (enemies[index][1] + 5 >= canvas.clientHeight) {
            enemies.pop();
        } else {
            enemies[index][1] = enemies[index][1] + 5;
        }
    }
}

function renderScreen() {
    drawBackground();
    drawPlayer(xMousePosition, yMousePosition);
    handleBullet();
    handleEnemies();
}

function startGame() {
    console.log("game start");
}

setInterval(renderScreen, 100);
setInterval(addPlayerBullet, 250);
