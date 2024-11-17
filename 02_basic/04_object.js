const tinderUser =new Object() // null

tinderUser.id="123abc"
tinderUser.name="Ritesh"
tinderUser.isLoggedIn= false
console.log(tinderUser);

const regularUser ={
    email:"itsmerit37@gmail.com",
    fullname:{
        firstName:"Ritesh",
        lastName:"Singh"
    }
}
//console.log(regularUser.fullname.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// object3=Object.assign({},obj1,obj2)
object3={...obj1,...obj2} // spread operator
console.log(object3);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));

// console.log(regularUser.email);


const course={
    courseName:"JS in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor}=course
console.log(instructor);

//json


// {
//   "name":"Ritesh",
//   "price":"Free",
//   "courseName":"JS in hindi"


// }



