
if (true)
{
    let a=10
    const b=20
    // var c=30
} 
// console.log(a);
// console.log(b);
//console.log(c);   out of scope that y we avoid to use var


function one()
{
    const username="Ritesh"
    function two()
    {
        const website="LinkdIn"
        //console.log(username);
        
    }
    //console.log(website);
   two()    
}
//one()

if(true)
{
    const username="Ritesh Singh"
    if(username==="Ritesh Singh")
    {
        const website = " Youtube"
       // console.log(`${username} is using ${website}`);

    }
}
 


// ---------------------------------Interesting------------------------
addone(5)
function addone(num)
{
   return num+1
}

//-----------------------------------if addTwo declare before dec it give error--------------

const addTwo=function (num)
{
    return num+2
}
console.log(addTwo(6))




