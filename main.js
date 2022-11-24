let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let htmlimg = document.getElementById("html-logo")
ctx.drawImage(htmlimg, 50, 50, 300, 300);
