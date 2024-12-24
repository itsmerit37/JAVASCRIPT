//for loop

for (let index = 0; index < 10; index++) {
    const element = index
    if(element==5)
    {
    //console.log("5 is best number");  
}
//console.log(element)
}

for (let i = 0; i <= 10; i++) {
//console.log(`outer loop value ${i}`);
    for(let j=0;j<=10;j++)
    {
        //console.log(`inner loop value ${j}`);
   
    }
    
}

let myArray=["x","y","z"]
console.log(myArray.length);
for(let i=0;i<=myArray.length;i++)
{
    const element=myArray[i]
    console.log(element);
    
}

// break and continue

for (let index = 1; index <=20; index++) {
console.log(`value od i is ${index}`);
if(index===5)
{
    console.log("5 is detatced ");
    break
    
}
console.log(`value of i is ${index}`);

    
}