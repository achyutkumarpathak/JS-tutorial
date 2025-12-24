const marvel_heroes= ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

 marvel_heroes.push(dc_heroes)// it make changes in marvel_heroes array not need to make new array for storing changes
 console.log(marvel_heroes)
 console.log(marvel_heroes[3][2])

const allheroes =marvel_heroes.concat(dc_heroes)// concat function return value in new array so we have to store before use it
// console.log(allheroes)
const heroine =["katrina"]
const all_new_array = [...dc_heroes,...marvel_heroes,...heroine]// this is spread method
console.log(all_new_array)
// the spread and concat both function work same only difference is concat can take only two array while in spread we can add multiple arrays 


const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]// in case if this type of array will come then
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("achyut")) // it check whether "achyut" is array or not => false
// [1,2] then output willbe => true
console.log(Array.from("achyut"))
console.log(Array.from({name:"acyut"})) // it will return empty array because it cannot convert name:"achyut" into array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))// it will convert into array [100,200,300]