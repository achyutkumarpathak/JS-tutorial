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

