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

// ***************************************

function calculateCartPrice(...result)
// ...result => is a rest operator. The rest operator (...) is used in function parameters to collect multiple arguments into a single array.
{
    return result
}
console.log(calculateCartPrice(100,200,300,400,500))


// how we pass object as argument  to function

const user = {
    username:"achyut kumar pathak",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price will be${anyobject.price}`)
}
// handleobject(user)
// another way of sending object to funtion
handleobject({
    username:"prem",
    price:199
})


const newArray = [100,200,300,400]
 
function returnsecondvalue(getarray){
    return getarray[2]
}
console.log(returnsecondvalue(newArray))
console.log(returnsecondvalue([100,200,300,400]))
