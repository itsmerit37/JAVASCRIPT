//Date

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());


let myCreatedDate=new Date(2024,3,17)
console.log(myCreatedDate.toDateString());


let newDate=new Date()
console.log(newDate.getDate());

newDate.toLocaleString('Default',
    {
       
        weekday:"long",

    }
)
