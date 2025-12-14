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


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){// In this type we can decalare function name before executing
    return num + 1
}



addTwo(5)// here it give an error showing that function is accessing without instiliation bcs we made a funciootn and store in a variable
const addTwo = function(num){
    return num + 2
}