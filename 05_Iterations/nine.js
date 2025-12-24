// Reduce Method => The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue, // first time bs accumulator ka value initialvalue wala hota h phir accumulator + currentvalue ja value jo aata h wo next operations ke liye accumulator ka value ban jata h

// );

//console.log(sumWithInitial);
// Expected output: 10

const myTotal = array.reduce(function (acc, currval){
    //console.log(`accumulator is ${acc} and current value is ${currval}`)
    return acc + currval
},5)  // ye 0 hmlog accumulator ko start kisse krna h wo bata rhe h hm 0 ke jagah koi or value bhi pass kr skte h
//console.log(myTotal)

const myTotals = array.reduce((acc, curr) => acc + curr,0)
//console.log(myTotals)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);




