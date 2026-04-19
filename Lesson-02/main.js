let addition = 8 + 6;
let subtraction = 8 - 6;
let multiply = 8 * 6;
let divide = 8 / 6;

console.log("-------- Mathematics -------");
console.log("1. The sum of 8 + 6 : ", addition);
console.log("2. The sum of 8 - 6 : ", subtraction);
console.log("3. The sum of 8 * 6 : ", multiply);
console.log("4. The sum of 8 / 6 : ", divide);

//calculating cost of product
let socks = 10.9;
let skQty = 2;
let skPrice;

//basket ball
let bb = 20.95;
let shipping = 4.99;
let totalAmt;

skPrice = socks * skQty;
totalAmt = socks * skQty + (bb + shipping);
console.log("---------- Cost of Products ----------");
console.log("The total cost of socks : $", skPrice.toFixed(2));
console.log("The total cost : $", totalAmt.toFixed(2));
