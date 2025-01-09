// let myName="Ritesh      "
//  console.log(myName.truelength);


let myHero=['Ritesh','singh']
let hero=
{
    name:'Ritesh power',
    lastName:'Singh ji',
    getSingh:function()
{
   // console.log(this.name);
    
}
}
Object.prototype.ritesh=function()
{
  //  console.log(  `Hello ${this.name} ${this.lastName}`);
}
hero.ritesh();

//inheritance
const user={
    name:'Ritesh Learning'
}

const teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvai:false
}
const TaSupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
teacher.__proto__=user;

//Morden way of inheritance

Object.setPrototypeOf(TeachingSupport,teacher);

let anotherUserName='Ritesh   ';

String.prototype.trueLength=function()
{
    console.log(this.trim().length);
    
}
anotherUserName.trueLength();
