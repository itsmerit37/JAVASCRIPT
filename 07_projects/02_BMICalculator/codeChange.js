"use strict";
const form=document.querySelector('form');
console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height=='' || height<=0 || isNaN(height)){
        results.innerHTML=`Please provide a valid height ${height}`;
    } else if  (Weight=='' || Weight<=0 || isNaN(Weight)){
        results.innerHTML=`Please provide a valid weight ${Weight}`;
    } else{
        const bmi=(Weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
    }

   

})

