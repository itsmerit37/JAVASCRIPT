const array=[1,2,3,4,5,6,7,8]

const initalValue=0
// const myTotal=array.reduce(
//     function(acc,currVal)
// {
//     console.log(`acc ${acc} and current value ${currVal}`);
    
//     return acc+currVal    
// },0);
// console.log(myTotal);

const myTotal =array.reduce((acc,currVal)=>acc+currVal,0)
// console.log(myTotal);

const shopingCart=[
    {
        itemName:"JS course",
        price:999
    },
    {
        itemName:"JS mode course",
        price:1999
    },
    {
        itemName:"JS ad course",
        price:2999
    },
    {
        itemName:"JS easy course",
        price:3999
    },
]
 const total=shopingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(total);
 

