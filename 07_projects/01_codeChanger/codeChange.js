// const buttons=document.querySelectorAll(".button")
// const body=document.querySelector('body')

// buttons.forEach(function (button) {
// button.addEventListener('click', function(e)
// {
//     console.log(e);
//     console.log(e.target);
//     if(e.target.id=="grey"){
//         body.style.backgroundColor=e.target.id  
//     } 
//     if(e.target.id=="yellow"){
//         body.style.backgroundColor=e.target.id  
//     }    
//     if(e.target.id=="white"){
//         body.style.backgroundColor=e.target.id  
//     }    
//     if(e.target.id=="blue"){
//         body.style.backgroundColor=e.target.id  
//     }       
// })    
    
// })



//------------------while loop-------------------

const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
const heading=document.querySelector("h2")
// console.log(heading);

// console.log(body);


buttons.forEach((BUTTON)=>{
BUTTON.addEventListener('click',(e)=>
{
    const boxName=e.target.id;
    while (boxName=="grey") {
        body.style.backgroundColor=boxName
        heading.style.color="yellow"
       break;
        
        
    }
    while (boxName=="yellow") {
        body.style.backgroundColor=boxName
        heading.style.color="grey"
       break;
        
        
    }
    while (boxName=="white") {
        body.style.backgroundColor=boxName
        heading.style.color="blue"
       break;
        
        
    }
    while (boxName=="blue") {
        body.style.backgroundColor=boxName
        heading.style.color="black"
       break;
        
        
    }

     
})
})



