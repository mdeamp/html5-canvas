const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

// Rect
ctx.fillStyle = 'rgba(100, 0, 0, 0.7)';
ctx.fillRect(200, 200, 100, 100);

// Line
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(300, 50);
ctx.lineTo(400, 200);
ctx.strokeStyle = '#757575';
ctx.stroke();

// Arch or Circle
ctx.beginPath();
ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = 'rgba(0, 100, 0, 0.7)';
ctx.stroke();

// Skipping the idea of For-Loops, already understand it.
