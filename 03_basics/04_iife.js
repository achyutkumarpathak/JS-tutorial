// Immediately Invoked Function Expressions (IIFE)
// IIFE SYNTAX => ()()
// why we use IIFE => global scope ke wajah se pollution hoti h , global attribute , variable ke pollution ko hatane ke liye iife ka use kiya

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})();   

// (()=>{
//     console.log(`DB CONNECTED 02`)
// })()
((name)=>{ // simple iife
    console.log(`DB CONNECTED 02 ${name}`)
})("achyut")