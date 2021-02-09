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

// let num = '7';

// function zeroPad(num) {
//   let newString = num.padEnd(6, '0');
//   return parseInt(newString);
// }

// console.log(zeroPad(num));

// prompt 8

// function returnFunction() {
//   let nestedFunc = function() {
//     console.log('hello world');
//   }
//   return nestedFunc
// }

// console.log(returnFunction());

// prompt 9

// let goodString = "whats good";
// let string2 = "not much";

// function stringMod(string) {
//   let moddedString = goodString.padEnd(20, '0');
// }

// stringMod(string2);
// console.log(goodString);

//prompt 10

// let newArr = [1, 2, 3, 4, 5];

// function shiftOff(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(shiftOff(newArr));

// prompt 11

let thatArray = [1, 2, 3, 4, 5];

function flabber(arr) {
  arr.push("flabbergasted");
  return arr;
}

console.log(flabber(thatArray));
