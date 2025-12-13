function sayMyName(){
    
    console.log("A")
    console.log("c")
    console.log("h")
    console.log("y")
    console.log("u")
    console.log("t")
}
sayMyName // => references
sayMyName() // => function execution

function addTwoNumber(number1 , number2){
    console.log(number1 + number2)
}
addTwoNumber(3,4) // 7
addTwoNumber(3,"5") // 35
addTwoNumber("3",5) //35
addTwoNumber(3,null) // null

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// } it is printing result not returning

function addTwoNumber(number1 , number2){
//    let result = number1+number2
//    return result
return number1+number2
   
   // it is returning funtion value
}

const result = addTwoNumber(3,6)
console.log(result)

function loginusermessage(username){
    return `${username} just logged in`
}
console.log(loginusermessage("Achyut kumar pathak")) // here name will print
console.log(loginusermessage()) // undefined just logged in 

function loginusermessage(username="pathak"){// agar user name nhi bhejta h toh default me "pathak" print hoga and agr bhejta h toh "pathak" ko replace kr dega
    if(username=== undefined) // if(!username) 
    {
        console.log("please enter username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginusermessage()) 
