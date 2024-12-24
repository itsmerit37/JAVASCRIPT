//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting="Hello World"
for(const [index,greet] of [...greeting].entries())
{
    if(greet==" ")
    {
       // console.log(`we found space and its postion in string is ${index}`);
        
        continue;
        
    }else{
    //console.log(`Each char of greeting is ${greet} and its postition is ${index}`);
    }
    
}

//Map == value is unique and same order


const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"America")
map.set('IN',"INDIA")

// console.log(map);

//for of loop

for(const [key , value] of map)
{
    // console.log(key,':-',value);
    
}

// const myObject={
//     'game1':'NFS',
//     'game2':'pubg'
// }
// for(const [key,value] of myObject)
// {
//     console.log(key ,':-' ,value);
    
// }
