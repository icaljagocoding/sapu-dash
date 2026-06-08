const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let fishY = 300;
let velocity = 0;
let gravity = 0.35;
let jump = -7;

function drawFish() {
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.ellipse(80, fishY, 28, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(52, fishY);
  ctx.lineTo(32, fishY - 12);
  ctx.lineTo(32, fishY + 12);
  ctx.fill();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  velocity += gravity;
  fishY += velocity;

  drawFish();

  requestAnimationFrame(gameLoop);
}

document.addEventListener("click", () => {
  velocity = jump;
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    velocity = jump;
  }
});

gameLoop();
