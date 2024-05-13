const GRAVITY = 1;
const FRICTION = 0.5;
const COLORS = ['#A5D6A7', '#80CBC4', '#80DEEA'];

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('click', function () {
  init();
});

window.addEventListener('resize', function () {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

  init();
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getColor() {
  const color = getRandom(0, COLORS.length - 1);
  return COLORS[color];
}

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (this.y + this.radius + this.dy >= canvas.height) {
      // TODO: This seems veeeery weird, when looking at the results.
      this.dy = -this.dy * FRICTION;
    } else {
      this.dy += GRAVITY;
    }

    if (this.x + this.radius + this.dx >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let ballList;
function init() {
  ballList = [];
  for (let i = 0; i < 1; i++) {
    const radius = getRandom(10, 30);
    const x = getRandom(radius, canvas.width - radius);
    const y = getRandom(radius, canvas.height - radius);
    const dx = getRandom(-2, 2);
    const dy = getRandom(-2, 2);
    const ball = new Ball(x, y, dx, dy, radius, getColor());
    ballList.push(ball);
  }
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText('canvas-gravity', mouse.x, mouse.y);

  ballList.forEach((ball) => {
    ball.update();
  });
}

init();
animate();
