/*
primitive datatypes

7 types ==>
    string, number, boolean , null , undefined, symbol, bigint
*/

const score = 100;
const scorevalue = 100.3;
const isloggedin = false;

const outsidetemp = null;
let userEmail;

const id = Symbol('123');
const Anotherid = Symbol('123');

console.log(id == Anotherid); // false

/*
Reference (Non-Primitive) ==>
Arrays, objects, Functions
*/
 
const hero = ["shaktiman","naagraj","doga"];
let myobj = {
    name : "achyut",
    age: 20,
}
const myFuction = function(){
    console.log("hello world")
}
 /*
heap memory is used by non-primitive datatype => we will get the original value or reference

stack memory is used by primitive datatype => we get the copy of the variable
 */

let myYoutubename = "achyutkumarpathak"

let anothername = myYoutubename
anothername= "pathakengenier"
console.log(myYoutubename)
console.log(anothername)

let userone = {
    email: "achyutkumarpathak07@gmail.com",
    upi: "8434738@psbi"
}
let usertwo = userone
userone.email = "nitupathak@gmail.com"
console.log(userone.email)
console.log(usertwo.email)
