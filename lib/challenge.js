/*
 * Complete the prompts listed in the Readme below
 */
console.log("hello world");

//prompt 1
// function sayHello() {
//   console.log("hello");
// }

// sayHello();

//prompt 2
// function sayWorld() {
//   console.log("world");
// }

// sayWorld();

//prompt 3
// let nameOne = "billy";
// function logName(name) {
//   console.log(name);
// }

// logName(nameOne);


//prompt4
// let numToSquare = 4;
// function squareNum(num) {
//   console.log(num ** 2);
// }

// squareNum(numToSquare);

// prompt 5

// let fiveToSquare = 5;

// function squareIt(num1) {
//   let squared = num1 * num1;
//   return squared;

// }
// console.log(squareIt(fiveToSquare));


// prompt6

// function sumThree(num1, num2, num3) {
//   if (arguments.length === 0) {
//     return 10;
//   } else {
//     return num1 + num2 + num3;
//   }

// }

// let crazy = sumThree(1, 2, 3);

// console.log(crazy);

// prompt 7

let num = '7';

function zeroPad(num) {
  let newString = num.padEnd(6, '0');
  return parseInt(newString);
}

console.log(zeroPad(num));