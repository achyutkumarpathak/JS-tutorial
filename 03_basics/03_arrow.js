const user = {
    username:"achyut",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`)
        console.log(this)
//         {
//              username: 'achyut',
//              price: 999,
//              welcomeMessage: [Function: welcomeMessage]
// }
// prem vidya sagar , welcome to our website
// {
//      username: 'prem vidya sagar',
//      price: 999,
//      welcomeMessage: [Function: welcomeMessage]
// }
        // this refer to the username which is present in variable user scope context or refer to current context
    }
}
// user.welcomeMessage()
// user.username = "prem vidya sagar"
// user.welcomeMessage()
console.log(this)  // this will print {}

// Browser ke andar global object (this) ek window object hai. But In node it is a empty object
// "this" work only in objects not in functions

// function samosa(){
//      let username = "achyut"
//     console.log(this.username) // => undefined
// }
// samosa()

// const samosa = function(){
//     let username = "achyut"
//     console.log(this.username)
// }
const samosa = () => { // arrow function
    let username = "achyut"
    console.log(this.username) // undefined
    console.log(this) // {}
}
samosa()


// *********************Arrow Functions*****************
// syntax :-- () => {}
    // jab {} use krnege tab return keyword likha hota h but jab () use krgne tab return nhi likhna hota h
    // const addTwo = (num1 , num2) => {
    //         return num1+num2
    // }

    // const addTwo = (num1 , num2) => num1+num2
  // this is called implict return (bina return likhe wo samjh jayega ki return kiya gya h)
  
  
//   const addTwo = (num1 , num2) => (num1+num2)
//  const addTwo = (num1 , num2) => ({username:"achyut"})
// object ko return krne ke liye paranthesis ke andar dalna hota hai

// const addTwo = (num1 , num2) => {username:"achyut"}//we cannot access through without paranthesis

    console.log(addTwo(3,5))