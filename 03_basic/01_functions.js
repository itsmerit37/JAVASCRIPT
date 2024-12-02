/*
 you can say close all code in a package and then you can use 1 funvtion everywhere
*/

// console.log("R");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName()
{
console.log("R");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
 
//sayMyName();

// function addTwoNumber(a,b) {
//     console.log(a+b) 
// }
// const result=addTwoNumber(4,5)
// console.log("Result a" , result);

function addTwoNumber(a,b) {
    let result=a+b
    return result;
}
const result=addTwoNumber(3,5)
// console.log("Result" , result);

function calculateCartPrice(...num1)
{
    let total=0
    for(i=0;i<num1.length;i++)
    {
       total+=num1[i]
    }
    return total
}
console.log(calculateCartPrice(200,400,600));





