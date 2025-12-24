
// Arrays => it is a datastructure that stores a collection of multiple items under a single variables , name
// they are resizeable and contain mix of different datatypes
// it create shallow copy 
/*  types of copy ==> 
    1) shallow copy=> have same reference point 
    2) deep copy => do not have same reference point

*/
const myArray = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","achyut","pratap"]
const myArray03 = new Array(1,2,3,4)
console.log(myArray[1]);

// Arrays methods

myArray.push(6) // used to add element at the end of the arrray
console.log(myArray)
myArray.pop()// used to delete an element from end of array
console.log(myArray)
myArray.unshift(8)// used to add element at begining of array
console.log(myArray)
myArray.shift()// used to delete element from begining of array
console.log(myArray.includes(4))// used to check that whether 4 is present or not
console.log(myArray.indexOf(3))//index of element '3'


const newarray = myArray.join()// it will convert myarray into string format and store in newarray
console.log(myArray)
console.log(newarray)
console.log( typeof newarray)


// slice => it did not change the original array by slicing
// splice => it change the original array by slicing

const myArray02 = [0,1,2,3,4,5]
console.log("A ",myArray02)
const myn1 = myArray02.slice(1,3)
console.log(myn1)
console.log("B ",myArray02)
const myn2 = myArray02.splice(1,3)// It manipulate array 1,2,3 nikal kr bacha hua 0,4,5 return kr diya and abb myArray02 sirf 0,4,5 bacha and myn2 me 1,2,3 store ho gya => original array will get manipulate
console.log("C ",myArray02)
console.log(myn2)