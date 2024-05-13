const COLORS = ['#ff2200', '#22ff00', '#0022ff'];
const MAX_RADIUS = 40;
// const MIN_RADIUS = 3;

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const mouse = { x: undefined, y: undefined };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;

    const color = Math.floor(Math.random() * COLORS.length);
    this.color = COLORS[color];
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  interact() {}

  update() {
    this.interact();

    const mouseOnX = mouse.x - this.x < 50 && mouse.x - this.x > -50;
    const mouseOnY = mouse.y - this.y < 50 && mouse.y - this.y > -50;
    if (mouseOnX && mouseOnY) {
      if (this.radius < MAX_RADIUS) this.radius += 1;
    } else {
      if (this.radius > this.minRadius) this.radius -= 1;
    }

    // TODO: Fix stuck on borders
    // if (mouseOnX && mouseOnY) console.log(this.radius, this.x, this.y);

    if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) this.dx = -this.dx;

    if (this.y - this.radius <= 0 || this.y + this.radius >= window.innerHeight) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let arr = [];
function init() {
  arr = [];
  for (let i = 0; i < 800; i++) {
    const radius = Math.floor(Math.random() * 3 + 1);
    const diameter = radius * 2;
    const x = Math.random() * (window.innerWidth - diameter) + radius;
    const y = Math.random() * (window.innerHeight - diameter) + radius;
    const speed = (Math.random() - 0.5) * 2;
    arr.push(new Circle(x, y, speed, speed, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  arr.forEach((circle) => {
    circle.update();
  });
}

init();
animate();
