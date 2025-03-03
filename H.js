document.querySelector('.game_audio').play();
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

// Player state
const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    speed: 5
};

const blocks = [];
let score = 0;
let gameOver = false;

// Controls
let keys = {};
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

function update() {
    if (gameOver) return;

    // Move player
    if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < canvas.width - player.width) player.x += player.speed;

    // Add new blocks
    if (Math.random() < 0.02) {
        blocks.push({
            x: Math.random() * (canvas.width - 30),
            y: -30,
            width: 30,
            height: 30,
            speed: 2 + score * 0.05 // Blocks speed up over time
        });
    }

    // Move blocks and check collisions
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].y += blocks[i].speed;

        // Collision detection
        if (
            blocks[i].x < player.x + player.width &&
            blocks[i].x + blocks[i].width > player.x &&
            blocks[i].y < player.y + player.height &&
            blocks[i].y + blocks[i].height > player.y
        ) {
            gameOver = true;
            alert("Game Over! Your score: " + score);
            document.location.reload();
        }

        // Remove blocks that go off screen
        if (blocks[i].y > canvas.height) {
            blocks.splice(i, 1);
            score++;
            document.getElementById("score").innerText = score;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw blocks
    ctx.fillStyle = "red";
    for (let block of blocks) {
        ctx.fillRect(block.x, block.y, block.width, block.height);
    }
}

function gameLoop() {
    update();
    draw();
    if (!gameOver) requestAnimationFrame(gameLoop);
}

gameLoop();
