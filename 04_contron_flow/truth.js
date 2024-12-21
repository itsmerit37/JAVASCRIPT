const userEmail="itsmerit37@gmail.com"

if(userEmail)
{
    console.log(`user email is ${userEmail}`);
    
} else{
    console.log("Error");
    
}


//false value = false,0,-0, BigInt 0n,"", null, undefined,NaN
//TRUTH= Truth,1,[],"0"
const empObj={}
if(Object.keys(empObj).length===0)
{
    console.log("Object is not empty"); 
}

//Nullish coalescing operation(??): null undefined

let val1;
val1=5??10
// val1=null??10
// val1=undefined??15

console.log(val1);

//terniary operator

// condition?true:false

const iceTeaPrice=100
iceTeaPrice>=  80 ? console.log("less than 80") : console.log("more than 80"); 







