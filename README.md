# INTRODUCTION TO JAVASCRIPT

## Objectives

| No  | Basic Features                | Advanced Features |
| --- | ----------------------------- | ----------------- |
| 1   | JavaScript Basics             | Modules           |
| 2   | Numbers & Math                | Testing           |
| 3   | Strings                       | Object-Oriented   |
| 4   | Variables                     | Backend           |
| 5   | Booleans, If-Statements       | Callbacks         |
| 6   | Functions                     | Promises          |
| 7   | Objects & DOM                 | Async/Await       |
| 8   | Arrays & Loops                | -                 |
| 9   | JS w/ other Technologies such | -                 |
|     | as HTML & CSS                 |                   |

## JAVASCRIPT BASICS

### What is JavaScript?

`JavaScript` is a technology that we use to `create dynamic & interactive websites.` The three technologies we used to create websites

- HTML. This creates the content of the website
- CSS. Changes the appearance of the website
- JavaScript. Makes the website interactive

```
   alert('hello'); // this creates a pop up w/ the text hello inside

   console.log("------ Math -------\n");

   const add = 2 + 2;
   const minus = 12 - 2;
   console.log("1. The total of 2 and 2 : ", add);
   console.log("2. The total of 12 minus 2 : ", minus);

   document.body.innerHTML = "Hello JavaScript Fam!"; //modifies the webpage
```

#### Lesson 1 Exercises - JS Basics

1. Use alert() to display 'Good morning!' in a popup.
2. Display your name in a popup.
3. Using math, calculate 10 + 5 in the console.
4. Calculate 20 - 5 in the console.
5. Calculate 2 + 2 - 5 in the console.

```
  alert('Good morning!'); //q1.
  alert('Good morning! Revominds'); //q2

  var add = 10 + 5;
  console.log(add); //q3.

  var minus = 20 - 5;
  console.log(minus); //q4

  var compute = 2 + 2 - 5;
  console.log(compute); //q5
```

#### Challenge Yourself

1. You ordered a T-shirt for $10, socks for $8, and dinner plates for $20. Use JavaScript to calculate the total cost of your order.
2. You bank account has $100, you spend $20 on lunch, $50 on dinner, and earn $200 from ur job. Calculate how much money you have.
3. Use `document.body.innerHTML` to make the web page blank.

```
   //challenge 1

   let shirt = 10;
   let socks = 8;
   let plates = 20;
   let amount;

   amount = shirt + socks + plates;
   console.log(amount);

   //challenge 2

   let balance = 100;
   let lunch = 20;
   let dinner = 50;
   let income = 200;
   const current;

   current = (balance - lunch - dinner) + income;
   console.log(current);

   //challenge 3

   document.body.innerHTML = "";

```

## NUMBERS & MATH

### Math Operators

1. Addition (+)
2. Subtraction (-)
3. Multiplication (\*)
4. Division (/)

```
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


```

### The Order of Operations

- Addition, subtracting, multiplying, and dividing are called operations.
- Multiplication and division are done first

```
   1 + 1 * 3 = 4
```

## NOTES

- A **code** is a set of `instructions` given to a computer. The languages used to write code are termed as **Programming languages** and there are many of them out there.
- **Syntax** are the rules we have to follow when using a `programming language`.
