const name = "achyut"
const repoCount = 50
// console.log(name + repoCount + " value") getting old fashion to write 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);// this is new fashion to write==> string interpolation

const gameName = new String('achyut-kumar-pathak')

// console.log(gameName[0])
// console.log(gameName.__proto__)
console.log(gameName.split('-')) // seperate each by delimeter into array ['achyut','kumar','pahtka']

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('c'))

const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-6,3)
console.log(anotherString)
const newStringone = "   achyut   "
console.log(newStringone)
console.log(newStringone.trim())

const url = "https://achyut.com/achyut%20pathak";
console.log(url.replace('%20','-'))
console.log(url.includes('arya'))