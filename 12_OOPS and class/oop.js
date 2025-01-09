const user = {
    name: "Ritesh",
    loginCount: 10,
    signedIn: true,

    // getUserDetail: () => {
    //     console.log("User Name is: " + user.name);
    // }
    getUserDetail: function()  {
        // console.log("User Name is: " + this.name);
       // console.log(this);
        
    }
}
// console.log(user.name);
// console.log(user.getUserDetail());


function userr(userName,loginCount,isLoggedIn)
{
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        return `Welcome ${this.userName}`;
    }

    return this;
}

const userOne=new userr("Ritesh",10,true);
// const userTwo=new userr("Ritesh",11,true);


console.log(userOne);
console.log(userOne.greeting());



