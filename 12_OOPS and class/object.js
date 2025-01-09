function multipleBy5(num)
{
    return num*5;
}
multipleBy5.power=2
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(name,score)
{
this.name=name;
this.score=score;
}

createUser.prototype.increment=function(){
this.score++;    
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const charles= new createUser("Charles",5);
const tea=new createUser("tea",5);

charles.increment();
charles.printMe();
