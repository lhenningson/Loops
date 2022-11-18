// JavaScript Code
let numheads = 0;
let numtails = 0;
let numflips = 0;

while (numheads < 100) {
    if (Math.random() < 0.5) {
        numheads++;
    } else {
        numtails++;
    }
    numflips++;
}

console.log("Number of Coin Flips: " + numflips);
console.log("Heads: " + numheads + " Tails: " + numtails);