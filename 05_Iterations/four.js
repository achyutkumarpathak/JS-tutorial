// For of loop
const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(key); // it will print only key
    // console.log(myObject[key]); // it will print only values
    console.log(`${key} is shortcut for ${myObject[key]}`) // it will print key and values both pair  
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    // console.log(key)// it will not give value , it will give index
    // console.log(programming[key]) // It will print the value , in for of loop through "key" we will fetch the value
}


const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

for (const key in map){
    console.log(key)// it will not print anything bcss map is not iterable
}

