/*ways to create object=> 
    1)literals
    2)constructor
*/
// literals se singleton nhi banta h
//constructor se singleton banta h
// *************object literal**********
const mySym = Symbol("key1") // ek symbol ko lena hai

const jsuser = {
    name : "achyut",
    "fullname": "achyut kumar pathak",// this is cannot acces by dot operator that's why it is not a good practise to use
    [mySym]: "myKey1",// and usko key-value ki tarah use krna h
    // [ ] => represent symbol
    age:18,
    location : "jamshedpur",
    email: "achyut@gmail.com",
    isLoggedIn : false,
    LastLogInDay : ["monday","thrusday","saturday"]
}
console.log(jsuser.name) // this is first way to access the element but is not a good pratices.
console.log(jsuser["name"])
console.log(jsuser[mySym])

jsuser.email = "pathak@gmail.com" // email get override 
// Object.freeze(jsuser)// this freeze function restrict the object modification
jsuser.email = "kumar@gmail.com"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user")
}
console.log(jsuser.greeting()); // it will print "hello js user"
console.log(jsuser.greeting) // it will not execute function only give reference 

jsuser.greetingtwo = function(){
    console.log(`hello jsuser,${this.name}`)// string interpolation
}
console.log(jsuser.greetingtwo())