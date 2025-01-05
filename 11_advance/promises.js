// import fetch from 'node-fetch';
const promise1= new Promise(function(resolve, reject){
    // do an async task and then
    //DB call , cryptography, network

            setTimeout(function(){
                console.log('Async task 1');
                resolve();
                }, 1000);
})

promise1.then(function(){
   // console.log('Promise is resolved');
}).catch(function(){
   // console.log('Promise is rejected');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
       // console.log('Async task 2');
        resolve();
    }, 2000);
}).then(function(){
   // console.log('Promise2 is resolved');
}).catch(function(){
   // console.log('Promise32 is rejected');
})

const promise3=new Promise(function(resolve,reject)
{
    setTimeout(function(){
    resolve({username:"Chai", email:"xyz@gmail.com"})
},1000)
})
promise3.then(function(user){
    //console.log(user);
})

const promise4=new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    let error=true;
    if(!error)
    {
        resolve("No error Found");
    }
    else{
        reject("Error Found");
    }
},1000)
})
promise4.then((user)=>
{
    console.log(user);
    return user;
})
.then((user)=>{
    console.log(user);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{          //finally always runs
    console.log("Finally");
})


const promise5=new Promise(function(resolve,reject)
{
    setTimeout(()=>{
        let error=false;
        if(!error)
        {
          const abc=  resolve({username:"Chai", email:"abc@xyz.com"});            
        } else {
            reject("Error Found");
        }
    },1000)
})
promise5.then((result) => {
    console.log(result); // Log the resolved value here
}).catch((error) => {
    console.log(error);
});
  //to run  promise install node-fetch and import and change in package.json file add module depe
async function fetchData() {
    try {
      let response = await fetch('https://api.github.com/users/hiteshchoudhary');
      console.log('response', response);
      
      let data = await response.json();
      console.log('fetch',data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();