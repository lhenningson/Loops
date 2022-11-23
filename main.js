let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.fill()