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