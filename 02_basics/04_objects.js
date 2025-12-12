// In this we are going to declare objects using constructor

const tinderUser = new Object()// this is a singleton  object
const tinderUser01 = {}// this is a non-singleton objects
tinderUser.id = "123abc"
tinderUser.name = "achyut"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"achyut",
            lastname : "pathak"
       }   
   }
}
console.log(regularUser.fullname)//{ userfullname: { firstname: 'achyut', lastname: 'pathak' } }
console.log(regularUser.fullname.userfullname)//{ firstname: 'achyut', lastname: 'pathak' }
console.log(regularUser.fullname.userfullname.firstname)// achyut

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj5 = {5:"a",6:"b"}
// below two method of storing obj is not good pratice
// const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2,obj5)

// the correct method is ==>>
const obj3 = {...obj1,...obj2,...obj5}
console.log(obj3)

// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)


const users = [
    {
        id:1,
        email:"achyut@gmail.com"
    },
    {
        id:1,
        email:"achyut@gmail.com"
    },
    {
        id:1,
        email:"achyut@gmail.com"
    }
]
// console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))// it return keys as array output
console.log(Object.values(tinderUser))// it return values as array output
console.log(Object.entries(tinderUser))// it return each key-value pairs as array format
console.log(tinderUser.hasOwnProperty("id"))// it ensure that the following key exist or not

// *************some more disscussion on objects*****

const course= {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hiteshChoudhary"
}
// course.courseInstructor
// const {courseInstructor}= course
// console.log(courseInstructor)//hitesh

const {courseInstructor:instructor}= course// here object destructuring occur by changing its name courseInstructor => instructor
console.log(instructor)