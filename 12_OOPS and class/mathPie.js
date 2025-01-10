const descripter=Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descripter);


const myNewObject={
    name:"Ritesh",
    surname:"Singh"

}
console.log(myNewObject);
console.log(Object.getOwnPropertyDescriptors(myNewObject,'name'));
Object.defineProperty(myNewObject,'name',{writable:false});
