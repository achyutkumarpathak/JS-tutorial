// Dates => it starts from 1 january 1970
// let myDates = new Date()
// console.log(myDates)
// console.log(myDates.toString())
// console.log(myDates.toDateString())
// console.log(myDates.toISOString())
// console.log(myDates.toJSON())
// console.log(myDates.toLocaleDateString())
// console.log(myDates.toLocaleString())
// console.log(typeof myDates) // object
// let myCreatedDate = new Date(2025,11,11) // IN 
// javascript month will start from 0 and end at 11

// console.log(myCreatedDate.toDateString());
// let myCreatedDate02 = new Date(2025,11,11,5,4)
// console.log(myCreatedDate02.toLocaleString());

// let myCreateDate03 = new Date("2025-12-11")  YYYY-MM-DD

 let myCreateDate03 = new Date("12-11-2025")  //MM-DD-YYYY => it is followed in india

// console.log(myCreateDate03.toLocaleString())
let myTimeStamp = Date.now() // from 1970 which is the default time => answer will be in milliseconds 

// console.log(myTimeStamp)
// console.log(myCreateDate03.getTime());
console.log(Math.floor(Date.now()/1000)); // it will give time in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())// take 0 as Jan and 11 as december
console.log(newDate.getDate())
console.log(newDate.getDay())// here 1 represent as mon and its output will show 4 which means thrusday
newDate.toLocaleString('default',{
    weekday: "long"
})


