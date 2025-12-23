const coding = ["js", "ruby", "java", 
    "python","cpp"]
// For Each Loop
// coding.forEach(function(item){
//     console.log(item)
// })

// Arrow Function
// coding.forEach((item)=>{
//     console.log(item);
    
// })

function printMe(item){
    // console.log(item)
}
    
coding.forEach(printMe) // yaha pr reference dena h na ki function dena hai like printMe()

coding.forEach((item, index , arr) => {
    // console.log(item, index, arr)
})


const mycoding = [
    {
        languagename : "javascript",
        languageFilename: "js"
    },
    {
        languagename:"python",
        languageFilename : "py"
    },
    {
        languagename: "java",
        languageFilename: "java"
    },
]

mycoding.forEach((val)=>{
    console.log(val.languagename)// it will print the key
    console.log(val.languageFilename)// it will print the value
})