const coading=["js","reacty","ruby","angular","java"]

coading.forEach(function(item)
{
  // console.log(item);
   
})

//arrow function

coading.forEach( (value , index ,arr)=>
{
   // console.log(value ,index ,arr);
    
})

function printMe(item)
{
  //  console.log(item);
    
}
coading.forEach(printMe)

const myCoading=[
    {
        language:"javaascript",
        languageFileName:"js"

    },
    {
        language:"javaascript2",
        languageFileName:"js2"

    },
    {
        language:"javaascript3",
        languageFileName:"js3"

    }
]

myCoading.forEach((item)=>
{
    console.log(item);
    console.log(item.language);
    console.log(item.languageFileName);


    
})