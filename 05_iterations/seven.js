const mynum=[1,2,3,4,5,6,7,8,9,10]

const newNums=mynum.map((num)=> num+10)
//console.log(newNums);

let coadings=["js","reacty","ruby","angular","java"]
let neeCoadungCourse= coadings
.map((value)=> value +"s")
.filter((value)=>{
    return !value.startsWith("r")    
})
console.log(neeCoadungCourse);

