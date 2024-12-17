//immediately invoke function expressions (IIFE)

(function chai()
{
    console.log(`DB CONNECTED`);
    
})();
(()=>{
    console.log(`DB connected TWO`);
    
})();


((name)=>
{
   console.log(`DB CONNECTED TWO ${name}`);
   
})("Ritesh")