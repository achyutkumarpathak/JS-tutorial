// For of
// ["", "", ""]
//[{},{},{}]
const arr = [1,2,3,4,5]
for(const val of arr){
    // console.log(val);  
}
const greeting = "Hello World!"
for (const greet of greeting){
    // console.log(`Each char is ${greet}`);  
}

// Maps => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.It contain only unique keys
// while object do not remember the insertion order of key

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
// console.log(map); // It will come in object type

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);// Error will come and say myobject is not iterable   
}



