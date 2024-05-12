// Automatic and dynamic canvas changing
// function setCanvasSize(width = window.innerWidth, height = window.innerHeight) {
//   const canvas = document.querySelector('canvas');
//   canvas.width = width;
//   canvas.height = height;
// }

// setTimeout(() => {
//   setCanvasSize();
// }, 500);

// setTimeout(() => {
//   setCanvasSize(500, 500);
// }, 3500);

// setTimeout(() => {
//   setCanvasSize(250, 100);
// }, 6500);

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillRect(100, 100, 50, 50);
ctx.fillRect(200, 200, 50, 50);
ctx.fillRect(300, 300, 50, 50);
