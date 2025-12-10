let score = "33abc"
console.log(typeof score)
console.log(typeof (score))

let scoreinNumber = Number(score)
console.log(typeof scoreinNumber)
console.log(typeof (scoreinNumber))
console.log( scoreinNumber)

/*
conversion of string into number 
"33" => 33
"33abc"=> NaN
TRUE => 1, FALSE => 0
*/

// let isLoggedin = "achyut"  => it will answertrue
let isLoggedin = "" // it will answer false
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn);

let someNumber = 22

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log( typeof stringNumber)

// ************Operations************************

let value = 3
let negvalue = -value
// console.log(negvalue);
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)
// console.log(2/2)

let str1 = "hello"
let str2 = " baby"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2) // =>12
console.log(1+"2")// => 12
console.log("1"+2+2)// =>122
console.log(1+2+"2") // =>32

console.log(true) // true
console.log(+true)// 1
// console.log(true+)//  error
console.log(+"") // 0

let num1 , num2 , num3
 num1 = num2 = num3= 2+2
  let gameCounter = 100
  ++gameCounter; 
  gameCounter++;
  console.log(gameCounter)

  let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"