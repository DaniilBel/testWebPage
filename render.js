let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let circles = [];

for (let i = 1; i <= 5; i++) {
    let circle = new Path2D();
    circle.arc(35*i, 50, 15, 0, 2*Math.PI);
    circles.push(circle);
    ctx.fillStyle = 'rgb(255, 165, 0)';
    ctx.fill(circle);
}


