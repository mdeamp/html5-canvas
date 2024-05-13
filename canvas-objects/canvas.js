const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector('canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgba(0, 100, 0, 0.7)';
    ctx.stroke();
  }

  update() {
    if (this.x - this.radius <= 0 || this.x + this.radius >= width) this.dx = -this.dx;

    if (this.y - this.radius <= 0 || this.y + this.radius >= height) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Single circle

// const circle = new Circle(x, y, 2, 2, 30);

// Multiple circles
const arr = [];
for (let i = 0; i < 100; i++) {
  const radius = 30;
  const diameter = radius * 2;
  const x = Math.random() * (width - diameter) + radius;
  const y = Math.random() * (height - diameter) + radius;
  const speed = (Math.random() - 0.5) * 2;
  arr.push(new Circle(x, y, speed, speed, 30));
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, width, height);

  arr.forEach((circle) => {
    circle.update();
  });
}

animate();
