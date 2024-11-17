//singleton

//object literals

const mySym=Symbol("key1")

const JsUser = {
    "Full name":"Ritesh Singh",
    [mySym]:"key1",
    age:26,
    location:"UP",
    email:"itsmerit37@gmail.com"
}
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email="itsmerit007@gmail.com"


// Object.freeze(JsUser)

JsUser.email="itsmerit0071@gmail.com"
// console.log(JsUser);

JsUser.greeting=function()
{
    console.log("hello");
    
}
console.log(JsUser.greeting());







