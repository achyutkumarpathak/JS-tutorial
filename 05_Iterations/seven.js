const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumers.map((num) => num+10)
//const newNums = myNumers.map((num) => { return num+10})
//console.log(newNums)

//  Chaining 

const newNums = myNumers
            .map((num) => num * 10) // maps me explicit return hota h ya operatins perform hotah 
            .map((num) => num +1)
            .filter((num)=> num>= 40) // filter me bs true/ false ke hisab se value return hota h
console.log(newNums)