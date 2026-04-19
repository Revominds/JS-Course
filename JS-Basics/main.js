//const shwAlert = alert("hello");
//console.log(shwAlert); // this creates a pop up w/ the text hello inside

const add = 2 + 2;
const minus = 12 - 2;
console.log("------ Math -------");
console.log("1. The total of 2 and 2 : ", add);
console.log("2. The total of 12 minus 2 : ", minus);

document.body.innerHTML = "Hello JavaScript Fam!"; //modifies the webpage

console.log("------ Exercise -------");
// alert("Good morning!"); //q1.
// alert("Good morning! Revominds"); //q2

let exAdd = 10 + 5;
console.log("The sum of 10 and 5 : ", exAdd); //q3.

let exMinus = 20 - 5;
console.log("The sum of 20 - 5 : ", exMinus); //q4

let compute = 2 + 3 - 5;
console.log("The sum of 2 + 3 - 5 : ", compute); //q5

console.log("------ Challenge -------");
//challenge 1

let shirt = 10;
let socks = 8;
let plates = 20;
let amount;

amount = shirt + socks + plates;
console.log("Total cost : $", amount);

//challenge 2

let balance = 100;
let lunch = 20;
let dinner = 50;
let income = 200;
let current;

current = balance - lunch - dinner + income;
console.log("Your current balance : $", current);
