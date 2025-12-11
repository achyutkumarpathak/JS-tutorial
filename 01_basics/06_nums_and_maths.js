const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance) 

// console.log(balance.toString().length)
// console.log(balance.toString())
// console.log(balance.toFixed(2)) // precise value deta hai like 100.00=> balance = 100 hai na esliye and 2 diye h esliye decimal ke baad "00" hai 

const otherNumber = 123.45
// console.log(otherNumber.toPrecision(4))

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))

// +++++++++++++++++++++MATHS++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));  // 3
// console.log(Math.abs(3));  // 3
// console.log(Math.round(4.4)) // 4
// console.log(Math.round(4.7)) // 5
// console.log(Math.ceil(4.5)) // it will take the highest bound
// console.log(Math.floor(4.5)) // it will take the lowest bound
// console.log(Math.min(1,2,3,4,5)) // minimum element will be=> 1
// console.log(Math.max(1,2,3,4,5))  // maximum element will be => 5

console.log(Math.random()) // random will give number between 0 and 1
console.log((Math.random()*10)+1) // by adding one we ensure that the number will never get 0
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random())*(max-min+1)+min)