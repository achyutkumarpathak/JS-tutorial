//global scope
let a =300

if(true){
    let a = 10
    const b=20// inside the if condition => block scope
    console.log("inner:-",a)
}
console.log(a)
// console.log(b)
// console.log(c) // here c is accessible outside the scope which will create problem so that why we don't use var

// the scope in terminal thorugh node is different and in console is different