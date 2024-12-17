const user ={
    username:"Ritesh",
    price:999,
    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        
    }

}

// user.welcomeMessage()
// user.username="Singh"
// user.welcomeMessage()

// function infosys()
// {
//     let username="Ritesh"
//     console.log(this.username);
    
// }
// infosys()

// const chai=function()
// {
//     let username="Ritesh"
//     console.log(this.username);
    
// }
// chai()

// const chai=()=>{
//     let username="Ritesh"
//     console.log(this.username);
    
// }
// chai()

// const addTwo=(num1,num2)=>
// {
//     const result=num1+num2
//   return result;
// }
// const result=addTwo(3,4)
// console.log(result);


const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(4,5));
